const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeLi = text => {
  const li = document.createElement('li');
  li.textContent = text;
  li.classList.add('item');
  return li;
};
const array = ingredients.map(makeLi);

const ulRef = document.querySelector('#ingredients');
ulRef.append(...array);
