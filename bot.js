require('dotenv').config();

const system = require('system-commands')

// const cleverbot require("cleverbot-free");
const { Client, Intents, GatewayIntentBits,Partials, Attachment } = require('discord.js');

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
    
    if(message.content  === "Sheet"){
      message.channel.send({
          files: [{
          attachment: 'Fillable_Character_Sheet.pdf',
          name: 'sheet.pdf'
         }]
      })
    }
    //  reply if you say something

    if(message.author != message.author.bot){
      console.log(message.attachments);

      message.attachments.forEach(attachment => {
        const ImageLink = attachment.url;
        if (attachment.contentType === 'application/pdf'){
            console.log("safe...")
           system("wget " + ImageLink + " -P ./collection/");
         }else{console.log("ignore..")}
       });
        // console.log(message.attachments);
        message.reply("Stop talking...");
    }
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);



// const fs = require('fs')
// const pdfParse = require('pdf-parse')
// const getPDF = async (file) => {
//   let readFileSync = fs.readFileSync(file)
//   try {
//     let pdfExtract = await pdfParse(readFileSync)
//     console.log('File content: ', pdfExtract.text)
//     console.log('Total pages: ', pdfExtract.numpages)
//     console.log('All content: ', pdfExtract.info)
//   } catch (error) {
//     throw new Error(error)
//   }
// }
// const pdfRead = './demo.pdf'
// getPDF(pdfRead)