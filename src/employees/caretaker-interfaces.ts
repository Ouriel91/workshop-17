import {Animal} from '../animals-types/animal'
import {PettableAnimal} from "../animals-types/pettable-animal";

export interface Feeder {
    feed(animal: Animal) : void;
}

export interface Petter {
    pet (pettableAnimal: PettableAnimal) : void;
}