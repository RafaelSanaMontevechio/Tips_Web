import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { CompleteSearchComponent } from './complete-search/complete-search.component';
import { ResultComponent } from './result/result.component';
import { SearchRoutingModule } from './search.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
    declarations: [
    SimpleSearchComponent,
    CompleteSearchComponent,
    ResultComponent
  ],
  exports: [
    SimpleSearchComponent,
    CompleteSearchComponent,
    ResultComponent
  ]
})
export class SearchModule { }
