import Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();
const user_prompt = require('prompt-sync')();
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Discord Bot is running...')
});

client.on('message', (message) => {
    if (client.user.id === message.author.id) {
        return;
    }
    
})



client.login(process.env.BOT_TOKEN)
