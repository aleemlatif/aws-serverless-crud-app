import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserDomainService } from '../services/user-domain.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: User;
  newUserForm: FormGroup;

  constructor(private userService: UserDomainService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.initForm();
  }
  initForm()  {
    this.newUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      email: '',
      gender: ''
    });
  }
  saveUser() {
    this.user.firstName = this.newUserForm.controls['firstName'].value;
    this.user.lastName = this.newUserForm.controls['lastName'].value;
    this.user.email = this.newUserForm.controls['email'].value;
    this.user.gender = this.newUserForm.controls['gender'].value;

    this.userService.saveUser(this.user).toPromise().then(() => {
      this.userService.addEvent = true;
      this.router.navigate(['user-listing']);
    });
  }

}
