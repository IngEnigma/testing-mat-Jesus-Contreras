import { evaluate } from 'mathjs';

export class Simpson {
  calcularOperacion(operacion: string, x: number) {
    const scope = { x: x, X: x };
    const resultado = evaluate(operacion, scope);
    return resultado;
  }
}
