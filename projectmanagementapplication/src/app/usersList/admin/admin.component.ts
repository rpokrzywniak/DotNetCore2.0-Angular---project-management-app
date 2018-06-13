import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  baseUrl: string = '';
  displayDialog: boolean;

  admin: Admin = {} as any;

  chosenUser: User;

  selectedAdmin: Admin;

  newAdmin: boolean;

  admins: Admin[];
  users: User[];
  freeUsers: User[];

  loading: boolean = false;

  cols: any[];

  constructor(http: Http, private configService: ConfigService, private userService: UserService) {

    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/UsersList/admins').subscribe(result => {
      this.admins = result.json() as Admin[];

      http.get(this.baseUrl + '/UsersList/users').subscribe(result => {
        this.users = result.json() as User[];
        for (let i = 0; i < this.admins.length; i++) {
          for (let j = 0; j < this.users.length; j++) {
            if (this.admins[i].identityId === this.users[j].id) this.admins[i].userName = this.users[j].userName;
          }
        }
        http.get(this.baseUrl + '/UsersList/free').subscribe(result => {
          this.freeUsers = result.json() as User[];
          this.chosenUser = this.freeUsers[0];
          this.loading = true;
        }, error => console.error(error));
      }, error => console.error(error));
    }, error => console.error(error));
  }

  ngOnInit() {

    this.cols = [
      { field: 'userName', header: 'Login' },
    ];
  }

  showDialogToAdd() {
    this.chosenUser = this.freeUsers[0];
    this.newAdmin = true;
    this.admin = {} as any;
    this.displayDialog = true;
  }

  save() {
    let admins = [...this.admins];
    if (this.newAdmin) {
      this.admin.identityId = this.chosenUser.id;
      this.admin.userName = this.chosenUser.userName;
      admins.push(this.admin);
    }
    else {
      admins[this.admins.indexOf(this.selectedAdmin)] = this.admin;
    }

    this.admins = admins;
    this.admin = {} as any;
    this.displayDialog = false;
  }

  delete() {
    let index = this.admins.indexOf(this.selectedAdmin);
    this.admins = this.admins.filter((val, i) => i != index);
    this.admin = {} as any;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newAdmin = false;
    this.admin = this.cloneWorker(event.data);
    this.displayDialog = true;
  }


  cloneWorker(s: Admin): Admin {
    let admin = {} as any;
    for (let prop in s) {
      admin[prop] = s[prop];
    }
    return admin;
  }

}

interface Admin {
  id: number;
  identityId: string;
  userName: string;
}

interface User {
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
