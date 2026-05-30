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

function initAtlas() {
    grid.innerHTML = '';
    atlasData.forEach(item => {
        const isCollected = stamps.has(item.country);
        const card = document.createElement('div');
        card.className = `country-card ${isCollected ? 'stamped' : ''}`;
        card.innerHTML = `
            <img src="${item.pic}" class="card-bg-img">
            <div class="card-info">
                <span class="rank-tag">${item.difficulty} • ${item.time}</span>
                <h2 class="font-mileast">${item.country}</h2>
                <p>${item.dessert}</p>
                ${isCollected ? '<span class="stamp-badge">PASSPORT STAMPED</span>' : ''}
            </div>
        `;
        card.onclick = () => startTransit(item);
        grid.appendChild(card);
    });
}

function updatePassport() {
    const count = stamps.size;
    document.getElementById('stamp-count').innerText = count;
    document.getElementById('progress-fill').style.width = `${(count / 30) * 100}%`;
    
    const rankLabel = document.getElementById('explorer-rank');
    if (count > 20) rankLabel.innerText = "GRAND AMBASSADOR";
    else if (count > 10) rankLabel.innerText = "WORLD VOYAGER";
    else if (count > 0) rankLabel.innerText = "SWEET EXPLORER";
}

function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    overlay.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.add('hidden');
        showDossier(item);
    }, 2500);
}

// UPDATED DOSSIER: Centered image and button at bottom
function showDossier(item) {
    document.getElementById('terminal').classList.add('hidden');
    const page = document.getElementById('recipe-page');
    page.classList.remove('hidden');
    
    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast" style="font-size: 4rem; margin-top: 20px;">${item.dessert}</h1>
        <p style="letter-spacing: 4px; color: #d4af37;">VITAL STATISTICS: ${item.country}</p>
        
        <img src="${item.pic}" class="dossier-img-centered">
        
        <div style="max-width: 700px; margin: 0 auto 40px auto; line-height: 1.8;">
            <p>DIFFICULTY: ${item.difficulty} | PREP TIME: ${item.time}</p>
            <p>Explore the culinary secrets of ${item.country} with this authentic ${item.dessert} recipe.</p>
        </div>

        <button onclick="claimStamp('${item.country}')" class="gold-btn" style="padding: 20px 60px;">STAMP PASSPORT</button>
    `;
}

function claimStamp(country) {
    stamps.add(country);
    updatePassport();
    returnToTerminal();
}

function returnToTerminal() {
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('terminal').classList.remove('hidden');
    initAtlas();
    window.scrollTo(0,0);
}

// UPDATED ROULETTE: Shows Loading Page first
document.getElementById('roulette-btn').onclick = () => {
    const loader = document.getElementById('roulette-loader');
    loader.classList.remove('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        const random = atlasData[Math.floor(Math.random() * atlasData.length)];
        startTransit(random); // Moves to Departing screen after loading
    }, 2000);
};

initAtlas();
