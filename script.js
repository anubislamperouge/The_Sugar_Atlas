const atlasData = [
    { country: "France", dessert: "Macaron", time: "2.5–3 hrs", difficulty: "Expert", pic: "french 1.jpg", desc: "Delicate almond sandwich cookies", recipe: ["Whip egg whites + sugar", "Fold in almond flour", "Pipe small circles", "Bake 15 mins", "Fill with buttercream"] },
    { country: "Italy", dessert: "Tiramisu", time: "1 hr", difficulty: "Medium", pic: "italy 1.jpg", desc: "Coffee-soaked layered dessert with cream", recipe: ["Dip biscuits in coffee", "Layer with mascarpone cream", "Repeat layers", "Chill 4 hours"] },
    { country: "Japan", dessert: "Mochi", time: "1–1.5 hrs", difficulty: "Medium", pic: "japan 1.jpg", desc: "Chewy rice cake with sweet filling", recipe: ["Mix glutinous rice flour + water", "Microwave or steam", "Flatten dough", "Fill with red bean paste"] },
    { country: "Turkey", dessert: "Baklava", time: "3 hrs", difficulty: "Expert", pic: "turkey 1.jpg", desc: "Flaky nut pastry with syrup", recipe: ["Layer phyllo sheets", "Add chopped nuts", "Bake until golden", "Pour honey syrup"] },
    { country: "Mexico", dessert: "Churros", time: "45 mins", difficulty: "Easy", pic: "mexico 1.jpg", desc: "Crispy fried cinnamon sticks", recipe: ["Make dough", "Pipe into hot oil", "Fry until golden", "Roll in cinnamon sugar"] },
    { country: "Brazil", dessert: "Brigadeiro", time: "30 mins", difficulty: "Easy", pic: "brazil 1.jpg", desc: "Chocolate truffle balls", recipe: ["Cook condensed milk + cocoa", "Stir until thick", "Cool", "Roll into balls"] },
    { country: "United States", dessert: "Apple Pie", time: "2 hrs", difficulty: "Medium", pic: "apple pie.jpg", desc: "Warm spiced apple dessert", recipe: ["Cook apples + sugar + cinnamon", "Place in crust", "Cover and bake"] },
    { country: "Philippines", dessert: "Leche Flan", time: "1 hr", difficulty: "Easy", pic: "Philippines 1.jpg", desc: "Caramel custard dessert", recipe: ["Caramelize sugar", "Mix eggs + condensed milk", "Steam until set"] },
    { country: "Spain", dessert: "Basque Cheesecake", time: "1.5 hrs", difficulty: "Medium", pic: "spain 1.jpg", desc: "Burnt-top creamy cheesecake", recipe: ["Mix cream cheese + sugar + eggs", "Pour into pan", "Bake at high heat"] },
    { country: "United Kingdom", dessert: "Sticky Toffee Pudding", time: "1.5 hrs", difficulty: "Medium", pic: "UK 1.jpg", desc: "Soft cake with toffee sauce", recipe: ["Bake date cake", "Make toffee sauce", "Pour over cake"] },
    { country: "Germany", dessert: "Black Forest Cake", time: "3 hrs", difficulty: "Expert", pic: "germany 1.jpg", desc: "Chocolate cake with cherries", recipe: ["Bake chocolate sponge", "Add whipped cream + cherries", "Layer cake"] },
    { country: "Austria", dessert: "Sachertorte", time: "3 hrs", difficulty: "Expert", pic: "austria 1.jpg", desc: "Dense chocolate cake with jam", recipe: ["Bake chocolate cake", "Spread apricot jam", "Cover with chocolate glaze"] },
    { country: "Belgium", dessert: "Belgian Waffle", time: "40 mins", difficulty: "Easy", pic: "belgium 1.jpg", desc: "Golden crispy waffles", recipe: ["Mix batter", "Cook in waffle iron", "Add toppings"] },
    { country: "Greece", dessert: "Galaktoboureko", time: "2.5 hrs", difficulty: "Expert", pic: "greece 1.jpg", desc: "Custard in crispy phyllo", recipe: ["Make custard", "Wrap in phyllo", "Bake", "Add syrup"] },
    { country: "Portugal", dessert: "Pastel de Nata", time: "2 hrs", difficulty: "Medium", pic: "portugal 1.jpg", desc: "Creamy custard tart", recipe: ["Fill pastry shells with custard", "Bake until browned"] },
    { country: "India", dessert: "Gulab Jamun", time: "1.5 hrs", difficulty: "Medium", pic: "indian 1.jpg", desc: "Sweet milk balls in syrup", recipe: ["Make dough", "Fry balls", "Soak in sugar syrup"] },
    { country: "China", dessert: "Tangyuan", time: "1 hr", difficulty: "Medium", pic: "china.jpg", desc: "Sweet rice balls in soup", recipe: ["Make rice dough", "Fill with sesame paste", "Boil in sweet water"] },
    { country: "South Korea", dessert: "Hotteok", time: "45 mins", difficulty: "Easy", pic: "SK 1.jpg", desc: "Sweet filled pancakes", recipe: ["Make dough", "Fill with brown sugar", "Pan-fry"] },
    { country: "Thailand", dessert: "Mango Sticky Rice", time: "1 hr", difficulty: "Easy", pic: "thai 1.jpg", desc: "Coconut rice with mango", recipe: ["Cook sticky rice", "Add coconut milk", "Serve with mango"] },
    { country: "Vietnam", dessert: "Che Ba Mau", time: "45 mins", difficulty: "Easy", pic: "viet 1.jpg", desc: "Three-layer dessert drink", recipe: ["Layer beans + jelly", "Add coconut milk", "Serve cold"] },
    { country: "Indonesia", dessert: "Klepon", time: "1 hr", difficulty: "Medium", pic: "indo 1.jpg", desc: "Sweet rice balls", recipe: ["Make rice dough", "Fill with palm sugar", "Boil", "Coat in coconut"] },
    { country: "Malaysia", dessert: "Kuih Seri Muka", time: "2.5 hrs", difficulty: "Expert", pic: "malay 1.jpg", desc: "Layered pandan dessert", recipe: ["Steam sticky rice base", "Add pandan custard layer"] },
    { country: "Singapore", dessert: "Ondeh-Ondeh", time: "1 hr", difficulty: "Medium", pic: "SG 1.jpg", desc: "Coconut sugar balls", recipe: ["Make rice dough", "Fill with palm sugar", "Boil", "Roll in coconut"] },
    { country: "Australia", dessert: "Pavlova", time: "2 hrs", difficulty: "Medium", pic: "Australia 1.jpg", desc: "Crisp meringue dessert", recipe: ["Whip egg whites + sugar", "Bake meringue", "Top with cream + fruit"] },
    { country: "New Zealand", dessert: "Lamington", time: "1.5 hrs", difficulty: "Medium", pic: "NZ 1.jpg", desc: "Chocolate coconut sponge", recipe: ["Bake sponge cake", "Dip in chocolate", "Coat in coconut"] },
    { country: "Canada", dessert: "Butter Tart", time: "1 hr", difficulty: "Easy", pic: "Canada 1.jpg", desc: "Sweet syrup tart", recipe: ["Make pastry shell", "Fill with butter + sugar + egg", "Bake"] },
    { country: "Argentina", dessert: "Alfajor", time: "1.5 hrs", difficulty: "Medium", pic: "argentina 1.jpg", desc: "Dulce de leche sandwich cookies", recipe: ["Bake cookies", "Fill with dulce de leche", "Sandwich"] },
    { country: "Peru", dessert: "Suspiro Limeño", time: "1 hr", difficulty: "Medium", pic: "peru 1.jpg", desc: "Caramel cream dessert", recipe: ["Cook milk + sugar", "Add meringue topping"] },
    { country: "Morocco", dessert: "Chebakia", time: "2.5 hrs", difficulty: "Expert", pic: "chebakia.jpg", desc: "Honey sesame pastry", recipe: ["Shape dough", "Fry", "Coat in honey + sesame"] },
    { country: "South Africa", dessert: "Malva Pudding", time: "1 hr", difficulty: "Easy", pic: "morocco 1.jpg", desc: "Soft cake with cream sauce", recipe: ["Bake sponge cake", "Pour warm cream sauce"] }
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
            <img src="${item.pic}" class="card-bg-img" style="width:100%; height:100%; object-fit:cover; opacity:0.4; position:absolute; top:0; left:0; z-index:-1;">
            <div class="card-info" style="padding: 20px; display: flex; flex-direction: column; justify-content: flex-end; height: 100%;">
                <span class="rank-tag">${item.difficulty} • ${item.time}</span>
                <h2 class="font-mileast">${item.country}</h2>
                <p>${item.dessert}</p>
                ${isCollected ? '<span class="stamp-badge" style="color:var(--gold);">[PASSPORT STAMPED]</span>' : ''}
            </div>
        `;
        card.onclick = () => startTransit(item);
        grid.appendChild(card);
    });
}

function enterHub() {
    const intro = document.getElementById('intro-page');
    const loader = document.getElementById('hub-loader');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.classList.add('hidden');
        loader.classList.remove('hidden');
        setTimeout(() => {
            loader.classList.add('hidden');
            document.getElementById('main-nav').classList.remove('hidden');
            document.getElementById('terminal').classList.remove('hidden');
            initAtlas();
        }, 2000);
    }, 800);
}

function showAbout() {
    document.getElementById('terminal').classList.add('hidden');
    document.getElementById('bakery-page').classList.add('hidden');
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('about-page').classList.remove('hidden');
}

function showBakeryMap() {
    document.getElementById('terminal').classList.add('hidden');
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('about-page').classList.add('hidden');
    document.getElementById('bakery-page').classList.remove('hidden');
    window.scrollTo(0,0);
}

function returnToTerminal() {
    document.getElementById('bakery-page').classList.add('hidden');
    document.getElementById('recipe-page').classList.add('hidden');
    document.getElementById('about-page').classList.add('hidden');
    document.getElementById('terminal').classList.remove('hidden');
    initAtlas();
    window.scrollTo(0,0);
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
    const recipeHTML = item.recipe.map(step => `<li>${step}</li>`).join('');
    document.getElementById('recipe-content').innerHTML = `
        <h1 class="font-mileast" style="font-size: 4rem; margin-top: 20px;">${item.dessert}</h1>
        <p style="letter-spacing: 4px; color: #d4af37; font-style: italic; font-size: 1.2rem;">"${item.desc}"</p>
        <img src="${item.pic}" class="dossier-img-centered">
        <div style="max-width: 700px; margin: 0 auto 40px auto; text-align: left; background: rgba(255,255,255,0.05); padding: 30px; border: 1px solid rgba(212, 175, 55, 0.3);">
            <h3 class="font-mileast" style="color: var(--gold); border-bottom: 1px solid var(--gold); padding-bottom: 10px;">RECIPE DOSSIER</h3>
            <p><strong>ORIGIN:</strong> ${item.country}</p>
            <p><strong>DIFFICULTY:</strong> ${item.difficulty} | <strong>TIME:</strong> ${item.time}</p>
            <h4 style="margin-top: 20px; color: var(--gold);">PREPARATION:</h4>
            <ul style="line-height: 2; padding-left: 20px;">${recipeHTML}</ul>
        </div>
        <button onclick="claimStamp('${item.country}')" class="gold-btn" style="padding: 20px 60px;">STAMP PASSPORT</button>
    `;
}

function claimStamp(country) {
    stamps.add(country);
    updatePassport();
    returnToTerminal();
}

document.getElementById('roulette-btn').onclick = () => {
    const loader = document.getElementById('roulette-loader');
    loader.classList.remove('hidden');
    setTimeout(() => {
        loader.classList.add('hidden');
        const random = atlasData[Math.floor(Math.random() * atlasData.length)];
        startTransit(random);
    }, 2000);
};

function createHeroEffects() {
    const hero = document.querySelector('.hero-centered');
    if(!hero) return;
    for (let i = 0; i < 12; i++) {
        let node = document.createElement('div');
        node.className = 'node';
        node.style.top = Math.random() * 100 + "%";
        node.style.left = Math.random() * 100 + "%";
        const size = Math.random() * 4 + 2; 
        node.style.width = size + 'px';
        node.style.height = size + 'px';
        node.style.animationDelay = Math.random() * 5 + "s";
        hero.appendChild(node);
    }
}

createHeroEffects();
