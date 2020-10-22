const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const member = message.member;

    //roles
    const roleStreamer = member.guild.roles.cache.find(role => role.id === "763434577632296971");
    const roleMember = member.guild.roles.cache.find(role => role.id === "754039854005747744");

    message.delete();

    if (!roleMember) return;

    if (!args[0]) return message.channel.send("You must tell me which role you want, using: `!!getrole <role>`.\n*at this moment, only the `Streamer` role is available to claim.*").then(msg => msg.delete({ timeout: 12000 }));
    //giverole
    if (args[0] === 'Streamer' || args[0] === 'streamer') {
        member.roles.add(roleStreamer);
        message.reply('You now have the streamer role. Happy streaming!').then(msg => msg.delete({ timeout: 12000 }));


    }





    /*
        //logging
        if (roleStreamer) {
            console.log(`Found the role ${roleStreamer.name}`)
        };
    */


}

module.exports.help = {
    name: "getrole",
    category: "other",
    description: "Assign a role to yourself. (A.t.m. only streamer role)",
    use: "`!!getrole <role>`"
}