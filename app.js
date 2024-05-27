const questionElement = document.getElementById("question");

let num1 = Math.floor(Math.random() * 1000);
let num2 = Math.floor(Math.random() * 1000);
let correctAnswer = num1 * num2;

questionElement.innerText = `Результат множення ${num1} на ${num2}?`;

const form = document.getElementById('form');
const input = document.getElementById('inp');
let scoreElement = document.getElementById('score');

let score = Number(localStorage.getItem("score"));
if(!score) {
  score = 0;
}

scoreElement.textContent = `score : ${score}`;

form.addEventListener('submit',function() {
  let userAnswer = +input.value;
  if(correctAnswer === userAnswer) {
    score++;
    updateScore();
  }
  else {
    score--;
    updateScore();
  }
});

function updateScore() {
  localStorage.setItem("score",String(score));
}


// localStorage.removeItem("score");
