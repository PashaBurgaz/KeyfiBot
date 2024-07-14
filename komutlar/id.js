const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
let kişi = message.mentions.members.first() || message.author
message.channel.send(`**${kişi}** adlı kişinin ID numarası: **${kişi.id}** idir.`)
}

exports.conf = {
    aliases: ['ıd', 'id'], 
    permLevel: 4,
    kategori: "Moderasyon" 
  };

  exports.help = {
    name: 'ıd',  
    description: 'Kullanıcı Id Verir.', 
    usage: 'ıd', 
  };
