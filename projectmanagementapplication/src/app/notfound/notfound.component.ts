import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TableModule } from 'primeng/table';
import { ConfigService } from '../shared/utils/config.service';
import { UserService } from '../shared/services/user.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html'
})
export class NotFoundComponent{
  constructor() { }

}

