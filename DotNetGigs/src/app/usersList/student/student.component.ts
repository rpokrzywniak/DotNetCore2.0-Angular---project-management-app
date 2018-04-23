import { Component, Inject, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit{
  baseUrl: string = '';
  displayDialog: boolean;

  student: Student = {} as any;

  chosenUser: User;
  chosenProject: Project;

  selectedStudent: Student;

  newStudent: boolean;

  students: Student[];
  users: User[];
  projects: Project[];
  freeUsers: User[];

  loading: boolean = false;
  isRequesting: boolean = true;
  cols: any[];

  constructor(http: Http, private configService: ConfigService, private userService: UserService) {
    this.baseUrl = this.configService.getApiURI();
    http.get(this.baseUrl + '/UsersList/students').subscribe(result => {
      this.students = result.json() as Student[];

      http.get(this.baseUrl + '/UsersList/users').subscribe(result => {
        this.users = result.json() as User[];
        for (let i = 0; i < this.students.length; i++) {
          for (let j = 0; j < this.users.length; j++) {
            if (this.students[i].identityId === this.users[j].id) this.students[i].userName = this.users[j].userName;
          }
        }
        http.get(this.baseUrl + '/List/List').subscribe(result => {
          this.projects = result.json() as Project[];
          for (let i = 0; i < this.students.length; i++) {
            for (let j = 0; j < this.projects.length; j++) {
              if (this.students[i].projectId === this.projects[j].id) this.students[i].projectName = this.projects[j].name;
            }
          }
          http.get(this.baseUrl + '/UsersList/free').subscribe(result => {
            this.freeUsers = result.json() as User[];
            this.chosenUser = this.freeUsers[0];
            this.loading = true;
            console.log(this.projects);
          }, error => console.error(error));
        }, error => console.error(error));
      }, error => console.error(error));
    }, error => console.error(error));
  }

  ngOnInit() {
    this.cols = [
      { field: 'userName', header: 'Login' },
      { field: 'nrIndex', header: 'Nr indeksu' },
      { field: 'projectName', header: 'Projekt' }
    ];
  }

  showDialogToAdd() {
    this.chosenProject = this.projects[0];
    this.chosenUser = this.freeUsers[0];
    this.newStudent = true;
    console.log(this.chosenUser);
    this.student = {} as any;
    this.displayDialog = true;
  }

  save() {
    let students = [...this.students];
    console.log(this.projects);
    if (this.newStudent) {
      this.student.identityId = this.chosenUser.id;
      this.student.projectId = this.chosenProject.id;
      this.userService.studentCreate('/Student/create', this.student.identityId, this.student.nrIndex, this.student.projectId).finally(() => this.isRequesting = true)
        .subscribe(
        result => {
          this.student = result as Student;
          this.student.userName = this.chosenUser.userName;
          this.student.projectName = this.chosenProject.name;
          this.isRequesting = false;
          students.push(this.student);
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
      this.student.projectId = this.chosenProject.id;
      this.userService.studentUpdate('/Student/update', this.student.id, this.student.identityId, this.student.nrIndex, this.student.projectId).finally(() => this.isRequesting = true)
        .subscribe(
        result => {
          this.student = result as Student;
          this.student.userName = this.selectedStudent.userName;
          this.student.projectName = this.chosenProject.name; 
          students[this.students.indexOf(this.selectedStudent)] = this.student;
          this.isRequesting = false;
        });
    }
    console.log(this.student);
    this.students = students;
    this.student = {} as any;
    this.displayDialog = false;
  }

  delete() {
    let index = this.students.indexOf(this.selectedStudent);
    this.students = this.students.filter((val, i) => i != index);
    this.userService.studentDelete('/Student/delete', this.student.id).finally(() => this.isRequesting = true)
      .subscribe(
      result => {
        this.userService.freeUsers().finally(() => this.isRequesting = true).subscribe(
          result => {
            this.freeUsers = result as User[];
          });
        this.chosenUser = this.freeUsers[0];
        this.isRequesting = false;
        this.student = {} as any;
      });
    this.displayDialog = false;
  }
  setChosenProject(){
    for (let i = 0; i < this.projects.length; i++) {
      if (this.selectedStudent.projectId === this.projects[i].id) this.chosenProject = this.projects[i];
    }
  }
  onRowSelect(event) {
    this.chosenProject = this.projects[0];
    this.setChosenProject();
    this.newStudent = false;
    this.student = this.cloneStudent(event.data);
    console.log(this.student);
    this.displayDialog = true;
  }

  cloneStudent(s: Student): Student {
    let student = {} as any;
    for (let prop in s) {
      student[prop] = s[prop];
    }
    return student;
  }
}

interface Student {
  id: number;
  identityId: string;
  nrIndex: number;
  projectId: number;
  userName: string;
  projectName: string;
}

interface Project {
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
