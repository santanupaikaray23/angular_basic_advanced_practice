import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-one',
  templateUrl: './employee-one.component.html',
  styleUrl: './employee-one.component.css'
})
export class EmployeeOneComponent {

  @Input()
  childDepartment!: string;

}
