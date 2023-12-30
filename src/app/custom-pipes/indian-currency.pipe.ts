import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianCurrency'
})
export class IndianCurrencyPipe implements PipeTransform {

  transform(value:number): any {
    console.log('Salary is ', value)
    return "₹" + value; 
  }

}
