const $ = require('jquery');
const { animateSearch } = require('./utils/search/animation-search');


$(document).ready(() => {
  $('[data-animation-loaded]').addClass('loaded');
  document.querySelector('.header--search-button').addEventListener('click', (e) => {
    animateSearch(e);
  })
});
