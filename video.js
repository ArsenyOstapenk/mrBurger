// // получаем все элементы
// const videoEl = document.getElementsByTagName('video')[0],
//    playBtn = document.getElementById('playBtn'),
//    vidControls = document.getElementById('controls'),
//    volumeControl = document.getElementById('volume'),
//    timePicker = document.getElementById('timer');

// // если браузер может воспроизводить видео удаляем класс
// videoEl.addEventListener('canplaythrough', function () {
//    vidControls.classList.remove('hidden');
//    videoEl.volume = volumeControl.value;
// }, false);
// // запускам или останавливаем воспроизведение
// playBtn.addEventListener('click', function () {
//    if (videoEl.paused) {
//       videoEl.play();
//    } else {
//       videoEl.pause();
//    }
// }, false);

// videoEl.addEventListener('play', function () {

//    playBtn.innerText = "стопэ";
// }, false);

// videoEl.addEventListener('pause', function () {

//    playBtn.innerText = "погнали";
// }, false);

// volumeControl.addEventListener('input', function () {

//    videoEl.volume = volumeControl.value;
// }, false);

// videoEl.addEventListener('ended', function () {
//    videoEl.currentTime = 0;
// }, false);

// videoEl.addEventListener('timeupdate', function () {
//    timePicker.innerHTML = secondsToTime(videoEl.currentTime);
// }, false);

// // рассчет отображаемого времени
// function secondsToTime(time) {

//    let h = Math.floor(time / (60 * 60)),
//       dm = time % (60 * 60),
//       m = Math.floor(dm / 60),
//       ds = dm % 60,
//       s = Math.ceil(ds);
//    if (s === 60) {
//       s = 0;
//       m = m + 1;
//    }
//    if (s < 10) {
//       s = '0' + s;
//    }
//    if (m === 60) {
//       m = 0;
//       h = h + 1;
//    }
//    if (m < 10) {
//       m = '0' + m;
//    }
//    if (h === 0) {
//       fulltime = m + ':' + s;
//    } else {
//       fulltime = h + ':' + m + ':' + s;
//    }
//    return fulltime;
// }

// let player;

// const formateTime = timeSec => {
//    const roundTime = Math.round(timeSec);
//    const minutes = Math.floor(roundTime / 60);
//    const seconds = roundTime - minutes * 60;
//    const formatteSeconds = seconds < 10 ? `0${seconds}` : seconds;
//    return `${minutes} : ${formatteSeconds}`;
// }

// const onPlayerReady = () => {
//    let durationSec = player.getduration();
//    let interval;

//    $('.player__duration-estimate').text(formateTime(durationSec));

//    if (interval != "undefined") {
//       clearInterval(interval);
//    }

//    interval = setInterval (() => {
//       const completedSec = player.getcurrentTime();
//       const completedPercent = (completedSec / durationSec) * 100;

//       $('.player__playback-button').css({
//          left: `${completedPercent}%`
//       });

//       $('.player__duration-completed').text(formateTime(completedSec));
//    }, 1000 )
// }

// const eventsInit = () => {

//    $('.player__start').on('click', e => {
//       e.preventDefault();

//       const btn = $(e.currentTarget);

//       if (btn.hasClass('paused')) {
//          player.pause();
//          btn.removeClass('paused');
//       }else{
//          player.play();
//          btn.addClass('paused');
//       }
//    })
// }

//////////////////////////////////

const video = document.querySelector('#video');
const videoBtn = document.querySelector('#playBtn');
const progress = document.querySelector('#progress');
const progressTime = document.querySelector('#progressTime');
const allTime = document.querySelector('#allTime');


video.ontimeupdate = progressUpdate;

videoBtn.addEventListener('click', e => {
   if (video.paused) {
      video.play();
   }else{
      video.pause();
      //video.currentTime = 0; //сбросить время
      //video.playbackRate = 2; //в два раза быстрее проигрывается
      //video.volume = this.value / 100; //регулировка громкости
   } 

   if (video.paused) {
      videoBtn.classList.remove('play-button--pause');
      videoBtn.classList.add('play-button');
   } else {
      videoBtn.classList.add('play-button--pause');
      videoBtn.classList.remove('play-button');
   }
})

video.addEventListener('click', e => {
   if (video.paused) {
      video.play();
   } else {
      video.pause();
   }

   if (video.paused) {
      videoBtn.classList.remove('play-button--pause');
      videoBtn.classList.add('play-button');
   } else {
      videoBtn.classList.add('play-button--pause');
      videoBtn.classList.remove('play-button');
   }
})

progress.addEventListener('click', function() {

   let widthProgress = this.offsetWidth;
   let targetClick = event.offsetX;

   this.value = (100 * targetClick) / widthProgress;
   video.pause();
   video.currentTime = video.duration * (targetClick / widthProgress);
   video.play();
})


progress.addEventListener('mousedown', function () {

   let widthProgress = this.offsetWidth;
   let targetClick = event.offsetX;

   this.value = (100 * targetClick) / widthProgress;
   video.pause();
   video.currentTime = video.duration * (targetClick / widthProgress);

      this.addEventListener('mousemove', function () {

         let widthProgress = this.offsetWidth;
         let targetClick = event.offsetX;

         this.value = (100 * targetClick) / widthProgress;
      })
      window.addEventListener('mouseup', function () {
         video.play();
      })
})

progress.addEventListener('mouseup', function () {

   let widthProgress = this.offsetWidth;
   let targetClick = event.offsetX;

   this.value = (100 * targetClick) / widthProgress;
   video.currentTime = video.duration * (targetClick / widthProgress);
   video.play();

   this.addEventListener('mousemove', function (event) {
      event.stopPropagation();
   })
})


function progressUpdate() {
   let d = video.duration; //полное время
   let c = video.currentTime; //прогресс времени

   console.log(video.duration);
   progress.value = (100 * c) / d;
   progressTime.textContent = '00:' + Math.floor(c);

   if (video.currentTime < 10) {
      progressTime.textContent = '00:0' + Math.floor(c);
   }

   // allTime.textContent = '00:' + Math.floor(d);
}







