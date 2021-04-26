const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`HERE INVITE LINK OF BOT `)
      .setDescription(
        `[INVITE BOT](https://discord.com/api/oauth2/authorize?client_id=723852138610032720&permissions=8&scope=bot)`
      )
      .setColor("#00ff00")
      .setFooter("Requested By :-" + message.author.tag,
        message.author.displayAvatarURL())
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
