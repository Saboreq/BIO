function startCountdown(duration, display, updateContent) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            updateExtraContent();
        }
    }, 1000);
}

function updateExtraContent() {
    const quotes = [
        { title: "Inspiration", text: "Believe you can and you're halfway there." },
        { title: "Wisdom", text: "The only true wisdom is in knowing you know nothing." },
        { title: "Courage", text: "Courage is resistance to fear, mastery of fear, not absence of fear." },
        { title: "Inspiration", text: "Dream big and dare to fail." },
        { title: "Wisdom", text: "Turn wounds into wisdom." },
        { title: "Courage", text: "Do it scared." }
    ];
    
    const funFacts = [
        { title: "Fun Fact", text: "Bananas are berries, but strawberries aren't!" },
        { title: "Fun Fact", text: "A day on Venus is longer than a year on Venus." },
        { title: "Fun Fact", text: "Honey never spoils." },
        { title: "Fun Fact", text: "Octopuses have three hearts." },
        { title: "Fun Fact", text: "Sharks existed before trees." },
        { title: "Fun Fact", text: "Wombat poop is cube-shaped." }
    ];
    
    const motivations = [
        { title: "Motivation", text: "Your limitation—it's only your imagination." },
        { title: "Motivation", text: "Push yourself, because no one else is going to do it for you." },
        { title: "Motivation", text: "Great things never come from comfort zones." },
        { title: "Motivation", text: "Don’t stop when you’re tired, stop when you’re done." },
        { title: "Motivation", text: "Small steps lead to big changes." },
        { title: "Motivation", text: "Believe in yourself and all you can achieve." }
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
    const oneMinute = 60;
    startCountdown(oneMinute, countdownElement, updateExtraContent);
    updateExtraContent();
    updateDate();
    setInterval(updateDate, 86400000);
});
