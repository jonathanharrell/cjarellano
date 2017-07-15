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
                TweenMax.fromTo('.lead', 1, { top: '-3rem' }, { top: '-15rem' }),
                TweenMax.fromTo('.watch-video', 1, { bottom: '33.333%' }, { bottom: '50%' }),
                TweenMax.fromTo('.selected-projects', 1, { top: 150 }, { top: -200 })
            ])

        new ScrollMagic.Scene({ triggerElement: '.lead', duration: (window.innerHeight * 2) })
            .setTween(tween)
            .addTo(controller)
    }
}

const loadProjectCategoryScroll = () => {
    const windowWidth = window.innerWidth

    if (document.querySelector('.tax-project_category')) {
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

export default loadProjectCategoryScroll
