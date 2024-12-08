const quotes = [
    {
        hebrew: "הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו",
        english: "The best way to predict the future is to create it"
    },
    {
        hebrew: "כל יום הוא הזדמנות חדשה להצליח",
        english: "Every day is a new opportunity to succeed"
    },
    {
        hebrew: "הצעד הקטן ביותר עדיין מקדם אותך קדימה",
        english: "The smallest step forward is still progress"
    },
    {
        hebrew: "אל תחכה להזדמנות, צור אותה",
        english: "Don't wait for opportunity, create it"
    },
    {
        hebrew: "החלומות שלך לא יעבדו אלא אם אתה כן",
        english: "Your dreams won't work unless you do"
    }
];

const hebrewQuote = document.querySelector('.hebrew');
const englishQuote = document.querySelector('.english');
const newQuoteButton = document.getElementById('newQuote');
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('toggleMusic');
let isMusicPlaying = false;

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayNewQuote() {
    const quote = getRandomQuote();
    
    // Add fade out effect
    hebrewQuote.style.opacity = 0;
    englishQuote.style.opacity = 0;
    
    setTimeout(() => {
        hebrewQuote.textContent = quote.hebrew;
        englishQuote.textContent = quote.english;
        
        // Add fade in effect
        hebrewQuote.style.opacity = 1;
        englishQuote.style.opacity = 1;
    }, 300);
}

function toggleMusic() {
    if (isMusicPlaying) {
        music.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isMusicPlaying = !isMusicPlaying;
}

// Add transition effect to quotes
hebrewQuote.style.transition = 'opacity 0.3s ease';
englishQuote.style.transition = 'opacity 0.3s ease';

// Initial quote display
displayNewQuote();

// Event listeners
newQuoteButton.addEventListener('click', () => {
    displayNewQuote();
    newQuoteButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        newQuoteButton.style.transform = 'scale(1)';
    }, 100);
});

musicToggle.addEventListener('click', toggleMusic); 