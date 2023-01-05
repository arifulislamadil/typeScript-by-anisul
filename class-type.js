var Person = /** @class */ (function () {
    function Person(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("userame: ".concat(this.personName, ", age: ").concat(this.age));
    };
    return Person;
}());
