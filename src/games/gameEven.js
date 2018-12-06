import readlineSync from 'readline-sync';
import welcome from '..';

const generateRandomNum = () => Math.floor(Math.random() * 100);

const isEven = number => number % 2 === 0;

export default () => {
  const userName = welcome();
  console.log(`Hello, ${userName}!`);
  for (let countCorrectAnswer = 1; countCorrectAnswer <= 3; countCorrectAnswer += 1) {
    const question = generateRandomNum();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
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
console.log('Answer "yes" if number even otherwise answer "no".');
