import posts from './menu.json';
import menu from './menu.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switchInput: document.querySelector('.js-switch-input'),
  theme: localStorage.getItem('Theme'),
  jsMenu: document.querySelector('.js-menu'),
  switchInput: document.querySelector('.js-switch-input'),
};

const currentTheme = Theme.LIGHT ? refs.theme : null;
if (currentTheme === 'LIGHT') {
  refs.body.classList.add('light-theme');
  refs.body.classList.remove('dark-theme');
  refs.switchInput.checked = false;
}
if (currentTheme === 'DARK') {
  refs.body.classList.remove('light-theme');
  refs.body.classList.add('dark-theme');
  refs.switchInput.checked = true;
}

function menuItemPost(posts) {
  const dish = posts.map(post => menu(post)).join('');
  refs.jsMenu.insertAdjacentHTML('beforeend', dish);
}
menuItemPost(posts);

refs.switchInput.addEventListener('change', theme);
function theme(event) {
  if (event.target.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('Theme', 'DARK');
  } else {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', 'LIGHT');
  }
}
