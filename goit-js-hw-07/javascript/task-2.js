const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allIngridients = document.querySelector('#ingredients');

function ingredientsItems() { 
  let createArray = [];

  ingredients.forEach(element => {
    const list = document.createElement('li');
    list.textContent = element;
    createArray.push(list);
  });
  return createArray;
}

allIngridients.append(...ingredientsItems());