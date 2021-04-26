const discord = require("discord.js");
const { owner } = require("../../config.json");
module.exports = {
  name: "author",
  aliases: ["botdev", "dev"],
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `  ABOUT BOT DEVELOPER  `
      )
      .addField(
        " TAG",
        "```" + client.users.cache.get(owner).tag + "```"
      )
      .addField("Id", owner)
    
      .addField("Mention", "<@776494689703559208>" )
    
      .addField(" About",  `\`THE CREATOR OF THE BOT Is TOM 
HE IS A PROFSSIONAL SERVER DESIGNER, MANAGER\`` )
      .addField(
        "website",
        "(https://avita.zyrosite.com)"
      )
      .addField(" Code Library", "discord.js")
      .setColor("RED")
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.react("815466828028969000");

    message.channel.send(embed);
  }
};
