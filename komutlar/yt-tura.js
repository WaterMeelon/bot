const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  let times = await db.fetch(`yazıturasüresi_${message.author.id}`);
  let saniye = 1000 * 7;
  if (times !== null && saniye - (Date.now() - times) > 0) {
    let time = ms(saniye - (Date.now() - times));
    message.channel.send({ content: `Bu komutu tektar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, reply: { messageReference: message.id } }).then(msg => setTimeout(() => msg.delete(), time.seconds * 1000));
    return;
  }
  let bahis = parseInt(args[0])
  if (isNaN(bahis) === "true") message.channel.send({ content: `Bahis olarak bir sayı gir`, reply: { messageReference: message.id } });
  if (!db.kontrol(`para_${message.author.id}`)) return message.channel.send({ content: "Malesef hiç paran bulunmuyor.", reply: { messageReference: message.id } });
  if (db.bul(`para_${message.author.id}`) < bahis) return message.channel.send({ content: "Malesef bu kadar paran bulunmuyor.", reply: { messageReference: message.id } });
  if (!bahis) return message.channel.send({ content: "Ne kadar bahis oynamak istiyorsun?", reply: { messageReference: message.id } });
  if (bahis > 1000) return message.channel.send({ content: "En fazla 1.000 wm bahis oynayabilirsin.", reply: { messageReference: message.id } });
  if (bahis === 0) return message.channel.send({ content: "En az 1 wm bahis oynamalısın.", reply: { messageReference: message.id } });
  var çalmayın = ["kazandın", "kaybettin", "kazandın", "kaybettin", "kazandın", "kazandın"]
  var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
  if (Covid === "kazandın") {
    db.topla(`para_${message.author.id}`, parseInt(bahis))
    message.channel.send({ content: `<a:wmtik:910819726157049877> Yaşasın Tura Çıktı **kazandın**! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
  }
  if (Covid === "kaybettin") {
    db.çıkar(`para_${message.author.id}`, parseInt(bahis))
    message.channel.send({ content: `<a:wmhayr:910860239228776518> Olamaz Yazı Çıktı **kaybettin**! Oynanan bahis: ${bahis}`, reply: { messageReference: message.id } });
  }
  db.yaz(`yazıturasüresi_${message.author.id}`, Date.now());
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["yt-tura", "tura"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "yttura", //komutu çalıştıracak olan kelime
  description: "",//açıklama (isteğe bağlı)
  usage: ""//kullanım (isteğe bağlı)
};