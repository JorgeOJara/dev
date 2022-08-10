require('dotenv').config();
// const cleverbot require("cleverbot-free");
const { Client, Intents, GatewayIntentBits} = require('discord.js');

// testing
const smartestchatbot = require('smartestchatbot');
const chater = new smartestchatbot.Client();

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions
    ],
    partials: ['CHANNEL', 'MESSAGE', 'REACTION']
   });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user.id)) {
        console.log(message.content);
        message.reply("stop texting, nobody cares..");
    chater.chat({message: message, name:"SmartestChatbot", owner:message.author.username, user: message.author.id}, "en").then(reply => {
    message.reply(reply)
      });
    }
    
    if(message.author != message.author.bot){
        console.log(message)
         message.reply('no one cares..'+ message.author.username)
    }

});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);