const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
  name: "cat",
  category: "FUN",
description: "Sends a random image of a cat",
usage: "[command]",
run: async (client, message, args, level) => {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Cute Kitty")
  .setImage(response.body.url)
  .setColor(`RED`)
  .setFooter(`Bot developed by - TOM `)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};