const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {

let yardım = new discord.MessageEmbed()
.setTitle("Covid-19 | Yardım")
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024}))
.addField("🔱 param / para / env / envanter", `<:wmtik:910857094004080690> Envanterinizi İncelersiniz.`)
.addField("🔱 ağaçkes / a / ak", `<:wmtik:910857094004080690> Eğer Baltanız Varsa Ağaç Kesersiniz.`)
.addField("🔱 balık-tut / b / bt", `<:wmtik:910857094004080690> Eğer Oltanız Varsa Balık Tutarsınız.`)
.addField("🔱 çalış / ç", `<:wmtik:910857094004080690> Eğer İş Sahibiyseniz Çalışırsınız.`)
.addField("🔱 meslekler / iş", `<:wmtik:910857094004080690> Tüm Meslekleri Ve Fiyatlarını Görürü`)
.addField("🔱 iş-satın-al / iş-sa", `<:wmtik:910857094004080690> İstediğiniz Bir Mesleği Satın Alırsınız.`)

.addField("🔱 yt-yazı / yazı **/** yt-tura / tura", `<:wmtik:910857094004080690> Yazı Ya Da Tura Atarsınız, Tutarsa Paranız İkiye Katlanır.`)
.addField("🔱 slot", `<:wmtik:910857094004080690> Slot Oynarsınız Şans Oranı Düşük Ama Ödülü Yüksek.`)
.addField("🔱 savaş / svş", `<:wmtik:910857094004080690> Belli Aralıklarda Savaşarak Para Kazanırsınız.`)
.addField("🔱 market / m / ürünler / ürün", `<:wmtik:910857094004080690> Satılan Ürünlere Ve Fiyatlarını İncelersiniz.`)
.addField("🔱 davet / d", `<:wmtik:910857094004080690> Botu Sunucunuza Ekleyip Bize Destek Olursunuz.`)
.addField("🔱 günlük / daily", `<:wmtik:910857094004080690> Günlük Paranızı Alırsınız.`)
.addField("🔱 para-gönder / para-at / send", `<:wmtik:910857094004080690> İstediğiniz Kişiye Bütçenizin Yettiği Kadar Para Gönderirsiniz.`)
.addField("🔱 satın-al / sa", `<:wmtik:910857094004080690> İstediğiniz bir eşyayı satın alırsınız.`)
//.addField("🔱 sıralama / s", `<:wmtik:910857094004080690> Genel sıralamayı incelersinsiz.`)
.setFooter(`İsteyen: ${message.author.tag}`)
.setTimestamp()
return message.channel.send({ embeds: [ yardım ], reply: { messageReference: message.id }}).catch(e => message.channel.send("Bu komutu çalıştırırken bir sorunla karşılaştım sanırım yetkim yok 8 perm ver ya da slash(/) ile kullanmayı dene."))
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["y","help","h"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "yardım", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};