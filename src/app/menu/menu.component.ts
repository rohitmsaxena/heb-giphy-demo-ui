import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  welcomeMessage = 'Test';
  isLoggedIn: any;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    // console.log('menu ->' + this.isLoggedIn);
    console.log('menu')
  }

}
