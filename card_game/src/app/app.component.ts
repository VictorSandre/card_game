import { Component } from '@angular/core';
import { Card, CardType, Orientation, SpellCard } from './shared/model/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cardList: Card[] = [
    new SpellCard(Orientation.LANDSCAPE, 'hagrid hug', false, CardType.CARE_OF_MAGICAL_CREATURES, 1)
  ]
}
