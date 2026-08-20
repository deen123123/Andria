const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");
const closeLetter = document.getElementById("closeLetter");
const musicButton = document.getElementById("musicButton");
const youtubePlayer = document.getElementById("youtubePlayer");

let opened = false;
let musicStarted = false;
let musicPlaying = false;

// Official YouTube music video ID for "Hey There Delilah".
const videoId = "EbJtYqBYCV8";

function startMusic() {
  if (!musicStarted) {
    youtubePlayer.innerHTML =
      `<iframe
        width="1"
        height="1"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}"
        title="Hey There Delilah"
        allow="autoplay; encrypted-media"
        frameborder="0">
      </iframe>`;
    musicStarted = true;
    musicPlaying = true;
    musicButton.innerHTML = "♫ <span>Music playing</span>";
  }
}

function stopMusic() {
  youtubePlayer.innerHTML = "";
  musicPlaying = false;
  musicButton.innerHTML = "♫ <span>Play music</span>";
}

function openLetter() {
  if (opened) return;
  opened = true;
  envelope.classList.add("opening");

  // Starting audio here is tied to the user's click, which works better
  // with browser autoplay restrictions.
  startMusic();

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

musicButton.addEventListener("click", () => {
  if (musicPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
});

// Create falling cherry blossom petals.
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
