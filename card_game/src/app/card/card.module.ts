import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardComponent } from './card.component';
import { CardTypeCostComponent } from './card-type-cost/card-type-cost.component';
import { FlippableCardDirective } from './flippable-card.directive';

@NgModule({
  declarations: [CardComponent, CardTitleComponent, CardTypeCostComponent, FlippableCardDirective],
  imports: [CommonModule],
  exports: [CardComponent]
})
export class CardModule { }
