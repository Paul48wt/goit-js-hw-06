const countCategories = (parentCategory, item) => {
  const category = document.querySelector(parentCategory);
  return `Number of categories: ${category.querySelectorAll(item).length}`;
};
console.log(countCategories('#categories', '.item'));
console.log(' ');

const categories = document.querySelector('#categories');
const category = categories.querySelectorAll('.item');

category.forEach(function (number) {
  console.log(`Category: ${number.firstElementChild.textContent}`);
  console.log(`Elements: ${number.lastElementChild.children.length}`);
  console.log(' ');
});
