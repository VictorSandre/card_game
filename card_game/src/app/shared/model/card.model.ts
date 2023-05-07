export class Card {
  protected _orientation: Orientation;
  protected _title: string;
  protected _shiny: boolean;

  constructor(orientation: Orientation, title: string, isShiny: boolean) {
    this._orientation = orientation;
    this._title = title;
    this._shiny = isShiny;
  }

  get isShiny(): boolean {
    return this._shiny;
  }

  get orientation(): Orientation {
    return this._orientation;
  }

  get title(): string {
    return this._title;
  }
}

export interface TypedCard {
  type: CardType;
  cost: number;
}

export class SpellCard extends Card implements TypedCard{
  protected _type: CardType;
  protected _cost: number;

  constructor(orientation: Orientation, title: string, isShiny: boolean, type: CardType, cost: number) {
    super(orientation, title, isShiny);
    this._type = type;
    this._cost = cost;
  }

  get type(): CardType {
    return this._type;
  }

  get cost(): number {
    return this._cost;
  }

}

export enum Orientation {
  LANDSCAPE = 'LANDSCAPE',
  PORTRAIT = 'PORTRAIT'
}

export enum CardType {
  CARE_OF_MAGICAL_CREATURES = 'CARE_OF_MAGICAL_CREATURES',
  POTIONS = 'POTIONS',
  QUIDDITCH = 'QUIDDITCH',
  CHARMS = 'CHARMS',
  TRANSFIGURATION = 'TRANSFIGURATION'
}
