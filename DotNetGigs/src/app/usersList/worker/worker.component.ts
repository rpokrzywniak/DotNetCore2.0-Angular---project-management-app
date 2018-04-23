import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html'
})
export class WorkerComponent implements OnInit {
  baseUrl: string = '';
  displayDialog: boolean;

  worker: Worker = {} as any;

  chosenUser: User;

  selectedWorker: Worker;

  newWorker: boolean;

  workers: Worker[];
  users: User[];
  freeUsers: User[];

  loading: boolean = false;
  isRequesting: boolean = true;

  cols: any[];

  constructor(http: Http, private configService: ConfigService, private userService: UserService) {

    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/UsersList/workers').subscribe(result => {
      this.workers = result.json() as Worker[];

      http.get(this.baseUrl + '/UsersList/users').subscribe(result => {
        this.users = result.json() as User[];
        for (let i = 0; i < this.workers.length; i++) {
          for (let j = 0; j < this.users.length; j++) {
            if (this.workers[i].identityId === this.users[j].id) this.workers[i].userName = this.users[j].userName;
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
    this.newWorker = true;
    this.worker = {} as any;
    this.displayDialog = true;
  }

  save() {
    let workers = [...this.workers];
    if (this.newWorker) {
      this.worker.identityId = this.chosenUser.id;
      this.worker.userName = this.chosenUser.userName;
      this.userService.workerCreate('/Worker/create', this.worker.identityId).finally(() => this.isRequesting = true)
        .subscribe(
        result => {
          this.worker = result as Worker;
          this.worker.userName = this.chosenUser.userName;
          this.isRequesting = false;
          workers.push(this.worker);
          /*for (let i = 0; i < this.freeUsers.length; i++){
            if (this.freeUsers[i].id === this.student.identityId) this.freeUsers.splice(i, 1);
          }*/
          this.userService.freeUsers().finally(() => this.isRequesting = true).subscribe(
            result => {
              this.freeUsers = result as User[];
            });
          this.chosenUser = this.freeUsers[0];
        });
    }
    else {
      this.userService.workerUpdate('/Worker/update', this.worker.id, this.worker.identityId).finally(() => this.isRequesting = true)
        .subscribe(
        result => {
          this.worker = result as Worker;
          this.worker.userName = this.selectedWorker.userName;
          workers[this.workers.indexOf(this.selectedWorker)] = this.worker;
          this.isRequesting = false;
        });
    }

    this.workers = workers;
    this.worker = {} as any;
    this.displayDialog = false;
  }

  delete() {
    console.log("LOL");
    let index = this.workers.indexOf(this.selectedWorker);
    this.workers = this.workers.filter((val, i) => i != index);
    console.log(this.worker.id);
    console.log("LOL");
    this.userService.studentDelete('/Worker/delete', this.worker.id).finally(() => this.isRequesting = true)
      .subscribe(
      result => {
        this.userService.freeUsers().finally(() => this.isRequesting = true).subscribe(
          result => {
            this.freeUsers = result as User[];
          });
        console.log(index);
        this.chosenUser = this.freeUsers[0];
        this.isRequesting = false;
        this.worker = {} as any;
      });
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newWorker = false;
    this.worker = this.cloneWorker(event.data);
    this.displayDialog = true;
  }


  cloneWorker(s: Worker): Worker {
    let worker = {} as any;
    for (let prop in s) {
      worker[prop] = s[prop];
    }
    return worker;
  }

}

interface Worker {
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

