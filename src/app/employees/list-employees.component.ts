import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
 // this is not necesary with the router outlet
 selector: 'app-list-employees', 
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
   employees: Employee[] = [
    {
      id: 1,
      name: 'Ranjith',
      gender: 'M',
      email: 'ranjith@dendis.com',
      phoneNumber: 3474891360,
      contactPreference: 'Email',
      dateOfBirth: new Date('01/01/1989'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/Gentleman1.png',
    },
    {
      id: 2,
      name: 'Priyanka',
      gender: 'F',
      email: 'priyanka@dendis.com',
      phoneNumber: 3474461821,
      contactPreference: 'Email',
      dateOfBirth: new Date('01/01/1999'),
      department: 'Sales',
      isActive: true,
      photoPath: 'assets/images/Lady1.png',
    },
    {
      id: 3,
      name: 'Adhya',
      gender: 'F',
      email: 'adhya@dendis.com',
      phoneNumber: 3479999999,
      contactPreference: 'Email',
      dateOfBirth: new Date('01/01/2009'),
      department: 'Marketing',
      isActive: true,
      photoPath: 'assets/images/Lady3.png',
    }
   ];
  constructor() { }

  ngOnInit() {
  }

}
