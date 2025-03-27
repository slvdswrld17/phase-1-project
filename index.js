<<<<<<< HEAD
let base_url = "http://localhost:3000/products"
document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar");
    const detailedInfo = document.getElementById("detailed-info");

fetch()
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character => {
            const span = document.createElement("span");
            span.textContent = character.name;
            span.style.marginRight = "18px";
            span.style.cursor = "pointer";
            
            span.addEventListener("click", () => displayCharacterDetails(character));
            characterBar.appendChild(span);
        });
    })
    .catch(error => console.error("Error fetching characters:", error));

function displayCharacterDetails(character) {
    detailedInfo.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}" style="width:200px; height:auto; border-radius:10px;">
        <p>Votes: <span id="vote-count">${character.votes}</span></p>
        <button id="vote-button">Vote</button>
    `;
    
    document.getElementById("vote-button").addEventListener("click", () => {
        const voteCount = document.getElementById("vote-count");
        voteCount.textContent = parseInt(voteCount.textContent) + 1;
    });
}
});

=======
// Select all images inside the gallery
document.querySelectorAll("#gallery img").forEach(img => {
    img.addEventListener("click", function() {
        alert(`You clicked on ${this.alt || "arron.jpg"}`);
        // Optionally, redirect to a related page
        // window.location.href = "https://example.com/player-profile";
    });
});
>>>>>>> 045ea92 (phase-1-project)
