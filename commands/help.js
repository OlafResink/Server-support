const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var helpEmbed = new discord.MessageEmbed()
    .setTitle("**Server support**")
    .setDescription(`If you need help, please join '__Waiting for help__' or text an admin. If you want to see an overview of all available commands, type '__!!commands__'`)
    .setColor("#FF2200")
    .setFooter("Server support")

}

module.exports.help = {
    name: "help",
    category: "support",
    description: "shows you where you can get help.",
    use: "!!help"
}