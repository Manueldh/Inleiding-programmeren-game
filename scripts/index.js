const character = document.getElementById("character")
const ogre = document.getElementById("ogre")
const snelheid = 100

function idleAan() {
    character.style.backgroundImage = "url(../images/idle.gif)"
}

function outOfScreen() {
    if (parseInt(character.style.left) < 0) {
        character.style.left = parseInt(character.style.left) + 100 + 'px'
    } else if (parseInt(character.style.left) > innerWidth - 100) {
        character.style.left = parseInt(character.style.left) - 200 + 'px'
    } else if (parseInt(character.style.top) < 0) {
        character.style.top = parseInt(character.style.top) + 100 + 'px'
    } else if (parseInt(character.style.top) > innerHeight - 100) {
        character.style.top = parseInt(character.style.top) - 200 + 'px'
    }
}

// https://stackoverflow.com/questions/3846935/how-can-i-change-the-current-url 
function onCollide() {
    if (parseInt(character.style.left) == parseInt(ogre.style.left) && parseInt(character.style.top) == parseInt(ogre.style.top)) {
        window.location.href = "./battlescreen.html";
    }
}

function randomOgrePosition() {
    let randomWidthNumber = Math.floor(Math.random() * Math.floor(innerWidth / 100)) * 100
    let randomHeightNumber = Math.floor(Math.random() * Math.floor(innerHeight / 100)) * 100
    ogre.style.left = randomWidthNumber + 'px'
    ogre.style.top = randomHeightNumber + 'px'
}
setInterval(randomOgrePosition, 2500)

// https://www.youtube.com/watch?v=NiG2TnZiFL0&ab_channel=KodeBase
window.addEventListener('load', function laadSpelPosities() {
    character.style.position = 'absolute'
    character.style.left = 0
    character.style.top = 0
    ogre.style.left = 500 + 'px'
    ogre.style.top = 300 + 'px'
})

window.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            character.style.left = parseInt(character.style.left) - snelheid + 'px'
            character.style.transform = 'scaleX(-1)'
            character.style.backgroundImage = "url(../images/running.gif)"
            outOfScreen()
            onCollide()
            setTimeout(idleAan, 1800)
            break;
        case 'ArrowRight':
            character.style.left = parseInt(character.style.left) + snelheid + 'px'
            character.style.transform = 'scaleX(1)'
            character.style.backgroundImage = "url(../images/running.gif)"
            outOfScreen()
            onCollide()
            setTimeout(idleAan, 1800)
            break;
        case 'ArrowUp':
            character.style.top = parseInt(character.style.top) - snelheid + 'px'
            character.style.backgroundImage = "url(../images/running.gif)"
            outOfScreen()
            onCollide()
            setTimeout(idleAan, 1800)
            break;
        case 'ArrowDown':
            character.style.top = parseInt(character.style.top) + snelheid + 'px'
            character.style.backgroundImage = "url(../images/running.gif)"
            outOfScreen()
            onCollide()
            setTimeout(idleAan, 1800)
            break;
    }
})
// Einde Youtube tutorial