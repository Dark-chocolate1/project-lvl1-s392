#!/usr/bin/env node
import gameEven from '../games/gameEven';
import welcome from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

gameEven(welcome());
