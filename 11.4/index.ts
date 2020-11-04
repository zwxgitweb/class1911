let aaa: string = "123";
let bbb: number = 123;
let ccc: Array<string> = ['34'];
let ddd: Array<string | number> = ['1', 2, '3', '4'];


type n = number;
type s = string;
type o = object;

let dsa=document.querySelector('body');

let ds=document.querySelector('#qds');
let date: Array<s | n | o> = [
    {
        name: 'zs',
        str: 16
    },
    {
        name: 'ls',
        str: 17
    },
    {
        name: 'ww',
        str: 18
    },
]

console.log(aaa,bbb,ccc,ddd)

let str:s='';
for(let i in date){
    str +=`date[i]`
}

// dsa.innerHTML +=str