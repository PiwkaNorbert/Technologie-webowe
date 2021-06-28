let video = document.getElementById('video');
let button = document.getElementById('play-btn');

function playVideo() {
    button.style.display = 'none';
    video.play();
}

document.getElementById("video").addEventListener('click', () => {
    video.pause();
    button.style.display = 'block';
});

document.getElementById("video").addEventListener('ended', () => {
    button.style.display = 'block';
});