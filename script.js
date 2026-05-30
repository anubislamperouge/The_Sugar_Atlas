let stamps = 0;
const totalDestinations = 2;

// Passport Stamp Logic
const stampButtons = document.querySelectorAll('.stamp-btn');
const progressBar = document.getElementById('progress-bar');
const statsText = document.getElementById('stats');

stampButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('collected')) {
            stamps++;
            this.textContent = "✅ Stamp Collected!";
            this.classList.add('collected');
            this.style.backgroundColor = "#81C784";
            
            // Update Progress Bar
            let percentage = (stamps / totalDestinations) * 100;
            progressBar.style.width = percentage + "%";
            statsText.textContent = `Stamps Collected: ${stamps} / ${totalDestinations}`;
            
            if (stamps === totalDestinations) {
                alert("🎉 Achievement Unlocked: Master Patissier! You've explored the world!");
            }
        }
    });
});

// Sweet Roulette Logic
const rouletteBtn = document.getElementById('roulette-btn');
const destinations = ["France", "Turkey", "Japan", "Mexico", "Italy"];

rouletteBtn.addEventListener('click', () => {
    const randomCountry = destinations[Math.floor(Math.random() * destinations.length)];
    alert(`✈️ Your next stop is... ${randomCountry}! Pack your whisk!`);
});
