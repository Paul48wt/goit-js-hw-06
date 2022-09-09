const textInput = document.querySelector('input');
let countInput = 0;
textInput.addEventListener('input', event => {
  countInput = event.currentTarget.value.length;
});

textInput.addEventListener('blur', event => {
  if (countInput === Number(textInput.getAttribute('data-length'))) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});
