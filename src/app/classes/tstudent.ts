export class Tstudent {
  TDistribution(dof: number, limiteInferior: number, limiteSuperior: number, numSegmentos: number): number {
    const anchoSegmento = (limiteSuperior - limiteInferior) / numSegmentos; 
    const anchoAjustado = (limiteSuperior - limiteInferior) / (3 * numSegmentos); 
    let result = 0;

    for (let segActual = 0; segActual <= numSegmentos; segActual++) {
      const x = limiteInferior + (segActual * anchoSegmento); 

      const valorT =
        (this.gamma((dof + 1) / 2) /
          (Math.sqrt(dof * Math.PI) * this.gamma(dof / 2))) *
        Math.pow(1 + x ** 2 / dof, -((dof + 1) / 2));

      const multiplicador = segActual === 0 || segActual === numSegmentos ? 1 : segActual % 2 === 0 ? 2 : 4;

      result += multiplicador * valorT * anchoAjustado;
    }
    return result;
  }

  gamma(num: number): number {
    if (Number.isInteger(num) && num >= 0) {
      return this.factorial(num - 1);
    }
    let n = Math.sqrt(Math.PI);
    while (num > 0.5) {
      n *= num - 1;
      num -= 1;
    }
    return n;
  }

  factorial(num: number): number {
    if (num === 0) {
      return 1;
    } else {
      return num * this.factorial(num - 1);
    }
  }
}
