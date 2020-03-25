const size = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

size.addEventListener('input', fontSize);

function fontSize({target}){
  text.setAttribute('style', `font-size:${target.value}px`);
}