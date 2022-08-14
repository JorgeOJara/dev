require('dotenv').config();

const random = require('random')

const system = require('system-commands')

// const cleverbot require("cleverbot-free");
const { Client, Intents, GatewayIntentBits,Partials, Attachment, EmbedBuilder , AttachmentBuilder } = require('discord.js');

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

  if (message.mentions.has(client.user.id)) {message.reply("stop texting, nobody cares..");}


//// help embeted
 
  if (message.content === "?help") 
       {
   const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Some title')
  .setURL('https://discord.js.org/')
  .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
  .setDescription('Some description here')
  .setThumbnail('https://i.imgur.com/AfFp7pu.png')
  .addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
  )
  .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
  .setImage('https://i.imgur.com/AfFp7pu.png')
  .setTimestamp()
  .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

         message.channel.send({ embeds: [exampleEmbed] });  
  }
    
    if(message.content  === "?Sheet" || message.content  === "?sheet"){
      message.channel.send({
          files: [{
          attachment: 'Fillable_Character_Sheet.json',
          name: 'sheet.json'
         }]
      })
    }

//////////////////////////////////// roll 100

if(message.content.startsWith("?roll")){
     try{
         let content = message.content.split(" ");
         let final = content[1].split("d");
          
         /// loop
         let completed = [];
         let total = 0;

             for (let i = 0; i < final[0]; i++) 
               {
                    let num = random.int(1, Number(final[1]));
                    completed.push(num);
                    total += num;
               }
      if(content.length  == 3 )
      {
         if(content[2].startsWith("+")){
               let taketheOperationOut = content[2].replace("+"," ");
               let mkNumber = Number(taketheOperationOut);
               let add  =  total + mkNumber;
                   message.reply(completed.toString() + " Total : " + add );
            }else{
               let taketheOperationOut = content[2].replace("-"," ");
               let mkNumber = Number(taketheOperationOut);
               let resValue  =  total - mkNumber;
               message.reply(completed.toString() + " Total : " + resValue );
            }
      }else{message.reply(completed.toString() + " Total : " + total);}
    } catch (error) {
         console.error(error);
       }  
    }
//////////////////////////////////////////

    if(message.content ==="?file"){
      console.log(message.attachments);
      message.attachments.forEach(attachment => {
        const ImageLink = attachment.url;
        if (attachment.contentType === 'application/pdf'){
             console.log("safe...")
           system("wget " + ImageLink + " -P ./collection/");
         }else{console.log("ignore..")}
       });
    message.reply("Stop talking...");}
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);



