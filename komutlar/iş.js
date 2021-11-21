const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
  let ürünler = new discord.MessageEmbed()
  .setTitle("WaterMelon | Meslekler")
  .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024}))
  .addField("‍🔧 Çırak", `Fiyat: **5000**`)
  .addField("👨‍🌾 Çiftçi", `Fiyat: **10000**`)
  .addField("📈 Esnafçı", `Fiyat: **15000**`)
  .addField("💉 Hemşire", `Fiyat: **20000**`)
  .addField("👨‍⚖️ Hakim", `Fiyat: **25000**`)
  .addField("👷 Mühendis", `Fiyat: **30000**`)
  .addField("▶️ Youtuber", `Fiyat: **35000**`)
  .setFooter(`İsteyen: ${message.author.tag}`)
  .setTimestamp()
  return message.channel.send({ embeds: [ ürünler ], reply: { messageReference: message.id }});;
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["meslekler","meslek","iş"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "meslekler", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};