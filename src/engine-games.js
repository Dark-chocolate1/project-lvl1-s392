import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const countCorrectAnswer = 3;

export default (generateAnswerOnQuestion, descriptionTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(descriptionTask);
  const userName = greetingUser();
  for (let countAnswer = 1; countAnswer <= countCorrectAnswer; countAnswer += 1) {
    const generateAnswer = generateAnswerOnQuestion();
    const question = car(generateAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question();
    const correctAnswer = cdr(generateAnswer);
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
