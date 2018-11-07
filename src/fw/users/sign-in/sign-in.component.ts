import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserApi } from '../user-api';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formError: string;
  submitting = false;
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private userApi: UserApi, private router: Router) {}

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.password = new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(64),
      Validators.required
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitting = true;
      this.formError = null;

      this.userApi.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        data => {
          setTimeout(() => {
            this.submitting = false;
          }, 5000);
        },
        err => {
          this.submitting = false;
          console.error('got error: ', err);
          this.formError = err.statusText;
        }
      );
    }
  }
}
