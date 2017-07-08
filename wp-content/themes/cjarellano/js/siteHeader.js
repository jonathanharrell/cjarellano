import { debounce } from 'underscore'

const assignScrollStatus = () => {
    const scrolled = document.body.scrollTop > 20

    if (scrolled) {
        document.body.classList.add('scrolled')
    } else {
        document.body.classList.remove('scrolled')
    }
}

const assignScrollDirection = lastScrollTop => {
    if (lastScrollTop) {
        const currentScrollTop = document.body.scrollTop

        if (currentScrollTop > lastScrollTop) {
            if (currentScrollTop > 100) {
                document.body.classList.remove('scrolling-up')
                document.body.classList.add('scrolling-down')
            }
        } else {
            document.body.classList.remove('scrolling-down')
            document.body.classList.add('scrolling-up')
        }
    }
}

const loadSiteHeader = () => {
    let lastScrollTop = null

    assignScrollStatus()

    document.addEventListener('scroll', debounce(() => {
        assignScrollStatus()
        assignScrollDirection(lastScrollTop)
        lastScrollTop = document.body.scrollTop
    }, 20))
}

export default loadSiteHeader
