import { Component } from '@angular/core';

@Component({
  selector: 'app-cycler',
  templateUrl: './cycler.component.html',
  styleUrls: ['./cycler.component.scss'],
})
export class CyclerComponent {
  options: string[] = ['apple', 'banana', 'orange'];
  selectedIndex = 0;

  cycle = () => {
    this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
  };
}
