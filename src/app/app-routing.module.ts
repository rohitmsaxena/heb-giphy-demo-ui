import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {UserProfileComponent} from './users/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'login', component: UserProfileComponent},
  { path: '', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
