class Person{
    //Properties, methods, constructor
    personName: string;
    age: number;

    constructor(personName: string, age: number){
        this.personName = personName;
        this.age = age;
    }
    display(){
        console.log(`userame: ${this.personName}, age: ${this.age}`)
    }

}