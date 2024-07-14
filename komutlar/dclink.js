const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Sunucu Davet")
    .setDescription(`**[KATILMAK İÇİN TIKLA](https://discord.gg/zZ4BY8uVZ4)
    https://discord.gg/zZ4BY8uVZ4 **\n`)
    .setColor("#ff0000")
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};

module.exports.conf = {
aliases: ['dc','link'],
permLevel: 0, 
kategori: 'Genel'
};

module.exports.help = {
    name: 'dc',
    description: 'Discord linki atar.',
    usage: 'dc'
};
