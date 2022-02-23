'use strict';

//Greeting
let userName = prompt('What\'s your name?');
//console.log('asking for userName');
alert('Hey there, ' + userName + '! ' + 'Welcome to my site!');

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();

function firstQuestion() {
  // First Question
  let askTexas = prompt('Am I from Texas?');

  if (askTexas.toLowerCase() === 'yes' || askTexas.toLowerCase() === 'y') {
    //console.log('You are correct!');
    alert('You are correct!');
  } else if (askTexas.toLowerCase() === 'no' || askTexas.toLowerCase() === 'n') {
    //console.log('Wrong!');
    alert('Wrong!');
  } else {
    //console.log('"Yes" or "No" answers only, please!');
    alert('"Yes" or "No" answers only, please!');
  }
}

function secondQuestion() {
  // Second Question
  let askAvocado = prompt('Do I like avocados?');

  if (askAvocado.toLowerCase() === 'yes' || askAvocado.toLowerCase() === 'y') {
    //console.log('You guessed it! They\'re my favorite.');
    alert('You guessed it! They\'re my favorite.');
  } else if (askAvocado.toLowerCase() === 'no' || askAvocado.toLowerCase() === 'n') {
    //console.log('Sorry, but avocados are the best thing on Earth.');
    alert('Sorry, but avocados are the best thing on Earth.');
  } else {
    //console.log('"Yes" or "No" answers only, please!');
    alert('"Yes" or "No" answers only, please!');
  }
}

function thirdQuestion() {
  // Third Question
  let askMac = prompt('Are Macintosh computers too expensive?');

  if (askMac.toLowerCase() === 'yes' || askMac.toLowerCase() === 'y') {
    //console.log('Yes, they are. They should be cheaper for coders.');
    alert('Yes, they are. They should be cheaper for coders.');
  } else if (askMac.toLowerCase() === 'no' || askMac.toLowerCase() === 'n') {
    //console.log('Not everyone is rich like you.');
    alert('Not everyone is rich like you.');
  } else {
    //console.log('"Yes" or "No" answers only, please!');
    alert('"Yes" or "No" answers only, please!');
  }
}

function fourthQuestion() {
  // Fourth Question
  let askPoker = prompt('Is Texas Hold \'em a fun game?');

  if (askPoker.toLowerCase() === 'yes' || askPoker.toLowerCase() === 'y') {
    //console.log('It\'s the best game!');
    alert('It\'s the best game!');
  } else if (askPoker.toLowerCase() === 'no' || askPoker.toLowerCase() === 'n') {
    //console.log('You really haven\'t played, have you?');
    alert('You really haven\'t played, have you?');
  } else {
    //console.log('"Yes" or "No" answers only, please!');
    alert('"Yes" or "No" answers only, please!');
  }
}

function fifthQuestion() {
  // Fifth Question
  let askJavascript = prompt('Do you really think I like learning Javascript?');

  if (askJavascript.toLowerCase() === 'yes' || askJavascript.toLowerCase() === 'y') {
    //console.log('Of course I do, ' + userName + '.' + ' Who doesn\'t!?');
    alert('Of course I do, ' + userName + '.' + ' Who doesn\'t!?');
  } else if (askJavascript.toLowerCase() === 'no' || askJavascript.toLowerCase() === 'n') {
    //console.log('You must not know anything about me, ' + username );
    alert('You must not know anything about me, ' + userName + '!');
  } else {
    //console.log('"Yes" or "No" answers only, please!');
    alert('"Yes" or "No" answers only!' + ' Thank you, ' + userName + '.');
  }
}

function sixthQuestion() {
  /*   Sixth Question - Use FOR or WHILE LOOP
  1. Prompt user to guess a number.
  2. Indicate with alert if guess is "too high" or "too low."
  3. Give user four chances to guess correctly.
  4. After 4 chances, tell user the right answer.
  */

  let attemptsLeft = 4;

  while (attemptsLeft > 0) {
    let guessNumber = Number(prompt('Guess a number between 1-10'));
    if (guessNumber > 5) {
      alert(`Too high! You have ${attemptsLeft - 1} attempts left!`);
    } else if (guessNumber < 5) {
      alert(` Too low! You have ${attemptsLeft - 1} attempts left!`);
    } else {
      alert('You guessed right!');
      break;
    }
    attemptsLeft--;
    if (attemptsLeft === 0) {
      alert('You ran out of tries. The answer is 5.');
    }
  }
}


function seventhQuestion() {
  /* Seventh Question - FOR or WHILE LOOP
  1. Add question that has multiple correct answers stored in an array.
  2. Give user 6 chances to guess the right answer.
  3. Guesses end when user guesses right answer or run out of attempts.
  4. Display all possible correct answers to user.
  */

  // Keep track of total number of correct answers.
  // At the end, tell them how many they got correct out of the 7 questions asked


  let favMovies = ['Scent of a Woman', 'Gattaca', 'The Devil\'s Advocate', 'Cinderella Man', 'Braveheart', 'V for Vendetta', 'Goodfellas', 'Casino', 'Training Day', 'Batman Begins'];

  let attemptsLeft1 = 6;
  let correctAttempts = 0;

  while (attemptsLeft1) {
    for (let j = 0; j < favMovies.length; j++) {
      let userResponse = prompt('Guess one of my favorite movies.');
      if (userResponse === favMovies[0] || userResponse === favMovies[1] || userResponse === favMovies[2] || userResponse === favMovies[3] || userResponse === favMovies[4] || userResponse === favMovies[5] || userResponse === favMovies[6] || userResponse === favMovies[7] || userResponse === favMovies[8] || userResponse === favMovies[9]) {
        alert('You guessed one right! Try to guess another one.');
        correctAttempts++;
      } else if (userResponse !== favMovies[j]) {
        alert(`That's not one! You have ${attemptsLeft1 - 1} attempts left!`)
      }
      attemptsLeft1--;
      if (attemptsLeft1 === 0) {
        alert('You ran out of tries! The answers are on my "About Me" page.');
        break;
      }
    }
  }
  alert('You guessed ' + correctAttempts + ' out of 7 right!');
}