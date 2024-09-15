import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from  '@angular/forms';

import {HttpClientModule} from  '@angular/common/http';
import { LinkAccountComponent } from './dashboard/link-account/link-account.component';

import { SendMoneyComponent } from './dashboard/send-money/send-money.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LinkAccountComponent,
    SendMoneyComponent,
    HistoryComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
