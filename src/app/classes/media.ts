export class Media {
  calcularMedia(data: number[]): number {
      const media = data.reduce((acc, val) => acc + val, 0) / data.length; 
      return parseFloat(media.toFixed(2));
  }
}
