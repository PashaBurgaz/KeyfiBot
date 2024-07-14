const { EmbedBuilder } = require("discord.js");


exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;
    const embed = new EmbedBuilder()
    .setDescription(`**[PNG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setColor("#ff0000")
    return message.reply({ embeds: [embed]}).catch(err => {})

}

module.exports.conf = {
    aliases: ['avatar', 'pp'],
    permLevel: 0,
    kategori: 'Genel'
};

module.exports.help = {
    name: 'avatar',
    description: 'Kullanıcının avatarını gösterir.',
    usage: 'avatar'
};
