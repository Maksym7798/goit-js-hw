const china = 'КИТАЙ';
const chile = 'ЧИЛИ';
const australia = 'АВСТРАЛИЯ';
const india = 'ИНДИЯ';
const jamaica = 'ЯМАЙКА';

const country = prompt('Введите страну:');
let userCountry = country.toUpperCase();

switch (userCountry) {
  case china:
    alert ('Доставка в Китай будет стоить 100 кредитов');
    break;

  case chile:
    alert ('Доставка в Чили будет стоить 250 кредитов');
    break;

  case australia:
    alert ('Доставка в Австралию будет стоить 170 кредитов');
    break;

  case india:
    alert ('Доставка в Индию будет стоить 80 кредитов');
    break;

  case jamaica:
    alert ('Доставка на Ямайку будет стоить 120 кредитов');
    break;

  default:
    alert ('В вашей стране доставка не доступна');
}