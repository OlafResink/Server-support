const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    //  minecraft Party request

    var minecraftPartyEmbed = new discord.MessageEmbed()
        .setTitle("**Let's Party**")
        .setDescription(`**${message.author.username}** is playing some minecraft. Who likes to join him/her in the party on hypixel, cubecraft or whatever server you want to party on?`)
        .setColor("#00BBFF")
        .setFooter("minecraft party request")
        .setThumbnail("https://i.pinimg.com/originals/2f/0e/d6/2f0ed6c104e8c4d33547d07f46a3ab00.png");
    
    var channel = message.member.guild.channels.cache.get("754906584269979659");
    if(!channel) return message.reply("Woops, something went wrong... Please contact an admin.");

    message.delete();

    channel.send(minecraftPartyEmbed);

}

module.exports.help = {
    name: "party-mc",
    category: "main",
    description: "sends a party request.",
    use: "`!!party-mc`"
}