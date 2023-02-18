export class person {

constructor(name) {
    this.name = name;
}

 sayHello(name){
    console.info(`Hallo ${name}, my name is ${this.name}`);
 }

}