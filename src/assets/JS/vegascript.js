// let menu = document.querySelector(".hamburger");
// let mobilNav =document.querySelector(".navmobile");
//     menu.addEventListener('click',()=>{
//         menu.classList.toggle("openmenu");
//         mobilNav.classList.toggle("max-h-screen");
  

//     })


// let logo = document.querySelector(".logo");
// let logo2 = document.querySelector(".ramplace");
// let allF = document.querySelectorAll(".two-nav");
//  let contents = document.querySelectorAll(".content"); 
// let ramplace = document.querySelector(".ramplace");
//   Array.from(allF).forEach(item =>{
//     item.addEventListener('click',(e)=>{
//         logo.classList.add("translate-x-[-200%]");
    
     
//         // resources.classList.remove("translate-x-full");
//         setTimeout(() =>{
//             ramplace.classList.remove("translate-x-full");
//             ramplace.classList.remove("opacity-0");

//         },100);
//          // sous-menu
//         Array.from(contents).forEach(content => {
//           // content.classList.remove("-translate-x-ful");

//           if (e.target.classList.contains(content.classList[4])) {
//               content.classList.remove("-translate-x-ful");
//               content.classList.add('translate-0');

//           }
//       });
      
//     })
//   });


// // select aside
//   let select = document.querySelector(".sellect");
//   let select2 = document.querySelector(".open-select");
//       select.addEventListener('click',()=>{
//       select2.classList.toggle("hidden");
//       });

 
// let menu = document.querySelector(".hamburger");
// let mobilNav = document.querySelector(".navmobile");

// menu.addEventListener('click', () => {
//     menu.classList.toggle("openmenu");
//     mobilNav.classList.toggle("max-h-screen");
// });

// let logo = document.querySelector(".logo");
// let ramplace = document.querySelector(".ramplace");
// let allF = document.querySelectorAll(".two-nav");
// let contents = document.querySelectorAll(".content");

// Array.from(allF).forEach(item => {
//     item.addEventListener('click', (e) => {
//         logo.classList.add("translate-x-[-200%]");
        
//         setTimeout(() => {
//             ramplace.classList.remove("translate-x-full");
//             ramplace.classList.remove("opacity-0");
//         }, 100);
        
//         Array.from(contents).forEach(content => {
//             // Assurez-vous que l'élément a au moins 5 classes et utilisez le bon nom de classe
//             if (content.classList.length >= 5 && e.target.classList.contains(content.classList[4])) {
//                 content.classList.remove("-translate-x-full"); // Nom de classe correct
//                 content.classList.add('translate-0'); // Assurez-vous que cette classe existe
//             }
//         });
//     });
// });


// Sélection des éléments
let menu = document.querySelector(".hamburger");
let mobilNav = document.querySelector(".navmobile");

// Basculer les classes lors du clic sur le menu hamburger
menu.addEventListener('click', () => {
    menu.classList.toggle("openmenu");
    mobilNav.classList.toggle("max-h-screen");
});

// Sélection des autres éléments
let logo = document.querySelector(".logo");
let ramplace = document.querySelector(".ramplace");
let allF = document.querySelectorAll(".two-nav");
let contents = document.querySelectorAll(".content");

// Ajouter des écouteurs d'événements de clic
allF.forEach(item => {
    item.addEventListener('click', (e) => {
        logo.classList.add("translate-x-[-200%]");
        
        setTimeout(() => {
            ramplace.classList.remove("translate-x-full");
            ramplace.classList.remove("opacity-0");
        }, 100);
        
        contents.forEach(content => {
            // Assurez-vous que l'élément a au moins 5 classes et utilisez le bon nom de classe
            if (content.classList.contains(e.target.classList[1])) {
                content.classList.remove("-translate-x-full");
                content.classList.add('translate-0');
            }
        });
    });
});

/******************************************************************* selectionner les elements ********************************************/

