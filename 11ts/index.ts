let str: string = 'abc';
let num: number = 123;
let arr: Array<number> = [123];
let arr2: Array<number | string> = [123, '123'];
// 元组
let nArr: [] = [1, 2, 3];

let arr3: string[] = ['1'];
let obj: object = {
    nom: 123
}

let add4 = (a: number, b: string) => {
    return a + b
}
add4(1, '3');
// 定义
let add5: (a: number, b: number) => number;
// 赋值
add5 = (a, b) => a + b;
// 调用
add5(1, 3)
