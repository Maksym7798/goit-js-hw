let total = 0;
let input;

input = prompt('Введите число');
userNumber = Number(input);

if (isNaN(input)) {
  alert('Введено не число, попробуйте еще раз');
  input = prompt('Введите число');
}

while (input !== null) {
  userNumber = Number(input);
  total = total + userNumber;
  input = prompt('Введите число');

  if (isNaN(input)) {
    alert('Введено не число, попробуйте еще раз');
    input = prompt('Введите число');
  }

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
  }
}
