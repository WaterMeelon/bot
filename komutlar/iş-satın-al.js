const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
  if (!db.kontrol(`para_${message.author.id}`))
    return message.channel.send({
      content: "Malesef Hiç Paran Bulunmuyor.",
      reply: { messageReference: message.id },
    });
  let para = db.bul(`para_${message.author.id}`);
  var ürün = args[0];
  if (!ürün)
    return message.channel.send({
      content:
        "Bir Meslek İsmi Giriniz! Meslekler: (çırak / çiftçi / esnafçı / hemşire / hakim / mühendis / youtuber).",
      reply: { messageReference: message.id },
    });
  if (ürün === "çırak") {
    if (!db.kontrol(`iş_${message.author.id}`)) {
    } else {
      let olta = db.bul(`iş_${message.author.id}`);
      if (olta === "çırak")
        return message.channel.send({
          content: "Zaten Sende Bu Meslekten Var!",
          reply: { messageReference: message.id },
        });
    }
    if (para < 5000)
      return message.channel.send({
        content: "Maalesef Paran Bu Mesleğe Yetmiyor!",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 5000);
    db.yaz(`iş_${message.author.id}`, "çırak");
    return message.channel.send({
      content:
        "‍🔧 Çırak Mesleği Başarıyla Satın Alındı! Kullanmak İçin: **!çalış**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "çiftçi") {
    if (!db.kontrol(`iş_${message.author.id}`)) {
    } else {
      let olta = db.bul(`iş_${message.author.id}`);
      if (olta === "çiftçi")
        return message.channel.send({
          content: "Zaten Sende Bu Meslekten Var!",
          reply: { messageReference: message.id },
        });
    }
    let balta = db.bul(`iş_${message.author.id}`);
    if (balta !== "çırak")
      return message.channel.send({
        content: "Önce Çırak Mesleğini Almalısın!",
        reply: { messageReference: message.id },
      });
    if (para < 10000)
      return message.channel.send({
        content: "Maalesef Paran Bu Mesleğe Yetmiyor!",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 10000);
    db.yaz(`iş_${message.author.id}`, "çiftçi");
    return message.channel.send({
      content:
        "👨‍🌾 Çiftçi Mesleği Başarıyla Satın Alındı! Kullanmak İçin: **!çalış**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "esnafçı") {
    if (!db.kontrol(`iş_${message.author.id}`)) {
    } else {
      let olta = db.bul(`iş_${message.author.id}`);
      if (olta === "esnafçı")
        return message.channel.send({
          content: "Zaten Sende Bu Meslekten Var!",
          reply: { messageReference: message.id },
        });
    }
    let balta = db.bul(`iş_${message.author.id}`);
    if (balta !== "çiftçi")
      return message.channel.send({
        content: "Önce Çiftçi Mesleğini Almalısın!",
        reply: { messageReference: message.id },
      });
    if (para < 15000)
      return message.channel.send({
        content: "Maalesef Paran Bu Mesleğe Yetmiyor!",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 15000);
    db.yaz(`iş_${message.author.id}`, "esnafçı");
    return message.channel.send({
      content:
        "📈 Esnafçı Mesleği Başarıyla Satın Alındı! Kullanmak İçin: **!çalış**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "hemşire") {
    if (!db.kontrol(`iş_${message.author.id}`)) {
    } else {
      let olta = db.bul(`iş_${message.author.id}`);
      if (olta === "hemşire")
        return message.channel.send({
          content: "Zaten Sende Bu Meslekten Var!",
          reply: { messageReference: message.id },
        });
    }
    let balta = db.bul(`iş_${message.author.id}`);
    if (balta !== "esnafçı")
      return message.channel.send({
        content: "Önce Esnafçı Mesleğini Almalısın!",
        reply: { messageReference: message.id },
      });
    if (para < 20000)
      return message.channel.send({
        content: "Maalesef Paran Bu Mesleğe Yetmiyor!",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 20000);
    db.yaz(`iş_${message.author.id}`, "hemşire");
    return message.channel.send({
      content:
        "💉 Hemşire Mesleği Başarıyla Satın Alındı! Kullanmak İçin: **!çalış**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "hakim") {
    if (!db.kontrol(`iş_${message.author.id}`)) {
    } else {
      let balta = db.bul(`iş_${message.author.id}`);
      if (balta === "hakim")
        return message.channel.send({
          content: "Zaten Sende Bu Meslekten Var!",
          reply: { messageReference: message.id },
        });
    }
    let balta = db.bul(`iş_${message.author.id}`);
    if (balta !== "hemşire")
      return message.channel.send({
        content: "Önce Hemşire Mesleğini Almalısın!",
        reply: { messageReference: message.id },
      });
    if (para < 25000)
      return message.channel.send({
        content: "Maalesef Paran Bu Mesleğe Yetmiyor!",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 25000);
    db.yaz(`iş_${message.author.id}`, "hakim");
    return message.channel.send({
      content:
        "👨‍⚖️ Hakim Mesleği Başarıyla Satın Alındı! Kullanmak İçin: **!çalış**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "mühendis") {
    if (!db.kontrol(`iş_${message.author.id}`)) {
    } else {
      let balta = db.bul(`iş_${message.author.id}`);
      if (balta === "mühendis")
        return message.channel.send({
          content: "Zaten Sende Bu Meslekten Var!",
          reply: { messageReference: message.id },
        });
    }
    let balta = db.bul(`iş_${message.author.id}`);
    if (balta !== "hakim")
      return message.channel.send({
        content: "Önce Hakim Mesleğini Almalısın!",
        reply: { messageReference: message.id },
      });
    if (para < 30000)
      return message.channel.send({
        content: "Maalesef Paran Bu Mesleğe Yetmiyor!",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 30000);
    db.yaz(`iş_${message.author.id}`, "mühendis");
    return message.channel.send({
      content:
        "👷 Mühendis Mesleği Başarıyla Satın Alındı! Kullanmak İçin: **!çalış**.",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "youtuber") {
    if (!db.kontrol(`iş_${message.author.id}`)) {
    } else {
      let balta = db.bul(`iş_${message.author.id}`);
      if (balta === "youtuber")
        return message.channel.send({
          content: "Zaten Sende Bu Meslekten Var!",
          reply: { messageReference: message.id },
        });
    }
    let balta = db.bul(`iş_${message.author.id}`);
    if (balta !== "mühendis")
      return message.channel.send({
        content: "Önce Mühendis Mesleğini Almalısın!",
        reply: { messageReference: message.id },
      });
    if (para < 35000)
      return message.channel.send({
        content: "Maalesef Paran Bu Mesleğe Yetmiyor!",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 35000);
    db.yaz(`iş_${message.author.id}`, "youtuber");
    return message.channel.send({
      content:
        "▶️ Youtuber Mesleği Başarıyla Satın Alındı! Kullanmak İçin: **!çalış**.",
      reply: { messageReference: message.id },
    });
  } else {
    return message.channel.send({
      content:
        "Malesef böyle bir ürün yok, ürünlerimizi görmek için **!iş**.",
      reply: { messageReference: message.id },
    });
  }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["iş-sa", "iş-satın-al"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "iş-satın-al", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};