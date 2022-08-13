require('dotenv').config();

const random = require('random')

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
      if (message.content === "?help") {
            message.reply("Help yourself");
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
         let addedNumber;
         let operation;
         let constructor = [];

         let findResult = final[1].split("+")

         if( findResult.length == 2 )
         {
            let template = final[1].split("+");
                addedNumber = Number(template[1]);
                constructor.push(final[0])
                constructor.push(findResult[0])

         }else if(findResult.length == 1){
           let template = final[1].split("-");
               makeNumber = Number(template[1]);
               addedNumber = -Math.abs(makeNumber);
               constructor.push(final[0])
               constructor.push(findResult[0])
          }

        // loop
         let completed = [];
         let total = 0;

             for (let i = 0; i < constructor[0]; i++) 
               {
                    let num = random.int(1, Number(constructor[1]));
                    completed.push(num);
                    total += num;
               }
     let add =  total + addedNumber;

      message.reply(completed.toString() + " Total : " + add);

     } catch (error) {
         console.error(error);
       }  
    }
//////////////////////////////////////////

    //  reply if you say something

    if(message.content ==="?file"){
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



