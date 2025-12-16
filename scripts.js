function loadYouTubeAPI() {
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
    }
}

let players = [];
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        players.forEach(function(player) {
            if (player !== event.target) {
                player.pauseVideo();
            }
        });
    }
}

function createPlayer(iframe) {
    return new YT.Player(iframe.id, {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const player = createPlayer(iframe);
        players.push(player);  
    });
}

loadYouTubeAPI();

const logo = document.querySelector('.logo svg');
const audio = document.querySelector('audio');

logo.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

document.querySelector('.something').addEventListener('click', function () {
window.location.href = '../keygen/keygen.html';
});
});

