// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: '' });

    

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// client.on("message", msg => {
//   if (msg.content === "ping") {
//     msg.reply("pong");
//   }
// })
client.on('messageCreate', msg => {
// You can view the msg object here with console.log(msg)
 if (msg.content === 'hello') {
   msg.reply(`Hello ${msg.author.username}`);
 }
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);