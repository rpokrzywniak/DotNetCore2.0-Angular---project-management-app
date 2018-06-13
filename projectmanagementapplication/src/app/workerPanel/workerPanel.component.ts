import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TableModule } from 'primeng/table';
import { ConfigService } from '../shared/utils/config.service';
import { UserService } from '../shared/services/user.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Student } from 'app/shared/models/student.interface';
import { forEach } from '@angular/router/src/utils/collection';
import { OverlayPanelModule, OverlayPanel } from 'primeng/overlaypanel';
import { EditorModule } from 'primeng/editor';
import { List } from 'app/shared/models/list.interface';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-workerPanel',
  templateUrl: './workerPanel.component.html',
  styleUrls: ['./workerPanel.component.scss']
})
export class WorkerPanelComponent implements OnInit {
  public lists: List[];
  public list: List = {} as any;
  students: Student[] = [];
  private idProject: number;
  cols: any[];
  errors: string;
  loading: boolean;
  baseUrl: string = '';
  val: number = 1;

  constructor(http: Http, private configService: ConfigService, private sanitizer: DomSanitizer, private userService: UserService, private messageService: MessageService,) {
    this.loading = true;
    this.errors = '';
    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/List/projects').subscribe(result => {
      this.lists = result.json() as List[];
      this.lists.map(x => x.students = []);
      http.get(this.baseUrl + '/List/students').subscribe(result => {
        let students: Student[] = result.json() as Student[];
        for (let student of students) {
          for (let project of this.lists) {
            if (student.projectId === project.id) {
              project.students.push(student);
              break;
            }
          }
        }
        this.loading = false;
      });
    }, error => console.error(error));
  }

  ngOnInit() {
    let dangerous: string = 'word-break: break-all;';
    let trusted = this.sanitizer.bypassSecurityTrustStyle('width: 2.25em;');
    let trusted2 = this.sanitizer.bypassSecurityTrustStyle(dangerous);
    this.cols = [
      { field: 'starred', header: '', width: trusted },
      { field: 'name', header: 'Nazwa', width: '' },
      { field: 'description', header: 'Opis', width: '' },
      { field: 'repoGit', header: 'Repozytorium', width: trusted2 },
      { field: 'mentoring', header: 'Mentoring', width: '' },
      { field: 'pblic', header: 'Publiczny', width: '' },
      { field: 'confirmed', header: 'Zatwierdzony', width: '' },
      { field: 'toChange', header: 'Do Zmiany', width: '' },
      { field: 'students', header: 'Studenci', width: '' }
    ];
  }
  starred(e) {
    let id: number = e.target.id;
    for (let list of this.lists) {
      if (list.id == id) {
        this.userService.projectStar("/List", list.id, list.starred).subscribe(result => {       
          if (result) {
            if (!list.starred) this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie wyróżniono projekt: ' + list.name });
            else if (list.starred) this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie usunięto wyróżnienie projektu: : ' + list.name });
            list.starred = !list.starred;
          }
        });
        break;
      }
    }
  }
  comment(event, list: List, overlaypanel: OverlayPanel) {
    this.list = list;
    overlaypanel.toggle(event);
  }
  showStudents(event, students: Student[], overlaypanel: OverlayPanel) {
    this.students = students;
    overlaypanel.toggle(event);
  }
  confirm(list: List) {
    this.userService.projectConfirm("/List/confirm", list).subscribe(result => {
      if (list.confirmed) this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zatwierdzono projekt: ' + list.name });
      else if (!list.confirmed) this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie usunięto zatwierdzenie projektu: ' + list.name });
      });
  }
  save() {
    this.userService.projectToChange("/List/tochange", this.list).subscribe(result => this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zapisano komentarz do projektu: ' + this.list.name }));
  }
}
