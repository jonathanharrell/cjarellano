import CJAVimeoPlayer from './CJAVimeoPlayer'
import CJAYouTubePlayer from './CJAYouTubePlayer'

export default class Video {
    constructor (videoButton) {
        this.videoButton = videoButton
        this.videoId = null
        this.videoContainer = null
        this.type = null
        this.player = null
        this.closeButton = null
    }

    init () {
        this.getVideoId()
        if (this.videoId) this.getVideoContainer()
        if (this.videoContainer) this.getIFrame()
        if (this.iframe) this.getType()
        if (this.type) this.initPlayer()
        if (this.player) this.initModal()
    }

    getVideoId () {
        const videoId = this.videoButton.dataset.videoId

        if (videoId) {
            this.videoId = videoId
        } else {
            console.error('Element does not contain a video id!')
        }
    }

    getVideoContainer () {
        const videoContainer = document.getElementById(this.videoId)

        if (videoContainer) {
            this.videoContainer = videoContainer
        } else {
            console.error('Cannot find video container that matches the video id.')
        }
    }

    getIFrame () {
        const iframe = this.videoContainer.querySelector('iframe')

        if (iframe) {
            this.iframe = iframe
        } else {
            console.error('Cannot find iframe within video container.')
        }
    }

    getType () {
        const src = this.iframe.src

        if (src.includes('vimeo')) {
            this.type = 'vimeo'
        } else if (src.includes('youtube')) {
            this.type = 'youtube'
        } else {
            console.error('This video type is not recognized. Video must be from Vimeo or Youtube.')
        }
    }

    initPlayer () {
        if (this.type === 'vimeo') this.player = new CJAVimeoPlayer(this.iframe)
        if (this.type === 'youtube') this.player = new CJAYouTubePlayer(this.iframe)

        this.player.init()
        this.player.onVideoEnd = () => {
            this.closeModal()
        }
    }

    play () {
        this.player.play()
    }

    pause () {
        this.player.pause()
    }

    initModal () {
        this.closeButton = this.videoContainer.querySelector('.close-video')

        this.videoButton.addEventListener('click', () => {
            this.openModal()
            this.play()
        })

        this.closeButton.addEventListener('click', () => {
            this.pause()
            this.closeModal()
        })
    }

    openModal () {
        this.videoContainer.classList.add('visible')
    }

    closeModal () {
        this.videoContainer.classList.remove('visible')
    }
}
