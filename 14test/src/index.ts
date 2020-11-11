let num: number = 1;
console.log(num);


const obj: {
    name: string,
    age: number
} = {
    name: 'zs',
    age: 12,
}


const objs: string[] = ['1', '2', '3'];

class Person { };
const dajiao: Person = new Person();

const fns: () => string = () => {
    return 'ajdj'
}
console.log(fns());

let temp: string | number = '12';

let a = 1;
let b = 2;
let c = a + b;
console.log(c)

function getSum(a: number, b: number) {
    return a + b;
}
const num1 = getSum(1, 2);

let isDone:boolean = false;
type s = string;
let str:s = '123';
type EventNames = 'click'|'scroll'|'mousemove';
function handleEvent(ele:Element,event:EventNames){
    // return console.log(123)
}
handleEvent(document.getElementById('hello'),'scroll')

// type EventNames = 'click' | 'scroll' | 'mousemove';
// function handleEvent(ele: Element, event: EventNames) {
//     // do something
// }

// handleEvent(document.getElementById('hello'), 'scroll');  