import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteSearchComponent } from '../search/complete-search/complete-search.component';

const MAIN_ROUTES: Routes = [
    {path: 'search/complete-search', component: CompleteSearchComponent}
];

@NgModule ({
    imports: [
        RouterModule.forChild(MAIN_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class MainRoutingModule {}



