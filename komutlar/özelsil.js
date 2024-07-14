const Discord = require('discord.js');


exports.run = function(client, message) {
    if (message.author.id != "420927049939681280") return message.reply('Bunu Sadece Sahibim Kullanabilir');
message.channel.bulkDelete(100);
message.channel.send("100 mesaji uzaya fırlattım").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['s'],
  permLevel: 5 ,
  kategori: "Sahip"
};

exports.help = {
  name: 's', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
