module.exports = {
    exec: (message) => {
        var fs = require("fs")
        var list = require("../moduluscmdlist.json")
        var args = message.content.split(" ").slice(2)
        var cmdname = args[0]
        var _ = require("underscore")
        
        //Check if it isn't there
        if(_.isEmpty(list[cmdname])) {
            return message.reply("that command isn't listed...")
        }
        
        //Get it off of the List™
        delete list[cmdname]
        fs.writeFileSync("../moduluscmdlist.json", JSON.stringify(list, null, 4))
        
        //Respond
        message.reply(cmdname + " is no longer on the list.")
    },
    info: "Removes a command from the list file without deleting the code.",
    admin: true
}