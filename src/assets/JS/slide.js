document.addEventListener('DOMContentLoaded', function () {
    new Splide('#div-slider', {
      type   : 'loop',
      perPage: 1,
      snap: true,
      pagination: true, // Enable pagination
      arrows: false, // Disable default arrows
    }).mount();

    new Splide('#div-slider-2', {
        type   : 'loop',
        perPage: 1,
        pagination: false, // Enable pagination
        arrows: false, // Disable default arrows
        progress: true,
      }).mount();

      new Splide('#div-slider3', {
        type   : 'loop',
        perPage: 1,
        snap: true,
        pagination: true, // Enable pagination
        arrows: false, // Disable default arrows
      }).mount();
    

  });


 


//   var splide = new Splide( '#div-slider-2' );
//   var bar    = splide.root.querySelector( '.splide__progress__bar' );
  
//   // Updates the bar width whenever the carousel moves:
//   splide.on( 'mounted move', function () {
//     var end  = splide.Components.Controller.getEnd() + 1;
//     var rate = Math.min( ( splide.index + 1 ) / end, 1 );
//     bar.style.width = String( 100 * rate ) + '%';
//   } );
  
//   splide.mount();


  