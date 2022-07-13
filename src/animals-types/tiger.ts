import { DangerousAnimal } from "./dangerous-animal";
import {FoodTypes} from "../food-types";

export class Tiger extends DangerousAnimal {
    
    constructor(name: string) {
        super(name);
    }
    
    isHappy(): boolean {
        return this.animalPortions > 1
    }
    public favoriteFood(): string {
        return FoodTypes.MEAT
    } 
}