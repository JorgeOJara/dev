require('dotenv').config();
// const cleverbot require("cleverbot-free");
const { Client, Intents, GatewayIntentBits,Partials} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user.id)) {
        console.log(message.content);
        message.reply("stop texting, nobody cares..");
    }
    
    if(message.author != message.author.bot){
         message.reply('Your message'+ message.content + "  "  +  message.author.username)
    }
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);