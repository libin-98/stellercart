import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',loadComponent: () => import('./componants/home/home-base/home-base.component').then(c => c.HomeBaseComponent),
    children : [
      {path : '' , redirectTo : 'home' , pathMatch: 'full'},
      {path : "home" , loadComponent :()=>import('./componants/home/home.component').then(c => c.HomeComponent)},
      {path : "wish-list" , loadComponent : ()=>import('./componants/cart/cart.component').then(c=>c.CartComponent)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
