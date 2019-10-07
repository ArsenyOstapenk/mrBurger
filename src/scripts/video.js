const video = document.querySelector('#video');
const videoBtn = document.querySelector('#playBtn');
const progress = document.querySelector('#progress');
const progressTime = document.querySelector('#progressTime');
const allTime = document.querySelector('#allTime');
const videoVolume = document.querySelector('#volume'); 
const workPlay = document.querySelector('.work__play'); 
const svgButton = document.querySelector('.play-button'); 
const bigButton = document.querySelector('.work__play'); 
const volumeX = document.querySelector('.work__volume-x'); 


video.ontimeupdate = progressUpdate;
video.volume = 10 / 100;


volume.addEventListener('input', function () {
   let v = this.value;
   video.volume = v / 100;

   console.log(videoVolume.value);

   if (videoVolume.value == 0) {
      volumeX.style.display = 'block';
   }else{
      volumeX.style.display = 'none';
   }
})

bigButton.addEventListener('click', e=> {
   bigButton.style.display = 'none';
   video.play();
   videoBtn.classList.add('play-button--pause');
   svgButton.style.display = 'none';
})

videoBtn.addEventListener('click', e => {
   if (video.paused) {
      video.play();
      bigButton.style.display = 'none';
   }else{
      video.pause();
      //video.currentTime = 0; //сбросить время
      //video.playbackRate = 2; //в два раза быстрее проигрывается
      //video.volume = this.value / 100; //регулировка громкости
   } 
   if (video.paused) {
      videoBtn.classList.remove('play-button--pause');
      svgButton.style.display = 'block';
   } else {
      svgButton.style.display = 'none';
      videoBtn.classList.add('play-button--pause');
      bigButton.style.display = 'none';
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
      svgButton.style.display = 'block';
   } else {
      svgButton.style.display = 'none';
      videoBtn.classList.add('play-button--pause');
      bigButton.style.display = 'none';
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

})

progress.addEventListener('mouseup', function () {
   let widthProgress = this.offsetWidth;
   let targetClick = event.offsetX;

   this.value = (100 * targetClick) / widthProgress;
   video.currentTime = video.duration * (targetClick / widthProgress);
   video.play();
   svgButton.style.display = 'none';
   videoBtn.classList.add('play-button--pause');
   bigButton.style.display = 'none';
})


function progressUpdate() {
   let d = video.duration; //полное время
   let c = video.currentTime; //прогресс времени

   progress.value = (100 * c) / d;
   progressTime.textContent = '00:' + Math.floor(c);

   if (video.currentTime < 10) {
      progressTime.textContent = '00:0' + Math.floor(c);
   }
   // allTime.textContent = '00:' + Math.floor(d);
   if (progress.value == 100) {
      progress.value = 0;
      video.currentTime = 0;
      videoBtn.classList.remove('play-button--pause');
      svgButton.style.display = 'block';
      video.pause();
   }
}