import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GraphFirstComponent} from './graph-first/graph-first.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.router';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    GraphFirstComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    ProgressComponent,
    GraphFirstComponent
  ]
})

export class PagesModule {
}
