import { Card } from "./card.interface";
import { Condition } from "./condition";
import { Effect } from "./effect";

export interface CardCreature extends Card {
    healthPoints: number;
    effects: Effect[];
    conditions:Condition[]
}
