# Modulus
Modulus is a discord.js bot base for which you are to build upon. With it's ultra-simple modular system, it's very easy for commands to be added onto.

Modulus comes with a set of essential base commands that let you add on to the selection of commands it is provided with. You can even add commands from within Discord!

## Basic Setup
Upon downloading Modulus from the [Releases page](https://github.com/TheConceptionist/modulus/releases/), extract it to a folder. In my case it will be in my D:\Documents folder. You'll need to open config.json in your preferred code editing software, and it'll look something like this:
![JSON files are fun](http://i.imgur.com/9JAJN58.png)
The things in quotes need to be replaced with what they say. `prefix` is the prefix (duh), `token` is the user token you were provided with on the [Discord Developers Website](https://discordapp.com/developers/applications/me). `baseloc` is the file location of the bot files. In my case, it would be `D:\Documents\Modulus`. `oid` would be your Discord user ID. After filling those in, you'll be set.

## Adding commands
### Within Discord
To add a command within our favorite VOIP service, you use `addcmd` to make that happen.

#### One-Line commands
![This is way hella simple™](http://i.imgur.com/vFlOlZj.png)

#### Multi-line commands
![Still pretty simple.](http://i.imgur.com/zVa87Ny.png)