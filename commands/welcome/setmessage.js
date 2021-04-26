const db = require("quick.db");
const { prefix } = require("../../config.json");
const { msg } = require("../../server.js");
const discord = require("discord.js");

module.exports = {
  name: "setmessage",

  aliases: ["setwmessage", "setwmsg", "setmessage"],

  category: "moderation",

  usage: `${prefix}setmessage <message>`,

  description: "Change the guild prefix",

  run: async (client, message, args) => {
    //PERMISSION

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have enough powers");
    }

    if (!args[0]) {
      return message.channel.send("Please give the message to set");
    }

    let msg = args.slice(0).join(" ");

    db.set(`msg_${message.guild.id}`, `${msg}`);

    let embed = new discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.avatarURL({ dynamic: true, size: 2048 })
      )

      //    .setThumbnail(
      //      message.author.displayAvatarURL({ dynamic: true, size: 2048 })
      //   )

      .setColor("#ff0073")
      .addField(
        "━━━━━━━━━━━━━━━━━━━━━",

        `

**MEMBER USERNAME :-** __**${message.author.tag}**__

**MEMBER COUNT :-** **__${message.guild.memberCount}__**

`
      )

      .addField(
        "━━━━━━━━━━━━━━━━━━━━━",

        `

**THANKS FOR JOINING ${message.guild}** `
      )

      .setAuthor(message.guild)
      .setTitle("━━━━━━━━━━━━━━━━━━━━━")
      // .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("#ff0073")
      //   .setImage(url)
      .setTimestamp()
      .setDescription(msg)
      .setFooter(message.guild, message.guild.iconURL());

    message.channel.send(embed);
  }
};
