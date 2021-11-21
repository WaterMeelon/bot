const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
    if(!db.kontrol(`kılıç_${message.author.id}`)) return message.channel.send({ content: "Kılıcın olmadan ağaç kesemessin, kılıç almak için **!satın-al kılıç**", reply: { messageReference: message.id }});
    let times = await db.fetch(`savaşmasüresi_${message.author.id}`);
    let saniye = 100000 * 7;
    if (times !== null && saniye - (Date.now() - times) > 0) {
      let time = ms(saniye - (Date.now() - times));
      let mesaj = message.channel.send({ content: `Bu komutu tekrar kullanmak için **${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : ""} ${time.seconds ? time.seconds + "saniye" : ""} ${time.milliseconds ? time.milliseconds + "salise" : ""}** beklemelisin!`, reply: { messageReference: message.id } }).then(msg => setTimeout(() => msg.delete(), time.seconds * 100000));
      return;
    }
    let kılıç = db.bul(`kılıç_${message.author.id}`)
    if(kılıç === "tahta-kılıç") {
       var Covid = Math.floor(Math.random() * 150) + 10;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`savaşmasüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Savaşı kazandın bu yüzden **${Covid}** wm aldın.`, reply: { messageReference: message.id }})
   } else if(kılıç === "taş-kılıç") {
       var Covid = Math.floor(Math.random() * 250) + 25;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`savaşmasüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Savaşı kazandın bu yüzden **${Covid}** wm aldın.`, reply: { messageReference: message.id }})
   } else if(kılıç === "altın-kılıç") {
       var Covid = Math.floor(Math.random() * 200) + 50;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`savaşmasüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Savaşı kazandın bu yüzden **${Covid}** wm aldın.`, reply: { messageReference: message.id }})
   } else if(kılıç === "elmas-kılıç") {
       var Covid = Math.floor(Math.random() * 200) + 75;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`savaşmasüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `Savaşı kazandın bu yüzden **${Covid}** wm aldın.`, reply: { messageReference: message.id }})
   }
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["savaş","svş"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "savaş", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};