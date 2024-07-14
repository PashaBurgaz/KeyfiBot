const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`**:cat: Site Linki [TIKLA](https://pashaburgaz.vercel.app/)**\n`);
    } catch (e) {
        throw e;
    }
}

exports.conf = {
    aliases: ['site','link'], 
    permLevel: 0,
    kategori: "Genel" 
  };

  exports.help = {
    name: 'site',  
    description: 'Site Linki Verir.', 
    usage: 'site', 
  };
