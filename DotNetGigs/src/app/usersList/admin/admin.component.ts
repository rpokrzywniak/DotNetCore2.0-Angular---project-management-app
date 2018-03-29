import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  http: any;
  private admins: List[];
  baseUrl: string = '';
  displayDialog: boolean;
  loading: boolean = false;
  admin: List;

  selectedAdmin: List;

  newAdmin: boolean;

  cols: any[];

  constructor(http: Http, private configService: ConfigService) {

    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/UsersList/admins').subscribe(result => {
      this.admins = result.json() as List[];
      this.admin = this.admins[0];
      this.loading = true;
    }, error => console.error(error));
  }

  ngOnInit() {

    this.cols = [
      { field: 'identityId', header: 'Login' },
    ];
  }

  showDialogToAdd() {
    this.newAdmin = true;
    this.admin = this.admins[0];
    this.displayDialog = true;
  }

  save() {
    let students = [...this.admins];
    if (this.newAdmin)
      students.push(this.admin);
    else
      students[this.admins.indexOf(this.selectedAdmin)] = this.admin;

    this.admins = students;
    this.admin = this.admins[0];
    this.displayDialog = false;
  }

  delete() {
    let index = this.admins.indexOf(this.selectedAdmin);
    this.admins = this.admins.filter((val, i) => i != index);
    this.admin = this.admins[0];
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newAdmin = false;
    this.admin = event.data;
    this.displayDialog = true;
  }

}

interface List {
  id: number;
  identityId: string;
}
