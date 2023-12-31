import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  id: number = 1;
  firstName: string="Santanu"
  lastName: string="paikaray"

}
