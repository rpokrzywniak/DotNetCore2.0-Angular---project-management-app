import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html'
})
export class AllComponent implements OnInit {
  http: any;
  private users: List[];
  private role: string[];
  baseUrl: string = '';
  displayDialog: boolean;
  loading: boolean = false;
  user: List;
  roles: string[];

  selectedUser: List;

  newUser: boolean;

  cols: any[];

  constructor(http: Http, private configService: ConfigService,private userService: UserService) {

    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/UsersList/users').subscribe(result => {
      this.users = result.json() as List[];
      this.user = this.users[0];
    }, error => console.error(error));

    http.get(this.baseUrl + '/UsersList/roles').subscribe(result => {
      this.roles = result.json() as string[];
      for (let i = 0; i < this.users.length; i++) {
        this.users[i].role = this.roles[i];
      }
      this.loading = true;
    }, error => console.error(error));
  }

  ngOnInit() {

    this.cols = [
      { field: 'role', header: 'Rola' },
      { field: 'firstName', header: 'Imię' },
      { field: 'lastName', header: 'Nazwisko' },
      { field: 'email', header: 'E-mail' },
      { field: 'emailConfirmed', header: 'E-mail potwierdzony' },
      { field: 'userName', header: 'Nazwa użytkownika' },
      { field: 'phoneNumber', header: 'Nr telefonu' },
      { field: 'lockoutEnabled', header: 'Możliwość zablokowania' },
      { field: 'lockoutEnd', header: 'Koniec zablokowania' },
      { field: 'accessFailedCount', header: 'Ilość nieudanych logowań' },
    ];
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = this.users[0];
    this.displayDialog = true;
  }

  save() {
    let students = [...this.users];
    if (this.newUser)
      students.push(this.user);
    else
      students[this.users.indexOf(this.selectedUser)] = this.user;

    this.users = students;
    this.user = this.users[0];
    this.displayDialog = false;
  }

  delete() {
    let index = this.users.indexOf(this.selectedUser);
    this.users = this.users.filter((val, i) => i != index);
    this.user = this.users[0];
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newUser = false;
    this.user = event.data;
    this.displayDialog = true;
  }

}

interface List {
  id: string;
  accessFailedCount: number;
  concurrencyStamp: string;
  email: string;
  role: string;
  emailConfirmed: boolean;
  firstName: string;
  lastName: string;
  lockoutEnabled: boolean;
  lockoutEnd: any;
  normalizedEmail: string;
  normalizedUserName: string;
  passwordHash: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  projectId: number;
  securityStamp: string;
  twoFactorEnabled: boolean;
  userName: string;
}
