import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';

const descriptionTask = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => Math.floor(Math.random() * 100);

const resultWithNumbers = (number1, number2) => {
  if (number2 === 0) return number1;
  return resultWithNumbers(number2, number1 % number2);
};

const generateAnswerOnQuestion = () => {
  const number1 = generateQuestion();
  const number2 = generateQuestion();
  const question = `${number1} ${number2}`;
  const userAnswer = resultWithNumbers(number1, number2);
  return cons(question, `${userAnswer}`);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
