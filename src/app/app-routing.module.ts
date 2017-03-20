import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RegisterHouseComponent } from './components/house/register-house/register-house.component';
import { DashboardComponent } from './components/house/dashboard/dashboard.component';




const routes: Routes = [
	  { path: '',  component: HomeComponent },
	  { path: 'houses',  component: DashboardComponent },
	  { path: 'registerHouse',  component: RegisterHouseComponent },
  	  { path: 'login',component:LoginComponent },
  	  { path: 'register', component:RegisterComponent },
  	  { path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
