import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {CoreModule} from "./core/core.module";
import {AuthGuard} from "./core/auth.guard";
import { TestingComponent } from './testing/testing.component';
import {MatButtonModule, MatDialogModule, MatIconModule} from '@angular/material';
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    SearchComponent,
    UserLoginComponent,
    UserProfileComponent,
    TestingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    CoreModule,
    MatDialogModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
