// mobile menu
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

// desktop menu hover
const underline = document.querySelector('.underline')

let startingPositionLeft
let startingWidth
let hoveringMenuItem = false

const positionMenuUnderline = () => {
    const currentMenuItem = document.querySelector('.current-menu-item')
    if (currentMenuItem) {
        startingPositionLeft = currentMenuItem.getBoundingClientRect().left
        startingWidth = currentMenuItem.offsetWidth

        underline.style.left = `${startingPositionLeft}px`
        underline.style.width = `${startingWidth}px`

        underline.classList.add('visible')
    }
}

window.onload = () => {
    positionMenuUnderline()
}

window.addEventListener('resize', () => {
    positionMenuUnderline()
})

document.querySelectorAll('.primary-nav .menu-item').forEach(menuItem => {
    menuItem.addEventListener('mouseover', event => {
        hoveringMenuItem = true
        underline.classList.add('visible')

        const { target } = event
        const positionLeft = target.getBoundingClientRect().left
        const width = target.offsetWidth

        underline.style.left = `${positionLeft}px`
        underline.style.width = `${width}px`
    })

    menuItem.addEventListener('mouseout', event => {
        hoveringMenuItem = false

        setTimeout(() => {
            if (!hoveringMenuItem) {
                if (!event.relatedTarget.classList.contains('menu-item')) {
                    if (startingPositionLeft && startingWidth) {
                        underline.style.left = `${startingPositionLeft}px`
                        underline.style.width = `${startingWidth}px`
                    } else {
                        underline.classList.remove('visible')
                    }
                }
            }
        }, 350)
    })
})
