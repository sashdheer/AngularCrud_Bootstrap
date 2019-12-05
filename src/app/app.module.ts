import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { BootStrapComponent } from './bootstrap/boot-strap.component';
import { BootStrapExample2Component } from './bootstrap/boot-strap-example2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    PageNotFoundComponent,
    BootStrapComponent,
    BootStrapExample2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot() // ngx bootstrap dat picker module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
