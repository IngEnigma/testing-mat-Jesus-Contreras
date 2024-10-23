import { Component } from '@angular/core';
import { Stddev } from '../classes/stddev';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [],
  templateUrl: './stddev.component.html',
  styleUrl: './stddev.component.css'
})
export class StddevComponent {

  stddev: Stddev;

  constructor() {
    this.stddev = new Stddev();
  }

  getStddev(array: number[]): number {
    return this.stddev.calcularStddev(array);
  }
}
