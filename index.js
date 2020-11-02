const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log(`${bot.user.username} Is Online`);
});

bot.login(process.env.token);

client.on("message", (message) => {
    if(message.content === "green") {
      message.channel.send("milsuge");
    }
    if(message.content === "dazay") {
      message.channel.send("martalog");
    }
    if(message.content === "hennessy") {
      message.channel.send("gasca drequ");
    }
  });