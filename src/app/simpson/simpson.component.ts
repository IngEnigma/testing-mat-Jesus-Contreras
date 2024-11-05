import { Component } from '@angular/core';
import { Simpson } from '../classes/simpson';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {

  simp: Simpson;
  fx: any;
  x0 = 0;
  x1 = 0;
  seg = 0;
  error = 0;
  result: number | null = null;

  constructor(){
    this.simp = new Simpson();
  }

  calculateSimp(fx: any, x0: number, x1: number, seg: number, error: number){
    this.result = this.getArea(this.fx, this.x0, this.x1, this.seg, this.error);
  }

  getArea(fx: any, x0: number, x1: number, seg: number, error: number) {
    return this.simp.area(fx, x0, x1, seg, error);
  }
}
