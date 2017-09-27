module.exports = {
    exec: (message) => {
        var fs = require("fs")
        var config = require("../config.json")
        var baseloc = config.baseloc
        var list = require("../moduluscmdlist.json")
        var args = message.content.split(" ").slice(2)
        var cmdname = args[0]
        
        //Write the new command to the list file
        list[cmdname] = {
            path: "./Modulus Commands/" + cmdname + ".js",
            fullpath: baseloc + "/Modulus Commands/" + cmdname + ".js"
        }
        fs.writeFileSync("../moduluscmdlist.json", JSON.stringify(list, null, 4))
        
        //Make the command file itself
        var thecmd = args.slice(1).join(" ")
        fs.closeSync(fs.openSync(list[cmdname].path, 'w'))
        fs.writeFileSync(list[cmdname].path, thecmd)
        
        //kk
        message.reply("command " + cmdname + " has been created.")
    },
    info: "Adds a new command.",
    admin: true
}