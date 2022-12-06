import { Card } from "./card.interface";

export class PlayerBoardgame {
    wizzard:Card;
    deck:Card[];//must be [0-60]
    hand:Card[]; //7 at first turn
    discard:Card[];
    actionPoints: number;//2per turn
    cardsOnBoard:Card[];
    
    constructor(wizzard:Card, deck:Card[], hand:Card[]) {
        this.wizzard = wizzard;
        this.deck = deck;
        this.hand = hand;
        this.discard = [];
        this.actionPoints = 2;
        this.cardsOnBoard = [];
    }
}
