import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GraphFirstComponent} from './graph-first/graph-first.component';
import {ProgressComponent} from './progress/progress.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'accountSettings', component: AccountSettingsComponent},
      {path: 'graphFirst', component: GraphFirstComponent},
      {path: 'promesas', component: PromesasComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'rsjs', component: RxjsComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
