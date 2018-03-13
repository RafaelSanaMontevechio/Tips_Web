import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleSearchComponent } from './search/simple-search/simple-search.component';
import { CompleteSearchComponent } from './search/complete-search/complete-search.component';
import { TipsRoutingModule } from './tips.routing.module';


@NgModule({
  imports: [
    CommonModule,
    TipsRoutingModule
  ],
  declarations: []
})
export class TipsModule {}