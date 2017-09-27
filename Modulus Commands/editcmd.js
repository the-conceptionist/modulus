module.exports = {
    exec: (message) => {
        var fs = require("fs")
        var list = require("../moduluscmdlist.json")
        var args = message.content.split(" ").slice(2)
        var cmdname = args[0]
        
        //Write the new code to the file
        var thecmd = args.slice(1).join(" ")
        fs.writeFileSync(list[cmdname].path, thecmd)
        
        //Respond
        message.reply(cmdname + " has been edited.")
    },
    info: "Edits a command's code.",
    admin: true
}