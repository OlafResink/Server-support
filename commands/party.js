const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    //  Fallguys Party request

    var fallguysPartyEmbed = new discord.MessageEmbed()
        .setTitle("**Let's Party**")
        .setDescription(`**${message.author.username}** is playing some fallguys. Who likes to join him/her in the party?\n\n*Please don't send personal information in this channel. Want to share your steam? please send this in DM.*`)
        .setColor("#00BBFF")
        .setFooter("Fallguys party request")
        .setThumbnail("https://i0.wp.com/www.buttonsmashgamers.com/wp-content/uploads/2020/08/FallGuys3.png?fit=1200%2C1099");
    
    var channel = message.member.guild.channels.cache.get("754059320974377030");
    if(!channel) return message.reply("Woops, something went wrong... Please contact an admin.");

    message.delete();

    channel.send(fallguysPartyEmbed);

}

module.exports.help = {
    name: "party",
    category: "main",
    description: "sends a party request.",
    use: "`!!party`"
}