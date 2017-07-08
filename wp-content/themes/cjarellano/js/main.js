import loadHomeHover from './home'
import loadSiteHeader from './siteHeader'
import loadMobileMenu from './mobileMenu'
import loadResponsiveImagesPolyfill from './responsiveImages'
import loadVideos from './videos'
import loadProjectCategoryScroll from './projectCategoryScroll'
import loadProjectScroll from './projectScroll'
import loadAboutScroll from './aboutScroll'

document.addEventListener('DOMContentLoaded', () => {
    loadHomeHover()
    loadSiteHeader()
    loadMobileMenu()
    loadResponsiveImagesPolyfill()
    loadVideos()
    loadProjectCategoryScroll()
    loadProjectScroll()
    loadAboutScroll()
})
