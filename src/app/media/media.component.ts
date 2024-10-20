import { Component } from '@angular/core';
import { Media } from '../classes/media';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  media : Media;

  constructor() {
    this.media = new Media();
  }

  getMedia(array: number[]): number {
    return this.media.calcularMedia(array);
  }
}
