require('dotenv').config();

const axios = require('axios').default;

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
  .setColor(0xff00e1)
  .setTitle('Thanks for asking....')
  .setDescription("  Lets talk about Some Commands I understand")
  .addFields(
    { name: 'Use ?roll YdX ', value: 'such as 3d6, to roll dice. ' },
    { name: 'Use ?sheet ', value: 'if you dont have a character yet, to get a blank character sheet. ', inline: true }
  )
  // .setImage('https://w0.peakpx.com/wallpaper/428/729/HD-wallpaper-alita-battle-angel-alita-alita-angel-alita-battle-alita-battle-angel-angel-art-battle-battle-angel-drawing-girl.jpg')
  .setImage('https://www.pngmart.com/files/22/Alita-PNG-Pic.png')
  
  .setTimestamp()
  .setFooter({ 
    text: 'I Hope that helps...',
       // iconURL: 'https://i.imgur.com/AfFp7pu.png'
    });

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
// get my Characters................................

    if(message.content === "?Characters" || message.content === "?characters"){
        // message.author.tag
        let pen = { user : message.author.tag }
         axios.post('https://harnforge.com/getCh', pen).then(function(response) {

            let chs = response.data;

            chs.map( d => {
            const exampleEmbed = new EmbedBuilder().setColor(0xff00e1).setTitle('Profile')
              // .setDescription("")
              .setThumbnail(d.Avatare)
              .addFields(
                   { name : "Name ", value : d.Name,inline:true  },
                   { name : "Race ", value :  d.Race ,inline:true },
                   { name : "Sex ", value : d.Sex ,inline:true },
                )

             message.channel.send({ embeds: [exampleEmbed] }); 
                  // end map
              })
           });   
             // end
       }



     //  get data from single Character

       if(message.content.startsWith("?display"))
       {
              try{
                 let check = message.content.split(" ");
                 let chName = check[1];

                 let pen = { member : message.author.tag ,  name : chName };

                  axios.post('https://harnforge.com/usRemcon', pen).then(function(response) 
                  {
                       console.log(response.data)
                  });

              }catch {

              }
       }

});
// https://www.pngmart.com/files/22/Alita-PNG-Pic.png
// Log In our bot
client.login(process.env.CLIENT_TOKEN);















