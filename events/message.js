const { EmbedBuilder } = require("discord.js");
var ayarlar = require("../ayarlar.json");
const client = require("../bot");
const prefix = ayarlar.prefix;

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLocaleLowerCase().split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }

});



client.on("messageCreate", async message => {

  let data = [
    "Burgaz",
    "burgaz",
    "BURGAZ"
  ];
  if (data.includes(message.content)) {
    message.reply("**Bizim Orda Rüzgar 12 Ay Tersten Eser !**");
  }
  
  
  
  let data1 = [
    "sa",
    "Sa",
    "sA",
    "SA",
    "sea",
    "Sea",
    "SEA",
    "selam",
    "Selam",
    "SELAM"
  ];
  if (data1.includes(message.content)) {
    message.reply("** Aleyküm selam,  hoş geldin bro ^^**");
  }



  let data2 = [
    "gnydn",
    "günaydın",
    "Günaydın",
    "gunaydin",
    "gunaydın",
    "Gunaydın",
    "güno",
    "Güno",
    "guno",
    "Guno",
    "Gunaydin"
  ];
  if (data2.includes(message.content)) {
    message.reply("Sanada Günaydın Canım. 😯🌄🌅");
  }



  let data3 = [
    "iyi geceler",
    "iyi akşamlar",
    "iyi gclr",
    "ii geceler",
    "iyi aksamlar",
    "Iyi Geceler",
    "İyi geceler",
    "ig",
    "İyi akşamlar"
  ];
  if (data3.includes(message.content)) {
    message.reply("Saol Knka Sanada İyi Geceler. 🌙🌜");
  }

})
