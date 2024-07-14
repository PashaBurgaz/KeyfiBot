const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
  if (message.author.id != "420927049939681280") return message.reply('Bunu Sadece Sahibim Kullanabilir');
    try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 5,
  kategori: "Sahip"
};

module.exports.help = {
  name: '.',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
