const loadHomeHover = () => {
    const homeLinks = [].slice.call(document.querySelectorAll('.home nav a'))

    if (homeLinks) {
        homeLinks.forEach(link => {
            link.addEventListener('mouseover', event => {
                const linkClass = event.target.className
                document.querySelector('body').classList.add(`${linkClass}-hover`)
            })

            link.addEventListener('mouseout', event => {
                const linkClass = event.target.className
                document.querySelector('body').classList.remove(`${linkClass}-hover`)
            })
        })
    }
}

export default loadHomeHover
