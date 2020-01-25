import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {AuthGuard} from "./core/auth.guard";
import {TestingComponent} from "./testing/testing.component";
import {UserProfileComponent} from "./users/user-profile/user-profile.component";

const routes: Routes = [
  {path: '', component: TestingComponent},
  {path: 'runtoo', component: UserProfileComponent},
  {path: 'run', component: TestingComponent, canActivate: [AuthGuard]},
  {path: 'hello-world', component: HelloWorldComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
