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


if (window.innerWidth < window.innerHeight) {
  const filmsEl = document.querySelector('.films');
let y = 0
filmsEl.addEventListener('touchmove', (e) => {
  if (y >= 0 ) {
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
} else {
  const filmsEl = document.querySelector('.films');
  let y = 0
  filmsEl.addEventListener('wheel', (e) => {
    if (y >= 0 ) {
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