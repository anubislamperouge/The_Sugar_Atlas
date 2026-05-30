const atlasData = [
    { country: "FRANCE", dessert: "Macarons", pic: "images/france.jpg", recipe: "Almond meringue shells with ganache." },
    { country: "JAPAN", dessert: "Mochi", pic: "images/japan.jpg", recipe: "Sweet rice cake with red bean." },
    { country: "ITALY", dessert: "Tiramisu", pic: "images/italy.jpg", recipe: "Coffee-soaked ladyfingers." },
    { country: "TURKEY", dessert: "Baklava", pic: "images/turkey.jpg", recipe: "Layered phyllo with honey." },
    { country: "MEXICO", dessert: "Churros", pic: "images/mexico.jpg", recipe: "Fried dough with cinnamon." },
    // You can copy and paste these to reach 30 countries!
];

const grid = document.getElementById('dest-grid');
let stamps = new Set();

// 1. Create the grid
atlasData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `<h3 class="font-mileast">${item.country}</h3><p>BOARDING</p>`;
    card.onclick = () => startTransit(item);
    grid.appendChild(card);
});

// 2. The Flight Animation
function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    
    overlay.classList.remove('hidden'); // Show plane screen

    setTimeout(() => {
        overlay.classList.add('hidden'); // Hide plane screen
        showRecipe(item);
    }, 1500);
}

// 3. The Recipe Screen
function showRecipe(item) {
    document.getElementById('terminal').classList.add('hidden');
    const page = document.getElementById('recipe-page');
    page.classList.remove('hidden');

    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast">${item.dessert}</h1>
        <img src="${item.pic}" alt="${item.dessert}" class="dessert-pic">
        <p>${item.recipe}</p>
        <button onclick="collectStamp('${item.country}')" style="color:gold; border:1px solid gold; background:none; padding:10px; cursor:pointer;">CLAIM STAMP</button>
    `;
}

function collectStamp(country) {
    stamps.add(country);
    document.getElementById('stamp-count').innerText = stamps.size;
    returnToTerminal();
}

function returnToTerminal() {
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('terminal').classList.remove('hidden');
}
