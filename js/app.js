'use strict'

let userName = prompt('What\'s your name?');
console.log('asking for userName');
alert('Well, hey there ' + userName + '! ' + 'Welcome to my site!');

let askTexas = prompt('Am I from Texas?');

if (askTexas === 'yes' || 'y') {
  console.log('You are correct!')
  alert('You are correct!')
} else if (askTexas === 'no' || 'n') {
  console.log('Wrong!');
  alert('Wrong!');
} else { 
  console.log('"Yes" or "No" answers only, please!')
  alert('"Yes" or "No" answers only, please!')
}

let askAvocado = prompt('Do I like avocados?');
let askMac = prompt('Are Macintosh computers too expensive?');
let askPoker = prompt('Is Texas Hold \'em a fun game?');
let askJavascript = prompt('Do I actually like learning Javascript?');
