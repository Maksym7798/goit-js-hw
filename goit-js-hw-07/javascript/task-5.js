const text = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

text.addEventListener('input', enterName);

function enterName(element){

  if(element.target.value.length === 0){
    name.textContent = 'Незнакомец';
  } else {
  name.textContent = element.target.value;
  }

  return name.textContent;
}