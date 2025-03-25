// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

// Expand the app to full viewport
tg.expand();

// Main app logic
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const content = document.getElementById('content');
    
    // Handle send button click
    sendBtn.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage('You', message);
            userInput.value = '';
            
            // Here you would typically send the message to your backend
            // For now, we'll just simulate a response
            setTimeout(() => {
                addMessage('Jacobin', 'Thanks for your message! This is a simulated response.');
            }, 1000);
        }
    });
    
    // Handle Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
    
    // Add initial welcome message
    addMessage('Jacobin', 'Welcome! How can I help you today?');
    
    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        content.appendChild(messageElement);
        content.scrollTop = content.scrollHeight;
    }
});
