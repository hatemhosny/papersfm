import { Component, Input } from '@angular/core';

@Component({
  selector: 'pfm-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent {

  @Input() flipped = false;
  @Input() size = 'medium';

}
