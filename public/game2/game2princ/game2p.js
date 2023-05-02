const btnsEl = document.querySelectorAll('.btn')

for(let i = 0; i < btnsEl.length; i++){
  let btnEl = btnsEl[i];

  btnEl.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
  });
}
