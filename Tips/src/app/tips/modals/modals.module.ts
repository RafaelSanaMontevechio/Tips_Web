import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ModalRoutingModule } from './modals.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports:[
    LoginComponent
  ]
})
export class ModalsModule {}
