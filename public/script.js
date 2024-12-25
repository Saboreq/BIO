const words = ["Hello", "Hola", "Bonjour", "Namaste?", "Kon'nichiwa"];
let currentIndex = 0;

function showNotification() {
    const notification = document.querySelector('.notification');
    
    notification.textContent = words[currentIndex];

    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
    }, 4000);

    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(showNotification, 7000);

showNotification();

function copyEmail() {
    const email = "contact@saboreq.site";
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.querySelector('.notification');
        notification.textContent = "Email copied to clipboard!";
        notification.style.display = "block";

        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);
    });
}