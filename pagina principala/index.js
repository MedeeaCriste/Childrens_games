const bgImageEl = document.getElementById("bg-image");
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateImage();
      ticking = false;
    });
    ticking = true;
  }
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;

  if (window.innerWidth <= 720) {
    bgImageEl.style.backgroundSize = 200 + window.pageYOffset / 12 + "%";
  } else {
    bgImageEl.style.backgroundSize = 100 + window.pageYOffset / 12 + "%";
  }
}

