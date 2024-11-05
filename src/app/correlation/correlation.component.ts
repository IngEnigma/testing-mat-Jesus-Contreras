import { Component } from '@angular/core';
import { LinearRegression } from '../classes/linear_regression';
import { Correlation } from '../classes/correlation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Utilities } from '../classes/utilities';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css'
})
export class CorrelationComponent {

  linearRegression: LinearRegression;
  correlation: Correlation;
  util: Utilities;
  sumaXY = 0;
  sumaX = 0;
  sumaY = 0;
  sumaXX = 0;
  sumaYY = 0;
  n = 0;
  imputString1: string = '';
  imputString2: string = '';
  result: number | null = null;

  constructor() {
    this.linearRegression = new LinearRegression();
    this.correlation = new Correlation();
    this.util = new Utilities();
  }

  getDataOfLinearregression(array1: number[], array2: number[]) {
    this.sumaXY = this.linearRegression.sumXY(array1, array2);
    this.sumaX = this.linearRegression.sumXorY(array1);
    this.sumaY = this.linearRegression.sumXorY(array2);
    this.sumaXX = this.linearRegression.sumXXorYY(array1);
    this.sumaYY = this.linearRegression.sumXXorYY(array2);
    this.n = array1.length;
  }

  calculateRXY(arrayString1: string, arrayString2: string): number | null {
    const array1 = this.util.processArray(arrayString1)
    const array2 = this.util.processArray(arrayString2)
    if(array1 && array2){
      this.result = this.getRXY(array1, array2)
    }
    return this.result;
  }

  calculateRR(arrayString1: string, arrayString2: string): number | null {
    const array1 = this.util.processArray(arrayString1)
    const array2 = this.util.processArray(arrayString2)
    if(array1 && array2){
      this.result = this.getRR(array1, array2)
    }
    return this.result;
  }

  getRXY(array1: number[], array2: number[]) {
    let rxy = 0;
    this.getDataOfLinearregression(array1, array2);
    rxy = this.correlation.RXY(this.sumaXY, this.sumaX, this.sumaY, this.sumaXX, this.sumaYY, this.n);
    return parseFloat(rxy.toFixed(5));
  }

  getRR(array1: number[], array2: number[]) {
    let rr = 0;
    this.getDataOfLinearregression(array1, array2);
    rr = this.correlation.RR(this.sumaXY, this.sumaX, this.sumaY, this.sumaXX, this.sumaYY, this.n);
    return parseFloat(rr.toFixed(5));
  }

}
