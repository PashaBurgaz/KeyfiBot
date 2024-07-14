const discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (args.length < 1) {
    return message.reply('doğru kullanım ters-yaz <yazı>')
  }

  await message.channel.send(args.join(' ').split('').reverse().join(''));

};

exports.conf = {
    aliases: ['ters-yaz'], 
    permLevel: 0,
    kategori: "Eğlence" 
  };

  exports.help = {
    name: 'ters-yaz',  
    description: 'Yazınızı Tersten Yazar.', 
    usage: 'ters-yaz', 
  };
