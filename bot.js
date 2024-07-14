const { Client, GatewayIntentBits, Partials } = require("discord.js");
const ayarlar = require("./ayarlar.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.login(process.env.TOKEN || ayarlar.token);

const { joinVoiceChannel } = require('@discordjs/voice')
client.on('ready', () => {
  let channel = client.channels.cache.get("1249791261133635604")
  
 

      const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
  });
})


client.on("messageCreate", async (msg) => {
  const yasak = "420927049939681280";

  const dcskelime = [yasak, "<@" + yasak + ">"];
  if (dcskelime.some((dcss) => msg.content.includes(dcss))) {
    msg.reply("Etiketleme Lütfen!");
    msg.delete();
  }
});
