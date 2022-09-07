const textInput = document.querySelector('input');
let countInput = 0;
textInput.addEventListener('input', event => {
  countInput = event.currentTarget.value.length;
});

textInput.addEventListener('blur', event => {
  if (countInput === Number(textInput.getAttribute('data-length'))) {
    textInput.setAttribute('id', 'validation-input.valid');
  } else {
    textInput.setAttribute('id', 'validation-input.invalid');
  }
});
