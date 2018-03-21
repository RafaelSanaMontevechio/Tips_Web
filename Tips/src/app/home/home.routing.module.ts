import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleSearchComponent } from './simple-search/simple-search.component';



const MAIN_ROUTES: Routes = [
    {path: '', component: SimpleSearchComponent}
];

@NgModule ({
    imports: [
        RouterModule.forChild(MAIN_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule {}



