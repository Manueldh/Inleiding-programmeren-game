const battleCharacter = document.getElementById("battle-character")
const battleOgre = document.getElementById("battle-ogre")
const moveButtonKick = document.getElementById("move-kick")
const moveButtonSlash = document.getElementById("move-slash")
const moveButtonPunch = document.getElementById("move-punch")
const ogreHealth = document.getElementById("ogre-health")
const restartButton = document.getElementById("restart-button")
const gameWonPopup = document.getElementById("game-won")
const moveFinishedTime = 2300

let aanvalStatus = false
let ogreHP = 500

function ogreToIdleState() {
    setTimeout(function () {
        battleOgre.style.backgroundImage = "url(./images/ogre-hurt.gif)"
    }, 1200)
}

// Parameters gedaan met behulp van ChatGPT, prompt: Kun je nog een parameter erbijschrijven die ervoor zorgt dat ik kan refereren naar een afbeelding in de file structure
function executeMove(animationUrl, damage) {
    if (aanvalStatus == false) {
        aanvalStatus = true
        battleCharacter.className = 'movementAnimation'
        battleCharacter.style.backgroundImage = "url(./images/running.gif)"

        setTimeout(function () {
            battleCharacter.style.backgroundImage = "url(" + animationUrl + ")"
        }, 1000)

        ogreToIdleState()
        ogreHP = ogreHP - damage

        setTimeout(aanvalKlaar, moveFinishedTime)
        updateOgreHealth()
    }
}
// ChatGPT over

function aanvalKlaar() {
    battleCharacter.style.transform = "translateX(0px)"
    battleCharacter.style.backgroundImage = "url(./images/idle.gif)"
    battleCharacter.classList.remove('movementAnimation')
    battleOgre.style.backgroundImage = "url(./images/ogre_idle.gif"
    aanvalStatus = false
}

function updateOgreHealth() {
    setTimeout(function () {
        ogreHealth.innerText = "Ogre Healthpoints: " + ogreHP
    }, moveFinishedTime)
    if (ogreHP <= 0) {
        setTimeout(ogreDeath, 2400)
    }
}

function ogreDeath() {
    battleOgre.style.backgroundImage = "url(./images/ogre_death.gif)"
    function ogreDeathFinal() {
        battleOgre.style.backgroundImage = "url(./images/ogre_death_final.png)"
    }
    setTimeout(ogreDeathFinal, 350)
    ogreHealth.innerText = "Ogre Healthpoints: 0"
    setTimeout(openGameWonPopup, 4000)
}

function restartGame() {
    window.location.href = "./index.html"
}

function openGameWonPopup() {
    gameWonPopup.style.display = "flex"
}

moveButtonKick.addEventListener("click", function () {
    executeMove("./images/character_kicking.gif", 100)
})

moveButtonSlash.addEventListener("click", function () {
    executeMove("./images/character_slash.gif", 125)
})

moveButtonPunch.addEventListener("click", function () {
    executeMove("./images/character_punch.gif", 110)
})

restartButton.addEventListener("click", restartGame)