const $ = require('jquery');
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
  })
});

