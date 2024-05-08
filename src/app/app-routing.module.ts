import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componants/login/login.component';
import { HomeComponent } from './componants/home/home.component';
import { HomeBaseComponent } from './componants/home/home-base/home-base.component';
import { CartComponent } from './componants/cart/cart.component';

const routes: Routes = [
  {path : '' , redirectTo : 'login' , pathMatch: 'full'},
  {path : 'login' , component : LoginComponent} ,
  {path : 'user' , component : HomeBaseComponent , children: [
    {path : '' , redirectTo : 'home' , pathMatch: 'full'},
    {path : "home" , component : HomeComponent },
    {path : "wish-list" , component : CartComponent }
  ]} ,
  // {path : 'home'  , component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
