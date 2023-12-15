import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName = "Santanu"
  lastName = "Paikaray"
  text = "Assign H1 innertext using property Binding"
  isDisabled= false;
  target="_blank"
  website="https://nodejs.org/"
  SiteName="Node js"

  display(){
    console.log('Hi did you click me?')
  }

  

  counter=0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  message = "This is used for two way data binding"

  showMessage(){
    console.log(this.message)
  }

}
