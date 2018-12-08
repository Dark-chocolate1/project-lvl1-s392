import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';

const descriptionTask = 'What is the result of the expression?';

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

const generateQuestion = () => Math.floor(Math.random() * 100);

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

const generateAnswerOnQuestion = () => {
  const number1 = generateQuestion();
  const number2 = generateQuestion();
  const sign = generationRandomSign();
  const question = `${number1} ${sign} ${number2}`;
  const userAnswer = resultWithNumbers(sign, number1, number2);
  return cons(question, `${userAnswer}`);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
