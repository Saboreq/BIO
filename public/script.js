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