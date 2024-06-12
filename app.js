'use strict';
const questionElement = document.getElementById('question');

const random = max => Math.floor(Math.random() * max);
const maxNumber = 1000;
const num1 = random(maxNumber);
const num2 = random(maxNumber);
const correctAnswer = num1 * num2;

questionElement.innerText = `Результат множення ${num1} на ${num2}?`;

const form = document.getElementById('form');
const input = document.getElementById('inp');
const frogsElement = document.getElementById('frogs');
let frogs = localStorage.getItem('frogs') || 0;

frogsElement.textContent = `Жабки : ${frogs}`;

form.addEventListener('submit', () => {
  let userAnswer = +input.value;
  correctAnswer === userAnswer ? frogs++ : frogs-- ;
  updateFrogs();
});

const updateFrogs = () => {
  localStorage.setItem('frogs', String(frogs));
}
