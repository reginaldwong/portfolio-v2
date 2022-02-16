VANTA.FOG({
  el: '#styled-header',
  THREE,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  highlightColor: 0x0bb0b1,
  midtoneColor: 0xe3bf98,
  lowlightColor: 0x13848c,
  baseColor: 0xfce9e9,
  blurFactor: 0.6,
  speed: 2.5,
  zoom: 0.95,
});

// MOBILE NAVBAR

const menuSlide = () => {
  const menu = document.querySelector('.header-menu-fold');
  const menuItem = document.querySelector('.header-menu');
  const html = document.querySelector('html');
  const menuItemLink = document.querySelectorAll('.header-menu-item');

  // TOGGLE MOBILE NAVBAR
  menu.addEventListener('click', () => {
    menuItem.classList.toggle('menu-active');
    menu.classList.toggle('toggle');
    html.classList.toggle('menu-open');
  });

  // COLLAPSE MOBILE NAVBAR WHEN A LINK IS CLICKED
  menuItemLink.forEach(link => {
    link.addEventListener('click', () => {
      menuItem.classList.toggle('menu-active');
      menu.classList.toggle('toggle');
      html.classList.toggle('menu-open');
    });
  });
};

menuSlide();
