const atlasData = [
    { country: "France", dessert: "Macaron", time: "2.5–3 hrs", difficulty: "Expert", pic: "french 1.jpg", desc: "Delicate almond sandwich cookies", recipe: ["Whip egg whites + sugar", "Fold in almond flour", "Pipe small circles", "Bake 15 mins", "Fill with buttercream"] },
    { country: "Italy", dessert: "Tiramisu", time: "1 hr", difficulty: "Medium", pic: "italy 1.jpg", desc: "Coffee-soaked layered dessert with cream", recipe: ["Dip biscuits in coffee", "Layer with mascarpone cream", "Repeat layers", "Chill 4 hours"] },
    { country: "Japan", dessert: "Mochi", time: "1–1.5 hrs", difficulty: "Medium", pic: "japan 1.jpg", desc: "Chewy rice cake with sweet filling", recipe: ["Mix glutinous rice flour + water", "Microwave or steam", "Flatten dough", "Fill with red bean paste"] },
    { country: "Turkey", dessert: "Baklava", time: "3 hrs", difficulty: "Expert", pic: "turkey 1.jpg", desc: "Flaky nut pastry with syrup", recipe: ["Layer phyllo sheets", "Add chopped nuts", "Bake until golden", "Pour honey syrup"] },
    { country: "Mexico", dessert: "Churros", time: "45 mins", difficulty: "Easy", pic: "mexico 1.jpg", desc: "Crispy fried cinnamon sticks", recipe: ["Make dough", "Pipe into hot oil", "Fry until golden", "Roll in cinnamon sugar"] },
    { country: "Brazil", dessert: "Brigadeiro", time: "30 mins", difficulty: "Easy", pic: "brazil 1.jpg", desc: "Chocolate truffle balls", recipe: ["Cook condensed milk + cocoa", "Stir until thick", "Cool", "Roll into balls"] },
    { country: "United States", dessert: "Apple Pie", time: "2 hrs", difficulty: "Medium", pic: "US 1.jpg", desc: "Warm spiced apple dessert", recipe: ["Cook apples + sugar + cinnamon", "Place in crust", "Cover and bake"] },
    { country: "Philippines", dessert: "Leche Flan", time: "1 hr", difficulty: "Easy", pic: "Philippines 1.jpg", desc: "Caramel custard dessert", recipe: ["Caramelize sugar", "Mix eggs + condensed milk", "Steam until set"] },
    { country: "Spain", dessert: "Basque Cheesecake", time: "1.5 hrs", difficulty: "Medium", pic: "spain 1.jpg", desc: "Burnt-top creamy cheesecake", recipe: ["Mix cream cheese + sugar + eggs", "Pour into pan", "Bake at high heat"] },
    { country: "United Kingdom", dessert: "Sticky Toffee Pudding", time: "1.5 hrs", difficulty: "Medium", pic: "UK 1.jpg", desc: "Soft cake with toffee sauce", recipe: ["Bake date cake", "Make toffee sauce", "Pour over cake"] },
    { country: "Germany", dessert: "Black Forest Cake", time: "3 hrs", difficulty: "Expert", pic: "germany 1.jpg", desc: "Chocolate cake with cherries", recipe: ["Bake chocolate sponge", "Add whipped cream + cherries", "Layer cake"] },
    { country: "Austria", dessert: "Sachertorte", time: "3 hrs", difficulty: "Expert", pic: "austria 1.jpg", desc: "Dense chocolate cake with jam", recipe: ["Bake chocolate cake", "Spread apricot jam", "Cover with chocolate glaze"] },
    { country: "Belgium", dessert: "Belgian Waffle", time: "40 mins", difficulty: "Easy", pic: "belgium 1.jpg", desc: "Golden crispy waffles", recipe: ["Mix batter", "Cook in waffle iron", "Add toppings"] },
    { country: "Greece", dessert: "Galaktoboureko", time: "2.5 hrs", difficulty: "Expert", pic: "greece 1.jpg", desc: "Custard in crispy phyllo", recipe: ["Make custard", "Wrap in phyllo", "Bake", "Add syrup"] },
    { country: "Portugal", dessert: "Pastel de Nata", time: "2 hrs", difficulty: "Medium", pic: "images/portugal.jpg", desc: "Creamy custard tart", recipe: ["Fill pastry shells with custard", "Bake until browned"] },
    { country: "India", dessert: "Gulab Jamun", time: "1.5 hrs", difficulty: "Medium", pic: "images/india.jpg", desc: "Sweet milk balls in syrup", recipe: ["Make dough", "Fry balls", "Soak in sugar syrup"] },
    { country: "China", dessert: "Tangyuan", time: "1 hr", difficulty: "Medium", pic: "images/china.jpg", desc: "Sweet rice balls in soup", recipe: ["Make rice dough", "Fill with sesame paste", "Boil in sweet water"] },
    { country: "South Korea", dessert: "Hotteok", time: "45 mins", difficulty: "Easy", pic: "images/korea.jpg", desc: "Sweet filled pancakes", recipe: ["Make dough", "Fill with brown sugar", "Pan-fry"] },
    { country: "Thailand", dessert: "Mango Sticky Rice", time: "1 hr", difficulty: "Easy", pic: "images/thailand.jpg", desc: "Coconut rice with mango", recipe: ["Cook sticky rice", "Add coconut milk", "Serve with mango"] },
    { country: "Vietnam", dessert: "Che Ba Mau", time: "45 mins", difficulty: "Easy", pic: "images/vietnam.jpg", desc: "Three-layer dessert drink", recipe: ["Layer beans + jelly", "Add coconut milk", "Serve cold"] },
    { country: "Indonesia", dessert: "Klepon", time: "1 hr", difficulty: "Medium", pic: "images/indonesia.jpg", desc: "Sweet rice balls", recipe: ["Make rice dough", "Fill with palm sugar", "Boil", "Coat in coconut"] },
    { country: "Malaysia", dessert: "Kuih Seri Muka", time: "2.5 hrs", difficulty: "Expert", pic: "images/malaysia.jpg", desc: "Layered pandan dessert", recipe: ["Steam sticky rice base", "Add pandan custard layer"] },
    { country: "Singapore", dessert: "Ondeh-Ondeh", time: "1 hr", difficulty: "Medium", pic: "images/singapore.jpg", desc: "Coconut sugar balls", recipe: ["Make rice dough", "Fill with palm sugar", "Boil", "Roll in coconut"] },
    { country: "Australia", dessert: "Pavlova", time: "2 hrs", difficulty: "Medium", pic: "images/australia.jpg", desc: "Crisp meringue dessert", recipe: ["Whip egg whites + sugar", "Bake meringue", "Top with cream + fruit"] },
    { country: "New Zealand", dessert: "Lamington", time: "1.5 hrs", difficulty: "Medium", pic: "images/nz.jpg", desc: "Chocolate coconut sponge", recipe: ["Bake sponge cake", "Dip in chocolate", "Coat in coconut"] },
    { country: "Canada", dessert: "Butter Tart", time: "1 hr", difficulty: "Easy", pic: "images/canada.jpg", desc: "Sweet syrup tart", recipe: ["Make pastry shell", "Fill with butter + sugar + egg", "Bake"] },
    { country: "Argentina", dessert: "Alfajor", time: "1.5 hrs", difficulty: "Medium", pic: "images/argentina.jpg", desc: "Dulce de leche sandwich cookies", recipe: ["Bake cookies", "Fill with dulce de leche", "Sandwich"] },
    { country: "Peru", dessert: "Suspiro Limeño", time: "1 hr", difficulty: "Medium", pic: "images/peru.jpg", desc: "Caramel cream dessert", recipe: ["Cook milk + sugar", "Add meringue topping"] },
    { country: "Morocco", dessert: "Chebakia", time: "2.5 hrs", difficulty: "Expert", pic: "images/morocco.jpg", desc: "Honey sesame pastry", recipe: ["Shape dough", "Fry", "Coat in honey + sesame"] },
    { country: "South Africa", dessert: "Malva Pudding", time: "1 hr", difficulty: "Easy", pic: "images/sa.jpg", desc: "Soft cake with cream sauce", recipe: ["Bake sponge cake", "Pour warm cream sauce"] }
];

