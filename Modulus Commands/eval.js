module.exports = {
    exec: (message) => {
        var util = require("util")
        var args = message.content.split(" ").slice(2)
        var toeval = args.join(" ")
        var mybot = message.client
        
        try {
            message.channel.sendMessage("", {"embed": {"author": {"name": "Eval"}, "fields": [{"name": "Input: ", "value": "`" + toeval + "`"}, {"name": "Output: ", "value": "```js\n" + util.inspect(eval(toeval)) + "```"}], "color": 0x00E6E6, "footer": {"icon_url": mybot.user.avatarURL, "text": "Evaluated by Modulus"}, "timestamp": new Date()}})
        } catch(e) {
            message.channel.sendMessage("", {"embed": {"author": {"name": "Eval"}, "fields": [{"name": "Input: ", "value": "`" + toeval + "`"}, {"name": "Error: ", "value": "```js\n" + e.stack + "```"}], "color": 0x00E6E6, "footer": {"icon_url": mybot.user.avatarURL, "text": "Evaluated by Modulus"}, "timestamp": new Date()}})
        }
    },
    info: "Let's do shit yo",
    admin: true
}