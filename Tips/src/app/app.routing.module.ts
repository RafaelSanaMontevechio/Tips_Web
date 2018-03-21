import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { SimpleSearchComponent } from './home/simple-search/simple-search.component';

const APP_ROUTES: Routes = [
    //{ path: '', component: SimpleSearchComponent }
     {path: 'home', loadChildren: 'app/home/home.module#HomeModule' }
];

@NgModule ({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
