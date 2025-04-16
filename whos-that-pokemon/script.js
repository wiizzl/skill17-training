const DEBUG = true;

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fetchRandomPokemon = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (DEBUG) {
    console.log("Query URL:", url);
    console.log("Name:", data.name);
  }

  return data;
};

const createPokemonImage = (src) => {
  const img = document.createElement("img");

  img.src = src;
  img.classList.add("pokemon-image");
  img.width = "300";
  img.height = "300";

  return img;
};

const handleGuess = (data, pokeImg, modal) => async (event) => {
  event.preventDefault();

  const guess = document.querySelector(".guess-input");
  const guessResult = guess.value.trim().toUpperCase();

  if (guessResult === data.name.toUpperCase()) {
    // Afficher l'image sans filtre
    modal.classList.add("hidden");
    pokeImg.style.filter = "none";

    // Synthèse vocale du nom du Pokémon
    if ("speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(data.name);
      utter.lang = "en-US";
      window.speechSynthesis.speak(utter);

      await new Promise((resolve) => {
        utter.onend = resolve;
      });
    }

    // Jouer le cri du pokémon
    if (data.cries && data.cries.latest) {
      const cryAudio = new Audio(data.cries.latest);
      cryAudio.volume = 0.5;
      await cryAudio.play();
    }

    // Le onend du cri ne marchait pas donc simple délai
    await sleep(1800);

    // Relancer une partie
    pokeImg.remove();
    startGame();
  } else {
    pokeImg.classList.add("shakeError");
    await sleep(350);
    pokeImg.classList.remove("shakeError");
  }
};

const startGame = async () => {
  const data = await fetchRandomPokemon("https://pokeapi.co/api/v2/pokemon/" + getRandomInt(1, 500));

  const audioElem = document.querySelector("#ask-audio");
  await audioElem.play();

  const container = document.querySelector(".pokemon-container");
  const modal = document.querySelector("#modal-1");
  const pokeImg = createPokemonImage(data.sprites.other["official-artwork"].front_default);
  container.appendChild(pokeImg);

  window.submitGuess = handleGuess(data, pokeImg, modal);

  await sleep(3000);
  modal.classList.remove("hidden");
};

// Attendre une intéraction utilisateur pour lancer la partie
const startHandler = async () => {
  document.removeEventListener("click", startHandler);
  document.removeEventListener("keydown", startHandler);
  await startGame();
};

document.addEventListener("click", startHandler);
document.addEventListener("keydown", startHandler);
