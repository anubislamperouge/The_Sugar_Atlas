const atlasData = [
    { country: "FRANCE", dessert: "Macarons", pic: "images/france.jpg", recipe: "Sift almond flour and powdered sugar. Fold into stiff egg whites. Pipe circles and let dry. Bake at 150°C for 15 mins." },
    { country: "JAPAN", dessert: "Mochi", pic: "images/japan.jpg", recipe: "Mix glutinous rice flour with water and sugar. Steam until translucent. Dust with cornstarch and wrap around sweet bean paste." },
    { country: "ITALY", dessert: "Tiramisu", pic: "images/italy.jpg", recipe: "Whisk mascarpone and sugar. Dip ladyfingers in strong espresso. Layer biscuits with cream and dust with cocoa powder." },
    { country: "TURKEY", dessert: "Baklava", pic: "images/turkey.jpg", recipe: "Layer phyllo sheets with melted butter. Spread crushed pistachios in the middle. Bake until gold and pour cold honey syrup over." },
    { country: "MEXICO", dessert: "Churros", pic: "images/mexico.jpg", recipe: "Boil water, butter, and sugar. Mix in flour. Pipe dough into hot oil. Fry until golden and roll in cinnamon sugar." },
    { country: "BRAZIL", dessert: "Brigadeiro", pic: "images/brazil.jpg", recipe: "Cook condensed milk, cocoa powder, and butter until thick. Cool, roll into balls, and cover with chocolate sprinkles." },
    { country: "USA", dessert: "Apple Pie", pic: "images/usa.jpg", recipe: "Toss sliced apples with cinnamon and sugar. Place in a flaky crust. Top with a lattice and bake until bubbly." },
    { country: "PHILIPPINES", dessert: "Halo-Halo", pic: "images/philippines.jpg", recipe: "Layer sweet beans, jelly, and fruits in a glass. Add shaved ice and evaporated milk. Top with ube halaya and leche flan." },
    { country: "SPAIN", dessert: "Tarta de Santiago", pic: "images/spain.jpg", recipe: "Beat eggs and sugar. Fold in ground almonds and lemon zest. Bake and dust with powdered sugar using a cross stencil." },
    { country: "UK", dessert: "Sticky Toffee Pudding", pic: "images/uk.jpg", recipe: "Bake a moist date sponge cake. Prepare a rich butterscotch sauce. Pour sauce over warm cake and serve with cream." }
];

const grid = document.getElementById('dest-grid');
let stamps = new Set();

// Setup Grid
atlasData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `<h3 class="font-mileast">${item.country}</h3><p style="font-size: 0.7rem; letter-spacing: 2px;">READY FOR BOARDING</p>`;
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
        <h1 class="font-mileast" style="font-size: 3rem;">${item.dessert}</h1>
        <p style="letter-spacing: 3px; color: #c5a059;">OFFICIAL ENTRY: ${item.country}</p>
        <img src="${item.pic}" alt="${item.dessert}" class="dessert-pic">
        <div style="max-width: 600px; text-align: center; line-height: 2;">
            <h3 class="font-mileast">The Method</h3>
            <p>${item.recipe}</p>
        </div>
        <button onclick="collectStamp('${item.country}')" class="back-btn" style="margin-top: 40px; background: #c5a059; color: black;">COLLECT PASSPORT STAMP</button>
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
    window.scrollTo(0,0);
}
