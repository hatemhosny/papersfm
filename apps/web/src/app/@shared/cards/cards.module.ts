import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { CardComponent } from './card/card.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { RevealCardComponent } from './reveal-card/reveal-card.component';
import { CardAccentComponent } from './card-accent/card-accent.component';

@NgModule({
  imports: [ThemeModule],
  declarations: [CardComponent, FlipCardComponent, RevealCardComponent, CardAccentComponent],
  exports: [CardComponent, FlipCardComponent, RevealCardComponent, CardAccentComponent],
})
export class CardsModule {}
