import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchModule } from './tips/search/search.module';
import { MainModule } from './tips/main/main.module';
import { AuthService } from './tips/main/navbar/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    SearchModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
