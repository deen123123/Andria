const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");
const closeLetter = document.getElementById("closeLetter");
const musicButton = document.getElementById("musicButton");
const bgMusic = document.getElementById("bgMusic");

let opened = false;
let musicPlaying = false;

function playMusic() {
  bgMusic.play().then(() => {
    musicPlaying = true;
    musicButton.innerHTML = "♫ <span>Music playing</span>";
  }).catch((err) => {
    console.warn("Audio autoplay blocked or failed:", err);
  });
}

function pauseMusic() {
  bgMusic.pause();
  musicPlaying = false;
  musicButton.innerHTML = "♫ <span>Play music</span>";
}

function toggleMusic() {
  if (musicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function openLetter() {
  if (opened) return;
  opened = true;
  envelope.classList.add("opening");

  // Play music on click
  playMusic();

  setTimeout(() => {
    envelopeScreen.classList.remove("active");
    letterScreen.classList.add("active");
  }, 850);
}

envelope.addEventListener("click", openLetter);

closeLetter.addEventListener("click", () => {
  letterScreen.classList.remove("active");
  envelopeScreen.classList.add("active");
  envelope.classList.remove("opening");
  opened = false;
});

musicButton.addEventListener("click", toggleMusic);

// Create falling cherry blossom petals
const petals = document.querySelector(".petals");
for (let i = 0; i < 34; i++) {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${7 + Math.random() * 9}s`;
  petal.style.animationDelay = `${Math.random() * -15}s`;
  petal.style.transform = `scale(${0.55 + Math.random() * 0.9})`;
  petals.appendChild(petal);
}
