const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItem = document.querySelector('#gallery');

function createGallery(){
  let createArray = [];

  images.forEach(element =>{
    const li = document.createElement('li');

    li.insertAdjacentHTML('afterbegin', '<img>')
    
    const image = li.querySelector('img');
    image.setAttribute('src', element.url);
    image.setAttribute('alt', element.alt);
    image.setAttribute('style', 'width:200px')
   
    createArray.push(li);
  });
  return createArray
}

galleryItem.append(...createGallery());