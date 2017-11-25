import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pfm-icon',
  template: `
    <div class="svg-icon"
          [inlineSVG]="iconUrl"
          aria-label="icon"
          [ngStyle]="{'fill': color, 'height': size, 'width': size}"
          >
    </div>
  `,
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input() size: string;
  @Input() color: string;
  @Input() icon: string;

  iconUrl: string;
  iconFolder = '/assets/icons/';

  constructor() {}

  ngOnInit() {
    if (this.icon.indexOf('://') > 0) {
      // https://url/to/svg/icon.svg
      this.iconUrl = this.icon;
    } else if (this.icon.indexOf('#') > 0) {
      // sprite.svg#icon
      this.iconUrl = this.iconFolder + this.icon;
    } else {
      // icon
      this.iconUrl = this.iconFolder + this.icon + '.svg';
    }
  }
}
