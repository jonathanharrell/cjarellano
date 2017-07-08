import Player from '@vimeo/player'

export default class CJAVimeoPlayer {
    constructor (iframe, onVideoEnd = null) {
        this.iframe = iframe
        this.onVideoEnd = onVideoEnd
        this.player = null
    }

    init () {
        this.player = new Player(this.iframe)
    }

    play () {
        this.player.play()

        this.player.on('ended', () => {
            console.log('test')
            if (this.onVideoEnd) {
                this.onVideoEnd()
            }
        })
    }

    pause () {
        this.player.pause()
    }
}
