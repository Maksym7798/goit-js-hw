import './styles.css';
import menuData from './menu.json';
import createLi from './template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

function buildMenu(menuData) {
  const markup = menuData.map(el => createLi(el)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}
buildMenu(menuData);

refs.input.addEventListener('change', changeTheme);
function changeTheme({target}) {
  if (target.checked == true) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } 
  else if (target.checked == false) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

if(localStorage.getItem('theme')== Theme.DARK){
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.input.checked = true;
}