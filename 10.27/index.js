class Person {
    constructor() {
        this.pname='zs';
        this.page='20';
        this.phobby=['跑步', '游泳']
    }
}

class Son extends Person {
    constructor() {
        super()
        this.name= 'ls';
        this.age='18';
        this.hobby=['跳绳', '篮球']
    }
    getPeraon() {
        return '姓名：' + this.pname + '年龄：' + this.page + '爱好：' + this.phobby.join('')
    }
    getSon() {
        return '姓名：' + this.name + '年龄：' + this.age + '爱好：' + this.hobby.join('')
    }
}
let a=new Person()

let b=new Son()
console.log(b.getPeraon())
console.log(b.getSon())

// 传入的类型就是什么类型
// 当前文件路径
// 异步有回调函数
