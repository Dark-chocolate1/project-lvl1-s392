import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';
import generateNamberRandom from '../utils';

const descriptionTask = 'Answer "yes" if number even otherwise answer "no".';

const maxNumberRandom = 50;

const isEven = number => number % 2 === 0;

const generateAnswerOnQuestion = () => {
  const question = generateNamberRandom(maxNumberRandom);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
