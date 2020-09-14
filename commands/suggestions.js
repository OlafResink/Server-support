const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var suggestion = args.join(' ');
    if(!suggestion) return message.reply("You didn't suggest anything!");

    var suggestionEmbed = new discord.MessageEmbed()
    .setTitle("**Suggestion**")
    .setDescription(`__${message.author} suggested:__\n${suggestion}`)
    .setColor("#00BBFF")
    .setFooter("What do you think of this? Vote using the emoji's");

    var suggestionChannel = message.member.guild.channels.cache.get("754907494094077962");
    if(!suggestionChannel) return message.reply("Woops, something went wrong... Please contact an admin.");

    message.delete();

    suggestionChannel.send(suggestionEmbed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');
    });

}

module.exports.help = {
    name: "suggestion",
    category: "other",
    description: "send a suggestion people can vote on.",
    use: "`!!suggestion <suggestion>`"
}