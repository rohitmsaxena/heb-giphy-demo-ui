import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {AuthGuard} from './core/auth.guard';
import {TestingComponent} from './testing/testing.component';
import {UserProfileComponent} from './users/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'testing', component: TestingComponent},
  {path: 'login', component: UserProfileComponent},
  {path: 'run', component: TestingComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchComponent},
  {path: '', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
