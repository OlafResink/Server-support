const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const Trello = require("trello");

module.exports.run = async (client, message, args) => {


    message.channel.send("I'm sorry, i have some problems with the host. Please use my mentor @testbot *(prefix ><)* when he is online, so your report can be send to our trello so we can work on it. If the bot is offline and you can't wait for it, please send your bugg to @P_p__n.");

    /*
        message.delete();
        var report = args.join(' ');
        if (!report) return message.reply("You didn't report anything!").then(msg => msg.delete({ timeout: 5000 }));;
    
        var response = 'Report submitted!'
    
        var reportChannel = message.member.guild.channels.cache.get("758326142813077544");
        if (!reportChannel) return message.reply("Woops, something went wrong... Please contact an admin.");
        var errorChannel = message.member.guild.channels.cache.get("754059320974377030");
    
    
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
    
        trello.addCard(data, function (error, trelloCard) {
            if (error) {
                console.log(error);
                reportChannel.send("something went wrong. We didn't get your repot in our trello. Please try again or contact an admin.");
                errorChannel.send(error);
            } else {
                reportChannel.send(response);
            }
    
        });
    
    */
}

module.exports.help = {
    name: "bugg",
    category: "other",
    description: "Send a bugg report to our trello.",
    use: "`!!bugg <description>`"
}