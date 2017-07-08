import Video from './Video'

const loadVideos = () => {
    const videos = [].slice.call(document.querySelectorAll('.watch-video'))

    videos.forEach(video => {
        const videoPlayer = new Video(video)
        videoPlayer.init()
    })
}

export default loadVideos
