const client = require("../bot");
const { Collection } = require("discord.js")
const fs = require("fs")
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;


client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
if (err) console.error(err);
files.forEach(f => {
let props = require(`../komutlar/${f}`);
    
client.on('ready', () => {

    // Oynuyor Kısmı
  
      client.user.setStatus("dnd");
      client.user.setPresence({ activities: [{ name: 'CADDE 8' }] });
  
  const { ActivityType } = require("discord.js")
client.user.setActivity("P0rno", { 
    type: ActivityType.Streaming, 
    url: "https://www.twitch.tv/.burgaz"
})

    
        console.log ('_________________________________________');
        console.log (`Kullanıcı İsmi     : ${client.user.username}`);
        console.log (`Sunucular          : ${client.guilds.cache.size}`);
        console.log (`Kullanıcılar       : ${client.users.cache.size}`);
        console.log (`Prefix             : ${ayarlar.prefix}`);
        console.log (`Toplam Komut       : ${files.length}`);
        console.log (`Durum              : Bot Çevrimiçi!`);
        console.log ('_________________________________________');
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
