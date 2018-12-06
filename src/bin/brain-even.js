#!/usr/bin/env node
import welcome from '..';

const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = welcome();

const random = () => Math.floor(Math.random() * 100);
let count = 0;

while (count < 3) {
  const randomNumber = random();
  const evenNumber = (randomNumber % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question();
  if (evenNumber === answer) {
    console.log(`Your answer: ${answer} \n Correct!`);
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${evenNumber}'. \n Let's try again, ${userName}!`);
    break;
  }
}
if (count === 3) {
  console.log(`Congragulations, ${userName}`);
}
