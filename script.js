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

// INITIALIZE ATLAS
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

// PROGRESS SYSTEM
function updatePassport() {
    const count = stamps.size;
    document.getElementById('stamp-count').innerText = count;
    document.getElementById('progress-fill').style.width = `${(count / 30) * 100}%`;
    
    // Achievement Ranks
    const rankLabel = document.getElementById('explorer-rank');
    if (count > 20) rankLabel.innerText = "GRAND AMBASSADOR";
    else if (count > 10) rankLabel.innerText = "WORLD VOYAGER";
    else if (count > 0) rankLabel.innerText = "SWEET EXPLORER";
}

// TRANSIT & REWARD
function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    overlay.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.add('hidden');
        showDossier(item);
    }, 2500);
}

function showDossier(item) {
    document.getElementById('terminal').classList.add('hidden');
    const page = document.getElementById('recipe-page');
    page.classList.remove('hidden');
    
    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast" style="font-size: 4rem;">${item.dessert}</h1>
        <div class="dossier-grid">
            <img src="${item.pic}" class="dossier-img">
            <div class="dossier-text">
                <h3>VITAL STATISTICS</h3>
                <p>ORIGIN: ${item.country}</p>
                <p>DIFFICULTY: ${item.difficulty}</p>
                <button onclick="claimStamp('${item.country}')" class="gold-btn">STAMP PASSPORT</button>
            </div>
        </div>
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
}

// ROULETTE FEATURE
document.getElementById('roulette-btn').onclick = () => {
    const random = atlasData[Math.floor(Math.random() * atlasData.length)];
    startTransit(random);
};

initAtlas();
