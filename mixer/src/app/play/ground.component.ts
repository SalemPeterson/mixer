import { Component } from '@angular/core';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrl: './ground.component.css',
})
export class GroundComponent {

  foo = 1;

  biggerFoo = (bar: number) => {

    this.foo = bar * this.foo;
  }

}
