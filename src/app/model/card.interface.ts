import { CardRariry } from "./card-rarity.enum";
import { CardSet } from "./card-set.enum";
import { LessonType } from "./lesson-type.enum";
import { Orientation } from "./orientation.enum";
import { ShinyType } from "./shiny-type.enum";

export interface Card{
    name: string;
    arity: CardRariry;
    cardSet: CardSet;
    cardSetNumber: number;
    shinyType: ShinyType;
    orientation: Orientation;
    image: string;
    isUnique: boolean;
    description?: string;
    lessonType: LessonType;
}