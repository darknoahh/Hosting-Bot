const discord = require("discord.js");
module.exports = {
  name: "support",
  category: "help",
  description: "SUPPORT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`SUPPORT SERVER`)
    .setDescription(`[JOIN NOW](https://discord.gg/ZBBpmWJtey)`)
    .setColor("RANDOM")
    .setFooter(`Dev : ✧Dark Noah✧#0001`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}