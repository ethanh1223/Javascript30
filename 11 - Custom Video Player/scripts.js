var video = document.querySelector('video')
var playButton = document.querySelector('.toggle')
var playbackSpeedBar = document.querySelector('input[name="playbackRate"]');
var skipButtons = document.querySelectorAll('.player__controls button:not(.toggle)');

video.playbackRate = playbackSpeedBar.value;

console.dir(skipButtons)

playButton.addEventListener('click', (e => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}))

video.addEventListener('play', (e => {
  const icon = '❚ ❚';
  playButton.innerText = icon;
  playButton.innerHTML = icon;
}));

video.addEventListener('pause', (e => {
  const icon = '►';
  playButton.innerText = icon;
  playButton.innerHTML = icon;
}));

playbackSpeedBar.addEventListener('change', (e => {
  video.playbackRate = e.target.value;
}));






