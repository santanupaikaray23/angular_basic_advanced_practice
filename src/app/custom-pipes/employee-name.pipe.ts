import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeInfo } from '../models/employee-info.model';

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {

  transform(value: EmployeeInfo): unknown {
    console.log(value)

    return value.firstName+ " " + value.lastName;
  }

}
