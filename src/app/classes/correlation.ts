export class Correlation {

    RXY(sumXY: number, sumX: number, sumY: number, sumXX: number, sumYY: number, n: number): number {
        let rxy = 0;
        rxy = n * sumXY - sumX * sumY;
        rxy = rxy / Math.sqrt((n * sumXX - Math.pow(sumX, 2)) * (n * sumYY - Math.pow(sumY, 2)));
        return rxy;
    }

    RR(sumXY: number, sumX: number, sumY: number, sumXX: number, sumYY: number, n: number): number {
        return Math.pow(this.RXY(sumXY, sumX, sumY, sumXX, sumYY, n), 2);
    }
}