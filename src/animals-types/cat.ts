import { PettableAnimal } from "./pettable-animal";
import {FoodTypes} from "../food-types";

export class Cat extends PettableAnimal {
    private LAST_HOUR : number = 60 * 60 * 1000 
    constructor(name: string) {
        super(name);
    }
    
    isHappy(): boolean {
        return this.animalPortions > 0 && Date.now() - this.lastPettingTimeAnimal > this.LAST_HOUR;
    }
    public favoriteFood(): string {
        return FoodTypes.MILK
    }
    
    
    
}