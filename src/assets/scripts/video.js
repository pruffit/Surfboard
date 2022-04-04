const video = document.querySelector('.video');
const play = document.querySelector('.video__play');
const controlPlay = document.querySelector('.video__controls-play');
const controlMute = document.querySelector('.video__controls-volume-mute');
const videoBar = document.querySelector('.video__controls-bar-item');
const videoBarDot = document.querySelector('.video__controls-bar-dot');
const controlBar = document.querySelector('.video__controls-volume-bar-item');
const controlBarDot = document.querySelector('.video__controls-volume-bar-dot');
const videoClass = 'active';
const playVideo = function () {
    video.play();
    video.classList.add(videoClass);
    play.classList.add(videoClass);
    controlPlay.classList.add(videoClass);
    videoDuration();
}
const pauseVideo = function () {
    video.pause();
    video.classList.remove(videoClass);
    play.classList.remove(videoClass);
    controlPlay.classList.remove(videoClass);
}
const muteVideo = function () {
    if(!video.muted){
        video.muted = true;
        controlMute.classList.add(videoClass);
    }else{
        video.muted = false;
        controlMute.classList.remove(videoClass);
    }
}
const videoStatusChange = function (status) {
    status.addEventListener("click", (e) => {
        e.preventDefault();
        if(video.classList.contains(videoClass)){
            pauseVideo();
        }else{
            playVideo();
        }
    });
}
const videoDuration = function () {
    let interval;
    if(typeof interval !== 'undefined'){
        clearInterval(interval);
    }
    interval = setInterval(() => {
        const durationSec = Math.round(video.duration); 
        const complitedSec = Math.round(video.currentTime);
        const completedPercent = Math.round((complitedSec/durationSec) * 100);
        videoBar.value = `${completedPercent}`;
        videoBarDot.style.left = `${completedPercent}%`;
    }, 1000);
}
videoBar.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedPosition = e.layerX;
    const newPosition = Math.round((clickedPosition/ videoBar.offsetWidth) * 100);
    const newPositionPercent = Math.round((video.duration / 100) * newPosition);
    video.currentTime = newPositionPercent;
    videoBar.value = `${newPosition}`;
    videoBarDot.style.left = `${newPosition}%`;
});
controlMute.addEventListener("click", (e) => {
    e.preventDefault();
    muteVideo();
});
const videoVolume = function () {
    const currentVolume = video.volume;
    const currentVolumePercent = currentVolume * 100;
    controlBar.value = `${currentVolumePercent}`;
    controlBarDot.style.left = `${currentVolumePercent}%`;
}
controlBar.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedPosition = e.layerX;
    const clickedPositionPercent = clickedPosition/controlBar.offsetWidth;
    video.volume = clickedPositionPercent;
    controlBar.value = `${clickedPositionPercent*100}`;
    controlBarDot.style.left = `${clickedPositionPercent*100}%`;
});
videoStatusChange(play);
videoStatusChange(controlPlay);
videoVolume();