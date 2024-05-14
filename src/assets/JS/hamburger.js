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
}