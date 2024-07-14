const Discord = require('discord.js')
exports.run = async(client, message, args) => {
if (message.author.id != "420927049939681280") return message.reply('Bunu Sadece Sahibim Kullanabilir');
  
if(!message.member.permissions.has("0x0000000000000020")) return message.reply("Yetersiz Yetki!")

let csd = args[0]
if(!csd) return message.reply("Lütfen Bir Duyuru Metni Yaz!")

await message.delete()

message.channel.send({ embeds: [new Discord.EmbedBuilder()
.setTitle("Duyuru Sistemi")
.setColor(Discord.Colors.Blue)
.setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
.setDescription(args.slice(0).join(" "))
.setTimestamp() ]})
}

exports.conf = {
    aliases: ['duyuru'], 
    permLevel: 5,
    kategori: "Genel" 
  };

  exports.help = {
    name: 'duyuru',  
    description: 'Duyuru Gönderir.', 
    usage: 'duyuru', 
  };
