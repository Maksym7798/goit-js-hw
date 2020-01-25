const total = 100;
const ordered = prompt('Введите необходимое количество: ');

console.log(Number.parseInt(ordered));

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер!');
}
