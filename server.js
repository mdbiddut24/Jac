const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Replace with your bot token from BotFather
const BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Set webhook (you'll need to configure this with your public URL)
app.post(`/webhook`, async (req, res) => {
    const { message } = req.body;
    
    if (message) {
        const chatId = message.chat.id;
        const text = message.text;
        
        // Simple echo bot
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: `You said: ${text}`
        });
    }
    
    res.sendStatus(200);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
