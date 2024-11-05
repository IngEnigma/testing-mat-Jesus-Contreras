import { Component } from '@angular/core';
import { Tstudent } from '../classes/tstudent';

@Component({
  selector: 'app-tstudent',
  standalone: true,
  imports: [],
  templateUrl: './tstudent.component.html',
  styleUrl: './tstudent.component.css',
})
export class TstudentComponent {
  t: Tstudent
  result: number = 0;

  constructor() {
    this.t = new Tstudent();
  }

  getT(dof: number, limiteInferior: number, limiteSuperior: number, numSegmentos: number) {
    return this.result = this.t.TDistribution(dof, limiteInferior, limiteSuperior, numSegmentos);
  }
}
