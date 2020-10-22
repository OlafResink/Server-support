const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    message.delete();
    var suggestion = args.join(' ');
    if (!suggestion) return message.reply("You didn't suggest anything!").then(msg => msg.delete({ timeout: 5000 }));;

    var suggestionEmbed = new discord.MessageEmbed()
        .setTitle("**Suggestion**")
        .setDescription(`__${message.author} suggested:__\n${suggestion}`)
        .setColor("#00BBFF")
        .setFooter("What do you think of this? Vote using the emoji's");

    var suggestionChannel = message.member.guild.channels.cache.get("754907494094077962");
    if (!suggestionChannel) return message.reply("Woops, something went wrong... Please contact an admin.");

    suggestionChannel.send(suggestionEmbed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');
    });



    //trello
    var apiKey = botConfig.trelloApiKey;
    var oauthToken = botConfig.trelloToken;

    var Trello = require('trello-node-api')(apiKey, oauthToken);

    var data = {
        name: `${message.author.name}`,
        desc: `${suggestion}`,
        pos: 'bottom',
        idList: '5f6b48e5b9b506527c209999', //REQUIRED

    };

    try {
        Trello.card.create(data);
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }

}

module.exports.help = {
    name: "suggestion",
    category: "other",
    description: "send a suggestion people can vote on.",
    use: "`!!suggestion <suggestion>`"
}