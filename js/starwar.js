const API_URL = "https://swapi.dev/api/people/";

// Define images for characters
const characterImages = {
  "Luke Skywalker": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  "C-3PO": "https://starwars-visualguide.com/assets/img/characters/2.jpg",
  "R2-D2": "https://starwars-visualguide.com/assets/img/characters/3.jpg",
  "Darth Vader": "https://starwars-visualguide.com/assets/img/characters/4.jpg",
  "Leia Organa": "https://starwars-visualguide.com/assets/img/characters/5.jpg",
  "Owen Lars": "https://starwars-visualguide.com/assets/img/characters/6.jpg",
  "Beru Whitesun Lars": "https://starwars-visualguide.com/assets/img/characters/7.jpg",
  "R5-D4": "https://starwars-visualguide.com/assets/img/characters/8.jpg",
  "Biggs Darklighter": "https://starwars-visualguide.com/assets/img/characters/9.jpg",
  "Obi-Wan Kenobi": "https://starwars-visualguide.com/assets/img/characters/10.jpg"
};

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderCharacters(data.results));

function renderCharacters(characters) {
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const characterImage = characterImages[character.name] || "https://placehold.it/200x300"; // Use placeholder if no image

    card.innerHTML = `
      <img src="${characterImage}" alt="${character.name}">
      <h3>${character.name}</h3>
    `;

    card.addEventListener("click", () => openModal(character, characterImage)); // Pass image as parameter
    document.getElementById("character-list").appendChild(card);
  });
}

// Open modal and display character details
function openModal(character, characterImage) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");

  modalImage.src = characterImage;  // Set image in modal
  modalDescription.innerHTML = `
    <p><strong>Height:</strong> ${character.height} cm</p>
    <p><strong>Mass:</strong> ${character.mass} kg</p>
    <p><strong>Hair Color:</strong> ${character.hair_color}</p>
    <p><strong>Skin Color:</strong> ${character.skin_color}</p>
    <p><strong>Eye Color:</strong> ${character.eye_color}</p>
    <p><strong>Birth Year:</strong> ${character.birth_year}</p>
    <p><strong>Gender:</strong> ${character.gender}</p>
  `;

  modal.classList.remove("hidden");
}

// Close modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
