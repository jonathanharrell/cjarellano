import Video from './Video'

const videos = document.querySelectorAll('.watch-video')
for (let i = 0; i < videos.length; i++) {
    const video = new Video(videos[i])
    video.init()
}