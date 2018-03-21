import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteSearchComponent } from './complete-search/complete-search.component';
import { ResultComponent } from './result-search/result.component';
import { InformationSearchComponent } from './information-search/information-search.component';

const SEARCH_ROUTES: Routes = [
    { path: 'search', component: CompleteSearchComponent },
    { path: 'result-search', component: ResultComponent },
    { path: 'information-search', component: InformationSearchComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(SEARCH_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class SearchRoutingModule {

}
