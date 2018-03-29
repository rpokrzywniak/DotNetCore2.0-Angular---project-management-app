import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DataListModule } from 'primeng/primeng';
import { ConfigService } from '../shared/utils/config.service';

@Component({
  selector: 'app-pastProjects',
  templateUrl: './pastProjects.component.html'
})
export class PastProjectsComponent {
  public lists: List[];
  baseUrl: string = '';

  constructor(http: Http, private configService: ConfigService) {
    this.baseUrl = configService.getApiURI();
    http.get(this.baseUrl + '/PastProjects/PList').subscribe(result => {
      this.lists = result.json() as List[];
    }, error => console.error(error));
  }
}

interface List {
  name: string;
  repoGit: string;
  description: string;
  mentoring: string;
  pblic: boolean;
  toChange: boolean;
  confirmed: boolean;
  starred: boolean;
}
