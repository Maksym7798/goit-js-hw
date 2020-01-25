let credits = 23580;
const pricePerDroid = 3000;
const userOrder = prompt('Сколько дроидов Вы хотите заказать?');

if (userOrder === null) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = userOrder * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    let balance = credits - totalPrice;
    console.log(`Вы купили ${userOrder} дроидов, на счету осталось ${balance} кредитов`);
  }
}