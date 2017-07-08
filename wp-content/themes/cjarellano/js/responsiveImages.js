/* eslint-disable */
require('../modernizr')

const loadResponsiveImagesPolyfill = () => {
    if (!Modernizr.objectfit) {
        const responsiveImages = [].slice.call(document.querySelectorAll('.responsive-image'))

        responsiveImages.forEach(imageContainer => {
            const image = imageContainer.querySelector('img')
            const imageUrl = image ? image.getAttribute('src') : null

            if (imageUrl) {
                imageContainer.style.backgroundImage = `url(${imageUrl})`
                imageContainer.querySelector('img').style.opacity = 0
            }
        })
    }

}

export default loadResponsiveImagesPolyfill
