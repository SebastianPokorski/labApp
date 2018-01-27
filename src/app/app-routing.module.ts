import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestbaseComponent } from './testbase/testbase.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PatientComponent } from './patient/patient.component';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'patient', component: PatientComponent},
{path: 'signin', component: SignInComponent},
{path: 'signup', component: SingUpComponent},
{path: 'testbase', component: TestbaseComponent},
{path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
