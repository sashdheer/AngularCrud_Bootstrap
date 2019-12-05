import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap';


@Component({
  // This is not neccessary because of the router outer on the app.component
  // selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  // By default if you included checked property, it is not checked if it also has the ngModel,
  // so include the property below to check a default radio button
  // gender = 'male';
  contact = 'email';

  // By default if you want to check it by default with "checked", you cannot use the ngModel, so set it here.
  isActive = 'true';

  // select this by default. With ngModel, "Selected" doesn't work on option.
  department = 'it';
  displayImage = false;
  preview = 'Show Preview';

  departments: Department[] = [
    {
      DeptId: 1,
      DeptName: 'Help Desk'
    },
    {
      DeptId: 2,
      DeptName: 'IT'
    },
    {
      DeptId: 3,
      DeptName: 'Sales'
    },
    {
      DeptId: 4,
      DeptName: 'Marketing'
    },
  ];
  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      dateInputFormat: 'MM/DD/YYYY'
    });
  }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }

  togglePreview(): void {
    this.displayImage = !this.displayImage;
    this.preview = this.displayImage ? 'Hide Preview' : 'Show Preview';
  }
}
