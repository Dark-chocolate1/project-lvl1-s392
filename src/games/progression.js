import { cons } from 'hexlet-pairs';
import engineGame from '../engine-games';
import generateNamberRandom from '../utils';

const descriptionTask = 'What number is missing in the progression?';

const maxFirstElementProgression = 20;
const minStepProgression = 1;
const maxStepProgression = 20;
const startPositionProgression = 1;
const lengthProgression = 10;

const generateAnswerOnQuestion = () => {
  const firstElementProgression = generateNamberRandom(maxFirstElementProgression);
  const stepProgression = generateNamberRandom(maxStepProgression, minStepProgression);
  const positionMissingElement = generateNamberRandom(lengthProgression, startPositionProgression);

  const generateProgression = (positionElement, currentElement, progression) => {
    if (positionElement === lengthProgression) return progression;

    const generatingElement = (positionElement === positionMissingElement) ? '..' : currentElement;
    const nextElement = currentElement + stepProgression;
    const newProgression = `${progression}  ${generatingElement}`;
    return generateProgression(positionElement + 1, nextElement, newProgression);
  };
  const question = generateProgression(startPositionProgression, firstElementProgression, '');
  const userAnswer = firstElementProgression + (positionMissingElement - 1) * stepProgression;
  return cons(question, `${userAnswer}`);
};

export default () => engineGame(generateAnswerOnQuestion, descriptionTask);
