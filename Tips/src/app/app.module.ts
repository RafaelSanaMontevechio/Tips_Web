import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { FooterModule } from './footer/footer.module';
import { AuthService } from './home/navbar/auth.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SearchModule,
    FooterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
