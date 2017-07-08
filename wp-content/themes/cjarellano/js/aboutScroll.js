import { debounce } from 'underscore'
import ScrollMagic from 'scrollmagic'
import TweenMax from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'
require('animation.gsap')
require('debug.addIndicators')

const initScene = controller => {
    if (controller) {
        const titleTween = new TimelineMax()
            .add([
                TweenMax.fromTo('.about-title', 1, { top: 100 }, { top: -100 })
            ])

        new ScrollMagic.Scene({ triggerElement: '.about-header', duration: (window.innerHeight * 1.5) })
            .setTween(titleTween)
            .addTo(controller)

        const lineTween = new TimelineMax()
            .add([
                TweenMax.fromTo('.about-quotes .line', 1, { top: 0 }, { top: -300 })
            ])

        new ScrollMagic.Scene({ triggerElement: '.about-info', duration: (window.innerHeight * 1.5) })
            .setTween(lineTween)
            .addTo(controller)
    }
}

const loadAboutScroll = () => {
    const windowWidth = window.innerWidth

    if (document.querySelector('.page-template-page-about')) {
        let controller = windowWidth >= 960 ? new ScrollMagic.Controller() : null
        initScene(controller)

        window.addEventListener('resize', debounce(() => {
            const windowWidth = window.innerWidth

            if (windowWidth < 960) {
                if (controller) {
                    controller.destroy()
                    controller = null
                }
            } else {
                if (!controller) {
                    controller = new ScrollMagic.Controller()
                    initScene(controller)
                }
            }
        }, 100))
    }
}

export default loadAboutScroll
