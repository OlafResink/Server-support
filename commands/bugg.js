const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const Trello = require("trello");

module.exports.run = async (client, message, args) => {

    message.delete();
    var report = args.join(' ');
    if (!report) return message.reply("You didn't report anything!").then(msg => msg.delete({ timeout: 5000 }));;

    var response = 'Report submitted!'

    var reportChannel = message.member.guild.channels.cache.get("758326142813077544");
    if (!reportChannel) return message.reply("Woops, something went wrong... Please contact an admin.");


    //trello
    const apiKey = botConfig.trelloApiKey;
    const oauthToken = botConfig.trelloToken;
    var trello = new Trello(apiKey, oauthToken);
    var data = {
        name: `${message.author.name}`,
        desc: `${report}`,
        pos: 'bottom',
        idList: '5f6b5b8603ae5538a3c6ac96', //REQUIRED

    };

    try {
        trello.card.create(data);
        reportChannel.send(response);
    } catch (error) {
        console.log(error);
        reportChannel.send("something went wrong. We didn't get your repot in our trello. Please try again or contact an admin.");
    }
}

module.exports.help = {
    name: "bugg",
    category: "other",
    description: "Send a bugg report to our trello.",
    use: "`!!bugg <description>`"
}