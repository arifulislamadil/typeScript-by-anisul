class Person2{
    //Properties, methods, constructor
    personName: string;
    age: number;
  

    constructor(personName: string, age: number){
        this.personName = personName;
        this.age = age;
    }
    display(){
        console.log(`username: ${this.personName}, age: ${this.age}`)
    }
}
class Student extends Person2{
}

let student1 = new Student("Alvi",22)

console.log("buji nai")
