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
        console.log(`Het bestand '${f}' is geladen`);

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
    client.user.setActivity("!!help", { type: "LISTENING" });

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

//chatfilter; no chat except commands
client.on("message", async message => {

    var registerWhitelist = ["!!reregister", "!!help", "!!commands"];
    var buggWhitelist = ["!!bugg"];
    var suggestionWhitelist = ["!!suggestion"];
    var Admin = message.guild.roles.cache.find(role => role.name === "Admin"); //const Admin = guild.roles.cache.find(role => role.id === "754040127394938971");
    var bot = message.guild.roles.cache.find(role => role.name === "BOT");
    var register4Channel = message.guild.channels.cache.find(channel => channel.id === "754000794197557269");
    var buggReportChannel = message.guild.channels.cache.find(channel => channel.id === "758326142813077544");
    var suggestionChannel = message.guild.channels.cache.find(channel => channel.id === "754907494094077962");

    let foundInText = false;

    if (message.channel.id === register4Channel.id) {
        for (var i in registerWhitelist) {
            if (message.content.toLowerCase().includes(registerWhitelist[i].toLowerCase())) foundInText = true;
        }
        if (message.member.roles.cache.has(Admin.id)) return;
        if (message.member.roles.cache.has(bot.id)) return;
        if (!foundInText) {
            message.delete();
            message.channel.send("You can only type certain commands here!").then(msg => msg.delete({ timeout: 5000 }));
        }
    }
    if (message.channel.id === buggReportChannel.id) {
        for (var i in buggWhitelist) {
            if (message.content.toLowerCase().includes(buggWhitelist[i].toLowerCase())) foundInText = true;
        }
        if (message.member.roles.cache.has(Admin.id)) return;
        if (message.member.roles.cache.has(bot.id)) return;
        if (!foundInText) {
            message.delete();
            message.channel.send("Please use the pinned format to report!").then(msg => msg.delete({ timeout: 5000 }));
        }
    }
    if (message.channel.id === suggestionChannel.id) {
        for (var i in suggestionWhitelist) {
            if (message.content.toLowerCase().includes(suggestionWhitelist[i].toLowerCase())) foundInText = true;
        }
        if (message.member.roles.cache.has(Admin.id)) return;
        if (message.member.roles.cache.has(bot.id)) return;
        if (!foundInText) {
            message.delete();
            message.channel.send("Please post suggestions using the pinned format!").then(msg => msg.delete({ timeout: 5000 }));
        }
    }
});