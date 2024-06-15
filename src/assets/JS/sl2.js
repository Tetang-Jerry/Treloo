var splide = new Splide( '.splide2',{
  type   : 'loop'
} );
var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
  var end  = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min( ( splide.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();

var splide = new Splide( '.splide3',{
  type   : 'loop'
} );


// Updates the bar width whenever the carousel moves:
