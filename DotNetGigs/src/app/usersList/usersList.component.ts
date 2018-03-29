import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../shared/utils/config.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-usersList',
  templateUrl: './usersList.component.html'
})
export class UsersListComponent {
  public ulists: List[];
  baseUrl: string = '';

  constructor(http: Http, private configService: ConfigService, private userService: UserService) {

  }
}

interface List {
  accessFailedCount: number;
  concurrencyStamp: string;
  email: string;
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
