// Этот код загружает API YouTube, если он еще не был загружен.
function loadYouTubeAPI() {
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
    }
}

// Функция для отслеживания состояния плеера
let players = [];
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        // Если видео начинает воспроизводиться, приостанавливаем все другие плееры
        players.forEach(function(player) {
            if (player !== event.target) {
                player.pauseVideo();
            }
        });
    }
}

// Создаем плеер для каждого iframe
function createPlayer(iframe) {
    return new YT.Player(iframe.id, {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Когда API YouTube загружен, создаем плееры
function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const player = createPlayer(iframe);
        players.push(player);  // Сохраняем плееры, чтобы контролировать их
    });
}

// Загружаем YouTube API
loadYouTubeAPI();

const logo = document.querySelector('.logo svg');
const audio = document.querySelector('audio');

// Обработчик клика по SVG (логотипу)
logo.addEventListener('click', () => {
    // Если аудио на паузе, воспроизводим его
    if (audio.paused) {
        audio.play();
    } else {
        // Если аудио воспроизводится, ставим его на паузу
        audio.pause();
    }

document.querySelector('.something').addEventListener('click', function () {
window.location.href = '../keygen/keygen.html';
});
});

