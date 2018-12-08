import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';
import generateNamberRandom from '../utils';

const descriptionTask = 'Find the greatest common divisor of given numbers.';

const maxNumberRandom = 50;

const findGcd = (number1, number2) => {
  if (number2 === 0) return number1;
  return findGcd(number2, number1 % number2);
};

const generateAnswerOnQuestion = () => {
  const number1 = generateNamberRandom(maxNumberRandom);
  const number2 = generateNamberRandom(maxNumberRandom);
  const question = `${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2);
  return cons(question, `${correctAnswer}`);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
