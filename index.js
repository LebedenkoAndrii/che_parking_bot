const { Telegraf, Scenes, session } = require('telegraf');

const bot = new Telegraf('8605659970:AAGaI2C2w7EWiAtlyucDAco0hqBCTDYAmOM');

// bot.help((ctx) => ctx.reply('Напиши мені щось, і я повторю це!'));

bot.start((ctx) => ctx.reply('Привіт! Надішліть фото порушення паркування'));

ctx.wizard.state;
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
