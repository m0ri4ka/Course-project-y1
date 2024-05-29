const questionElement = document.getElementById("question");

let num1 = Math.floor(Math.random() * 1000);
let num2 = Math.floor(Math.random() * 1000);
let correctAnswer = num1 * num2;

questionElement.innerText = `Результат множення ${num1} на ${num2}?`;

const form = document.getElementById('form');
const input = document.getElementById('inp');
let frogsElement = document.getElementById('frogs');

let frogs = Number(localStorage.getItem("frogs"));
if (!frogs) {
  frogs = 0;
}

frogsElement.textContent = `Жабки : ${frogs}`;

form.addEventListener('submit', function() {
  let userAnswer = +input.value;
  if (correctAnswer === userAnswer) {
    frogs++;
    updateFrogs();
  } else {
    frogs--;
    updateFrogs();
  }
});

function updateFrogs() {
  localStorage.setItem("frogs", String(frogs));
}


// localStorage.removeItem("frogs");
