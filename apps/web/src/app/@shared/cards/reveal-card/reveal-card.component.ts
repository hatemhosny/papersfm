import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pfm-reveal-card',
  templateUrl: './reveal-card.component.html',
  styleUrls: ['./reveal-card.component.scss'],
})
export class RevealCardComponent {
  @Input() revealed = false;
  @Input() size = 'medium';
}
