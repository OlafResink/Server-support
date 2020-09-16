const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

//    if (!args[0]) return message.channel.send("You didn't told me the game.");


    //embeds

    //  fs
    var fsEmbed = new discord.MessageEmbed()
        .setTitle("**Join me!**")
        .setDescription(`**${message.author.username}** is playing farming simulator. But playing alone is so lonely and boring. Who joins ${message.author.username} and brings some fun?`)
        .setColor("#00BBFF")
        .setThumbnail("https://cdbe.files.wordpress.com/2018/09/fs19-logo-compact-en.png");

    var fsChannel = message.member.guild.channels.cache.get("755691186618105977");
    if (!fsChannel) return message.channel.send("Woops, something went wrong... Please contact an admin.");

    message.delete();

    //message send
    fsChannel.send(fsEmbed);

}

module.exports.help = {
    name: "teamup-fs",
    category: "main",
    description: "sends a request for players to join you.",
    use: "`!!teamup-fs`"
}