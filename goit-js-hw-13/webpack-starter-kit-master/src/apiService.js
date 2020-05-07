const KEY = '16353844-963e1a93bb506934b430703c5';
const SEARCH = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
const PER_PAGE = 12;


export default function (search, currentPage, callback){
  const URL = SEARCH+'page='+currentPage+'&q='+search+'&per_page='+PER_PAGE+'&key='+KEY;
    fetch(URL)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => error);
};