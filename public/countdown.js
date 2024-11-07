function startCountdown(duration, display, updateContent) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset the timer
            updateExtraContent();  // Update content on reset
        }
    }, 1000);
}

function updateExtraContent() {
    const quotes = [
        { title: "Inspiration", text: "Believe you can and you're halfway there." },
        { title: "Wisdom", text: "The only true wisdom is in knowing you know nothing." },
        { title: "Courage", text: "Courage is resistance to fear, mastery of fear, not absence of fear." }
    ];

    const funFacts = [
        { title: "Fun Fact", text: "Bananas are berries, but strawberries aren't!" },
        { title: "Fun Fact", text: "A day on Venus is longer than a year on Venus." },
        { title: "Fun Fact", text: "Honey never spoils." }
    ];

    const motivations = [
        { title: "Motivation", text: "Your limitation—it's only your imagination." },
        { title: "Motivation", text: "Push yourself, because no one else is going to do it for you." },
        { title: "Motivation", text: "Great things never come from comfort zones." }
    ];

    const extraGlassElements = document.querySelectorAll('.extra-glass');
    const contentSets = [quotes, funFacts, motivations];

    extraGlassElements.forEach((element, index) => {
        const randomContent = contentSets[index][Math.floor(Math.random() * contentSets[index].length)];
        element.querySelector('h2').textContent = randomContent.title;
        element.querySelector('p').textContent = randomContent.text;
    });
}

function updateDate() {
    const dateElement = document.getElementById('date');
    const polandTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" });
    const date = new Date(polandTime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = date.toLocaleDateString('en-GB', options);
}

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const oneMinute = 60; // 1 minute in seconds
    startCountdown(oneMinute, countdownElement, updateExtraContent);
    updateExtraContent(); // Initial content update
    updateDate(); // Initial date update
    setInterval(updateDate, 86400000); // Update date every 24 hours
});
