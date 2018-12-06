import readlineSync from 'readline-sync';
import welcome from '..';

const generationRandomSign = () => {
  let sign = '';
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      sign = '+';
      break;
    case 1:
      sign = '-';
      break;
    case 2:
      sign = '*';
      break;
    default:
      return null;
  }
  return sign;
};

const generateRandomNum = () => Math.floor(Math.random() * 100);

const resultWithNumbers = (sign, number1, number2) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return null;
  }
  return result;
};

export default () => {
  const userName = welcome();
  console.log(`Hello, ${userName}!`);
  for (let countCorrectAnswer = 1; countCorrectAnswer <= 3; countCorrectAnswer += 1) {
    const number1 = generateRandomNum();
    const number2 = generateRandomNum();
    const randomSign = generationRandomSign();
    console.log(`Question: ${number1} ${randomSign} ${number2}`);
    const userAnswer = Number(readlineSync.question());
    const correctAnswer = resultWithNumbers(randomSign, number1, number2);
    if (userAnswer === correctAnswer) {
      console.log(`Your answer: ${userAnswer} \n Correct!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congragulations, ${userName}`);
};

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
