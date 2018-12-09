import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';
import generateNamberRandom from '../utils';

const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumberRandom = 100;

const isPrime = (number) => {
  const minNumberPrime = 2;
  if (number < minNumberPrime) return false;

  const iter = (i) => {
    if (i > number / 2) return true;
    if (number % i === 0) return false;
    return iter(i + 1);
  };

  return iter(minNumberPrime);
};

const generateAnswerOnQuestion = () => {
  const question = generateNamberRandom(maxNumberRandom);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
