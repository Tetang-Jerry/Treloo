function openHamburger() {
    let hamburger = document.getElementById('hamburger');

    hamburger.classList.remove('hidden')
    
    let head = document.getElementById('header')

    head.style.height = "100vh"
}

function closemenu() {
    let hamburger = document.getElementById('hamburger');

    hamburger.classList.add('hidden')
    
    let head = document.getElementById('header')

    head.style.height = "80px"
}