const counter = document.querySelector('#value');
let counterValue = 0;
const click = document.querySelector('#counter')

click.addEventListener('click', count);

function count({target}){

  if(target.dataset.action === 'increment'){
    counterValue += 1;
  }
  
  if(target.dataset.action === 'decrement'){
    counterValue -= 1;
  }

  counter.textContent = counterValue;
}