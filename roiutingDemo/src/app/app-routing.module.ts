import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [{
  path:'departments', component:DepartmentListComponent
},
{
path:'employees', component:EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  // exports:[  routes.{DepartmentListComponent,EmployeeListComponent}]
})
export class AppRoutingModule { }
export const routingComponent=[DepartmentListComponent,EmployeeListComponent]