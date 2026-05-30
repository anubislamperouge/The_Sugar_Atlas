const atlasData = [
    { country: "France", dessert: "Macaron", time: "2.5–3 hrs", difficulty: "Expert", pic: "images/france.jpg" },
    { country: "Italy", dessert: "Tiramisu", time: "1 hr", difficulty: "Medium", pic: "images/italy.jpg" },
    { country: "Japan", dessert: "Mochi", time: "1–1.5 hrs", difficulty: "Medium", pic: "images/japan.jpg" },
    { country: "Turkey", dessert: "Baklava", time: "3 hrs", difficulty: "Expert", pic: "images/turkey.jpg" },
    { country: "Mexico", dessert: "Churros", time: "45 mins", difficulty: "Easy", pic: "images/mexico.jpg" },
    { country: "Brazil", dessert: "Brigadeiro", time: "30 mins", difficulty: "Easy", pic: "images/brazil.jpg" },
    { country: "United States", dessert: "Apple Pie", time: "2 hrs", difficulty: "Medium", pic: "images/usa.jpg" },
    { country: "Philippines", dessert: "Leche Flan", time: "1 hr", difficulty: "Easy", pic: "images/philippines.jpg" },
    { country: "Spain", dessert: "Basque Cheesecake", time: "1.5 hrs", difficulty: "Medium", pic: "images/spain.jpg" },
    { country: "United Kingdom", dessert: "Sticky Toffee Pudding", time: "1.5 hrs", difficulty: "Medium", pic: "images/uk.jpg" },
    { country: "Germany", dessert: "Black Forest Cake", time: "3 hrs", difficulty: "Expert", pic: "images/germany.jpg" },
    { country: "Austria", dessert: "Sachertorte", time: "3 hrs", difficulty: "Expert", pic: "images/austria.jpg" },
    { country: "Belgium", dessert: "Belgian Waffle", time: "40 mins", difficulty: "Easy", pic: "images/belgium.jpg" },
    { country: "Greece", dessert: "Galaktoboureko", time: "2.5 hrs", difficulty: "Expert", pic: "images/greece.jpg" },
    { country: "Portugal", dessert: "Pastel de Nata", time: "2 hrs", difficulty: "Medium", pic: "images/portugal.jpg" },
    { country: "India", dessert: "Gulab Jamun", time: "1.5 hrs", difficulty: "Medium", pic: "images/india.jpg" },
    { country: "China", dessert: "Tangyuan", time: "1 hr", difficulty: "Medium", pic: "images/china.jpg" },
    { country: "South Korea", dessert: "Hotteok", time: "45 mins", difficulty: "Easy", pic: "images/korea.jpg" },
    { country: "Thailand", dessert: "Mango Sticky Rice", time: "1 hr", difficulty: "Easy", pic: "images/thailand.jpg" },
    { country: "Vietnam", dessert: "Che Ba Mau", time: "45 mins", difficulty: "Easy", pic: "images/vietnam.jpg" },
    { country: "Indonesia", dessert: "Klepon", time: "1 hr", difficulty: "Medium", pic: "images/indonesia.jpg" },
    { country: "Malaysia", dessert: "Kuih Seri Muka", time: "2.5 hrs", difficulty: "Expert", pic: "images/malaysia.jpg" },
    { country: "Singapore", dessert: "Ondeh-Ondeh", time: "1 hr", difficulty: "Medium", pic: "images/singapore.jpg" },
    { country: "Australia", dessert: "Pavlova", time: "2 hrs", difficulty: "Medium", pic: "images/australia.jpg" },
    { country: "New Zealand", dessert: "Lamington", time: "1.5 hrs", difficulty: "Medium", pic: "images/nz.jpg" },
    { country: "Canada", dessert: "Butter Tart", time: "1 hr", difficulty: "Easy", pic: "images/canada.jpg" },
    { country: "Argentina", dessert: "Alfajor", time: "1.5 hrs", difficulty: "Medium", pic: "images/argentina.jpg" },
    { country: "Peru", dessert: "Suspiro Limeño", time: "1 hr", difficulty: "Medium", pic: "images/peru.jpg" },
    { country: "Morocco", dessert: "Chebakia", time: "2.5 hrs", difficulty: "Expert", pic: "images/morocco.jpg" },
    { country: "South Africa", dessert: "Malva Pudding", time: "1 hr", difficulty: "Easy", pic: "images/sa.jpg" }
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

// ROULETTE LOGIC
document.getElementById('roulette-btn').onclick = () => {
    const loader = document.getElementById('roulette-loader');
    loader.classList.remove('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        const random = atlasData[Math.floor(Math.random() * atlasData.length)];
        startTransit(random);
    }, 2000);
}; // <--- Fixed the missing bracket here!

// HERO EFFECTS
function createHeroEffects() {
    const hero = document.querySelector('.hero-centered');
    if(!hero) return; // Safety check
    for (let i = 0; i < 8; i++) {
        let node = document.createElement('div');
        node.className = 'node';
        node.style.top = Math.random() * 80 + 10 + "%";
        node.style.left = Math.random() * 80 + 10 + "%";
        node.style.animationDelay = Math.random() * 3 + "s";
        hero.appendChild(node);
    }
}

// START THE APP
createHeroEffects();
initAtlas();
