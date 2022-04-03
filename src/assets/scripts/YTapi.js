// let tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// let player;
// const playerConteiner = $(".player__item");
// let eventsInit = () => {
//     $(".player__start").on("click", (e) => {
//         e.preventDefault();
//         if(playerConteiner.hasClass("paused")){
//             player.pauseVideo();
//         }else{
//             player.playVideo();
//         }
//     });
//     $(".player__playback").on("click", (e) => {
//         const bar = $(e.currentTarget);
//         const clickedPosition = e.originalEvent.layerX;
//         const newButtonPositionPercent = (clickedPosition/ bar.width()) * 100;
//         const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;
//         $(".player__playback-button").css({
//             left: `${newButtonPositionPercent}%`
//         });
//         player.seekTo(newPlaybackPositionSec);
//     });
//     $(".player__splash").on("click", () => {
//         player.playVideo();
//     });
// }

// const formatTime = timeSec => {
//     const roundTime = Math.round(timeSec);
//     const minutes = addZero(Math.floor(roundTime / 60));
//     const seconds = addZero(roundTime - minutes * 60);
//     function addZero(num) {
//         return num < 10 ? `0${num}` : num;
//     }
//     return `${minutes} : ${seconds}`
// }
// $(".player__playback::before").css('width', '100%');
// const onPlayerReady = () => {
//     let interval;
//     const durationSec = player.getDuration();
//     $(".player__duration-estimate").text(formatTime(durationSec));
//     if(typeof interval !== 'undefined'){
//         clearInterval(interval);
//     }
//     interval = setInterval(() => {
//         const completedSec = player.getCurrentTime();
//         const completedPercent = (completedSec/durationSec) * 100;
//         $(".player__playback-button").css({
//             left: `${completedPercent}%`
//         });
//         $(".player__duration-completed").text(formatTime(completedSec));
//     }, 1000);
// }
// const onPlayerStateChange = (e) => {
//     switch(e.data) {
//         case 1:
//             playerConteiner.addClass("active");
//             playerConteiner.addClass("pause");
//             break;
//         case 2:
//             playerConteiner.removeClass("active");
//             playerConteiner.removeClass("pause");
//             break;
//     }
// }
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('yt-player', {
//     height: '390',
//     width: '662',
//     videoId: 'qxuL18asTaM',
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     },
//     playerVars: {
//         controls: 0,
//         disablekb: 0,
//         showinfo: 0,
//         rel: 0,
//         autoplay: 0,
//         modestbranding: 0
//     }
//   });
// }
// eventsInit();