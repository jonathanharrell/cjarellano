export const isInViewport = (el, num) => {
    return (el.getBoundingClientRect().top <= window.innerHeight * num && el.getBoundingClientRect().top > 0)
}
