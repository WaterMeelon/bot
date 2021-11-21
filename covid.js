//modüller baş
const fs = require("fs");
const Discord = require("discord.js");
const discord = require("discord.js");
const { Intents } = require("discord.js");
const client = new discord.Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING,], partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const ayarlar = require("./ayarlar.json");
const db = require("inflames.db");
//modüller son
// Event Handler Baş
const eventFiles = fs.readdirSync("./events").filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) =>
      event.execute(...args, client, Discord)
    );
  } else {
    client.on(event.name, (...args) =>
      event.execute(...args, client, Discord)
    );
  }
}
// Event Handler Son
//command handler baş
client.once("ready", () => {
  console.log(`Logged in as @${client.user.tag}!`);
});

client.slashCommands = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./handler-mainkodları/", (err, files) => {
  if (err) console.error(err); //
  console.log(`${files.length} hand yüklenecek.`);
  files.forEach((f) => {
  require(`./handler-mainkodları/${f}`)(client);
  });
});

//command handler son
//bot oynuyor baş
client.on("ready", () => {
  client.user.setActivity(`🍉WaterMelon Ekonomi Bot🍉`);
  console.log("Botun durumu ayarlandı.");
});
//bot oynuyor son
//log baş
client.once("ready", () => {
  console.log(`Başarıyla aktif oldum`);
});
//log son
//token baş
client.login(ayarlar.token);
//token son
//ayrıntılı hata baş
process.on("warning", (e) => console.warn(e.stack));
//ayrıntılı hata son
