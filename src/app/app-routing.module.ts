import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {ListEmployeesComponent} from './employees/list-employees.component';
import {CreateEmployeeComponent} from './employees/create-employee.component';
import {PageNotFoundComponent} from './errors/page-not-found.component';
import {BootStrapComponent} from './bootstrap/boot-strap.component';
import {BootStrapExample2Component} from './bootstrap/boot-strap-example2.component';

const routes: Routes = [
 {path: 'Create', component: CreateEmployeeComponent},
 {path: 'List', component: ListEmployeesComponent},
 {path: 'Bootstap', component: BootStrapComponent},
 {path: 'Bootstap1', component: BootStrapExample2Component},
 {path: '', redirectTo: '/List', pathMatch: 'full'},
 {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
