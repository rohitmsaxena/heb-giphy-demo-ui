import {Component, OnInit} from '@angular/core';
import { AuthService } from '../core/auth.service';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  ifEmail: boolean = false;
  errorMessage: string = '';
  emailFormGroup: FormGroup;

  constructor(public auth: AuthService,
              public dialogRef: MatDialogRef<LoginComponent>,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.emailFormGroup = this.formBuilder.group({
      email: [],
      password: []
    });
    this.emailFormGroup.valueChanges.subscribe(x => console.log(x));
  }

  closeOnClick(): void {
    this.dialogRef.close();
  }

  email() {
    this.ifEmail = true;
  }

  register() {
    console.log(this.emailFormGroup.valid);
    if (this.emailFormGroup.valid) {
      this.auth.emailSignup(this.emailFormGroup.get('email').value,
        this.emailFormGroup.get('password').value)
        .then(() => this.closeOnClick())
        .catch((error) => this.errorMessage = error.message);
    }
  }

  login() {
    console.log(this.emailFormGroup.valid);
    if (this.emailFormGroup.valid) {
      this.auth.emailLogin(this.emailFormGroup.get('email').value,
        this.emailFormGroup.get('password').value)
        .then(() => this.closeOnClick())
        .catch((error) => this.errorMessage = error.message);
    }
  }
}
