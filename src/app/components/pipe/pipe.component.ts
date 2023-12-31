import { Component } from '@angular/core';
import { CustomerInfo } from '../../models/customer-info.model';
import { EmployeeInfo } from '../../models/employee-info.model';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  title = "Pipe Example"
  toDate = new Date();
  message = "welcome to Angular"
  salary: number=175;
  customer: CustomerInfo = new CustomerInfo('Santanu', 'Paikaray');
  employee: EmployeeInfo = new EmployeeInfo('Sidhanta','Paikaray');

  

}
