import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleSearchComponent } from './pages/simple-search/simple-search.component';
import { CompleteSearchComponent } from './pages/complete-search/complete-search.component';

const APP_ROUTES: Routes = [
    {path: '', component: SimpleSearchComponent},
   // {path: 'tips/pages', component: CompleteSearchComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class TipsRoutingModule{}