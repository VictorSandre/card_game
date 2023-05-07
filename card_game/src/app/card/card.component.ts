import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Card, Orientation } from '../shared/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent{
  @HostBinding('class.app-card') isAppCard = true;
  @Input()boardGameCard!: Card;


}
