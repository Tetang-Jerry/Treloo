function submenu1_open() {
    let submenu = document.getElementById('submenu1');

    submenu.classList.remove('translate-x-full');

    let logo = document.getElementById('logo');

    let back = document.getElementById("back")

    if(back.classList.contains('translate-x-full')) {
        back.classList.remove('translate-x-full')
    }

    if(submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden')
    }

    setTimeout(() => {
        logo.classList.add('-translate-x-full');
    },200)

    setTimeout(() => {
        logo.classList.add('opacity-0');
        
        back.classList.remove("opacity-0")
    },300)
}

function close_submenu() {
    let submenu = document.getElementById('submenu1');

    submenu.classList.add('translate-x-full');

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
