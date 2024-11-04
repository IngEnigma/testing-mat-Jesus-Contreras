export class LinearRegression {
  sumXorY(array: number[]): number {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

  sumXXorYY(array: number[]): number {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i] * array[i];
    }
    return sum;
  }

  sumXY(arrayX: number[], arrayY: number[]): number {
    var sum = 0;
    for (let i = 0; i < arrayX.length; i++) {
      sum += arrayX[i] * arrayY[i];
    }
    return sum;
  }

  avg(array: number[]): number {
      return this.sumXorY(array) / array.length;
  }

  B1(sumXY: number, sumX: number, sumY: number, sumXX: number, n: number): number {
    var b1 = 0;
    b1 = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    return b1;
  }

  B0(sumX: number, sumY: number, b1: number, n: number): number {
    var b0 = 0;
    b0 = (sumY - b1 * sumX) / n;
    return b0;
  }

  YK(b0: number, b1: number, x: number): number {
    var y = 0;
    y = b0 + b1 * x;
    return y;
  }
}
