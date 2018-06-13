import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TableModule } from 'primeng/table';
import { ConfigService } from '../shared/utils/config.service';
import { UserService } from '../shared/services/user.service';
import { DomSanitizer } from "@angular/platform-browser";
import { List } from 'app/shared/models/list.interface';

@Component({
  selector: 'app-pastProjects',
  templateUrl: './pastProjects.component.html',
  styleUrls: ['./pastProjects.component.scss']
})
export class PastProjectsComponent implements OnInit {
  public lists: List[];
  public list: List;
  private idProject: number;
  cols: any[];
  errors: string;
  loading: boolean;
  baseUrl: string = '';
  val: number = 1;

  constructor(http: Http, private configService: ConfigService, private sanitizer: DomSanitizer, private userService: UserService) {
    this.loading = true;
    this.errors = '';
    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/List/pastprojects').subscribe(result => {
      this.lists = result.json() as List[];
      this.loading = false;
    }, error => console.error(error));
  }

  ngOnInit() {
    let trusted = this.sanitizer.bypassSecurityTrustStyle('width: 2.25em;');
    let dangerous = 'word-break: break-all;';
    let trusted2 = this.sanitizer.bypassSecurityTrustStyle(dangerous);
    this.cols = [
      { field: 'starred', header: '', width: trusted },
      { field: 'name', header: 'Nazwa', width: '' },
      { field: 'description', header: 'Opis', width: '' },
      { field: 'repoGit', header: 'Repozytorium', width: trusted2 },
      { field: 'mentoring', header: 'Mentoring', width: '' }
    ];
  }
}
