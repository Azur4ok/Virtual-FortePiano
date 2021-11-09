const piano = document.querySelector(".container");

const deleteAudio = (audio) => {
    setTimeout(function () {
        audio.remove();
    }, 1500);
};

document.addEventListener("keydown", (e) => {
    if(e.code === "KeyA") {
        const audio = document.createElement("audio");
        audio.src = "../audio/A.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyS") {
        const audio = document.createElement("audio");
        audio.src = "../audio/S.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyW") {
        const audio = document.createElement("audio");
        audio.src = "../audio/W.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyE") {
        const audio = document.createElement("audio");
        audio.src = "../audio/E.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyT") {
        const audio = document.createElement("audio");
        audio.src = "../audio/T.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyY") {
        const audio = document.createElement("audio");
        audio.src = "../audio/Y.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyU") {
        const audio = document.createElement("audio");
        audio.src = "../audio/U.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyD") {
        const audio = document.createElement("audio");
        audio.src = "../audio/D.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyF") {
        const audio = document.createElement("audio");
        audio.src = "../audio/F.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyG") {
        const audio = document.createElement("audio");
        audio.src = "../audio/G.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyH") {
        const audio = document.createElement("audio");
        audio.src = "../audio/H.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    } else if(e.code === "KeyJ") {
        const audio = document.createElement("audio");
        audio.src = "../audio/J.mp3";
        piano.appendChild(audio);
        audio.play();
        deleteAudio(audio);
    }   else {
        console.log('waring');
    }
});