import Raven from 'raven-js'
import loadHomeHover from './home'
import loadSiteHeader from './siteHeader'
import loadMobileMenu from './mobileMenu'
import loadResponsiveImagesPolyfill from './responsiveImages'
import loadVideos from './videos'
import loadProjectCategoryScroll from './projectCategoryScroll'
import loadProjectScroll from './projectScroll'
import loadAboutScroll from './aboutScroll'

const setupErrorLogging = () => {
    Raven
        .config('https://066aaf058a4f4e4a91261ccd70992aeb@sentry.io/189487')
        .install()

    throw Error('test')
}

document.addEventListener('DOMContentLoaded', () => {
    setupErrorLogging()
    loadHomeHover()
    loadSiteHeader()
    loadMobileMenu()
    loadResponsiveImagesPolyfill()
    loadVideos()
    loadProjectCategoryScroll()
    loadProjectScroll()
    loadAboutScroll()
})
