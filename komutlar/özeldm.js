const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("0x0000000000000008"))
    return message.channel.send(
      `> **Bu komutu kullanabilmek için "\`YÖNETİCİt\`" yetkisine sahip olmalısın.**`
      
    );
  if (message.author.id != "420927049939681280") return message.reply('Bunu Sadece Sahibim Kullanabilir');

  let mesaj = args[0];
  if (!mesaj) return message.channel.send("> **Birşey Yazmalısınız**");

  await message.delete();

  const mesajat = new Discord.EmbedBuilder()
    .setColor("#ff0000")
    .setDescription(args.slice(0).join(" "));

  message.guild.members.cache.map(async (user) => {
    await user.send({ embeds: [mesajat] }).catch((e) => {});
  });

  await message.channel.send(`> **✅ Mesaj basariyla gonderildi.**`);
};

exports.conf = {
    aliases: ['dm'], 
    permLevel: 5,
    kategori: "Sahip" 
  };

  exports.help = {
    name: 'dm',  
    description: 'Dm Mesaj Gönderir.', 
    usage: 'yardım', 
  };
