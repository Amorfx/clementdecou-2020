const anime = require('animejs');

module.exports.animateSearch = (event) => {
  const searchContainer = document.querySelector('.search-outer');
  searchContainer.style.opacity = 1;
  searchContainer.style.display = 'block';

  const tl = anime.timeline({
    duration: 700,
    easing: 'cubicBezier(.2, 1, .3, 1)'
  });

  // Add children
  tl
    .add({
      targets: '.search-outer',
      scaleY: [0, 1],
      duration: 700,
      easing: 'easeInOutQuad'
    })
    .add({
      targets: '.search-outer input[type=text]',
      translateY: [-30, 0],
      opacity: 1
    })
    .add({
      targets: '.search-outer span',
      translateY: [30, 0],
      opacity: 1
    }, 700);
};
