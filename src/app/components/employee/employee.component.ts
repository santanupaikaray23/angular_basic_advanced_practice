import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeData: Employee[] = [];

  constructor(){}

  ngOnInit(): void {

    this.employeeData = [
      new Employee(1,"Santanu","Paikaray", 100000, 12345),
      new Employee(2,"Sidhanta","Paikaray", 100000, 12345),
      new Employee(3,"Sipun","Paikaray", 100000, 12345),
      new Employee(4,"Sandeep","Paikaray", 100000, 12345)

    ]

  }

}
