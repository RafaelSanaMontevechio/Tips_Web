import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSearchComponent } from './simple-search/simple-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    SimpleSearchComponent],

  exports:[
    SimpleSearchComponent
  ]
})
export class PagesModule { }
