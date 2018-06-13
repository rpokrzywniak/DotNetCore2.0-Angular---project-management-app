import { Component} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  status: boolean;
  admin: boolean;
  worker: boolean;
  student: boolean;

  constructor(private userService: UserService) {
  }

}
