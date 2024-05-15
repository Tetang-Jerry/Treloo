function openHamburger() {
    let hamburger = document.getElementById('hamburger');

    setTimeout(() => {
        hamburger.classList.remove('hidden')
    }, 200) 
    
    let head = document.getElementById('header')

    head.style.height = "100vh"

    let open = document.getElementById('menu_open')
    let close = document.getElementById('menu_close')

    open.classList.add('hidden');
    close.classList.remove('hidden')


}

function closemenu() {
    let hamburger = document.getElementById('hamburger');

    hamburger.classList.add('hidden')
    
    let head = document.getElementById('header')

    head.style.height = "80px"
    
    let open = document.getElementById('menu_open')
    let close = document.getElementById('menu_close')

    open.classList.remove('hidden');
    close.classList.add('hidden')

    let submenu = document.getElementById('submenu1');
    submenu.classList.remove('translate-x-full');

     submenu.classList.add('hidden')


     let logo = document.getElementById('logo');

     let back = document.getElementById("back")
 
     setTimeout(() => {
         logo.classList.remove('-translate-x-full');
 
         back.classList.add('translate-x-full')
     },200)
 
     setTimeout(() => {
         logo.classList.remove('opacity-0');
         
         back.classList.add("opacity-0")
     },300)

}