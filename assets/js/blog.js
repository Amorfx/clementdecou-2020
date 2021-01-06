const $ = require('jquery');
const InfiniteScroll = require('infinite-scroll');
const $document = $(document);
const { animBlogCard } = require('./utils/card-apparition');

$document.ready(function(){
  // Have menu dark or white with scroll
  $document.scroll((e) => {
    const scrollTop = $document.scrollTop();
    if (scrollTop <= 16) {
      $('header').first().addClass('dark');
    } else {
      $('header').first().removeClass('dark');
    }
  });

  // Infinite scroll
  let infScrollBlog = new InfiniteScroll('.post-list-container .list', {
    path: '.infinite-scroll-next a',
    append: '.blog-card',
    outlayer: false,
    hideNav: '.pagination',
    history: false,
    status: '.infinite-page-status'
  });
  infScrollBlog.on('append', (body, path, items, response ) => {
    animBlogCard(items);
  });

  $('.pagination').hide();

  animBlogCard(document.querySelectorAll('.blog-card'));
});
