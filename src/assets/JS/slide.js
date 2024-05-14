document.addEventListener('DOMContentLoaded', function () {
    new Splide('#div-slider', {
      type   : 'loop',
      perPage: 1,
      pagination: true, // Enable pagination
      arrows: false, // Disable default arrows
    }).mount();
  });