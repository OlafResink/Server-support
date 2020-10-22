const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    return message.channel.send("I'm sorry. This command is still in progress and can't be used yet. If you have to perform this command, ask an admin to help you with whatever this command should have done.");

}

module.exports.help = {
    name: "reregister",
    category: "support",
    description: "If you have to go through the register phase again, for whatever reason, you can use this command.",
    use: "`!!reregister`"
}