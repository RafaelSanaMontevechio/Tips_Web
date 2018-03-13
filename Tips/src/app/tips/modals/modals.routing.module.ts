import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const MODAL_ROUTES: Routes = [
    {path: './modals', component: LoginComponent }
]

@NgModule ({

    imports:[
        RouterModule.forChild(MODAL_ROUTES)
    ],
    exports:[
        RouterModule
    ]  
})

export class ModalRoutingModule {}