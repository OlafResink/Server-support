const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    var report = args.join(' ');
    if (!report) return message.reply("You didn't report anything!");

    var response = 'Report submitted!'

    var reportChannel = message.member.guild.channels.cache.get("758326142813077544");
    if (!reportChannel) return message.reply("Woops, something went wrong... Please contact an admin.");

    message.delete();

    reportChannel.send(response);



    //trello
    var apiKey = botConfig.trelloApiKey;
    var oauthToken = botConfig.trelloToken;

    var Trello = require('trello-node-api')(apiKey, oauthToken);

    var data = {
        name: `${message.author.name}`,
        desc: `${report}`,
        pos: 'bottom',
        idList: '5f6b5b8603ae5538a3c6ac96', //REQUIRED

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
    name: "bugg",
    category: "other",
    description: "Send a bugg report to our trello.",
    use: "`!!bugg <description>`"
}