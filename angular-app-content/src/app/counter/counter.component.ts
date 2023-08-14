import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  val: number = 0;

  increment = () => {
    this.val = this.val + 1;
  };

  decrement = () => {
    this.val = this.val - 1;
  };
}
