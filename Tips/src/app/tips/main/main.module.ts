import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutingModule } from './main.routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class MainModule { }
