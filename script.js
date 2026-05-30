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
function enterHub() {
    const intro = document.getElementById('intro-page');
    const loader = document.getElementById('hub-loader');
    const nav = document.getElementById('main-nav');
    const terminal = document.getElementById('terminal');

    if (intro) intro.style.opacity = '0';

    setTimeout(() => {
        if (intro) intro.classList.add('hidden');
        if (loader) loader.classList.remove('hidden');

        setTimeout(() => {
            if (loader) loader.classList.add('hidden');
            if (nav) nav.classList.remove('hidden');
            if (terminal) terminal.classList.remove('hidden');
            initAtlas();
        }, 1500);
    }, 500);
}

function initAtlas() {
    const grid = document.getElementById('dest-grid');
    if (!grid) return;
    grid.innerHTML = '';
    atlasData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `<h3>${item.country}</h3><p>${item.dessert}</p>`;
        card.onclick = () => startTransit(item);
        grid.appendChild(card);
    });
}

function startTransit(item) {
    const overlay = document.getElementById('transit-overlay');
    document.getElementById('target-country').innerText = item.country;
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.add('hidden');
        showDossier(item);
    }, 2000);
}

function showDossier(item) {
    document.getElementById('terminal').classList.add('hidden');
    document.getElementById('recipe-page').classList.remove('hidden');
    document.getElementById('recipe-content').innerHTML = `<h1>${item.dessert}</h1>`;
}

function showAbout() { hideAll(); document.getElementById('about-page').classList.remove('hidden'); }
function showBakeryMap() { hideAll(); document.getElementById('bakery-page').classList.remove('hidden'); }
function returnToTerminal() { hideAll(); document.getElementById('terminal').classList.remove('hidden'); }

function hideAll() {
    ['terminal', 'bakery-page', 'recipe-page', 'about-page'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}
