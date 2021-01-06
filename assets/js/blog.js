const $ = require('jquery');
const InfiniteScroll = require('infinite-scroll');
const $document = $(document);

// Have menu dark or white with scroll
$document.ready(function(){
  $document.scroll((e) => {
    const scrollTop = $document.scrollTop();
    if (scrollTop <= 16) {
      $('header').first().addClass('dark');
    } else {
      $('header').first().removeClass('dark');
    }
  });

  // Infinite scroll
  let infScrollBlog = new InfiniteScroll('.post-list-container', {
    path: '.infinite-scroll-next a',
    append: '.blog-card',
    outlayer: false,
    hideNav: '.pagination',
    history: false,
  });

  $('.pagination').hide();
});

