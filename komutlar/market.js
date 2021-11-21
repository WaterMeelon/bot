const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
  let ürünler = new discord.MessageEmbed()
  .setTitle("WaterMelon | Market")
  .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024}))
  .addField("Tahta Olta", `Fiyat: **3000**`)
  .addField("Taş Olta", `Fiyat: **4000**`)
  .addField("Altın Olta ", `Fiyat: **5000**`)
  .addField("Elmas Olta", `Fiyat: **6000**`)
  .addField("<:wmtahtabalta:911262114239348736>Tahta Balta", `Fiyat: **3000**`)
  .addField("<:wmtasbalta:911262139233214495>Taş Balta", `Fiyat: **4000**`)
  .addField("<:wmaltinbalta:911262198892986438>Altın Balta", `Fiyat: **5000**`)
  .addField("<:wmelmasbalta:911262347081957407>Elmas Balta", `Fiyat: **6000**`) 
  .addField("<:wmtahtakilic:911260233979011072>Tahta Kılıç", `Fiyat: **5000**`)
  .addField("<:wmtaskilic:911259870815195216>Taş Kılıç", `Fiyat: **7500**`)
  .addField("<:wmaltinkilic:911260070682181643>Altın Kılıç", `Fiyat: **10000**`) 
  .addField("<:wmelmaskilic:911260442477858816>Elmas Kılıç", `Fiyat: **15000**`)    
   /*
  .addField("On başı", `Fiyat: **10000**`)
  .addField("Yüz başı", `Fiyat: **15000**`)
  .addField("Bin başı", `Fiyat: **20000**`)
  .addField("Albay", `Fiyat: **25000**`)
  .addField("Orgeneral", `Fiyat: **30000**`)
  .addField("Korona", `Fiyat: **40000**`)
  */
  .setFooter(`İsteyen: ${message.author.tag}`)
  .setTimestamp()
  return message.channel.send({ embeds: [ ürünler ], reply: { messageReference: message.id }});;
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["ürünler","ürün","m"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "market", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};