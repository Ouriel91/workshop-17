import {Animal} from './animal'

export abstract class DangerousAnimal implements Animal {
    readonly name: string
    private portionsRecived : number

    protected constructor(name: string) {
        this.name = name
        this.portionsRecived = 0
    }
    abstract isHappy(): boolean 
    public abstract favoriteFood(): string

    isPettable(): boolean { return false}

    get animalPortions() : number{return this.portionsRecived}

    feed(){this.portionsRecived++}
}