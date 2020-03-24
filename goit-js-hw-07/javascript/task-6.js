const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', validation);

function validation(element){
  if(element.target.value.length == element.target.dataset.length){
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  }else{
    inputText.classList.add('invalid');
  }
  return(validation);
}