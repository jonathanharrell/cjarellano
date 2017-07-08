import { debounce } from 'underscore'
import ScrollMagic from 'scrollmagic'
import TweenMax from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'
require('animation.gsap')
require('debug.addIndicators')

const initScene = controller => {
    if (controller) {
        const tween = new TimelineMax()
            .add([
                TweenMax.fromTo('.project-title', 1, { top: 0 }, { top: '-5rem' })
            ])

        new ScrollMagic.Scene({ triggerElement: '.project-type', duration: (window.innerHeight * 1.5) })
            .setTween(tween)
            .addTo(controller)
    }
}

const loadProjectScroll = () => {
    const windowWidth = window.innerWidth

    if (document.querySelector('.single-project')) {
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

export default loadProjectScroll
