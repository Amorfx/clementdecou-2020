const Isotope = require('isotope-layout');

const grid = document.querySelector('.projects');
var iso = new Isotope(grid, {
  itemSelector: '.project',
  masonry: {
    columnWidth: '.grid-sizer'
  }
});
