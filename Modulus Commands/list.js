module.exports = {
    exec: (message) => {
        var fs = require("fs")
        var list = require("../moduluscmdlist.json")
        var config = require("../config.json")
        var baseloc = config.baseloc
        var args = message.content.split(" ").slice(2)
        var cmdname = args[0]
        var _ = require("underscore")
        
        //Check if it's already there
        if(!_.isEmpty(list[cmdname])) {
            return message.reply("that command is already listed...")
        }
        
        //Put the file into the List™
        list[cmdname] = {
            path: "../Modulus Commands/" + cmdname + ".js",
            fullpath: baseloc + "/Modulus Commands/" + cmdname + ".js"
        }
        fs.writeFileSync("../moduluscmdlist.json", JSON.stringify(list, null, 4))
        
        //Respond
        message.reply(cmdname + " is now on the command list. Huzzah.")
    },
    info: "Adds a manually made command to the list file.",
    admin: true
}