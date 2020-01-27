import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {UserProfileComponent} from '../users/user-profile/user-profile.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  welcomeMessage = 'Test';
  isLoggedIn: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    // this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    // console.log('menu ->' + this.isLoggedIn);
    console.log('menu');
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

}
