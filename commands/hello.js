const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    return message.channel.send("Hi!");

}

module.exports.help = {
    name: "hello",
    category: "other",
    description: "Say hi to the bot.",
    use: "`!!hello`"
}