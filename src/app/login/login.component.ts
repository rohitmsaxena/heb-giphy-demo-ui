import {Component} from '@angular/core';
import { AuthService } from '../core/auth.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public auth: AuthService,
              public dialogRef: MatDialogRef<LoginComponent>) { }

  closeOnClick(): void {
    this.dialogRef.close();
  }
}
