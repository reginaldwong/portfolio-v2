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
  speed: 3,
  zoom: 1.5,
});

const menuSlide = () => {
  const menu = document.querySelector('.header-menu-fold');
  const menuItem = document.querySelector('.header-menu');

  menu.addEventListener('click', () => {
    menuItem.classList.toggle('menu-active');
    menu.classList.toggle('toggle');
  });
};

menuSlide();
