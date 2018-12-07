import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';

const descriptionTask = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => Math.floor(Math.random() * 100);

const isEven = number => number % 2 === 0;

const generateAnswerOnQuestion = () => {
  const question = generateQuestion();
  const userAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, userAnswer);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
