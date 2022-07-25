import {strings} from './src/strings.js';

document.title = "Hackathon"; 

const div = document.createElement('div');
const h1 = document.createElement('h1');

h1.innerHTML = 'Cycle 10 Hackathon';
div.appendChild(h1)
document.body.prepend(div)

div.style.color = "blue";
div.style.textAlign = 'center'
console.log(strings("I am calling this function and passing this text as an argument"))