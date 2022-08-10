require('dotenv').config();
// const cleverbot require("cleverbot-free");
const { Client, Intents, GatewayIntentBits} = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions
    ]
   });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('messageCreate', (message) => {
//   if (message.author.bot) return;

//   if (message.mentions.has(client.user.id)) {
//         console.log(message.content);
//         message.reply("dont care..");
//     }
    

//     if(message.author != message.author.bot){
//         console.log(message)

//          message.reply('no one cares..'+ message.author.username)
//     }
// });

//Listen to new messages on the server
client.on("messageCreate", async (message) => {
  if (message.content === "ping" or message.author != message.author.bot) {
    message.reply("pong");
  }

   // if(message.author != message.author.bot){
   //      console.log(message)

   //       message.reply('no one cares..'+ message.author.username)
   //  }
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);