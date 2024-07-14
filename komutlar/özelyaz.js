const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (message.author.id != "420927049939681280") return message.reply('Bunu Sadece Sahibim Kullanabilir');
  message.delete();
  message.channel.send(`**${mesaj}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 5,
  kategori: "Sahip" 
};

exports.help = {
  name: 'y',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
