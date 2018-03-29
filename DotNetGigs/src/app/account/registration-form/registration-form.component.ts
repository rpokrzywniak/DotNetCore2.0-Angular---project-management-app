import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { UserRegistration } from '../../shared/models/user.registration.interface';
import { UserService } from '../../shared/services/user.service';
import { matchOtherValidator } from '../../shared/validation/matchvalidation';
import { passwordValidator, PasswordValidator, PasswordValidatorOptions } from '../../shared/validation/passwordvalidation';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

 errors: string;  
 isRequesting: boolean;
 submitted: boolean = false;

 public registerForm = this.fb.group({
   username: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
   firstname: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
   lastname: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
   email: ["", [Validators.required, Validators.pattern("[a-z0-9!#$ %&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
   password: ["", [Validators.required, passwordValidator({
     minLength: 8,
     maxLength: 16,
     requireLetters: true,
     requireLowerCaseLetters: true,
     requireUpperCaseLetters: true,
     requireNumbers: true,
     requireSpecialCharacters: true
   })]],
   confirmpassword: ["", [Validators.required, matchOtherValidator('password')]]
 });
 
 constructor(private userService: UserService, private router: Router, public fb: FormBuilder) {
   
 }

  ngOnInit() {
          
  }

  registerUser() {
     this.submitted = true;
     this.isRequesting = true;
     let formData = this.registerForm.value;
     let username = formData.username;
     let email = formData.email;
     let password = formData.password;
     let firstname = formData.firstname;
     let lastname = formData.lastname;
     this.errors = '';

       this.userService.register(username, firstname, lastname, email, password)
                   .finally(() => this.isRequesting = false)
                   .subscribe(
                     result  => {if(result){
                         this.router.navigate(['/login'],{queryParams: {brandNew: true,username:username}});                         
                     }},
                     errors =>  this.errors = errors);    
  }  
}
