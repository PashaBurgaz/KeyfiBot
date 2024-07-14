const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
if (message.author.id != "420927049939681280") return message.reply('Bunu Sadece Sahibim Kullanabilir');
let üyesayi = message.guild.memberCount;
let botlar = message.guild.members.cache.filter(m => m.user.bot).size
let kullanıcılar = üyesayi - botlar
const embed = new Discord.EmbedBuilder()
.setColor("#ff0000")
.setTimestamp()
.addFields([
{ name: `Toplam Üye`, value: `**${üyesayi}**`, inline:true },
{ name: `Kullanıcılar`, value: `**${kullanıcılar}**`, inline:true },
{ name: `Botlar`, value: `**${botlar}**`, inline:true },
{ name: `Üye Durumları`, value: `**${message.guild.members.cache.filter(o => o.presence?.status === "online").size}** Çevrimiçi\n**${message.guild.members.cache.filter(i => i.presence?.status === "idle").size}** Boşta\n**${message.guild.members.cache.filter(dnd => dnd.presence?.status === "dnd").size}** Rahatsız Etmeyin`, inline:true },
])
return message.channel.send({embeds: [embed]})
}

exports.conf = {
    aliases: ['toplamüye', 'üye'], 
    permLevel: 5,
    kategori: "Sahip" 
  };

  exports.help = {
    name: 'toplamüye',  
    description: 'Toplam Üye Gösterir.', 
    usage: 'toplamüye', 
  };
