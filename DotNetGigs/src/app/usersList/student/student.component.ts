import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit{
  http: any;
  private students: List[];
  baseUrl: string = '';
  displayDialog: boolean;
  loading: boolean = false;
  student: List;

  selectedStudent: List;

  newStudent: boolean;

  cols: any[];

  constructor(http: Http, private configService: ConfigService) {

    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/UsersList/students').subscribe(result => {
      this.students = result.json() as List[];
      this.student = this.students[0];
      this.loading = true;
    }, error => console.error(error));
  }

  ngOnInit() {

    this.cols = [
      { field: 'identityId', header: 'Login' },
      { field: 'nrIndex', header: 'Nr indeksu' },
      { field: 'projectId', header: 'Projekt' },
    ];
  }

  showDialogToAdd() {
    this.newStudent = true;
    this.student = this.students[0];
    this.displayDialog = true;
  }

  save() {
    let students = [...this.students];
    if (this.newStudent)
      students.push(this.student);
    else
      students[this.students.indexOf(this.selectedStudent)] = this.student;

    this.students = students;
    this.student = this.students[0];
    this.displayDialog = false;
  }

  delete() {
    let index = this.students.indexOf(this.selectedStudent);
    this.students = this.students.filter((val, i) => i != index);
    this.student = this.students[0];
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newStudent = false;
    this.student = event.data;
    this.displayDialog = true;
  }

}

interface List {
  id: number;
  identityId: string;
  nrIndex: number;
  projectId: number;
}
