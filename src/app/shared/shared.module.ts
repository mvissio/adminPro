import {NgModule} from '@angular/core';

import {BreadCrumbsComponent} from './bread-crumbs/bread-crumbs.component';
import {NoPageFoundComponent} from './no-page-found/no-page-found.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent
  ]
})

export class SharedModule {}
