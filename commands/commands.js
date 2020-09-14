const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    /*
        try {
    
            var commandsEmbed = new discord.MessageEmbed()
            .setTitle("**Server Support**")
            .addFields()
            .setFooter("command list");
    
            message.author.send(commandsEmbed);
    
            message.reply("I have send you all available commands in your DM.");
    
        } catch (error) {
            message.reply("Woops, something went wrong. Please contact an admin.");
        }
    
    */

    var commandList = [];

    client.commands.forEach(command => {

        var constructor = {

            name: command.help.name,
            category: command.help.category,
            description: command.help.description,
            use: command.help.use
        };

        commandList.push(constructor);

    });

    var response = "**Server Support**\n";

    var main = "\n**__Main commands__**\n";
    var support = "\n**__Support commands__**\n";
    var other = "\n**__Other commands__**\n";
    //  var admin = "**__Admin commands__**\n";


    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if (command["category"] == "main") {
            main += `${command["use"]}: ${command["description"]}\n`;

        } else if (command["category"] == "support") {
            support += `${command["use"]}: ${command["description"]}\n`;

        } else if (command["category"] == "other") {
            other += `${command["use"]}: ${command["description"]}\n`;

        }/* else if (command["category"] == "admin") {
            admin += `${command["use"]}: ${command["description"]}\n`;

        }*/

    }

    response += main;
    response += support;
    response += other;
//  response += admin;

    message.author.send(response).then(() => {
        message.channel.send("I have send you all available commands in your DM.");
    }).catch(() => {
        message.channel.send("Somehow I failed to DM you the list of commands. Do you have you DM turned off?");
    });
}

module.exports.help = {
    name: "commands",
    category: "support",
    description: "send an DM with all available commands.",
    use: "`!!commands`"
}