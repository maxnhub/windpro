let burger  = document.querySelector('.hamburger-menu');
let popup = document.querySelector('.popup');
let intro = document.querySelector('.intro');
let introContent = document.querySelector('.intro__content');

let links = document.querySelectorAll('.popup__menu-item-link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('hamburger-menu--active');
  // intro.classList.toggle('intro--active');
  // introContent.classList.toggle('intro__content--active');
  popup.classList.toggle('popup--active');
}

burger.addEventListener('click' , toggleMenu);