const {Client, Intents, Discord} = require('discord.js');
require('dotenv').config();

// const user_prompt = require('prompt-sync')();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
    console.log('Discord Bot is running...')
});

client.on('message', (message) => {
    if (client.user.id === message.author.id) {
        return;
    }

    const userName = `@${message.author.id}`
    const args = message.content.split(' ');
    const argsExt = args.splice(1);

    let url = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${argsExt.join('+')}`;

    if(args[0] === '~generate') {
        if(argsExt.length === 0) {
            message.channel.send(`${userName} - ERROR: NOTHING PROVIDED`);
            return;
        }
       const qrCode = new Discord.MessageEmbed()
            .setTitle('QR Code Generated')
            .addFields(
                {
                    name: 'Requestor',
                    value: userName
                },
                {
                    name: 'Encoded Text',
                    value: argsExt.join(' ')
                },
                {
                    name: 'URL',
                    value: url
                }
            )
            .setImage(url)
            .setTimestamp();

        message.channel.send(qrCode)
        console.log(message)
    }
});


client.login(process.env.BOT_TOKEN)
