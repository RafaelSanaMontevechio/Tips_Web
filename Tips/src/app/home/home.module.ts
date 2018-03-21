import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SimpleSearchComponent } from './simple-search/simple-search.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SimpleSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    SimpleSearchComponent,
  ]
})
export class HomeModule { }
