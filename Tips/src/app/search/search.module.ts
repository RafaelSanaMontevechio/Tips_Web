import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SearchRoutingModule } from './search.routing.module';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { CompleteSearchComponent } from './complete-search/complete-search.component';
import { ResultComponent } from './result-search/result.component';
import { InformationSearchComponent } from './information-search/information-search.component';



@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
    declarations: [
    MainNavbarComponent,
    CompleteSearchComponent,
    ResultComponent,
    InformationSearchComponent
  ],
  exports: [
    CompleteSearchComponent,
    ResultComponent,
    InformationSearchComponent
  ]
})
export class SearchModule { }
