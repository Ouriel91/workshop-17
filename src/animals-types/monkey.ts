import { PettableAnimal } from "./pettable-animal";
import {FoodTypes} from "../food-types";

export class Monkey extends PettableAnimal {
    
    constructor(name: string) {
        super(name);
    }
    
    isHappy(): boolean {
        return this.animalPortions > 3
    }
    public favoriteFood(): string {
        return FoodTypes.BANANA
    }
}