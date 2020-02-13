var newsSwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.news__content-arrow-box--next',
        prevEl: '.news__content-arrow-box--prev',
    }
  
  });