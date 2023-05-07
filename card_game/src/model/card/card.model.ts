export class Card {
  private _isShiny: boolean;

  constructor(isShiny: boolean) {
    this._isShiny = isShiny;
  }

  get isShiny() : boolean {
    return this.isShiny;
  }
}
