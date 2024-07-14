const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js")
module.exports.run= async(client, message, args) => {

let link_button = new ActionRowBuilder().addComponents(
new ButtonBuilder()
.setLabel('Davet Et')
.setStyle(ButtonStyle.Link)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot%20applications.commands`))



const embed = new EmbedBuilder()
.setTitle("Botun Davet Linki")
.setDescription(`[Botun Davet Etmek İçin Tıkla](https://discord.com/api/oauth2/authorize?client_id=1171024619466137700&permissions=8&scope=bot)**\n`)
.setColor("#ff0000")
.setTimestamp()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
return message.reply({ embeds: [embed], components: [link_button] })

}
module.exports.conf = {
aliases: ['davet'],
permLevel: 0, 
kategori: 'Genel'
};

module.exports.help = {
    name: 'davet',
    description: 'Bot davet linki atar.',
    usage: 'botdavet'
};
