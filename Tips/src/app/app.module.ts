import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchModule } from './tips/search/search.module';
import { ModalsModule } from './tips/modals/modals.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    ModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
