import galleryItems from './gallery-items.js';

const createLi = ({preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`;
const sourceLi = galleryItems.reduce((acc, item) => acc + createLi(item), '');
const gallery = document.querySelector('.js-gallery');
gallery.insertAdjacentHTML('afterbegin', sourceLi);

gallery.addEventListener('click', moveToOriginal);

const openImage = document.querySelector('.lightbox__image');
const lightBox = document.querySelector('.lightbox');

function moveToOriginal(event){
  let target = event.target;
  if(target !== event.currentTarget){
    lightBox.classList.add('is-open');
    openImage.setAttribute('src', target.dataset.source);
  };
};

lightBox.addEventListener('click', closeModal);

const close = document.querySelector('.lightbox__button');

function closeModal({target}){
  if(target == close){
    lightBox.classList.remove('is-open');
    openImage.removeAttribute('src');
  };
};