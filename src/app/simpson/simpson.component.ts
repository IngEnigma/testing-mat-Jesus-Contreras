import { Component } from '@angular/core';
import { Simpson } from '../classes/simpson';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {

  simp: Simpson;

  constructor(){
    this.simp = new Simpson();
  }

  calcularArea(fx: any, x0: number, x1: number, seg: number, error: number) {
    let a1 = 0, a2 = 0, c = 1;
    while (a2 === 0 || Math.abs(a2 - a1) > error) {
      a1 = a2 || this.simpson(seg, fx, x0, x1);
      seg *= a2 ? 2 : 1;
      a2 = this.simpson(seg, fx, x0, x1);
      c++;
    }
    return parseFloat(a2.toFixed(3));
  }
  
  simpson(segmentos: number, fx: any, x0: number, x1: number) {
    const w = (x1 - x0) / segmentos;
    let suma = this.simp.calcularOperacion(fx, x0) + this.simp.calcularOperacion(fx, x1);
    for (let i = 1; i < segmentos; i++) {
      const multiplo = i % 2 === 0 ? 2 : 4;
      suma += multiplo * this.simp.calcularOperacion(fx, w * i + x0);
    }
    return parseFloat(((w / 3) * suma).toFixed(3));
  }  
}
