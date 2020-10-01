const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    //channels
    var fallguysChannel = message.member.guild.channels.cache.get("754059320974377030");
    var minecraftChannel = message.member.guild.channels.cache.get("754906584269979659");
    var amongUsChannel = message.member.guild.channels.cache.get("758019482865369208");
    var fsChannel = message.member.guild.channels.cache.get("755691186618105977");
    var arkChannel = message.member.guild.channels.cache.get("755688816114794566");


    message.delete();

    //embeds
    var fallguysEmbed = new discord.MessageEmbed()
        .setTitle("**Let's Party**")
        .setDescription(`**${message.author.username}** is playing some fallguys. Who likes to join him/her in the party?\n\n*Please don't send personal information in this channel. Want to share your steam? please send this in DM.*`)
        .setColor("#00BBFF")
        .setFooter("Fallguys party request")
        .setThumbnail("https://i0.wp.com/www.buttonsmashgamers.com/wp-content/uploads/2020/08/FallGuys3.png?fit=1200%2C1099");

    var minecraftEmbed = new discord.MessageEmbed()
        .setTitle("**Let's Party**")
        .setDescription(`**${message.author.username}** is playing some minecraft. Who likes to join him/her in the party on hypixel, cubecraft or whatever server you want to party on?`)
        .setColor("#00BBFF")
        .setFooter("minecraft party request")
        .setThumbnail("https://i.pinimg.com/originals/2f/0e/d6/2f0ed6c104e8c4d33547d07f46a3ab00.png");

    var amongUsEmbed = new discord.MessageEmbed()
        .setTitle("**Let's Party**")
        .setDescription(`**${message.author.username}** is playing Among Us. Who likes to join him/her in the party?`)
        .setColor("#00BBFF")
        .setFooter("Among Us party request")
        .setThumbnail("https://www.among-us.io/wp-content/uploads/2020/09/among-us-icon.jpg");

    var fsEmbed = new discord.MessageEmbed()
        .setTitle("**Join me!**")
        .setDescription(`**${message.author.username}** is playing farming simulator. But playing alone is so lonely and boring. Who joins ${message.author.username} and brings some fun?`)
        .setColor("#00BBFF")
        .setThumbnail("https://cdbe.files.wordpress.com/2018/09/fs19-logo-compact-en.png");

    var arkEmbed = new discord.MessageEmbed()
        .setTitle("**Join me!**")
        .setDescription(`**${message.author.username}** is playing ARK. But playing alone is so lonely and boring. Who joins ${message.author.username} and brings some fun?`)
        .setColor("#00BBFF")
        .setThumbnail("https://i.pinimg.com/originals/1d/01/30/1d01304174bbe64965d47559c61470cb.png");









    var incorrectChannel = "Sorry, i am not smart enough to understand what you want. Every game has it's own category and every category has a '#chat' channel. Please use this command in the '#chat' channel of the game you want to play."


    //send
    if (message.channel.name == 'chat') {
        if (message.channel.id == fallguysChannel) {
            fallguysChannel.send(fallguysEmbed)
        }
        if (message.channel.id == minecraftChannel) {
            minecraftChannel.send(minecraftEmbed)
        }
        if (message.channel.id == amongUsChannel) {
            amongUsChannel.send(amongUsEmbed)
        }
        if (message.channel.id == fsChannel) {
            fsChannel.send(fsEmbed)
        }
        if (message.channel.id == arkChannel) {
            arkChannel.send(arkEmbed)
        }
    }
    else message.channel.send(incorrectChannel);



    //error
    //  if (!fallguysChannel) return message.reply("Woops, something went wrong... Please contact an admin.")

}

module.exports.help = {
    name: "teamup",
    category: "main",
    description: "Sends a request for players to join you.",
    use: "`!!teamup`"
}