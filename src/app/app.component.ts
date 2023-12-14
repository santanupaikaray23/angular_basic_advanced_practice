import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular Basic Advanced';
  name = "Santanu Paikaray";

  firstName = "Santanu"
  lastName = "Paikaray"

  message = "This is two way-data binding"

  // displayName(){
  //   return this.title;
  // }
  getName(){
    console.log('Did you click the button?')
    console.log(this.message)
  }
}

