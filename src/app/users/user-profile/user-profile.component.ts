import {Component, Inject, OnInit} from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

class DialogData {
  name: 'test';
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent{

  constructor(public auth: AuthService,
              public dialogRef: MatDialogRef<UserProfileComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
