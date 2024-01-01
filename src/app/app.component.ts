import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  studentId: number = 1;
  title = 'Angular Basic Advanced';
  name = "Santanu Paikaray";
  
 
  firstName = "Santanu"
  lastName = "Paikaray"

  message = "This is two way-data binding"
  

  movies:Movie[]=[
    {
      title: 'The Mask',
      director: 'Chuck Russell',
      cast:'New Line Cinema, FilmFlex, New Line Home Entertainment, Turner Home Entertainment',
      date:'28 July 1994'
    },
    {
      title: 'Tremors',
      director: 'Chuck Russell',
      cast:'New Line Home Entertainment, Turner Home Entertainment',
      date:'19 January 1990'
    },
    {
      title: 'Jurassic Park',
      director: 'Steven Spielberg',
      cast:'Jeff Goldblum',
      date:'15 April 1994'
    }
  ]
 employees = [
  {
    name : 'Santanu Paikaray',
    email : 'santanupaikaray1996@gmail.com',
    skills:[
      {
        skill:'Angular10',
        exp:'2+',
      },
      {
        skill:'Bootstrap',
        exp:'2+',
      }
    ]
  },
  {
    name : 'Sidhanta Paikaray',
    email : 'sidhantapaikaray1996@gmail.com',
    skills:[
      {
        skill:'Node js',
        exp:'2+',
      },
      {
        skill:'CSS3',
        exp:'2+',
      }
    ]
  },
  {
    name : 'Sipun Paikaray',
    email : 'sipunpaikaray1996@gmail.com',
    skills:[
      {
        skill:'Express js',
        exp:'2+',
      },
      {
        skill:'Jquery',
        exp:'2+',
      }
    ]
  },
  {
    name : 'Sandeep Paikaray',
    email : 'sandeeppaikaray1996@gmail.com',
    skills:[
      {
        skill:'HTML5',
        exp:'2+',
      },
      {
        skill:'Javascript',
        exp:'2+',
      }
    ]
  },

 ]
 
  getName(){
    console.log('Did you click the button?')
    console.log(this.message)
  }
value=3;
show: any;
}

