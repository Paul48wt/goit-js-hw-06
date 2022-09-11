function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
let amount = 0;
function createBoxes(amount) {
  let width = 30;
  let string = '';
  for (let i = 0; i < amount; i += 1) {
    // boxes.insertAdjacentHTML(
    //   'beforeend',
    //   `<div style="width: ${width}px; height: ${width}px; background-color: ${getRandomHexColor()}"></div>`,
    // );
    string += `<div style="width: ${width}px; height: ${width}px; background-color: ${getRandomHexColor()}"></div>`;
    width += 10;
  }
  console.log(string);
  boxes.insertAdjacentHTML('beforeend', string);
}

input.addEventListener('input', event => {
  amount = Number(event.currentTarget.value);
});

createBtn.addEventListener('click', () => {
  createBoxes(amount);
});

function destroyBoxes() {
  boxes.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);
