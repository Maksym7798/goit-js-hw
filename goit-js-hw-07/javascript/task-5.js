const text = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

text.addEventListener('input', enterName);

function enterName({target}){

  if(target.value.length === 0){
    name.textContent = 'Незнакомец';
  } else {
  name.textContent = target.value;
  }

  return name.textContent;
}