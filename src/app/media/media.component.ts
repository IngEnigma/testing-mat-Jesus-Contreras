import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent {

  getMean(numbers: number[], decimals: number = 0): number {
    const total = numbers.reduce((sum, value) => sum + value, 0);
    const mean = total / numbers.length;
    return parseFloat(mean.toFixed(2));
  }
}