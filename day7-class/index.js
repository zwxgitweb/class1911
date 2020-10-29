class Person {
    constructor() {
        this.names = 'fsda';
        this.ages = 'age';
        this.hobbys = 'hobby';
    }
}

class Son extends Person {
    constructor(name, age, hobby) {
        super();
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
    getPerson() {
        return `${this.names}, ${this.ages}, ${this.hobbys}`;
    }
    getSon() {
        return `${this.name}, ${this.age}, ${this.hobby}`;
    }
}
let son = new Son('fs', 20, 'sf');
console.log(son.getPerson());
console.log(son.getSon());