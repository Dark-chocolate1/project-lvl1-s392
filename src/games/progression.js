import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';
import generateNamberRandom from '../utils';

const descriptionTask = 'What number is missing in the progression?';

const maxFirstElement = 20;
const minStep = 1;
const maxStep = 20;
const startPosition = 0;
const lengthProgression = 10;

const generateAnswerOnQuestion = () => {
  const firstElement = generateNamberRandom(maxFirstElement);
  const stepProgression = generateNamberRandom(maxStep, minStep);
  const missingElementPosition = generateNamberRandom(lengthProgression, startPosition);

  const generateProgression = (elementPosition, currentElement, progression) => {
    if (elementPosition === lengthProgression) return progression;

    const generatingElement = (elementPosition === missingElementPosition) ? '..' : currentElement;
    const nextElement = currentElement + stepProgression;
    const newProgression = `${progression}  ${generatingElement}`;
    return generateProgression(elementPosition + 1, nextElement, newProgression);
  };
  const question = generateProgression(startPosition, firstElement, '');
  const correctAnswer = firstElement + missingElementPosition * stepProgression;
  return cons(question, `${correctAnswer}`);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
