
// Splide Team

function splideTeam() {
  // Cible le composant grâce à ses classes 
  let splides = $('.splide.is-team'); 
  for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
    // Ouvre les paramètres du slider
    new Splide( splides[ i ], {
      // Personnalisez les options souhaitées ici
    }).mount();
  }
}
splideTeam();


