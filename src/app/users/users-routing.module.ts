import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './users-dashboard/active/active.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { InactiveComponent } from './users-dashboard/inactive/inactive.component';

const routes: Routes = [
  {
    path:'',
    component:UsersDashboardComponent,
    children: [
        {
      path:'active',
      component:ActiveComponent
    },
    {
      path:'inactive',
      component:InactiveComponent
    }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
