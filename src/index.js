const piano = document.querySelector(".container");

const deleteAudio = (audio) => {
    setTimeout(function () {
        audio.remove();
    }, 1500);
};

const keysObject = {
    KeyA : "../audio/A.mp3",
    KeyS : "../audio/S.mp3",
    KeyW : "../audio/W.mp3",
    KeyD : "../audio/D.mp3",
    KeyE : "../audio/E.mp3",
    KeyF : "../audio/F.mp3",
    KeyG : "../audio/G.mp3",
    KeyY : "../audio/Y.mp3",
    KeyH : "../audio/H.mp3",
    KeyJ : "../audio/J.mp3",
    KeyU : "../audio/U.mp3",
}

const playSound = (code) => {
    for(let [key, value] of Object.entries(keysObject)) {
        console.log(code.code, key);
        if(code.code === key) {
            const audio = document.createElement("audio");
            piano.appendChild(audio);
            audio.src = keysObject[key];
            audio.load();
            audio.play();
            deleteAudio(audio);
        }
    }
}

window.addEventListener("keydown", ({code}) => {
    playSound({code});
});