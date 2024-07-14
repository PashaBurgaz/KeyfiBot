const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
if (message.author.id != "420927049939681280") return message.reply('Bunu Sadece Sahibim Kullanabilir');

let üyesayi = message.guild.memberCount;
let botlar = message.guild.members.cache.filter(m => m.user.bot).size
let kullanıcılar = üyesayi - botlar
const embed = new Discord.EmbedBuilder()
.setColor("#ff0000")
.setTimestamp()
.setDescription(`**SUNUCU KURALLARI**


- **Tehdit edici küfürler, argo, kötü söz, nefret söylemi içeren** sunucular başlatma, bu sunucuları destekleme veya koordine etme. Bir kişiye veya **topluluğa ırk, etnik köken, ulusal köken, cinsiyet, toplumsal cinsiyet, cinsel yönelim, din veya engel** gibi niteliklerinden ötürü saldırıda bulunmak yasaktır.
- Yöneticilerin, yetkililerin ve sunucu üyelerinin **onurunu kırmak, onu küçük düşürmek** gibi eylemler yasaktır.
- Mesaj yazarken **büyük harf** kullanmak **bağırmak** anlamına geleceği için kesinlikle büyük harf kullanarak yazı yazmayınız.
- Discord sohbet merkezi olduğu için gereksiz kişisel tartışmalara ve atışmalara girmek yasaktır.
- Başkasına ait kişisel bilgiler yayınlamak yasaktır.
- Yetkililer her yazılan mesajı gözden kaçırabilir, sizden ricamız lütfen böyle sorunları yetkilileri etiketleyerek bildiriniz.
- Çekiliş, kanal, yayıncı ve sunucu reklamı yapmak yasaktır.
- Oyun hesabı, hediyelik eşya, oyun ekipmanı vb. şeylerin satışı/takası ve referans linkleri paylaşımı ve dilenmek yasaktır sadece satış  kanallarında yapılmaktadır.
- İllegal, yasa dışı sayılacak işler yasaktır.
- Uygunsuz kullanıcı adı ve profil fotoğrafı koymak yasaktır.
- Oyunlarda hile kullanarak sunucu üyelerini rahatsız etmek yasaktır.
- Sunucumuzdaki oyun odalarını kullanmayıp adam çekmeye çalışmak yasaktır.
- **Aşağılamak, küçük düşürmek, ifşalamak** yasaktır.
- Fotoğraf & video kanallarına **+18, pornografik** içerikler atmak yasaktır.
- **Spoiler** mesajı atmak ve spoiler vermek kesinlikle yasaktır. Sadece spoiler kanalına spoiler verilebilir.


- ** Discord Topluluk kurallarına uymadığınız sürece sunucumuzdan kalıcı olarak banlanacaksınız.**
• Discord Topluluk kuralları hakkında daha fazla bilgi almak istiyorsanız, https://discord.com/terms & https://discord.com/guidelines sitesini bir gözden geçirin.


• Klasik Discord sunucu kurallarına uymanız yeterli olacaktır.
@everyone





**Sunucumuzun Kuralları:**

**►** Oynuyor veya Özel Durum kısmına kesinlikle reklam içerikli yazı yazmak yasaktır. DM den reklam yapılırsa yetkililere bildiriniz *(Oyun sunucuları reklamlarınız hariç.)*

**►** Yetkili ekibimizden olmayıp yetkili gibi davranmak yasaktır. Bir durum söz konusu olduğunda lütfen yetkili ekibimiz ile iletişime geçin.

**►** Küfür, hakaret ve argo yasaktır!

**►** Siyaset, din, dil ve ırk konuşmak yasaktır.

**►** Discord URL-Davet paylaşmak yasaktır.

**►** Uygunsuz kullanıcı adı ve profil fotoğrafı kullanmak yasaktır.

**►** Spam yapmak ve dolaylı yollarla metin kanallarını kirletmek yasaktır.

**►** Sesli sohbet kanallarında kullanıcıları rahatsız eden bass, +18 ses, taciz, ağır hakaret vb.. rahatsız edici ses veya cümleler kullanmak, açmak, çalmak yasaktır.

**►** Ticari amaçlı veya yasa dışı her türlü satış yasaktır!
Sunucumuzda bulunup üyelerimize DM üzerinden ticari satış yapmak da yasaktır.

**►** Kadınlara veya karşı cinsel konuşma, cinsel ağır hakaret, sözlü taciz, yazılı taciz, görüntülü taciz, +18 görüntü-ses-url-yazı yasaktır. !!taciz komutu ile şikayet eden, edilen ve Taciz edilen şahıs, şahıslar
**konu ağır ise İzmir Mahkemesince dava açma hakkı vardır.**

`)
return message.channel.send({embeds: [embed]})
}

exports.conf = {
    aliases: ['kural'], 
    permLevel: 5,
    kategori: "Sahip" 
  };

  exports.help = {
    name: 'kural',  
    description: 'Sunucu Kuralları.', 
    usage: 'kural', 
  };

