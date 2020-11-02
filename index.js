const { Client } = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log(`{bot.user.username} Is Online!`);
});

bot.on('message', msg => {
    if (msg.content === '?links')
      msg.reply("milsugi")
  });
