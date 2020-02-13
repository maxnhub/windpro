window.addEventListener('DOMContentLoaded', function() {
    let controller = new ScrollMagic.Controller();
  
    let sceneHeaderBg = new ScrollMagic.Scene({
          triggerElement: '.visual__content-big-subtext'
      })
      .setClassToggle('.header', 'header--show')
      .addTo(controller);
  
  });