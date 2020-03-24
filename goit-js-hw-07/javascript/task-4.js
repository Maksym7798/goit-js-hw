const counter = document.querySelector('#value');
let counterValue = 0;
const click = document.querySelector('#counter')

click.addEventListener('click', count);

function count(element){

  if(element.target.dataset.action === 'increment'){
    counterValue += 1;
  }
  
  if(element.target.dataset.action === 'decrement'){
    counterValue -= 1;
  }

  counter.textContent = counterValue;
}