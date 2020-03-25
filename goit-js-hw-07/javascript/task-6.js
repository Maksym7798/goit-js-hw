const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', validation);

function validation({target}){
  if(target.value.length == target.dataset.length){
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  }else{
    inputText.classList.add('invalid');
    inputText.classList.remove('valid');
  }
  return(validation);
}