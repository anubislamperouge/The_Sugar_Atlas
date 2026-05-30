// 1. Data for all 30 Desserts
const atlasData = [
    { country: "FRANCE", dessert: "Macarons", pic: "images/france.jpg", recipe: "Almond meringue cookies with ganache." },
    { country: "JAPAN", dessert: "Mochi", pic: "images/japan.jpg", recipe: "Sweet rice cake with red bean filling." },
    { country: "ITALY", dessert: "Tiramisu", pic: "images/italy.jpg", recipe: "Coffee-soaked cake with mascarpone." },
    { country: "TURKEY", dessert: "Baklava", pic: "images/turkey.jpg", recipe: "Honey and nut phyllo pastry." },
    { country: "MEXICO", dessert: "Churros", pic: "images/mexico.jpg", recipe: "Fried dough with cinnamon sugar." },
    { country: "USA", dessert: "Apple Pie", pic: "images/usa.jpg", recipe: "Classic spiced apple in flaky crust." },
    { country: "UK", dessert: "Sticky Toffee Pudding", pic: "images/uk.jpg", recipe: "Date cake with warm toffee sauce." },
    { country: "BRAZIL", dessert: "Brigadeiro", pic: "images/brazil.jpg", recipe: "Chocolate fudge truffles." },
    { country: "SPAIN", dessert: "Tarta de Santiago", pic: "images/spain.jpg", recipe: "Traditional almond cake." },
    { country: "PHILIPPINES", dessert: "Halo-Halo", pic: "images/philippines.jpg", recipe: "Shaved ice with sweet beans and ube." }
    // Add 20 more objects here following the same format!
];

const grid = document.getElementById('dest-grid');
let stamps = new Set();

// 2. Initialize the Terminal
atlasData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `<h3 class="font-mileast">${item.country}</h3><p>BOARDING</p>`;
    card.onclick = () => startTransit(item);
    grid.appendChild(card);
});

// 3. Transit Animation
function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    overlay.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.add('hidden');
        showRecipe(item);
    }, 1500);
}

// 4. Recipe Page
function showRecipe(item) {
    document.getElementById('terminal').classList.add('hidden');
    const page = document.getElementById('recipe-page');
    page.classList.remove('hidden');

    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast">${item.dessert}</h1>
        <img src="${item.pic}" alt="${item.dessert}" class="dessert-pic">
        <p>${item.recipe}</p>
        <button onclick="collectStamp('${item.country}')" class="back-btn" style="color:gold; border-color:gold;">CLAIM STAMP</button>
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
