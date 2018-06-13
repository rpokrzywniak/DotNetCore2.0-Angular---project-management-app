import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Credentials } from '../../shared/models/credentials.interface';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { userName: '', password: '' };

  public loginForm = this.fbLogin.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, public fbLogin: FormBuilder) { }

    ngOnInit() {

    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];   
         this.credentials.userName = param['username'];         
      });      
  }

   ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login() {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    let formData = this.loginForm.value;
    let username = formData.username;
    let password = formData.password;
  

      this.userService.login(username, password)
        .finally(() => this.isRequesting = false)
        .subscribe(
        result => {         
          if (this.userService.isAdmin()) {
            this.router.navigate(['/usersList']);             
          }
          else if (this.userService.isWorker()) {
            this.router.navigate(['/']); 
          }
          else if (this.userService.isStudent()) {
            this.router.navigate(['/']);
          }
        },
        error => this.errors = error);
  }
}
