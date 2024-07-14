const Discord = require('discord.js');


exports.run = function(client, message) {
   if(message.author.id !== "420927049939681280")  return message.channel.send("**Botun sahibi değilsin!**")
    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor|");
        process.exit(0);
    });

};

module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 5,
  kategori: "Sahip"
};

module.exports.help = {
  name: 'başlat', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
