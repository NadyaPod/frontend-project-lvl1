import readLineSync from 'readline-sync';
import { playGame, getRandomFromHunded, defaultLose } from './index.js';

function calculateBiggestDivisor(firstNumber, secondNumber) {
  let a = Math.abs(firstNumber);
  let b = Math.abs(secondNumber);

  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function playDivisorOnce() {
  const firstNumber = getRandomFromHunded();
  const secondNumber = getRandomFromHunded();
  const rightAnswer = String(calculateBiggestDivisor(firstNumber, secondNumber));

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const playerAnswer = readLineSync.question('Your answer: ');

  return [playerAnswer, rightAnswer];
}

export default function findDivider() {
  playGame(3, playDivisorOnce, defaultLose);
}
