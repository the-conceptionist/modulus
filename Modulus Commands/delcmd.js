module.exports = {
    exec: (message) => {
        var fs = require("fs")
        var list = require("../moduluscmdlist.json")
        var args = message.content.split(" ").slice(2)
        var cmdname = args[0]
        var codepath = list[cmdname].fullpath
        
        //Remove it from the List™
        delete list[cmdname]
        fs.writeFileSync("../moduluscmdlist.json", JSON.stringify(list, null, 4))
        
        //Kill the code file
        fs.unlinkSync(codepath);
        
        //Respond
        message.reply(cmdname + " is now dead. There will be no burial.")
    },
    info: "Removes a command from existence.",
    admin: true
}