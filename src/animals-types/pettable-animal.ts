import {Animal} from './animal'

export abstract class PettableAnimal implements Animal {
    readonly name: string
    private portionsRecived : number
    private lastPettingTime : number

    protected constructor(name: string) {
        this.name = name
        this.portionsRecived = 0
    }
    abstract isHappy(): boolean 
    public abstract favoriteFood(): string 

    isPettable(): boolean { return true}

    get animalPortions() : number{return this.portionsRecived}

    feed(){this.portionsRecived++}

    public pet () {this.lastPettingTime = Date.now()}

    get lastPettingTimeAnimal() : number{return this.lastPettingTime}
}