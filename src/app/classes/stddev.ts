import { Media } from '../classes/media';

export class Stddev {

  media: Media;

  constructor() {
    this.media = new Media();
  }

  calcularStddev(array: number[]): number {
    const media = this.media.calcularMedia(array);
    const sumaCuadrados = array.reduce((acum, valor) => {
      return acum + Math.pow(valor - media, 2);
    }, 0);
    const varianza = sumaCuadrados / (array.length - 1); 
    const desviacionEstandar = Math.sqrt(varianza); 
    return parseFloat(desviacionEstandar.toFixed(2));
  }
}
