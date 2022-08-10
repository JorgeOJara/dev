require('dotenv').config();
// const cleverbot require("cleverbot-free");
// const { Client, Intents, GatewayIntentBits} = require('discord.js');

// const client = new Client({ intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.GuildPresences,
//     GatewayIntentBits.GuildMembers,
//     GatewayIntentBits.GuildMessageReactions,
//     GatewayIntentBits.DirectMessages,
//     GatewayIntentBits.GuildBans,
//     ],partials: ['CHANNEL', 'MESSAGE', 'REACTION']
//    });

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('messageCreate', (message) => {
//   if (message.author.bot) return;

//   if (message.mentions.has(client.user.id)) {
//         console.log(message.content);
//         message.reply("stop texting, nobody cares..");
//     }
    
//     if(message.author != message.author.bot){
//         console.log(message)
//          message.reply('no one cares..'+ message.author.username)
//     }
// });



import { Client, GatewayIntentBits, Partials } from "discord.js";

const bot = new Client({
  'intents': [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages
  ],
  'partials': [Partials.Channel]
});

bot.on('messageCreate', async (message) => {
  console.log(message);
});
// Log In our bot
bot.login(process.env.CLIENT_TOKEN);