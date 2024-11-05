import { evaluate } from 'mathjs';

export class Simpson {
  calcularOperacion(operacion: string, x: number) {
    const scope = { x: x, X: x };
    const resultado = evaluate(operacion, scope);
    return resultado;
  }

  area(fx: any, x0: number, x1: number, seg: number, error: number) {
    let a1 = 0,
      a2 = 0,
      c = 1;
    while (a2 === 0 || Math.abs(a2 - a1) > error) {
      a1 = a2 || this.simpson(seg, fx, x0, x1);
      seg *= 2
      a2 = this.simpson(seg, fx, x0, x1);
      c++;
    }
    return parseFloat(a2.toFixed(3));
  }

  simpson(segmentos: number, fx: any, x0: number, x1: number) {
    const w = (x1 - x0) / segmentos;
    let suma = this.calcularOperacion(fx, x0) + this.calcularOperacion(fx, x1);
    for (let i = 1; i < segmentos; i++) {
      const multiplo = i % 2 === 0 ? 2 : 4;
      suma += multiplo * this.calcularOperacion(fx, w * i + x0);
    }
    return parseFloat(((w / 3) * suma).toFixed(3));
  }
}
