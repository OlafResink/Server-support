const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
/*
    try {

        var text = "**Server support**\n\n**__Commands__**\n";

        message.author.send(text);

        message.reply("I have send you all available commands in your DM.");

    } catch (error) {
        message.reply("Woops, something went wrong. Please contact an admin.");
    }

*/

    var commandList = [];

    client.commands.forEach(command => {

        var item = {

            name: command.help.name,
            category: command.help.category,
            description: command.help.description,
            use: command.help.use
        };

        commandList.push(item);

    });


    var responseMain = "";

    if (commandList[i]["category"] == "Main") {

        for (var i = 0; i < commandList.length; i++) {

            responseMain += `${commandList[i]["use"]} - ${commandList[i]["description"]} \r\n`


        }

    }

    var responseSupport = "";

    if (commandList[i]["category"] == "support") {

        for (var i = 0; i < commandList.length; i++) {

            responseSupport += `${commandList[i]["use"]} - ${commandList[i]["description"]} \r\n`


        }

    }

    var responseother = "";

    if (commandList[i]["category"] == "other") {

        for (var i = 0; i < commandList.length; i++) {

            responseother += `${commandList[i]["use"]} - ${commandList[i]["description"]} \r\n`


        }

    }

    var responseAdmin = "";

    if (commandList[i]["category"] == "Admin") {

        for (var i = 0; i < commandList.length; i++) {

            responseAdmin += `${commandList[i]["use"]} - ${commandList[i]["description"]} \r\n`


        }

    }

        var text = `**Server support**\n\n**__Main commands__**\n${responseMain}\n\n**__Support__**\n${responseSupport}\n\n**__Other__**\n${responseOther}`;
        var textAdmin = `**Server support**\n\n**__Main Commands__**\n${responseMain}\n\n**__Support__**\n${responseSupport}\n\n**__Other__**\n${responseOther}\n\n**__Admin__**\n${responseAdmin}`;
    
        var roleAdmin = member.guild.roles.cache.get('754005107099697172');
        if (message.member.hasRole(roleAdmin)) {

            message.author.send(textAdmin);

        } else message.author.send(text);

        message.reply("I have send you all available commands in your DM.");

    


}

module.exports.help = {
    name: "commands",
    category: "support",
    description: "send an DM with all available commands.",
    use: "!!commands"
}