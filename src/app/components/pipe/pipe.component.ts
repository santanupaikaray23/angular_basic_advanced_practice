import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  title = "Pipe Example"
  toDate = new Date();
  message = "welcome to Angular"
}
