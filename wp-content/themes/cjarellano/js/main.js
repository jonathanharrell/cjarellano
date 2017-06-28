import { isInViewport } from './helpers';

// fade in
const fadeInElement = el => {
    el.classList.add('visible')
}

document.addEventListener('DOMContentLoaded', () => {
    const siteHeader = document.querySelector('.site-header')
    const reelImage = document.querySelector('.reel .image')
    const reelLead = document.querySelector('.reel .lead')
    const watchVideo = document.querySelector('.reel .watch-video')

    if (siteHeader) fadeInElement(siteHeader)
    if (reelImage) fadeInElement(reelImage)
    if (reelLead) fadeInElement(reelLead)
    if (watchVideo) fadeInElement(watchVideo)
})

document.addEventListener('scroll', () => {
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
})
