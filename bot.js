require('dotenv').config();
// const cleverbot require("cleverbot-free");
const { Client, Intents, GatewayIntentBits} = require('discord.js');

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS ,
    Intents.FLAGS.GUILD_MESSAGES,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions]
   });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user.id)) {
        console.log(message.content);
        message.reply("dont care..");
    }
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);