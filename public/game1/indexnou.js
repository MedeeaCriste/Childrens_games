const kits = ["Cats", "Dogs", "Horses", "Chickens"];

const containerEl= document.querySelector(".container");


kits.forEach( (kit, index) => {
    const divEl = document.createElement("div");
    const btnEl=document.createElement("button");
    const btnTitle = document.createElement("p");
    containerEl.appendChild(divEl);
    divEl.appendChild(btnEl);
    divEl.appendChild(btnTitle)
    btnEl.classList.add("btn")
    btnEl.style.backgroundImage = "url(./poze/" + kit + ".jpg"
    btnTitle.innerText = kit;
    btnTitle.classList.add("btn-title");
    const audioEl = document.createElement("audio");
    audioEl.src = "./sounds/" + kit +".mp3"
    containerEl.appendChild(audioEl);
    btnEl.addEventListener(
        "click", (event) =>{
            audioEl.currentTime = 0;
            document.querySelectorAll('audio').forEach(el => el.pause());
            audioEl.play()
        })
 });
 
 
 