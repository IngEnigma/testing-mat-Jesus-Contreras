import { Component } from '@angular/core';
import { LinearRegression } from '../classes/linear_regression';
import { Utilities } from '../classes/utilities';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css'
})
export class LinearRegressionComponent {

  linearRegression: LinearRegression;
  util: Utilities;
  sumX = 0;
  sumY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  avgX = 0;
  avgY = 0;
  n = 0;
  imputString1: string = '';
  imputString2: string = '';
  inputX: number = 0;
  result: number | null = null;

  constructor() {
    this.linearRegression = new LinearRegression();
    this.util = new Utilities();
  }

  getDataOfLinearregression(array1: number[], array2: number[]) {
    this.sumX = this.linearRegression.sumXorY(array1);
    this.sumY = this.linearRegression.sumXorY(array2);
    this.sumXY = this.linearRegression.sumXY(array1, array2);
    this.sumXX = this.linearRegression.sumXXorYY(array1);
    this.sumYY = this.linearRegression.sumXXorYY(array2);
    this.avgX = this.linearRegression.avg(array1);
    this.avgY = this.linearRegression.avg(array2);
    this.n = array1.length;
  }

  calculateB1(arrayString1: string, arrayString2: string): number | null {
    const array1 = this.util.processArray(arrayString1);
    const array2 = this.util.processArray(arrayString2);
    if(array1 && array2){
      this.result = this.getB1(array1, array2);
    }
    return this.result;
  }

  calculateB0(arrayString1: string, arrayString2: string): number | null {
    const array1 = this.util.processArray(arrayString1);
    const array2 = this.util.processArray(arrayString2);
    if(array1 && array2){
      this.result = this.getB0(array1, array2);
    }
    return this.result;
    
  }

  calculateYK(arrayString1: string, arrayString2: string, x: number): number | null {
    const array1 = this.util.processArray(arrayString1);
    const array2 = this.util.processArray(arrayString2);
    if (array1 && array2) {
        this.result = this.getYK(array1, array2, x);
    }
    return this.result;
  }
  
  getArray(arrayString: string): number[] | null {
    return this.util.processArray(arrayString);
  }

  getB1(array1: number[], array2: number[]) {
    let b1 = 0;
    this.getDataOfLinearregression(array1, array2);
    b1 = this.linearRegression.B1(this.sumXY, this.sumX, this.sumY, this.sumXX, this.n);
    return parseFloat(b1.toFixed(5));
  }

  getB0(array1: number[], array2: number[]) {
    let b0 = 0;
    this.getDataOfLinearregression(array1, array2);
    b0 = this.linearRegression.B0(this.sumX, this.sumY, this.getB1(array1, array2), this.n);
    return parseFloat(b0.toFixed(5));
  }

  getYK(array1: number[], array2: number[], x: number) {
    let yk = 0;
    this.getDataOfLinearregression(array1, array2);
    yk = this.linearRegression.YK(this.getB0(array1, array2), this.getB1(array1, array2), x);
    return yk;
  }


}
