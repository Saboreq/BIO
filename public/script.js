const words = ["Hello", "Hola", "Bonjour", "Namaste?", "Kon'nichiwa"];
let currentIndex = 0;

function showNotification() {
    const notification = document.querySelector('.notification');
    
    // Update the notification text
    notification.textContent = words[currentIndex];
    
    // Slide in
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
    
    // Slide out after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
    }, 4000);

    // Update the index to the next word
    currentIndex = (currentIndex + 1) % words.length;
}

// Start the loop
setInterval(showNotification, 7000);

// Initial call to display the first word immediately
showNotification();

function copyEmail() {
    const email = "contact@saboreq.site";
    navigator.clipboard.writeText(email).then(() => {
        // Optional: Show some feedback that email was copied
        const notification = document.querySelector('.notification');
        notification.textContent = "Email copied to clipboard!";
        notification.style.display = "block";
        
        // Hide notification after 2 seconds
        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);
    });
}