import { Pipe, PipeTransform } from '@angular/core';
import { CustomerInfo } from '../models/customer-info.model';

@Pipe({
  name: 'customerName'
})
export class CustomerNamePipe implements PipeTransform {

  transform(value: CustomerInfo): unknown {
    console.log(value)
    return value.firstName + " " + value.lastName;
  }

}
