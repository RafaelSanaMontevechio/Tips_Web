import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { CompleteSearchComponent } from './complete-search/complete-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    SimpleSearchComponent, 
    CompleteSearchComponent],

  exports:[
    SimpleSearchComponent,
    CompleteSearchComponent
  ]
})
export class SearchModule { }
