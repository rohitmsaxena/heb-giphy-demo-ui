import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-spring-boot-angular-search-example';

  viewFavorite($event: any) {
    console.log('view favorite');
    console.log($event);
  }
}
