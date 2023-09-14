const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot("6518914681:AAH7kPi-1QSUeJ_3dkl_lH2MWTJm9srQspY", {
  polling: true,
});

const keyboard = [
  [{ text: 'Get ID' }]
];

// Convert the keyboard to JSON format
const replyMarkup = {
  keyboard: keyboard,
  resize_keyboard: true,
  one_time_keyboard: true,
};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello! I am your Telegram bot.", { reply_markup: replyMarkup });
});

bot.onText(/\/getid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Your ShareFox ID: ${chatId}`);
});

bot.onText(/Get ID/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Your ShareFox ID: ${chatId}`);
});
