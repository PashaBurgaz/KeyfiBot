const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {

let buttons = new ActionRowBuilder().addComponents(
new ButtonBuilder()
.setStyle(ButtonStyle.Primary)
.setEmoji("💡")
.setLabel("Moderasyon")
.setCustomId("mod"),
new ButtonBuilder()
.setStyle(ButtonStyle.Success)
.setEmoji("🌐")
.setLabel("Sunucu")
.setCustomId("sunucu"),
new ButtonBuilder()
.setStyle(ButtonStyle.Primary)
.setEmoji("👥")
.setLabel("Kullanıcı")
.setCustomId("kullanıcı"),
new ButtonBuilder()
.setStyle(ButtonStyle.Danger)
.setEmoji("🤖")
.setLabel("Sistem")
.setCustomId("sistem"))

const embed = new EmbedBuilder()
.setTitle("Yardım Menüsü")
.setDescription(`Lütfen Bilgi Almak İçin Bir Buton Seçin.`)
.setColor("#0099ff")
.setTimestamp()
await message.reply({ embeds: [embed], components: [buttons] }).then(async Message => {

const filter = i => i.user.id === message.author.id
let col = await message.channel.createMessageComponentCollector({ filter, time: 120000 });

col.on('collect', async (button) => {
switch (button.customId) {
case 'mod':
let sayı = 1
const modEmbed = new EmbedBuilder()
.setTitle("Moderasyon Komutları")
.setDescription(`**${client.user.username}** Botun Moderasyon Komutlarını Gösterir.
Komutlar: 
Liste Ekleyin `)
.setColor("#0099ff")
.setTimestamp()
await Message.edit({ embeds: [modEmbed] }).catch(err => {})
await button.deferUpdate();
break;

case 'sunucu':
let sayı2 = 1
const sunucuEmbed = new EmbedBuilder()
.setTitle("Sunucu Komutları")
.setDescription(`**${client.user.username}** Botun Sunucu Komutlarını Gösterir.
Komutlar: 
Liste Ekleyin`)
.setColor("#0099ff")
.setTimestamp()
await Message.edit({ embeds: [sunucuEmbed] }).catch(err => {})
await button.deferUpdate();
break;
    
case 'kullanıcı':
let sayı3 = 1
const kullanıcıEmbed = new EmbedBuilder()
.setTitle("Kullanıcı Komutları")
.setDescription(`**${client.user.username}** Botun Kullanıcı Komutlarını Gösterir.
Komutlar: 
Liste Ekleyin`)
.setColor("#0099ff")
.setTimestamp()
await Message.edit({ embeds: [kullanıcıEmbed] }).catch(err => {})
await button.deferUpdate();
break;
    
case 'sistem':
let sayı4 = 1
const sistemEmbed = new EmbedBuilder()
.setTitle("Sistem Komutları")
.setDescription(`**${client.user.username}** Botun Sistem Komutlarını Gösterir.
Komutlar: 
Liste Ekleyin`)
.setColor("#ff0000")
.setTimestamp()
await Message.edit({ embeds: [sistemEmbed] }).catch(err => {})
await button.deferUpdate();
break;
    }
})

col.on("end", async (button) => {
buttons = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setStyle(ButtonStyle.Primary)
        .setLabel("Moderasyon")
        .setCustomId("mod")
        .setDisabled(true),
        new ButtonBuilder()
        .setStyle(ButtonStyle.Success)
        .setLabel("Sunucu")
        .setCustomId("sunucu")
        .setDisabled(true),
        new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setLabel("Kullanıcı")
        .setCustomId("kullanıcı")
        .setDisabled(true),
        new ButtonBuilder()
        .setStyle(ButtonStyle.Danger)
        .setLabel("Sistem")
        .setCustomId("sistem")
        .setDisabled(true))
        await Message.edit({ components: [buttons] }).catch(err => {})
})

}).catch(err => {})
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "yardımbuton"
}
