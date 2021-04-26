const discord = require("discord.js");
const { prefix } = require("../../config.json");
const db = require("quick.db");

module.exports = {
  name: "welcomeexample",

  aliases: ["wexample"],

  category: "moderation",

  description: "Test the welcome",

  run: async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;

    let default_url = `https://media.discordapp.net/attachments/596216470397255690/818195770124795945/mOZpPGs.gif`; //default msg mtt change krna yeh hyper ke liye lagaye hai ek baar custom msg shi ho gaya toh isko bhi shi kr denge

    let default_msg = `
    You Can Change This By Using \n\n${prefix}setwelcomemessage <msg> or ${prefix}setwmsg <msg> \n\nUse ${prefix}setwimg <url> to change default image \n\nall other things except these cannot be changed.
`;

    let msg = db.get(`msg_${member.guild}`);

    if (msg === null) msg = default_msg;

    let url = db.get(`url_${member.guild}`);

    if (url === null) url = default_url;

    let embed = new discord.MessageEmbed()

      .setAuthor(
        message.author.username,
        message.author.avatarURL({ dynamic: true, size: 2048 })
      )
      .setThumbnail(
      message.author.displayAvatarURL({ dynamic: true, size: 2048 })
      )

      .setColor("#11ff01")
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

 **THANKS FOR JOINING ${message.guild}**`
      )

      .setAuthor(message.guild)
      .setTitle("━━━━━━━━━━━━━━━━━━━━━")
      // .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("#ff0073")
      .setImage(url)
      .setTimestamp()
      .setDescription(msg)
      .setFooter(message.guild, message.guild.iconURL())

    message.channel.send(embed);
  }
};
