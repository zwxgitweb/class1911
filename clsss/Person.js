class Person { // 父
    constructor(name,age,hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
    // static name() {
    //     return '张三'
    // }
    // static age() {
    //     return 25
    // }
    // static hobby() {
    //     return 'crime'
    // }


}
class Bar extends Person { // 子

    constructor() {
        this.name = '李四';
        this.age = 10;
        this.hobby = 'lawyer';
    }
    static getPerson() {
        return '姓名：' + super.name() + `；年龄：${super.age()}` + `；职业：${super.hobby()}；`
    }

    static getSon() {
        console.log(this.name)
        return '姓名：' +` ${this.name} `+ `；年龄：${this.age}` + `；职业：${this.hobby}；` 
    }
}



console.log(Bar.getPerson())
console.log(Bar.getSon())
console.log(piont)
// console.log(piont.age,piont.name,piont.hobby)