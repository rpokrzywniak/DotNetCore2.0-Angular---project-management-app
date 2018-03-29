import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html'
})
export class WorkerComponent implements OnInit {
  http: any;
  private workers: List[];
  baseUrl: string = '';
  displayDialog: boolean;
  loading: boolean = false;
  worker: List;

  selectedWorker: List;

  newWorker: boolean;

  cols: any[];

  constructor(http: Http, private configService: ConfigService) {

    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/UsersList/workers').subscribe(result => {
      this.workers = result.json() as List[];
      this.worker = this.workers[0];
      this.loading = true;
    }, error => console.error(error));
  }

  ngOnInit() {

    this.cols = [
      { field: 'identityId', header: 'Login' },
    ];
  }

  showDialogToAdd() {
    this.newWorker = true;
    this.worker = this.workers[0];
    this.displayDialog = true;
  }

  save() {
    let students = [...this.workers];
    if (this.newWorker)
      students.push(this.worker);
    else
      students[this.workers.indexOf(this.selectedWorker)] = this.worker;

    this.workers = students;
    this.worker = this.workers[0];
    this.displayDialog = false;
  }

  delete() {
    let index = this.workers.indexOf(this.selectedWorker);
    this.workers = this.workers.filter((val, i) => i != index);
    this.worker = this.workers[0];
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newWorker = false;
    this.worker = event.data;
    this.displayDialog = true;
  }

}

interface List {
  id: number;
  identityId: string;
}
