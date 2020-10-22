const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.delete();
    return message.channel.send("I'm sorry. This command is still in progress and can't be used yet. If you have to perform this command, ask an admin to help you with whatever this command should have done.").then(msg => msg.delete({ timeout: 5000 }));

}

module.exports.help = {
    name: "reregister",
    category: "support",
    description: "If you have to go through the register phase again, for whatever reason, you can use this command.",
    use: "`!!reregister`"
}