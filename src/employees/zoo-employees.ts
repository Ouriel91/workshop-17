import {Animal} from '../animals-types/animal'
import {PettableAnimal} from "../animals-types/pettable-animal";
import {Feeder, Petter} from "./caretaker-interfaces"
import {Employee} from "./employee"

export class ZooEmployee extends Employee implements Feeder, Petter {

    private feedCount : number
    private petCount : number

    constructor(name: string){
        super(name)
        this.feedCount = 0
        this.petCount = 0
    }

    pet(pettableAnimal: PettableAnimal){
        pettableAnimal.pet()
        this.petCount++
    }
    feed(animal: Animal): void {
        animal.feed()
        this.feedCount++
    }

    get feedCountAnimal(): number{
        return this.feedCount
    }

    get petCountAnimal(): number {
        return this.petCount
    }
}

export class ZooVolunteer extends Employee implements Petter {
    constructor(name: string){
        super(name)
    }
    pet(pettableAnimal: PettableAnimal): void {
        pettableAnimal.pet()
    }
}