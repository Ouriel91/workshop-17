import { DangerousAnimal } from "./dangerous-animal";
import {FoodTypes} from "../food-types";

export class Gorrila extends DangerousAnimal {
    
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