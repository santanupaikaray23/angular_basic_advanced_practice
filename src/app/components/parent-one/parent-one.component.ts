import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrl: './parent-one.component.css'
})
export class ParentOneComponent {

  counter: number = 1;

  countChangeHandler(count:number){
    console.log(count)
    this.counter = count;
   

  }

}
