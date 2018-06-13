import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TableModule } from 'primeng/table';
import { ConfigService } from '../shared/utils/config.service';
import { UserService } from '../shared/services/user.service';
import { DomSanitizer } from "@angular/platform-browser";
import { List } from 'app/shared/models/list.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
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
    if (userService.isStudent()) {
      let id = userService.getId();
      userService.postMyProjectRequest('/MyProject/myproject', id)
      .subscribe(
      result => {
        this.list = result as List;
        if (this.list == null || this.list == undefined) {
          this.idProject = 0;
        }
        else this.idProject = this.list.id;
      },
      error => this.errors = error);
    }
    http.get(this.baseUrl + '/List/list').subscribe(result => {
      this.lists = result.json() as List[];
      this.loading = false;
    }, error => console.error(error));
  }

  ngOnInit() {
    let dangerous: string = 'width: 2.25em;';
    let trusted = this.sanitizer.bypassSecurityTrustStyle('width: 2.25em;');
    this.cols = [
      { field: 'starred', header: '', width: trusted },
      { field: 'name', header: 'Nazwa', width: '' },
      { field: 'description', header: 'Opis', width: '' },
      { field: 'mentoring', header: 'Mentoring', width: '' }
    ];
  }
}
