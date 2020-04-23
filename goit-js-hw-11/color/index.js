const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  button: document.querySelector('button'),
  body: document.querySelector('body'),
}

let styleColor;
refs.body.addEventListener('click', onClick);

function onClick({target}){

  if(target.dataset.action === 'start'){
    refs.button.disabled = 'true';
    styleColor = setInterval(color, 1000)
  } 
  else if (target.dataset.action === 'stop'){
    refs.button.disabled = false;
    clearInterval(styleColor);
  }

}

function color(){
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};