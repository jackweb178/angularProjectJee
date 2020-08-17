import { InscriptionComponent } from './inscription/inscription.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PageClientComponent} from './page-client/page-client.component';
import {PageUserComponent} from './page-user/page-user.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'client',
    component: PageClientComponent
  },

  {
    path:'user',
    component: PageUserComponent
  },

  {
    path:'inscription',
    component: InscriptionComponent
  },

  {
    path:'404',
    component: PageNotFoundComponent
  },

  {
    path:'**',//url par defaut
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
