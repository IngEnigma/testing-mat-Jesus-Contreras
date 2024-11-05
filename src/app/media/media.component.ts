import { Component } from '@angular/core';
import { Media } from '../classes/media';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Utilities } from '../classes/utilities';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  media : Media;
  util : Utilities;

  constructor() {
    this.media = new Media();
    this.util = new Utilities();
  }

  imputString: string = '';
  result: number | null = null;

  calculateMedia(arrayString: string): number | null {
    const array = this.util.processArray(arrayString);
    if(array){
      this.result = this.media.calcularMedia(array);
    }
    return this.result;
  }

  getArray(arrayString: string): number[] | null {
    return this.util.processArray(arrayString);
  }

  getMedia(array: number[]): number {
    return this.media.calcularMedia(array);
  }
}