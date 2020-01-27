import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';
import {AuthService} from '../core/auth.service';
import {User} from 'firebase';

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
      this.user = x;
    });
  }

  handleLogin(event): void {
    console.log(event);
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });
  }

  handleAccount($event: MouseEvent) {
    this.auth.signOut();
  }
}
