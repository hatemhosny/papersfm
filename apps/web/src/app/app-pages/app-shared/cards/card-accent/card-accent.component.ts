import { Component, Input} from '@angular/core';

@Component({
  selector: 'pfm-card-accent',
  templateUrl: './card-accent.component.html',
  styleUrls: ['./card-accent.component.scss'],
})
export class CardAccentComponent {

  @Input() type = '';
  @Input() color = '';

}
