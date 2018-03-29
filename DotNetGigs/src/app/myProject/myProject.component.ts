import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router} from '@angular/router';
import { DataListModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuItem } from 'primeng/api';
import { SharedModule } from '../shared/modules/shared.module';
import { ConfigService } from '../shared/utils/config.service';
import { UserService } from '../shared/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myProject',
  templateUrl: './myProject.component.html'
})
export class MyProjectComponent implements OnInit{
  private lists: List;
  private list: List[];
  private selectedList: List;
  items: MenuItem[];
  cols: any[];
  baseUrl: string = '';
  errors: string;
  success: boolean = false;
  hasProject: boolean = false;
  loading: boolean = true;
  pblic: boolean = false;
  isRequesting: boolean = true;
  submitted: boolean = false;

  public myProjectForm = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
    repoGit: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
    description: ["", [Validators.required, Validators.maxLength(500), Validators.minLength(0)]],
    mentoring: ["", [Validators.required, Validators.maxLength(500), Validators.minLength(0)]],
    pblic: [""]
  });

  constructor(http: Http, private configService: ConfigService, private userService: UserService, public fb: FormBuilder,private router: Router) {
    this.success = false;
    this.isRequesting = true;
    this.errors = '';
    let id = userService.getId();
      userService.postMyProjectRequest('/MyProject/myproject', id).finally(() => this.isRequesting = true)
        .subscribe(
        result => {
          this.lists = result as List;
          if (this.lists == null || this.lists == undefined) {
            this.hasProject = false;
          }
          else this.hasProject = true;
          this.pblic = this.lists.pblic;
          this.isRequesting = false;
        },
        error => this.errors = error);
      this.baseUrl = configService.getApiURI();
      http.get(this.baseUrl + '/List/List').subscribe(result => {
        this.list = result.json() as List[];

        this.loading = false;
      }, error => console.error(error));
  }

  UpdateProject() {
    this.submitted = true;
    let formData = this.myProjectForm.value;
    let name = formData.name;
    let repoGit = formData.repoGit;
    let description = formData.description;
    let mentoring = formData.mentoring;
    this.errors = '';

    this.userService.postMyProjectUpdate('/MyProject/update', this.lists.id, name, repoGit, description, mentoring, this.pblic).finally(() => this.isRequesting = true)
      .subscribe(
      result => {
        this.lists = result as List;
        this.isRequesting = false;
        this.success = true;
      },
      error => this.errors = error);
  }

  CreateProject() {
    this.submitted = true;
    let formData = this.myProjectForm.value;
    let name = formData.name;
    let repoGit = formData.repoGit;
    let description = formData.description;
    let mentoring = formData.mentoring;
    this.errors = '';

    this.userService.postMyProjectCreate('/MyProject/create', name, repoGit, description, mentoring, this.pblic).finally(() => this.isRequesting = true)
      .subscribe(
      result => {
        this.lists = result as List;
        this.isRequesting = false;
        this.router.navigate(['/']); 
      },
      error => this.errors = error);
  }

  JoinProject(list: List) {
    this.userService.postMyProjectJoin('/MyProject/join', list.id).finally(() => this.isRequesting = true)
      .subscribe(
      result => {
        this.lists = result as List;
        this.isRequesting = false;
        this.router.navigate(['/']); 
      },
      error => this.errors = error);
  }

  ngOnInit() {
    let dangerous: string = 'width: 2.25em;';
    this.cols = [
      { field: 'name', header: 'Nazwa', width: '' },
      { field: 'description', header: 'Opis', width: '' },
    ];

    this.items = [
      { label: 'Dołącz', icon: 'fa-plus', command: (event) => this.JoinProject(this.selectedList) },
    ];
  }
}

interface List {
  id: number;
  name: string;
  repoGit: string;
  description: string;
  mentoring: string;
  pblic: boolean;
  toChange: boolean;
  confirmed: boolean;
  starred: boolean;
}
