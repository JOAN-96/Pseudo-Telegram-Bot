const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

//Token from BotFather
const Token = '7669987012:AAH2YeOu4-m0aPi6MG2aJA12Ife4ig7JQu4';

//Create a new telegramBot instance
const bot = new TelegramBot(Token, {polling: true});

//Log message
bot.on('message', (msg) => {
    console.log(msg);
});

//Start command
bot.onText(/\/start/, (msg) => {
    const keyboard = [
        [
            {
                text: 'Launch App',
                web_app: {
                    url: 'https://joan-96.github.io/Abolaji-Nofiu/'
                }
            }
        ]
    ];

    bot.sendMessage(msg.chat.id, 'Welcome to Meco', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
  });
