var isMusicPlaying = false;
var backgroundMusic = document.getElementById("backgroundMusic");
var intervalId;

function toggleImageBorderAndMusic() {
    var musicImage = document.getElementById("music");
    if (musicImage.src.endsWith("muted.png")) {
        musicImage.src = "img/music.png";
        playBackgroundMusic();
        musicImage.classList.add("scale-animation");
        isMusicPlaying = true;
        intervalId = setInterval(changeBorderColor, 500);
    } else {
        musicImage.src = "img/muted.png";
        pauseBackgroundMusic();
        musicImage.classList.remove("scale-animation");
        isMusicPlaying = false;
        clearInterval(intervalId);
        musicImage.style.border = "3px solid red";
    }
}

function changeBorderColor() {
    var musicImage = document.getElementById("music");
    musicImage.style.border = "3px solid " + generateRandomColor();
}

function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');

    var hexColor = '#' + redHex + greenHex + blueHex;

    return hexColor;
}

function playBackgroundMusic() {
    backgroundMusic.play();
    isMusicPlaying = true;
    backgroundMusic.volume = 1;
}

function pauseBackgroundMusic() {
    backgroundMusic.pause();
    isMusicPlaying = false;
}

document.getElementById("music").addEventListener("click", function () {
    if (!isMusicPlaying) {
        pauseBackgroundMusic();
    } else {
        playBackgroundMusic();
    }
});
