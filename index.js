const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();
client.login(botConfig.token);
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

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Looking for commands...", { type: "CUSTOM_STATUS" });

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

//    if(!message.content.startsWith(prefix)) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);

});

client.login(process.env.token);