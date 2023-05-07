import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-type-cost',
  templateUrl: './card-type-cost.component.html',
  styleUrls: ['./card-type-cost.component.scss']
})
export class CardTypeCostComponent {
  @HostBinding('class.app-card-type-cost')
  @Input() cardTypeImageLink!: string;
  @Input() cost!: number;
}
