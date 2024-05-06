// // Chặn việc mở DevTools bằng phím tắt
// window.addEventListener('keydown', function (event) {
//   if (event.keyCode == 123) { // 123 là mã phím tắt cho DevTools trên nhiều trình duyệt
//     event.preventDefault();
//   }
// });
// // Chặn việc mở DevTools bằng phím tắt và tổ hợp phím
// window.addEventListener('keydown', function (event) {
//   // Kiểm tra xem người dùng có nhấn tổ hợp phím tắt DevTools không
//   if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || // Ctrl+Shift+I
//       (event.ctrlKey && event.shiftKey && event.keyCode == 74) || // Ctrl+Shift+J
//       (event.ctrlKey && event.keyCode == 85) || // Ctrl+U
//       (event.ctrlKey && event.shiftKey && event.keyCode == 67) || // Ctrl+Shift+C
//       (event.ctrlKey && event.keyCode == 83)) { // Ctrl+S
//     event.preventDefault();
//   }
// });

// // Chặn việc mở DevTools bằng chuột phải
// window.addEventListener('contextmenu', function (event) { 
//   event.preventDefault();
//   console.log('DevTools đã bị chặn.');
// });

document.addEventListener("copy", function(e) {
    e.preventDefault();
});

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
