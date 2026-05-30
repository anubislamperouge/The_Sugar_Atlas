// Data for 30 Desserts
const atlasData = [
    { country: "FRANCE", dessert: "Macarons", pic: "images/france.jpg", recipe: "Delicate almond meringue shells sandwiched with ganache." },
    { country: "JAPAN", dessert: "Mochi", pic: "images/japan.jpg", recipe: "Sweet pounded rice dough filled with red bean or cream." },
    { country: "ITALY", dessert: "Tiramisu", pic: "images/italy.jpg", recipe: "Coffee-soaked ladyfingers layered with mascarpone cream." },
    { country: "TURKEY", dessert: "Baklava", pic: "images/turkey.jpg", recipe: "Layers of phyllo pastry filled with chopped nuts and syrup." },
    { country: "MEXICO", dessert: "Churros", pic: "images/mexico.jpg", recipe: "Fried dough pastry rolled in cinnamon sugar." },
    // Repeat/Add until 30...
];

const grid = document.getElementById('dest-grid');
let stamps = new Set();

// Populate the Terminal
atlasData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `<h3 class="font-mileast">${item.country}</h3><p>READY FOR BOARDING</p>`;
    card.onclick = () => startTransit(item);
    grid.appendChild(card);
});

function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    overlay.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.add('hidden');
        showRecipe(item);
    }, 2000);
}

function showRecipe(item) {
    document.getElementById('terminal').classList.add('hidden');
    const page = document.getElementById('recipe-page');
    page.classList.remove('hidden');

    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast">${item.dessert}</h1>
        <p>Origin: ${item.country}</p>
        <img src="${item.pic}" alt="${item.dessert}" class="dessert-pic">
        <div class="recipe-box">
            <h3>THE METHOD</h3>
            <p>${item.recipe}</p>
        </div>
        <button class="stamp-btn" onclick="collectStamp('${item.country}')" style="margin-top:20px; padding:10px 30px; background:transparent; color:var(--gold); border:1px solid var(--gold); cursor:pointer;">
            COLLECT PASSPORT STAMP
        </button>
    `;
}

function collectStamp(country) {
    stamps.add(country);
    document.getElementById('stamp-count').innerText = stamps.size;
    alert(`Entry Stamp: ${country} secured.`);
    returnToTerminal();
}

function returnToTerminal() {
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('terminal').classList.remove('hidden');
    window.scrollTo(0,0);
}
