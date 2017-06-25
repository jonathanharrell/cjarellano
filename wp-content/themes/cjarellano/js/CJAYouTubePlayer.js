import YouTubePlayer from 'youtube-player'

export default class CJAYouTubePlayer {
    constructor (iframe, closeModal) {
        this.iframe = iframe
        this.closeModal = closeModal
        this.player = null
    }

    init () {
        this.player = YouTubePlayer(this.iframe)
    }

    play () {
        this.player.playVideo()

        this.player.on('stateChange', event => {
            if (event.data === 0) {
                if (this.onVideoEnd) {
                    this.onVideoEnd()
                }
            }
        })
    }

    pause () {
        this.player.stopVideo()
    }
}
