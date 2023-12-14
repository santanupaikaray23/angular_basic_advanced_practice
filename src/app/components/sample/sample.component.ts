import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student'
import { Customer } from '../../models/customer';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent implements OnInit {

  customer: Customer = new Customer();

  student: Student = new Student();
  constructor(){

  }

  ngOnInit(){
    this.customer.id =1;
    this.customer.name="Santanu";
    this.customer.city="Bhubaneswar";
    console.log(this.customer)

  }

}
