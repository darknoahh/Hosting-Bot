const discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: [""],
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT  HELP MENU `)
      .setDescription(
        `
 __**🛠 | MODERATION COMMANDS**__ 
\`addemoji,addrole,removerole,emoji,whois,announce,clear[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`

 __**🎭 | FUN COMMANDS**__ 
\`advice,anime,ascii,cat,cry,dog,fact,hug,joke,kiss,math,meme,neko,pat,punch,say,slap,tell,!tweet,dicksize,hoggay\`

 __**🏮| WELCOME COMMANDS**__  
\`setwelcome,setmessage,rsetwelcomemsg,rsetwelcomeimg,!rsetwimg,!wexample\`

 __**ℹ | UTILITY COMMANDS**__ 
\`giveaway,math,idp,avatar,serverinfo,hastebin,imdb,membercount,weather,ping,pokemon,servericon\`

 __**😷 | CORONA COMMANDS**__ 
\`corona all, corona<country>\`

 __**🎲 | GAMES COMMANDS**__ 
\`games,daily,work,fish,dep,check,balance,steal,send,slots,bet,rob\`
 
 __**🎼 | MUSIC COMMANDS **__
\`music,play,drop,jump,loop,pause,queue,np,skip,resume,stats.stop,update,,volume <amount>\`

 __**🛡 | ~~SECURITY COMMANDS~~ 🚧 | Premuim ...**__ 
\`anti-kick <count>,anti-ban <count>, anti-role-delete <count>,anti-role-create <count>,anti-channel-delete <count>,anti-channel-create <count>,anti-spam,anti-ping,anti-lisnks\`

 __**📚 | BOT INFO**__
\`botinfo,support,invite,author\`
`
      )    

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#7cfff5")
      .setFooter(`HELP MENU / Developer : Dark Noah 🍭#0001  | `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🆗");
  }
};
