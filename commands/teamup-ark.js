const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

//    if (!args[0]) return message.channel.send("You didn't told me the game.");


    //embeds

    //  ARK
    var arkEmbed = new discord.MessageEmbed()
        .setTitle("**Join me!**")
        .setDescription(`**${message.author.username}** is playing ARK. But playing alone is so lonely and boring. Who joins ${message.author.username} and brings some fun?`)
        .setColor("#00BBFF")
        .setThumbnail("https://i.pinimg.com/originals/1d/01/30/1d01304174bbe64965d47559c61470cb.png");

    var arkChannel = message.member.guild.channels.cache.get("755688816114794566");
    if (!arkChannel) return message.channel.send("Woops, something went wrong... Please contact an admin.");

    message.delete();

    //message send
    arkChannel.send(arkEmbed);

}

module.exports.help = {
    name: "teamup-ark",
    category: "main",
    description: "sends a request for players to join you.",
    use: "`!!teamup-ark`"
}