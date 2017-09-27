const Discord = require("discord.js");
const mybot = new Discord.Client();
const fs = require("fs");
var config = require('./config.json')
const concept = "120627061214806016"
var prefix = config.prefix

mybot.on("ready", ()=> {
    console.log("Modulus ready.")
    mybot.user.setGame("with modular commands.")
})

mybot.on("message", message => {
    delete require.cache[require.resolve("./moduluscmdlist.json")]
    
    var list = require("./moduluscmdlist.json")
    
    var tlc = message.content.toLowerCase();
    var targs = tlc.split(" ").slice(1)
    var tcmd = targs[0]
    var args = message.content.split(" ").slice(1)
    var cmd = args[0]
    
    if(!tlc.startsWith(prefix)) {
        return;
    }
    
    if(list.hasOwnProperty(tcmd)) {
        delete require.cache[require.resolve(list[tcmd].path)]
        var command = require(list[tcmd].path)
        if(command.admin && message.author.id != concept) {
            return;
        }
        command.exec(message)
        console.log("Executed " + tcmd)
    }
})

mybot.login(config.token)