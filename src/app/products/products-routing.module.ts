import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsDashboardComponent } from "./products-dashboard/products-dashboard.component";
import { MobilesComponent } from "./products-dashboard/mobiles/mobiles.component";
import { LaptopsComponent } from "./products-dashboard/laptops/laptops.component";
import { TabsComponent } from "./products-dashboard/tabs/tabs.component";


const routes:Routes =[
  {
    path:'', //https://localhost:4200/products
    component:ProductsDashboardComponent,
    children: [
        {
            path:'mobiles', //https://localhost:4200/products/mobiles
            component:MobilesComponent
        },
        {
          path:'laptops',//https://localhost:4200/products/laptops
          component:LaptopsComponent
        },
        {
          path:'tabs',//https://localhost:4200/products/tabs
          component:TabsComponent
        }
    ]

  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productsRoutingModule{

}