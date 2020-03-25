const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allIngridients = document.querySelector('#ingredients');

  const li = ingredients.map(element => {
    const item = document.createElement('li');
    item.textContent = element;
    return item;
  });


allIngridients.append(...li);