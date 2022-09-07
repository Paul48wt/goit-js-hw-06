const inputSize = document.querySelector('input');
const text = document.getElementById('text');
text.style.fontSize = `${
  (Number(inputSize.getAttribute('min')) +
    Number(inputSize.getAttribute('max'))) /
  2
}px `;
inputSize.addEventListener('input', event => {
  text.style.fontSize = `${event.currentTarget.value}px `;
});
