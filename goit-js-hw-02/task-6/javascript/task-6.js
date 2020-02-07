let input = 0;
const numbers = [];
let total = 0;

while (input !== null){
  input = prompt('Введите число');
  if (isNaN(input)) {
    alert('Введено не число, попробуйте еще раз');
    input = prompt('Введите число');
  }
  let userNumber = Number(input);
  numbers.push(userNumber);
}

if (numbers.length > 0){
  for (let i = 0; i < numbers.length; i += 1){
    total += numbers[i];
  }
}

if (input === null){
  alert(`Общая сумма чисел равна ${total}`);
}