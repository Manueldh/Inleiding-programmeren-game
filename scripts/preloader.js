let audio;

window.onload = function laadFunctie() {
    setTimeout(preLoader, 4000) // moet naar 4000
    play()
    muziekKnop()
};

function preLoader() {
    document.querySelector(".preloader").style.display = "none"
}

function play() {
    audio = new Audio('./audio/thunderstruck-acdc.mp3')
    audio.play();
    // audio.addEventListener('timeupdate', thunderEffect)
}

function muziekKnop() {
    const toggleMusicButton = document.getElementById('toggle-music')
    toggleMusicButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play()
            toggleMusicButton.textContent = "Pause Battle Music"
            console.log(audio.currentTime)
        } else {
            audio.pause()
            toggleMusicButton.textContent = "Play Battle Music"
        }
    });
}