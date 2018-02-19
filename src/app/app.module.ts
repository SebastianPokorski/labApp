import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PatientComponent } from './patient/patient.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TestbaseComponent } from './testbase/testbase.component';
import { testService } from './utility/test.service';
import { FormsModule } from '@angular/forms';

import { TestFilterPipe } from './utility/testFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingUpComponent,
    SignInComponent,
    PatientComponent,
    HomeComponent,
    TestbaseComponent,
    TestFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [testService],
  bootstrap: [AppComponent]
})
export class AppModule { }
