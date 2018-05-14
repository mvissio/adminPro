import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphFirstComponent } from './pages/graph-first/graph-first.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';
import {APP_ROUTES} from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphFirstComponent,
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
