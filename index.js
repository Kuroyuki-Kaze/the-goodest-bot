const Discord = require('discord.js')
const client = new Discord.Client();
const { prefix, token } = require('./config.json')

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const { content } = msg;
    const patWhat = /(?:what)/gmi;
    const patDoes = /(?:does)/gmi;
    const patMean = /(?:meaning)|(?:mean)/gmi;
    const patIs = /(?:is)/gmi;
    const what = content.match(patWhat);
    const does = content.match(patDoes);
    const mean = content.match(patMean);
    const is = content.match(patIs);
    const pat = /([\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf])+/gm;
    if ((msg.channel.id === '651820911934177320' || msg.channel.id === '686049708673990656') && ((what != null && does != null && mean != null) || (what != null && does != null && mean != null))) {
        msg.channel.send("Are you trying to ask a question about the meaning of a word? Please use jisho.org or takoboto.org or our handy-dandy bot Kotoba (k!j <word>) or (k!k <word>) instead, as to not bother the people with questions that could be easily googled, :)");
        var japanese = content.match(pat);
        if (japanese != null) {
            msg.channel.send("https://jisho.org/search/" + japanese);
        }
    } else if (content === `${prefix}ping`) {
        msg.channel.send(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. `);
    }
});

client.login(token);