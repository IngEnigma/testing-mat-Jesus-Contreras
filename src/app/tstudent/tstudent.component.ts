import { Component } from '@angular/core';
import { Tstudent } from '../classes/tstudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tstudent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tstudent.component.html',
  styleUrl: './tstudent.component.css',
})
export class TstudentComponent {
  t: Tstudent
  dof = 0
  limiteInferior = 0
  limiteSuperior = 0
  numSegmentos = 0
  result: number | null = null

  constructor() {
    this.t = new Tstudent();
  }

  calculateTStudent(dof: number, limiteInferior: number, limiteSuperior: number, numSegmentos: number) {
    this.result = this.getT(dof, limiteInferior, limiteSuperior, numSegmentos);
  }
  
  getT(dof: number, limiteInferior: number, limiteSuperior: number, numSegmentos: number) {
    this.result = this.t.TDistribution(dof, limiteInferior, limiteSuperior, numSegmentos);
    return parseFloat(this.result.toFixed(5));
  }
}
