const loadMobileMenu = () => {
    const menuOpen = document.querySelector('.site-header .logo')

    if (menuOpen) {
        menuOpen.addEventListener('click', () => {
            if (window.innerWidth < 960) {
                document.querySelector('body').classList.toggle('menu-mobile-visible')
            } else {
                window.location.href = '/'
            }
        })

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 960) {
                document.querySelector('body').classList.remove('menu-mobile-visible')
            }
        })
    }
}

export default loadMobileMenu
