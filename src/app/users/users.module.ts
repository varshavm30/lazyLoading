import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { ActiveComponent } from './users-dashboard/active/active.component';
import { InactiveComponent } from './users-dashboard/inactive/inactive.component';


@NgModule({
  declarations: [
    UsersDashboardComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { 
  constructor(){
    console.log('Users Module Loaded !!');
    
  }
}