let stamps = new Set();

// --- THE NAVIGATION LOGIC (This is where the magic happens) ---

function enterHub() {
    const intro = document.getElementById('intro-page');
    const loader = document.getElementById('hub-loader');
    const nav = document.getElementById('main-nav');
    const terminal = document.getElementById('terminal');

    // 1. Fade out the intro screen
    if (intro) {
        intro.style.transition = "opacity 0.5s";
        intro.style.opacity = '0';
    }

    setTimeout(() => {
        // 2. Hide intro, show the loading overlay
        if (intro) intro.classList.add('hidden');
        if (loader) loader.classList.remove('hidden');

        // 3. Pause for the "Preparing Passport" effect
        setTimeout(() => {
            if (loader) loader.classList.add('hidden');
            
            // 4. Show the Hub!
            if (nav) nav.classList.remove('hidden');
            if (terminal) terminal.classList.remove('hidden');
            
            // 5. Build the destination grid
            initAtlas();
            createHeroEffects();
        }, 2000);
    }, 500);
}

// --- APP FUNCTIONS ---

function initAtlas() {
    const grid = document.getElementById('dest-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    atlasData.forEach(item => {
        const isCollected = stamps.has(item.country);
        const card = document.createElement('div');
        card.className = `country-card`;
        card.innerHTML = `
            <img src="${item.pic}" style="width:100%; height:100%; object-fit:cover; opacity:0.3; position:absolute; top:0; left:0; z-index:-1;">
            <div style="padding: 20px; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; position: relative; z-index: 2;">
                <span style="font-size: 0.7rem; color: var(--gold);">${item.difficulty} • ${item.time}</span>
                <h2 class="font-mileast" style="margin: 5px 0;">${item.country}</h2>
                <p style="margin: 0; font-size: 0.9rem;">${item.dessert}</p>
                ${isCollected ? '<span style="color:var(--gold); font-weight:bold; margin-top:10px;">[ STAMPED ]</span>' : ''}
            </div>
        `;
        card.onclick = () => startTransit(item);
        grid.appendChild(card);
    });
}

