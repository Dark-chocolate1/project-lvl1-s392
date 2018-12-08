import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';
import generateNamberRandom from '../utils';

const descriptionTask = 'What is the result of the expression?';

const maxNumberRandom = 50;

const mathSign = '+-*';
const generatMathSignRandom = () => mathSign.charAt(generateNamberRandom(mathSign.length));

const generateAnswerOnQuestion = () => {
  const number1 = generateNamberRandom(maxNumberRandom);
  const number2 = generateNamberRandom(maxNumberRandom);
  const mathSignRandom = generatMathSignRandom();
  const question = `${number1} ${mathSignRandom} ${number2}`;

  let correctAnswer = 0;
  switch (mathSignRandom) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    default: correctAnswer = number1 * number2;
      break;
  }
  return cons(question, `${correctAnswer}`);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
