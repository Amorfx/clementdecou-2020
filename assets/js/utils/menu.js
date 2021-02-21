class Menu {
  static init() {
    this.addToggleEvent();
  }

  static addToggleEvent() {
    const slideMenu = document.querySelector('.mobile-slide-menu');
    const slideToggle = document.querySelector('.menu-toggle.is-slide');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', (e) => {
      slideToggle.style.top = menuToggle.offsetTop + 'px';
      slideToggle.style.right = (window.innerWidth - menuToggle.getBoundingClientRect().right) + 'px';
      e.preventDefault();
      slideMenu.classList.add('open');
    });
    slideToggle.addEventListener('click', (e) => {
      e.preventDefault();
      slideMenu.classList.remove('open');
    });
  }
}

module.exports.Menu = Menu;
