const menuOpen = document.querySelector('.menu-mobile-open')

menuOpen.addEventListener('click', () => {
    document.querySelector('body').classList.add('menu-mobile-visible')
})

const menuClose = document.querySelector('.menu-mobile-close')

menuClose.addEventListener('click', () => {
    document.querySelector('body').classList.remove('menu-mobile-visible')
})
