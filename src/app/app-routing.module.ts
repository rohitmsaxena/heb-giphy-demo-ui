import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
