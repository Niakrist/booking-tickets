import { films } from "./../api/films.js";


const filmsEL = document.querySelector('.films');
const dataFilms = films;


dataFilms.forEach(film => {
  const filmHTML = `
    <div class="film">
      <div class="film__img">
        <img src="${film.poster}" alt="${film.title}">
      </div>
      <span class="film__rating">IMDM ${film.imdb}</span>
      <h2 class="film__title">${film.title}</h2>
      <span class="film__genre">${film.genre[0].toUpperCase()}</span>
    </div>`
  filmsEL.insertAdjacentHTML('beforeend', filmHTML)
})

console.log('window.innerHeight: ', window.innerHeight);
console.log('window.innerWidth: ', window.innerWidth);
console.log('document.body.offsetHeight: ', document.body.offsetHeight);

let y = 0
const filmsEl = document.querySelector('.films');
if (window.innerWidth < window.innerHeight) {
  console.log('mob');
  let posY = 0;
  filmsEl.addEventListener('touchmove', (e) => {
    const { clientY } = e.touches[0];

    if (posY < clientY) {
      if (y >= 0) {
        y -= 50;
        filmsEl.style.bottom = y + 'px'
      } else {
        y = 0;
      }
    }

    if (posY > clientY) {
      if (y <= Number(filmsEl.offsetHeight) - 925) {
        y += 50;
        filmsEl.style.bottom = y + 'px'
      } else {
        y = Number(filmsEl.offsetHeight) - 925;
      }
    }
    posY = clientY;

  })
} else {
  console.log('dt');
  filmsEl.addEventListener('wheel', (e) => {
    if (y >= 0) {
      y += e.deltaY;
      filmsEl.style.bottom = y + 'px'
    } else {
      y = 0;
    }
    if (y <= Number(filmsEl.offsetHeight) - 925) {
      filmsEl.style.bottom = y + 'px'
    } else {
      y = Number(filmsEl.offsetHeight) - 925;
    }
  })
}


const menuLinkEl = document.querySelectorAll('.nav-genre__link');


menuLinkEl.forEach(menuItem => {
  menuItem.addEventListener('click', (e) => {
    e.preventDefault();
    const navGenreEl = document.querySelector('.nav-genre');
    const dataAtr = menuItem.dataset.toDisplace;
    navGenreEl.style.left = dataAtr;
  })
})