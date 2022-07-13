import {ZooEmployee} from './zoo-employees'

const FEED_SALARY: number = 500;
const PET_SALARY: number = 100;
export class Salary {
    static calcSalary(zooCaretaker: ZooEmployee) {
        return FEED_SALARY * zooCaretaker.feedCountAnimal + PET_SALARY * zooCaretaker.petCountAnimal
    }
}