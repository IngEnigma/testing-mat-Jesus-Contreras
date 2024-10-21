import { Component } from '@angular/core';
import { LinearRegression } from '../classes/linear_regression';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css'
})
export class LinearRegressionComponent {

  linearRegression: LinearRegression;
  sumX = 0;
  sumY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  avgX = 0;
  avgY = 0;
  n = 0;

  constructor() {
    this.linearRegression = new LinearRegression();
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
