import templateCountrie from './template.hbs';
import templateCountries from './template-countries.hbs';
import './index.css';
const debounce = require('lodash.debounce');
const refs = {
  container: document.querySelector('.container'),
  input: document.querySelector('.to-do'),
};

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput({target}){
  const requestUrl = `https://restcountries.eu/rest/v2/name/${target.value}`;

  if(target.value.length == 0){
    refs.container.innerHTML = '';
  }

  if(target.value.length > 0){
    fetch(requestUrl).then(response => {return response.json()}).then(data => {

      if(data.length > 1 && data.length < 10){

        refs.container.innerHTML = '';
        const create = data.map(element => element.name);
        const obj = {name: create};

        refs.container.innerHTML = templateCountries(obj);

      }

      if(data.length == 1){
      
        refs.container.innerHTML = '';
        const objData = Object.assign({}, data[0]);
        const languages = objData.languages.map(element => {return element.name});
        objData.languages = languages;

        refs.container.innerHTML = templateCountrie(objData);
        
      };
    });
  };
};