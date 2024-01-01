import { Component,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {

  @Input()
  count!: number;

  @Output() countChanged: EventEmitter<number>= new EventEmitter();
  increment(){
    this.count ++;
    this.countChanged.emit(this.count)

  }

  decrement(){
    this.count --;
    this.countChanged.emit(this.count)

  }

}
