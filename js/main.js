const menuOpen = document.querySelector('.menu-mobile-open')

if (menuOpen) {
    menuOpen.addEventListener('click', () => {
        document.querySelector('body').classList.add('menu-mobile-visible')
    })
}

const menuClose = document.querySelector('.menu-mobile-close')

if (menuClose) {
    menuClose.addEventListener('click', () => {
        document.querySelector('body').classList.remove('menu-mobile-visible')
    })
}
