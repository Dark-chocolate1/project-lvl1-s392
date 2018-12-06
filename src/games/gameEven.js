import readlineSync from 'readline-sync';

const random = () => Math.floor(Math.random() * 100);

const isEven = number => number % 2 === 0;

export default (userName) => {
  for (let countStep = 1; countStep <= 3; countStep += 1) {
    const numberRandom = random();
    console.log(`Question: ${numberRandom}`);
    const userAnswer = readlineSync.question();
    const correctAnswer = isEven(numberRandom) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log(`Your answer: ${userAnswer} \n Correct!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congragulations, ${userName}`);
  }
};
