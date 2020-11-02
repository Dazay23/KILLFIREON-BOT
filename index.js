const { Client } = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log(`{bot.user.username} Is Online!`);
});

bot.login (process.env.token);

client.on('message', message => {

    if(message.content.toLowerCase() === 'links')
        nodemessage.channel.send('green mi-l suge');

});
