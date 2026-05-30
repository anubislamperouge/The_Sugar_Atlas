const atlasData = [
    { country: "FRANCE", dessert: "Macarons", pic: "images/france.jpg", recipe: "Sift almond flour and powdered sugar. Fold into stiff egg whites. Pipe circles and bake at 150°C. Fill with chocolate ganache." },
    { country: "JAPAN", dessert: "Mochi", pic: "images/japan.jpg", recipe: "Steam glutinous rice flour with water. Dust with starch and wrap around sweet bean paste or fresh strawberries." },
    { country: "ITALY", dessert: "Tiramisu", pic: "images/italy.jpg", recipe: "Dip ladyfingers in espresso. Layer with a mix of mascarpone, eggs, and sugar. Dust with cocoa and chill." },
    { country: "MEXICO", dessert: "Churros", pic: "images/mexico.jpg", recipe: "Pipe choux pastry into hot oil. Fry until golden brown and immediately roll in cinnamon sugar. Serve with chocolate." },
    { country: "TURKEY", dessert: "Baklava", pic: "images/turkey.jpg", recipe: "Layer phyllo sheets with butter and pistachios. Bake until crisp and pour cold honey syrup over the hot pastry." }
    // Copy/paste these to reach 30 countries!
];

const grid = document.getElementById('dest-grid');
let stamps = new Set();

// 1. Initialize Grid
atlasData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `<h3 class="font-mileast">${item.country}</h3><p>BOARDING NOW</p>`;
    card.onclick = () => startTransit(item);
    grid.appendChild(card);
});

// 2. Click Transit (Standard Card)
function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    overlay.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.add('hidden');
        showRecipe(item);
    }, 2000);
}

// 3. Roulette (Scanning Screen)
document.getElementById('roulette-btn').onclick = () => {
    const loader = document.getElementById('roulette-loader');
    loader.classList.remove('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        const random = atlasData[Math.floor(Math.random() * atlasData.length)];
        startTransit(random); // Then do the "Departing" screen
    }, 2000);
};

// 4. Centered Recipe Page
function showRecipe(item) {
    document.getElementById('terminal').classList.add('hidden');
    const page = document.getElementById('recipe-page');
    page.classList.remove('hidden');

    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast" style="font-size: 3.5rem;">${item.dessert}</h1>
        <p style="letter-spacing: 5px; color: #d4af37;">OFFICIAL TRANSIT: ${item.country}</p>
        <img src="${item.pic}" class="big-dessert-img">
        <div style="max-width: 750px; line-height: 2; font-size: 1.1rem;">
            <h2 class="font-mileast">The Method</h2>
            <p>${item.recipe}</p>
        </div>
        <button onclick="collectStamp('${item.country}')" class="stamp-btn">COLLECT PASSPORT STAMP</button>
    `;
}

function collectStamp(country) {
    stamps.add(country);
    document.getElementById('stamp-count').innerText = stamps.size;
    document.getElementById('progress-fill').style.width = (stamps.size / 30 * 100) + "%";
    
    // Rank update
    const rank = document.getElementById('explorer-rank');
    if (stamps.size > 20) rank.innerText = "MASTER AMBASSADOR";
    else if (stamps.size > 10) rank.innerText = "WORLD VOYAGER";
    else if (stamps.size > 0) rank.innerText = "SWEET EXPLORER";
    
    returnToTerminal();
}

function returnToTerminal() {
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('terminal').classList.remove('hidden');
    window.scrollTo(0,0);
}
