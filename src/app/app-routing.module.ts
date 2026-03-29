import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
// import { ProductsDashboardComponent } from './products/products-dashboard/products-dashboard.component';
// import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path:'home',//https://localhost 4200/home
    component:HomeComponent
  },
  {
    path:'', //https://localhost 4200
    component:HomeComponent
  },
  {
    path:'products',  //https://localhost 4200/products
  //component :ProductsDashboardComponent
  loadChildren:()=>import("./products/products.module").then(m=>m.ProductsModule)
  },
  { 
    path:'users',  //https://localhost 4200/users
    // component:UsersDashboardComponent
    loadChildren:()=>import("./users/users.module").then(m=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
