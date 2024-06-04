const menuMobile = document.querySelector('#menu')

function openMenu(){
    menuMobile.classList.remove("hidden")
    menuMobile.classList.add("flex")
}

function closeMenu(){
    menuMobile.classList.add("hidden")
    menuMobile.classList.remove("flex")
}