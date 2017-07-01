import { debounce } from 'underscore'
import Video from './Video'
import { isInViewport } from './helpers'

// fade in
const fadeInElement = el => {
    el.classList.add('visible')
}

document.addEventListener('DOMContentLoaded', () => {
    const siteHeader = document.querySelector('.site-header')

    const homeNav = document.querySelector('.home-nav')

    const reelImage = document.querySelector('.reel .image')
    const reelLead = document.querySelector('.reel .lead')
    const watchVideo = document.querySelector('.watch-video')

    const projectImage = document.querySelector('.single-project-content .image')
    const projectHeader = document.querySelector('.project-header')
    const projectInfo = document.querySelector('.project-info')
    const projectAwards = document.querySelector('.project-awards')

    if (siteHeader) fadeInElement(siteHeader)

    if (homeNav) fadeInElement(homeNav)

    if (reelImage) fadeInElement(reelImage)
    if (reelLead) fadeInElement(reelLead)
    if (watchVideo) fadeInElement(watchVideo)

    if (projectImage) fadeInElement(projectImage)
    if (projectHeader) fadeInElement(projectHeader)
    if (projectInfo) fadeInElement(projectInfo)
    if (projectAwards) fadeInElement(projectAwards)
})

document.addEventListener('scroll', debounce(() => {
    document.querySelectorAll('.project').forEach(project => {
        if (isInViewport(project, 0.75) && !project.classList.contains('visible')) {
            project.classList.add('visible')
        }
    })

    const siteFooter = document.querySelector('.site-footer')
    if (siteFooter) {
        if (isInViewport(siteFooter, 0.85) && !siteFooter.classList.contains('visible')) {
            siteFooter.classList.add('visible')
        }
    }
}, 10))

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

window.addEventListener('resize', () => {
    if(window.innerWidth >= 960) {
        document.querySelector('body').classList.remove('menu-mobile-visible')
    }
})

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

const menuItems = document.querySelectorAll('.primary-nav .menu-item')

if (menuItems) {
    menuItems.forEach(menuItem => {
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
}

// videos
const videos = document.querySelectorAll('.watch-video')
for (let i = 0; i < videos.length; i++) {
    const video = new Video(videos[i])
    video.init()
}

// home page hover
document.querySelectorAll('.home nav a').forEach(link => {
    link.addEventListener('mouseover', event => {
        const linkClass = event.target.className
        document.querySelector('body').classList.add(`${linkClass}-hover`)
    })

    link.addEventListener('mouseout', event => {
        const linkClass = event.target.className
        document.querySelector('body').classList.remove(`${linkClass}-hover`)
    })
})
