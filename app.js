import { Arr, compareArrays } from './src/arrays.js';
import {concatenate, strings, templateLiterals} from './src/strings.js';

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




