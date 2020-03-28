import galleryItems from './gallery-items.js';
const refs = {
  gallery: document.querySelector('.js-gallery'),
  openImage: document.querySelector('.lightbox__image'),
  lightBox: document.querySelector('.lightbox'),
  close: document.querySelector('.lightbox__button'),
  lightBoxOver: document.querySelector('.lightbox__overlay')
};

const createLi = ({preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`;
const sourceLi = galleryItems.reduce((acc, item) => acc + createLi(item), '');

refs.gallery.insertAdjacentHTML('afterbegin', sourceLi);
refs.gallery.addEventListener('click', moveToOriginal);

function moveToOriginal({target, currentTarget}){
  if(target !== currentTarget){
    refs.lightBox.classList.add('is-open');
    refs.openImage.setAttribute('src', target.dataset.source);
  };
};

refs.lightBox.addEventListener('click', closeModal);

function closeModal({target}){
  if(target == refs.close || refs.lightBoxOver){
    refs.lightBox.classList.remove('is-open');
    refs.openImage.removeAttribute('src');
    i = 0;
  }
};

window.addEventListener('keydown', keySwipe);

function newSource(i) {
  refs.openImage.setAttribute('src', galleryItems[i].original)
}

let i = 0;

function keySwipe(event){
  
  if(event.key === 'ArrowRight'){
    i ++;
  } 

  else if (event.key === 'ArrowLeft'){
    i -= 1;
  }
  
  else if (event.key === 'Escape'){
    closeModal(event)
  }

  i = (i) % galleryItems.length;
  newSource(Math.abs(i))
}