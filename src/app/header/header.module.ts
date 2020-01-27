import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatRadioModule} from '@angular/material';

@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class HeaderModule { }
