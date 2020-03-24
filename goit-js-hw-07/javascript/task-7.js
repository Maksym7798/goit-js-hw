const size = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

size.addEventListener('input', fontSize);

function fontSize(element){
  text.setAttribute('style', `font-size:${element.target.value}px`);
}