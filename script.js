const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const music = document.getElementById("music");

let musicStarted = false;
const videoId = "EbJtYqBYCV8"; 
function openBirthdayLetter() {
  envelopeScreen.classList.remove("active");
  letterScreen.classList.add("active");

  // Music begins after the user's click. Browsers usually block autoplay
  // until the visitor interacts with the page.
function startMusic() {
  youtubePlayer.innerHTML = `
    <iframe
      width="200"
      height="200"
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&loop=1&playlist=${videoId}"
      title="Audio Track"
      allow="autoplay; encrypted-media"
      frameborder="0">
    </iframe>`;
  musicPlaying = true;
  musicButton.innerHTML = "♫ <span>Music playing</span>";
}

function stopMusic() {
  youtubePlayer.innerHTML = "";
  musicPlaying = false;
  musicButton.innerHTML = "♫ <span>Play music</span>";
}

openLetter.addEventListener("click", openBirthdayLetter);

closeLetter.addEventListener("click", () => {
  letterScreen.classList.remove("active");
  envelopeScreen.classList.add("active");
});

const petals = document.getElementById("petals");

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  petal.style.animationDuration = (6 + Math.random() * 7) + "s";
  petal.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * .8})`;
  petals.appendChild(petal);
  petal.addEventListener("animationend", () => petal.remove());
}

setInterval(createPetal, 420);
for (let i = 0; i < 18; i++) setTimeout(createPetal, i * 110);

