import { Component } from '@angular/core';
import { Stddev } from '../classes/stddev';
import { Utilities } from '../classes/utilities';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stddev.component.html',
  styleUrl: './stddev.component.css'
})
export class StddevComponent {

  stddev: Stddev;
  util : Utilities;
  imputString: string = '';
  result: number | null = null;

  constructor() {
    this.stddev = new Stddev();
    this.util = new Utilities();
  }

  calculateStdDev(arrayString: string): number | null {
    const array = this.getArray(arrayString);
    if (array) {
      this.result = this.getStddev(array);
    }
    return this.result;
  }

  getArray(arrayString: string): number[] | null {
    return this.util.processArray(arrayString);
  }

  getStddev(array: number[]): number {
    return this.stddev.calcularStddev(array);
  }
}
