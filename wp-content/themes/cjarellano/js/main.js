import Video from './Video';

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

// video
const videos = document.querySelectorAll('.watch-video');
for(let i = 0; i < videos.length; i++) {
    const video = new Video(videos[i]);
    video.init();
}