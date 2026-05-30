const atlasData = [
    { country: "France", dessert: "Macaron", time: "2h", difficulty: "Expert", pic: "images/france.jpg" },
    { country: "Japan", dessert: "Matcha Mochi", time: "1h", difficulty: "Medium", pic: "images/japan.jpg" },
    { country: "Italy", dessert: "Tiramisu", pic: "images/italy.jpg", time: "45m", difficulty: "Easy" },
    { country: "Turkey", dessert: "Baklava", pic: "images/turkey.jpg", time: "3h", difficulty: "Hard" },
    { country: "Mexico", dessert: "Churros", pic: "images/mexico.jpg", time: "30m", difficulty: "Easy" }
    // Add more to reach 30!
];

const grid = document.getElementById('dest-grid');
let stamps = new Set();

// 1. Load the Terminal Grid
atlasData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `<h3 class="font-mileast">${item.country}</h3><p>READY FOR BOARDING</p>`;
    card.onclick = () => startTransit(item);
    grid.appendChild(card);
});

// 2. Standard Transit (Clicking a card)
function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    overlay.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.add('hidden');
        showRecipe(item);
    }, 2500);
}

// 3. Roulette Loading (The special "Scanning" screen)
document.getElementById('roulette-btn').onclick = () => {
    const loader = document.getElementById('roulette-loader');
    loader.classList.remove('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        const randomItem = atlasData[Math.floor(Math.random() * atlasData.length)];
        startTransit(randomItem); // Then show the "Departing" screen
    }, 2000);
};

// 4. Centered Recipe Page
function showRecipe(item) {
    document.getElementById('terminal').classList.add('hidden');
    const page = document.getElementById('recipe-page');
    page.classList.remove('hidden');

    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast" style="font-size: 3rem;">${item.dessert}</h1>
        <p style="letter-spacing: 4px; color: #d4af37;">PROVENANCE: ${item.country}</p>
        <img src="${item.pic}" class="big-dessert-img">
        <div style="max-width: 700px; line-height: 1.8;">
            <h2 class="font-mileast">The Method</h2>
            <p>${item.recipe}</p>
        </div>
        <button onclick="collectStamp('${item.country}')" class="stamp-btn">STAMP PASSPORT</button>
    `;
}

function collectStamp(country) {
    stamps.add(country);
    document.getElementById('stamp-count').innerText = stamps.size;
    document.getElementById('progress-fill').style.width = (stamps.size / 30 * 100) + "%";
    returnToTerminal();
}

function returnToTerminal() {
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('terminal').classList.remove('hidden');
    window.scrollTo(0,0);
}
