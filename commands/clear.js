const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have acces to this command!");

    if (!args[0]) return message.reply("You didn't tell me how many messages I have to remove");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("How do you expect me to remove 0 messages? :p").then(msg => msg.delete({ timeout: 3000 }));

            } else if (args[0] == 1) {
                message.reply("I removed the last message for you.").then(msg => msg.delete({ timeout: 3000 }));

            } else if (args[0] >= 100) {
                message.reply("I'm sorry, that is to much for me. Please give a number between 1 and 99.").then(msg => msg.delete({ timeout: 3000 }));

            } else {
                message.reply(`I removed the last ${args[0]} messages for you.`).then(msg => msg.delete({ timeout: 3000 }));

            }
        })

    } else {
        return message.reply("That's not a number!");
    }


}

module.exports.help = {
    name: "clear",
    category: "admin",
    description: "Remove the last X messages.",
    use: "!!clear <amount>"
}