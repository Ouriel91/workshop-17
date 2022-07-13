import {Zoo} from "../zoo";
import {Salary} from "../employees/salary";

const MAX_COL_LENGTH = 12;

export class ZooReporter {
    private readonly zoo: Zoo;

    constructor(zoo: Zoo) {
        this.zoo = zoo;
    }

    private headerPrinter(headers:string[] , reportName:string){
        console.log(`\n\n${reportName}:\n\n`)
        this.printLine(headers);
        console.log(''.padEnd(MAX_COL_LENGTH * headers.length,'-'));
    }
    private printLine (values:string[]){
        const line = values.map((s)=>s.padEnd(MAX_COL_LENGTH)).reduce((prev, current)=>prev+' | ' + current);
        console.log(line);
    }

    generateSalaryReport(): void{
        this.headerPrinter(['Name', 'Salary'], 'Salary Report');
        this.zoo.caretakers.forEach(c=> this.printLine([c.name, Salary.calcSalary(c).toString()]))
    }

    generateFeedingReport(){
        this.headerPrinter(['Name', 'Portions'], 'Feeding Report')
        this.zoo.animals.filter(a=>a.animalPortions > 0).forEach(a=> this.printLine([a.name, a.animalPortions.toString()]));
    }

    generateHappinessReport(){
        this.headerPrinter(['Name', 'Happy'], 'Animal Happiness')
        this.zoo.animals.forEach(a=> this.printLine([a.name, a.isHappy().toString()]));
    }

    generateNotFedReport (){
       this.headerPrinter(['Name'], 'Animals Not Fed')
        this.zoo.animals.filter(a=>a.animalPortions === 0)
            .forEach(a=> this.printLine([a.name]));
    }

    generateEmployeeActivityReport (){
        this.headerPrinter(['Name', 'Feedings', 'Pettings'], 'Employee Activity Report')
        this.zoo.caretakers.forEach(c=>this.printLine([c.name, c.feedCountAnimal.toString(), c.petCountAnimal.toString()]));
    }
}