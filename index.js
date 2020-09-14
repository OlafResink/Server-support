const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();
//client.login(botConfig.token);
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kan geen bestanden vinden!");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`Het bestand '${f}' is gelanden`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.on("guildMemberAdd", member =>{

    var role = member.guild.roles.cache.get('754005107099697172');
    var roleCat = member.guild.roles.cache.get('754005087281741904');
/*    var noRole = `Something went wrong with autorole. ${member} hasn't got his roles!! Please give him his role manually('step 1').`

    var errorChannel = member.guild.channels.cache.get("754059320974377030");
    if(!errorChannel) return message.reply("Woops, something went wrong... Please contact an admin.");
*/    
    if(!role) return; //errorChannel.send(noRole);
    if(!roleCat) return; //errorChannel.send(noRole);

    member.roles.add(role);
    member.roles.add(roleCat);

    


})

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Looking for commands...", { type: "CUSTOM_STATUS" });

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);

});

client.login(process.env.token);