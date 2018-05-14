import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NoPageFoundComponent} from './shared/no-page-found/no-page-found.component';
import {LoginComponent} from './login/login.component';
import {GraphFirstComponent} from './pages/graph-first/graph-first.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {PagesComponent} from './pages/pages.component';
import {RegisterComponent} from './login/register.component';


const appRoutes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'graphFirst', component: GraphFirstComponent},
      {path: 'progress', component: ProgressComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NoPageFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
