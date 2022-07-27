import { Arr, compareArrays, stringToArray} from './src/arrays.js';
import {concatenate, strings, templateLiterals} from './src/strings.js';
import {forLoop} from './src/loops.js';

document.title = "Hackathon"; 

const div = document.createElement('div');
const h1 = document.createElement('h1');

h1.innerHTML = 'Cycle 10 Hackathon';
div.appendChild(h1)
document.body.prepend(div)

div.style.color = "blue";
div.style.textAlign = 'center'
console.log(strings("I am calling this function and passing this text as an argument"));
console.log(concatenate("I am calling this function and passing this text as an argument."));
console.log(templateLiterals("I am calling this function and passing this text as an argument."));

let o = [1,2,3,4];
let v = [1,2,3,4,5];
console.log(Arr(o));
console.log(compareArrays(o,v))


let alpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
console.log(stringToArray(alpha))

console.log(alpha)

let beta = stringToArray(alpha);
console.log(forLoop(beta))
