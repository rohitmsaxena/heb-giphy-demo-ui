import {Component} from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(public auth: AuthService,
              public dialogRef: MatDialogRef<UserProfileComponent>) { }

  closeOnClick(): void {
    this.dialogRef.close();
  }
}
