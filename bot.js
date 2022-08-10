// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, Intents } = require('discord.js');
const client = new Client({ intents:""});

    

client.on("ready",()=>{
    console.log("Im online.....")
});


client.on("message", (message)=> {
   console.log(message.content)
})


// Log In our bot
client.login(process.env.CLIENT_TOKEN);