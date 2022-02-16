'use strict'

//Greeting
let userName = prompt('What\'s your name?');
//console.log('asking for userName');
alert('Hey there, ' + userName + '! ' + 'Welcome to my site!');

// First Question
let askTexas = prompt('Am I from Texas?');

if (askTexas.toLowerCase() === 'yes' || askTexas.toLowerCase() ==='y') {
  //console.log('You are correct!');
  alert('You are correct!');
} else if (askTexas.toLowerCase() === 'no' || askTexas.toLowerCase() === 'n') {
  //console.log('Wrong!');
  alert('Wrong!');
} else {
  //console.log('"Yes" or "No" answers only, please!');
  alert('"Yes" or "No" answers only, please!');
}

// Second Question
let askAvocado = prompt('Do I like avocados?');

if (askAvocado.toLowerCase() === 'yes' || askAvocado.toLowerCase() ==='y') {
  //console.log('You guessed it! They\'re my favorite.');
  alert('You guessed it! They\'re my favorite.');
} else if (askAvocado.toLowerCase() === 'no' || askAvocado.toLowerCase() === 'n') {
  //console.log('Sorry, but avocados are the best thing on Earth.');
  alert('Sorry, but avocados are the best thing on Earth.');
} else {
  //console.log('"Yes" or "No" answers only, please!');
  alert('"Yes" or "No" answers only, please!');
}

// Third Question
let askMac = prompt('Are Macintosh computers too expensive?');

if (askMac.toLowerCase() === 'yes' || askMac.toLowerCase() ==='y') {
  //console.log('Yes, they are. They should be cheaper for coders.');
  alert('Yes, they are. They should be cheaper for coders.');
} else if (askMac.toLowerCase() === 'no' || askMac.toLowerCase() === 'n') {
  //console.log('Not everyone is rich like you.');
  alert('Not everyone is rich like you.');
} else {
  //console.log('"Yes" or "No" answers only, please!');
  alert('"Yes" or "No" answers only, please!');
}

// Fourth Question
let askPoker = prompt('Is Texas Hold \'em a fun game?');

if (askPoker.toLowerCase() === 'yes' || askPoker.toLowerCase() ==='y') {
  //console.log('It\'s the best game!');
  alert('It\'s the best game!');
} else if (askPoker.toLowerCase() === 'no' || askPoker.toLowerCase() === 'n') {
  //console.log('You really haven\'t played, have you?');
  alert('You really haven\'t played, have you?');
} else {
  //console.log('"Yes" or "No" answers only, please!');
  alert('"Yes" or "No" answers only, please!');
}


// Fifth Question
let askJavascript = prompt('Do you really think I like learning Javascript?');

if (askJavascript.toLowerCase() === 'yes' || askJavascript.toLowerCase() ==='y') {
  //console.log('Of course I do, ' + userName + '.' + ' Who doesn\'t!?');
  alert('Of course I do, ' + userName + '.' + ' Who doesn\'t!?');
} else if (askJavascript.toLowerCase() === 'no' || askJavascript.toLowerCase() === 'n') {
  //console.log('You must not know anything about me, ' + username );
  alert('You must not know anything about me, ' + userName + '!');
} else {
  //console.log('"Yes" or "No" answers only, please!');
  alert('"Yes" or "No" answers only!' + ' Thank you, ' + userName + '.');
}
