// Data for 30 Desserts (Shortened for example, you can add all 30 here)
const travelData = [
    { country: "France", dessert: "Macarons", recipe: "1. Sift flour... 2. Bake... 3. Fill." },
    { country: "Italy", dessert: "Tiramisu", recipe: "1. Brew coffee... 2. Layer cream... 3. Chill." },
    { country: "Japan", dessert: "Mochi", recipe: "1. Steam rice... 2. Pound... 3. Stuff with bean paste." },
    { country: "Mexico", dessert: "Churros", recipe: "1. Fry dough... 2. Roll in sugar... 3. Dip in chocolate." },
    // ... Add more up to 30
];

const stampCountEl = document.getElementById('stamp-count');
let collectedStamps = new Set();

// 1. Generate the Airport Grid
const grid = document.getElementById('dest-grid');

travelData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `<h3>${item.country}</h3><p>Status: Unvisited</p>`;
    card.onclick = () => startTransit(item);
    grid.appendChild(card);
});

// 2. The Transit Animation System
function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    const targetText = document.getElementById('target-country');
    
    targetText.innerText = item.country;
    overlay.classList.remove('hidden');

    // Simulate flight time
    setTimeout(() => {
        overlay.classList.add('hidden');
        showRecipe(item);
    }, 2000);
}

// 3. Show Recipe and Log Stamp
function showRecipe(item) {
    document.getElementById('airport-screen').classList.add('hidden');
    const recipePage = document.getElementById('recipe-page');
    recipePage.classList.remove('hidden');

    document.getElementById('recipe-content').innerHTML = `
        <h1>${item.dessert} (${item.country})</h1>
        <div class="recipe-box">
            <h3>Secret Recipe</h3>
            <p>${item.recipe}</p>
        </div>
        <button class="stamp-btn" onclick="collectStamp('${item.country}')">Claim Passport Stamp</button>
    `;
}

function collectStamp(country) {
    collectedStamps.add(country);
    stampCountEl.innerText = collectedStamps.size;
    alert(`Stamp for ${country} added to your passport!`);
    returnToAirport();
}

function returnToAirport() {
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('airport-screen').classList.remove('hidden');
}
