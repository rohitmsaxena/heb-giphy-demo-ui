import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserProfileComponent} from '../users/user-profile/user-profile.component';
import {MatDialog} from '@angular/material';
import {AuthService} from '../core/auth.service';
import {User} from 'firebase';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  @Output() viewFavorite = new EventEmitter();

  constructor(public auth: AuthService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.auth.user.subscribe(x => {
      console.log(x);
      this.user = x;
    });
  }

  handleLogin(event): void {
    console.log(event);
    const dialogRef = this.dialog.open(UserProfileComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  handleAccount($event: MouseEvent) {
    this.auth.signOut();
  }
}
