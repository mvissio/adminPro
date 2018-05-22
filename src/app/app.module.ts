import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {APP_ROUTES} from './app.routes';
import { RegisterComponent } from './login/register.component';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {NoPageFoundComponent} from './shared/no-page-found/no-page-found.component';
import {ServiceModule} from './services/service.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SharedModule,
    PagesModule,
    ServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
