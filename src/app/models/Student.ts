import { Customer } from "./customer";

export class Student{


    customer:Customer = new Customer();
    
    display(){
        this.customer.id=2
        this.customer.name="santanu";
        this.customer.city="Bhubaneswar";
    }
}
