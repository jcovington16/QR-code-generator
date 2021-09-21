const {Client, Intents} = require('discord.js');
require('dotenv').config();

// const user_prompt = require('prompt-sync')();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

console.log('Beginning');

client.once('ready', () => {
    console.log('Discord Bot is running...')
});

client.on('message', (message) => {
    if (client.user.id === message.author.id) {
        return;
    }
})


client.login(process.env.BOT_TOKEN)
