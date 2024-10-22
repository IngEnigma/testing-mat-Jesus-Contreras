import { Component } from '@angular/core';
import { LinearRegression } from '../classes/linear_regression';
import { Correlation } from '../classes/correlation';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css'
})
export class CorrelationComponent {

  linearRegression: LinearRegression;
  correlation: Correlation;
  sumaXY = 0;
  sumaX = 0;
  sumaY = 0;
  sumaXX = 0;
  sumaYY = 0;
  n = 0;

  constructor() {
    this.linearRegression = new LinearRegression();
    this.correlation = new Correlation();
  }

  getDataOfLinearregression(array1: number[], array2: number[]) {
    this.sumaXY = this.linearRegression.sumXY(array1, array2);
    this.sumaX = this.linearRegression.sumXorY(array1);
    this.sumaY = this.linearRegression.sumXorY(array2);
    this.sumaXX = this.linearRegression.sumXXorYY(array1);
    this.sumaYY = this.linearRegression.sumXXorYY(array2);
    this.n = array1.length;
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