function showAbout() {
    hideAll();
    document.getElementById('about-page').classList.remove('hidden');
}

function showBakeryMap() {
    hideAll();
    document.getElementById('bakery-page').classList.remove('hidden');
}

function returnToTerminal() {
    hideAll();
    document.getElementById('terminal').classList.remove('hidden');
    initAtlas();
    window.scrollTo(0,0);
}

function hideAll() {
    const pages = ['terminal', 'bakery-page', 'recipe-page', 'about-page'];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

// --- PASSPORT & TRANSIT ---

function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    const target = document.getElementById('target-country');
    if (target) target.innerText = item.country;
    if (overlay) overlay.classList.remove('hidden');

    setTimeout(() => {
        if (overlay) overlay.classList.add('hidden');
        showDossier(item);
    }, 2500);
}

function showDossier(item) {
    hideAll();
    const page = document.getElementById('recipe-page');
    const content = document.getElementById('recipe-content');
    if (page) page.classList.remove('hidden');
    
    const recipeHTML = item.recipe.map(step => `<li>${step}</li>`).join('');
    if (content) {
        content.innerHTML = `
            <h1 class="font-mileast" style="font-size: 3.5rem;">${item.dessert}</h1>
            <p style="color: var(--gold); font-style: italic;">"${item.desc}"</p>
            <img src="${item.pic}" class="dossier-img-centered">
            <div style="max-width: 600px; margin: 20px auto; text-align: left; background: rgba(255,255,255,0.05); padding: 30px; border: 1px solid var(--gold);">
                <h3>RECIPE DOSSIER</h3>
                <p><strong>ORIGIN:</strong> ${item.country}</p>
                <ul>${recipeHTML}</ul>
            </div>
            <button onclick="claimStamp('${item.country}')" class="gold-btn">STAMP PASSPORT</button>
        `;
    }
}

function claimStamp(country) {
    stamps.add(country);
    updatePassportUI();
    returnToTerminal();
}

function updatePassportUI() {
    const count = document.getElementById('stamp-count');
    const fill = document.getElementById('progress-fill');
    const rank = document.getElementById('explorer-rank');
    
    if (count) count.innerText = stamps.size;
    if (fill) fill.style.width = `${(stamps.size / 30) * 100}%`;
    
    if (rank) {
        if (stamps.size > 20) rank.innerText = "GRAND AMBASSADOR";
        else if (stamps.size > 10) rank.innerText = "WORLD VOYAGER";
        else if (stamps.size > 0) rank.innerText = "SWEET EXPLORER";
    }
}

// --- ROULETTE ---
const rBtn = document.getElementById('roulette-btn');
if (rBtn) {
    rBtn.onclick = () => {
        const loader = document.getElementById('roulette-loader');
        if (loader) loader.classList.remove('hidden');
        setTimeout(() => {
            if (loader) loader.classList.add('hidden');
            const random = atlasData[Math.floor(Math.random() * atlasData.length)];
            startTransit(random);
        }, 2000);
    };
}

// --- EFFECTS ---
function createHeroEffects() {
    const hero = document.querySelector('.hero-centered');
    if(!hero || hero.querySelector('.node')) return; // Don't double-add nodes
    for (let i = 0; i < 12; i++) {
        let node = document.createElement('div');
        node.className = 'node';
        node.style.top = Math.random() * 100 + "%";
        node.style.left = Math.random() * 100 + "%";
        node.style.animationDelay = Math.random() * 5 + "s";
        hero.appendChild(node);
    }
}

// Initial start logic
window.onload = () => {
    // Make sure nav and terminal are hidden at the very start
    const nav = document.getElementById('main-nav');
    const terminal = document.getElementById('terminal');
    if (nav) nav.classList.add('hidden');
    if (terminal) terminal.classList.add('hidden');
};
