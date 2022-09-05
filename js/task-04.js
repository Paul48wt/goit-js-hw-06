let counterValue = 0;
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
