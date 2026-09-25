import type { PrivacyContent } from "./types";

// Turkish. Formal "siz" throughout, which is both the register of the game's
// Turkish translation ("Odulleriniz", "degilsiniz") and the norm for Turkish
// legal text. Legal vocabulary follows the terms used in Turkish GDPR notices
// and shared with the KVKK: "veri sorumlusu", "veri koruma gorevlisi",
// "hukuki dayanak", "mesru menfaat", "sozlesmenin ifasi", "riza", "hukuki
// yukumluluk", "denetim makami", "standart sozlesme hukumleri", "erisim",
// "duzeltme", "silme", "islemenin kisitlanmasi", "veri tasinabilirligi",
// "itiraz". Game terms follow the game: "savas" for battle, "ulus", "sohbet",
// "para" for coins, "liderlik tablosu", "magaza", "sezon", "savas tekrari"
// for replay; the game translates Battle Pass as "Savas Bileti", so the
// policy does too. Mutes are "susturmalar", bans "yasaklamalar".
export const tr: PrivacyContent = {
  lang: "tr",
  label: "Türkçe",
  pageTitle: "Gizlilik Politikası | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nations hangi verileri toplar, bunları nasıl kullanır, kimlerle paylaşır ve silinmelerini nasıl talep edebilirsiniz.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Gizlilik Politikası",
  lastUpdated: "Son güncelleme: 25 Eylül 2026",
  sectionsLabel: "Bölümler",
  languageLabel: "Dil",
  legalBasisLabel: "Hukuki dayanak:",
  contact: {
    line: "Sorularınız mı var? Discord'da sorun. Verilerinizle ilgili talepler için bize e-posta gönderin.",
    discord: "Discord'da sor",
    back: "Geofast Games'e dön",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Biz kimiz",
      blocks: [
        {
          type: "p",
          text: "Geofast Games, merkezi Belçika'da bulunan bağımsız bir oyun stüdyosudur. *Geofast: Battle of Nations* oyununu geliştiriyor ve bu web sitesini işletiyoruz. Bu politikada açıklanan kişisel verilerin veri sorumlusuyuz: neyin, hangi amaçla toplanacağına biz karar veriyoruz.",
        },
        {
          type: "p",
          text: "Bize [contact@geofastgames.com](mailto:contact@geofastgames.com) adresinden ulaşabilirsiniz. İki kişilik bir stüdyoyuz ve bir veri koruma görevlisi atamadık; aynı adres, verilerinizden sorumlu kişilere ulaşır.",
        },
        {
          type: "p",
          text: "Bu politika, iOS ve Android'deki oyunu ve geofastgames.com web sitesini kapsar. Discord'u, App Store'u, Google Play'i veya oyunla birlikte kullandığınız diğer hizmetleri kapsamaz; bunların kendi politikaları vardır ve geçtikleri yerde bağlantıları verilmiştir.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "Bir bakışta",
      blocks: [
        {
          type: "table",
          head: ["Ne", "Neden", "Ne kadar süre"],
          rows: [
            [
              "Hesap: bir cihaz tanımlayıcısı, kullanıcı adınız ve dilerseniz bir e-posta adresi ile şifre ya da Google veya Apple ile giriş",
              "Hesabınızı işletmek ve çevrimiçi oynamanızı sağlamak için",
              "Hesabınızı silene kadar; etkin olmayan hesapları silmiyoruz",
            ],
            [
              "Oyun: maçlar, sıralamalar, öğeler, satın alma onayları",
              "Oyunu, liderlik tablolarını ve envanterinizi işletmek için",
              "Hesabınızı silene kadar; savaş tekrarları 7 gün, ardından arşivlenir",
            ],
            [
              "Sohbet mesajları",
              "Mesajları iletmek ve kötüye kullanımı denetlemek için",
              "Savaş sohbeti 15 gün, ardından silinir; diğer sohbetler 90 gün, ardından arşivlenir",
            ],
            [
              "IP adresi, cihaz tanımlayıcısı, telefon modeli",
              "Hile ve gizli iş birliğini tespit etmek ve yasaklamaları uygulamak için",
              "Maç kayıtları 30 gün, ilk açılış kaydı 90 gün, ardından arşivlenir; cihaz tanımlayıcısı hesabınızda kalır; bir yasaklama kaydı, yasağı kaldırmamıza kadar kalır",
            ],
            [
              "Anlık bildirim jetonu",
              "Kapatabileceğiniz bildirimler göndermek için",
              "Jeton çalışmayı bırakana (örneğin oyunu kaldırdığınızda) veya hesabınızı silene kadar",
            ],
            [
              "Nasıl oynadığınıza ilişkin analiz olayları",
              "Oyun alışkanlıklarını anlamak ve sorunları gidermek için",
              "400 gün, ardından arşivlenir",
            ],
            [
              "Google AdMob yazılımının okuduğu reklam tanımlayıcısı",
              "İzlemeyi seçebileceğiniz ödüllü reklamları yüklemek ve göstermek için",
              "Oyun başladığında ve bir reklam yüklendiğinde Google'a gönderilir; tarafımızca saklanmaz; AdMob'un politikası geçerlidir",
            ],
          ],
        },
        { type: "lead", text: "Okumaya devam etmeden önce bilmeniz gereken dört şey" },
        {
          type: "ul",
          items: [
            "Sohbet özel değildir. Mesajlar, moderatörlerin şikâyetleri inceleyebilmesi için en fazla 15 gün (savaş sohbeti) veya 90 gün (diğer sohbetler) saklanır; her mesaj otomatik bir filtreden geçer ve bu özelliği açtığımızda mesajlar ayrıca Google'ın Gemini hizmeti tarafından sınıflandırılır.",
            "Hileyi yakalamak ve yasaklamaların etkili olmasını sağlamak için oynarken IP adresinizi ve bir cihaz tanımlayıcısını kaydediyoruz.",
            "Sunucularımız Almanya'nın Frankfurt şehrindedir. Kullandığımız birkaç sağlayıcı (Google, Apple) verileri Avrupa Birliği dışında işler.",
            "Canlı veritabanımızda süresi dolan kayıtlar (savaş sohbeti dışındaki sohbetler, maç kayıtları, analiz verileri ve daha fazlası) yok edilmez, Frankfurt'ta arşivlenir. Bkz. “Verileri ne kadar süre saklıyoruz”.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Hesabınız",
      blocks: [
        {
          type: "p",
          text: "İlk kez çevrimiçi oynadığınızda sizin için bir hesap oluşturur ve bunu cihazınızda üretilen bir tanımlayıcıya bağlarız. Oynamak için başka hiçbir şey gerekmez ve bize adınızı hiçbir zaman vermeniz gerekmez.",
        },
        {
          type: "p",
          text: "Diğer oyuncuların görebileceği bir kullanıcı adı seçersiniz. Bunun dışında oyunun sizin için çalışması amacıyla gerekenleri saklarız: ilerlemeniz, ayarlarınız ve arkadaşlarınız ile kullandığınız oyun sürümü.",
        },
        {
          type: "p",
          text: "İlerlemenizi cihazlar arasında korumak istiyorsanız bir e-posta adresi ile şifre ekleyebilir ya da Google veya Apple ile giriş yapabilirsiniz. Şifreler özetlenmiş (hash) olarak saklanır; yani onları okuyamayız. Google veya Apple'dan yalnızca hesabı bağlamak için gerekenleri alırız ve e-posta adresinizi yalnızca hesabı güvence altına almak ve şifreyi sıfırlamak için kullanırız.",
        },
        {
          type: "p",
          text: "Çevrimiçi oynamak için cihaz tanımlayıcısı zorunludur. Geri kalan her şey isteğe bağlıdır.",
        },
        { type: "basis", text: "sizinle olan sözleşmemizin ifası (oyunun sunulması)." },
      ],
    },
    {
      id: "gameplay",
      title: "Oyun, ilerleme ve satın almalar",
      blocks: [
        {
          type: "p",
          text: "Çevrimiçi savaşları, liderlik tablolarını ve envanterinizi işletmek için oyun ilerlemenizi saklarız: maç sonuçları, sıralamalar, sahip olduğunuz öğeler ve para birimleri ile etkinlik ve sezonlardaki ilerlemeniz. Son savaşlarınız geçmiş olarak saklanır; savaş tekrarları 7 gün sonra canlı veritabanından çıkar ve arşivlenir.",
        },
        {
          type: "p",
          text: "Ödemeler tamamen Google Play veya App Store tarafından yürütülür. Kart veya banka bilgilerinizi hiçbir zaman görmeyiz. Mağaza bize ne satın aldığınızı bildirir; öğeleri teslim edebilmek, satın almaları geri yükleyebilmek ve destek sağlayabilmek için bu onayı ve Savaş Bileti için abonelik durumunu saklarız.",
        },
        {
          type: "basis",
          text: "sizinle olan sözleşmemizin ifası. Muhasebe için saklamamız gereken satın alma kayıtları, hukuki yükümlülüklerimiz kapsamında saklanır.",
        },
      ],
    },
    {
      id: "chat",
      title: "Sohbet ve moderasyon",
      blocks: [
        {
          type: "p",
          text: "Oyunda oyuncular arasında sohbet vardır. Mesajlar o sohbetteki diğer oyunculara iletilir ve sunucularımızda saklanır: bir savaş içindeki sohbet 15 gün, ardından silinir; diğer tüm sohbetler 90 gün, ardından arşivlenir (bkz. “Verileri ne kadar süre saklıyoruz”). Bunları, moderatörlerin kötüye kullanım veya hile şikâyetlerini inceleyebilmesi için saklarız. Her moderatör sorgusu kayda geçer.",
        },
        {
          type: "p",
          text: "Moderasyon üç adımda işler. Birincisi, her mesaj iletilmeden önce sunucularımızdaki otomatik bir filtreden (hız sınırları, bir kelime listesi ve nefret söylemi kalıpları) geçer; engellenen bir mesaj hiçbir zaman gönderilmez. İkincisi, bu özelliği açtığımızda iletilen mesajlar ayrıca Google'ın Gemini hizmeti tarafından sınıflandırılır; Gemini, bağlam olarak mesajı ve o sohbetteki son mesajlarınızı alır. Kullanıcı adları, belirlediğiniz veya değiştirdiğiniz zaman Gemini tarafından denetlenir. Gemini'nin kötüye kullanım olarak sınıflandırdığı bir mesaj silinir ve bir ihlal kaydedilir. Üçüncüsü, insan moderatörler şikâyetleri değerlendirir.",
        },
        {
          type: "p",
          text: "İhlaller, [Hizmet Şartlarımızda](/termsofservice) belirtildiği gibi uyarılara ve geçici sohbet susturmalarına yol açar. İhlallerinizin ve susturmalarınızın kaydı, tekrarlanan davranışın tanınabilmesi için hesabınızda kalır. Bu otomatik adımlar yalnızca sohbet edebilme imkânınızı etkiler. Bir kararın hatalı olduğunu düşünüyorsanız bize e-posta gönderin veya Discord'da sorun; bir kişi durumu inceler.",
        },
        {
          type: "p",
          text: "Sohbette kişisel bilgilerinizi paylaşmayın. Diğer oyuncular yazdıklarınızı görebilir.",
        },
        {
          type: "basis",
          text: "oyunu oynayan herkes için oyunu güvenli ve adil tutmaya ilişkin meşru menfaatimiz.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Adil oyun ve güvenlik",
      blocks: [
        {
          type: "p",
          text: "Rekabete dayalı bir oyunda hile, oyunu herkes için mahveder; bu yüzden hileyi tespit etmek ve yasaklamaların etkili olmasını sağlamak için az miktarda teknik veri saklarız:",
        },
        {
          type: "ul",
          items: [
            "Oyunu ilk kez açtığınızda cihaz tanımlayıcınızı, telefon modelinizi, platformu ve IP adresinizi, tamamladığınız eğitim adımlarıyla birlikte kaydederiz. Bu kayıt 90 gün sonra canlı veritabanından çıkar ve arşivlenir.",
            "Her çevrimiçi maç için hangi hesapların katıldığını, cihaz tanımlayıcıları ve IP adresleriyle birlikte kaydederiz. Otomatik bir kontrol, son kayıtları düzenli olarak tarayıp aynı maçlara rastlantının izin verdiğinden çok daha sık düşen oyuncu çiftlerini arar. Maç kayıtları 30 gün sonra canlı veritabanından çıkar ve arşivlenir.",
            "Tespit edilen hile, [Hizmet Şartlarımızda](/termsofservice) belirtildiği gibi yasaklamaya varan cezalara yol açar. Ceza geçmişi hesabınızda kalır ve herhangi bir cezanın bir kişi tarafından incelenmesini isteyebilirsiniz.",
            "Bir cihaz yasağı, o cihazdan açılan yeni hesapları da engeller. Yasaklama kayıtlarının bitiş tarihi yoktur; bir inceleme yasağın hatalı olduğunu gösterdiğinde bunları kaldırırız.",
          ],
        },
        {
          type: "p",
          text: "Savaş hamlelerinin kendisi, gerçekleştikleri anda sunucularımızda doğrulanır; bu, maçın kendisi dışında hiçbir veri gerektirmez. Konumunuzu belirlemek için IP adresinizi kullanmayız. İlk katıldığınızda oyun, cihazınızın dil ve bölge ayarına göre bir ulus önerir; bu okuma cihaz üzerinde gerçekleşir ve bunun yerine istediğiniz ulusu seçebilirsiniz.",
        },
        {
          type: "basis",
          text: "hile, dolandırıcılık ve kötüye kullanımı önlemeye ve hizmeti güvenli tutmaya ilişkin meşru menfaatimiz.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Anlık bildirimler",
      blocks: [
        {
          type: "p",
          text: "Bildirimlere izin verirseniz cihazınız bize bir anlık bildirim jetonu verir; bunu saklar ve oyun içi gelişmeleri size bildirmek için kullanırız: hesabınız, arkadaşlarınız ve ulusunuzla ilgili olaylar, yeni etkinlikler ve sezonlar ile bir süredir uzak kaldıysanız bir hatırlatma.",
        },
        {
          type: "p",
          text: "Bildirimler Android'de Firebase Cloud Messaging (Google), iOS'ta ise Apple Push Notification service üzerinden iletilir. Cihaz ayarlarınızdan istediğiniz zaman kapatabilirsiniz; bu, gösterilmelerini durdurur. Jetonun kendisi, geçersiz hale gelene (örneğin oyunu kaldırdığınızda) veya hesabınızı silene kadar kalır. İletilen bildirimler tarafımızca 30 gün saklanır, ardından arşivlenir.",
        },
        {
          type: "basis",
          text: "tek dokunuşla vazgeçilebilecek şekilde, sizi hesabınız ve oynadığınız oyun hakkında bilgilendirmeye ilişkin meşru menfaatimiz.",
        },
      ],
    },
    {
      id: "ads",
      title: "İsteğe bağlı ödüllü reklamlar",
      blocks: [
        {
          type: "p",
          text: "Oyunda zorunlu reklam yoktur: hiçbir şey bir savaşı veya bir menüyü kesmez. Mağaza, yalnızca dokunduğunuzda oynatılan ödüllü reklamları oyun içi para birimi karşılığında sunar.",
        },
        {
          type: "p",
          text: "Reklamlar Google AdMob tarafından sunulur. AdMob'un yazılımı oyunun bir parçasıdır, oyunla birlikte başlar ve dokunduğunuzda hazır bir reklam olması için arka planda bir reklam yükler. O anda, hiç reklam izleyip izlemediğinize bakılmaksızın, AdMob reklam tanımlayıcınızı ve IP adresinizden türetilen kabaca bir konumu alır; bir reklam izlerseniz onunla nasıl etkileşimde bulunduğunuzu da alır. iOS'ta sistem, reklam tanımlayıcısının takip için kullanılmasından önce ilk açılışta izninizi ister; Android'de reklam tanımlayıcısını cihaz ayarlarınızdan sıfırlayabilir veya silebilirsiniz. Google'ın bu verilerle ne yaptığı kendi [gizlilik politikasında](https://policies.google.com/privacy) açıklanmıştır.",
        },
        {
          type: "basis",
          text: "cihazınızın izin ve reklam ayarları aracılığıyla verdiğiniz ve orada istediğiniz zaman geri çekebileceğiniz rızanız.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analiz",
      blocks: [
        {
          type: "p",
          text: "Oyunun nasıl oynandığını anlamak ve sorunları bulmak için oyun, kendi sunucularımıza olaylar gönderir: oturum başlangıcı ve bitişi, oynanan ve tamamlanan savaşlar, eğitim ilerlemesi, mağazadaki satın almalar, açılan bildirimler, hatalar ve Android'de sizi oyuna getiren mağaza yönlendirmesi. Her olay, hesap tanımlayıcınızı, cihaz tanımlayıcınızı, platformu, telefon modelini ve oyun sürümünü içerir. Google Analytics, Firebase Analytics veya başka herhangi bir üçüncü taraf analiz hizmeti kullanmıyoruz. Çökme raporları bize Google Play ve App Store üzerinden, onların kendi politikaları kapsamında ulaşır.",
        },
        {
          type: "p",
          text: "Analiz olayları 400 gün saklanır. Bunlardan türetilen istatistikler kişisel veri içermez ve süresiz saklanır.",
        },
        {
          type: "basis",
          text: "oyunu geliştirmeye ve sorunsuz çalışır durumda tutmaya ilişkin meşru menfaatimiz.",
        },
      ],
    },
    {
      id: "support",
      title: "Destek ve topluluk",
      blocks: [
        {
          type: "p",
          text: "Bize e-posta gönderirseniz yazışmayı, işlemi sonuçlandırmak için gerekli süre boyunca saklarız.",
        },
        {
          type: "p",
          text: "Discord sunucumuz, [Discord'un gizlilik politikası](https://discord.com/privacy) kapsamında Discord üzerinde işletilir. Oradaki moderatörler, “Sohbet ve moderasyon” bölümünde açıklandığı gibi şikâyetleri ele almak için oyun içi sohbet geçmişini sorgulayabilir.",
        },
        {
          type: "basis",
          text: "sizinle olan sözleşmemizin ifası (destek) ve oyun etrafında bir topluluk işletmeye ilişkin meşru menfaatimiz.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Verileri kimlerle paylaşıyoruz",
      blocks: [
        {
          type: "p",
          text: "Kişisel verileri satmıyoruz ve veri simsarlarıyla paylaşmıyoruz. Aşağıdaki şirketler verileri bizim adımıza işler veya oyunun işleyişi gereği alır:",
        },
        {
          type: "table",
          head: ["Sağlayıcı", "Ne için", "Nerede"],
          rows: [
            ["DigitalOcean", "Oyun sunucularımızın ve veritabanımızın barındırılması", "Frankfurt, Almanya"],
            [
              "Gcore",
              "Oyun trafiğinin bir kısmını sunucularımıza taşıyan içerik dağıtım ağı; aktarım sırasında IP adresinizi görür",
              "Dünya genelinde uç sunucular; şirketin merkezi Lüksemburg'dadır",
            ],
            [
              "Google Cloud Storage",
              "Süresi dolan kayıtların arşivi (bkz. “Verileri ne kadar süre saklıyoruz”)",
              "Frankfurt, Almanya",
            ],
            [
              "Google (Gemini API)",
              "Kullanıcı adlarının ve, açıldığında, sohbet mesajlarının sınıflandırılması",
              "Dünya geneli: Google bu API için bir bölge taahhüt etmiyor",
            ],
            ["Google AdMob", "İzlemeyi seçtiğiniz ödüllü reklamlar", "Amerika Birleşik Devletleri"],
            ["Google Firebase Cloud Messaging", "Android'de anlık bildirimlerin iletilmesi", "Amerika Birleşik Devletleri"],
            ["Apple Push Notification service", "iOS'ta anlık bildirimlerin iletilmesi", "Amerika Birleşik Devletleri"],
            ["Zoho Mail", "Şifre sıfırlama e-postaları dahil e-postamız", "Avrupa Birliği"],
            [
              "Google Play ve App Store",
              "Giriş, ödemeler, abonelikler ve çökme raporları",
              "Kendi politikaları kapsamında",
            ],
          ],
        },
        {
          type: "p",
          text: "Bu sağlayıcıların her biri, verilerinizi en az bu politikada açıklandığı kadar iyi korumak ve yalnızca belirtilen amaç için kullanmakla sözleşme gereği yükümlüdür. Diğer oyuncular kullanıcı adınızı, oyun içi profilinizi ve sohbette yazdıklarınızı görür. Verileri resmî makamlara yalnızca kanunun gerektirdiği durumlarda açıklarız.",
        },
      ],
    },
    {
      id: "storage",
      title: "Verileriniz nerede saklanıyor",
      blocks: [
        {
          type: "p",
          text: "Sunucularımız, veritabanımız ve yedeklerimiz Almanya'nın Frankfurt şehrinde barındırılır; süresi dolan kayıtların arşivi ise aynı şehirdeki bir Google Cloud Storage deposundadır. Verileriniz, yukarıda listelenen bir sağlayıcının bunları Amerika Birleşik Devletleri'nde işlediği veya Gemini API için Google'ın onu çalıştırdığı yerler dışında Avrupa Birliği'nde kalır. Bu aktarımlarda Avrupa Komisyonu'nun standart sözleşme hükümlerine ve sağlayıcının sertifikalı olduğu durumlarda AB-ABD Veri Gizliliği Çerçevesi'ne (Data Privacy Framework) dayanırız.",
        },
      ],
    },
    {
      id: "retention",
      title: "Verileri ne kadar süre saklıyoruz",
      blocks: [
        {
          type: "table",
          head: ["Veri", "Saklama süresi"],
          rows: [
            ["Hesap, ilerleme, envanter, arkadaşlar, satın alma onayları", "Hesabınızı silene kadar"],
            [
              "Sohbet ihlali ve susturma geçmişi, gizli iş birliği ceza geçmişi",
              "Hesabın ömrü boyunca (susturmaların kendisi geçicidir)",
            ],
            ["Cihaz yasakları", "Kaldırmamıza kadar"],
            ["Analiz olayları", "400 gün, ardından arşivlenir"],
            ["Doğrudan mesajlar dahil, savaş sohbeti dışındaki sohbetler", "90 gün, ardından arşivlenir"],
            [
              "Para ve XP işlem geçmişi",
              "90 gün (XP geçmişi: son etkinliğinizden 90 gün sonra), ardından arşivlenir",
            ],
            ["IP adresi ve telefon modeli içeren ilk açılış kaydı", "90 gün, ardından arşivlenir"],
            [
              "IP adresi ve cihaz tanımlayıcısı içeren maç başına katılımcı kayıtları",
              "30 gün, ardından arşivlenir",
            ],
            ["İletilen bildirimler, günlük ilerleme", "30 gün, ardından arşivlenir"],
            ["Savaş sohbeti", "15 gün, ardından silinir"],
            ["Savaş tekrarları", "7 gün, ardından arşivlenir"],
            ["Mağazada gezinme olayları", "3 gün, ardından silinir"],
          ],
        },
        {
          type: "p",
          text: "“Ardından arşivlenir” olarak işaretlenen satırlar, canlı veritabanından çıkmadan önce Frankfurt'taki bir arşive kopyalanır. Arşivi istatistikler için ve geçmiş kötüye kullanımları incelemek için kullanırız; erişim iki geliştiriciyle sınırlıdır ve içindeki hiçbir şeye oyundan ulaşılamaz. Arşivlenen kayıtları bu amaçlar için gerekli oldukları sürece saklar ve artık gerekli olmadıklarında sileriz.",
        },
        {
          type: "p",
          text: "Hesabınızı sildiğinizde kişisel verilerinizi 30 gün içinde canlı sistemlerden sileriz. Kanunen saklamakla yükümlü olduğumuz kayıtları, örneğin muhasebe için satın alma kayıtlarını, ve sizi artık tanımlamayan istatistikleri saklarız.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Hukuki dayanaklarımız tek yerde",
      blocks: [
        {
          type: "p",
          text: "GDPR uyarınca verilerinizle yaptığımız her işlem için bir hukuki dayanağa ihtiyacımız var. Bizimkiler şunlardır:",
        },
        {
          type: "ul",
          items: [
            "**Sözleşme**: hesabınızın, oyunun, satın almalarınızın ve desteğin işletilmesi. Bu veriler olmadan oynanacak bir oyun yoktur.",
            "**Meşru menfaat**: hile ve kötüye kullanımın önlenmesi, sohbetin denetlenmesi, hizmetin güvenli tutulması, oyunun nasıl oynandığının anlaşılması ve hesabınız hakkında sizi bilgilendirmek. Menfaatimiz adil, güvenli ve çalışan bir oyundur; verileri asgari düzeyde ve kısa ömürlü tutarız ve istediğiniz zaman itiraz edebilirsiniz.",
            "**Rıza**: ödüllü reklamlarda kişiselleştirilmiş reklamcılık; cihaz ayarlarınız aracılığıyla verilir ve oradan geri çekilebilir.",
            "**Hukuki yükümlülük**: muhasebe kayıtlarının saklanması ve resmî makamların hukuka uygun taleplerinin yanıtlanması.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Haklarınız",
      blocks: [
        { type: "p", text: "Şu haklara sahipsiniz:" },
        {
          type: "ul",
          items: [
            "Hakkınızda tuttuğumuz kişisel verilere **erişme** ve bir kopyasını alma.",
            "Hatalı verileri **düzeltme**.",
            "Hesabınızı ve verilerinizi **silme**.",
            "Verilerinizi taşınabilir, makine tarafından okunabilir bir biçimde **alma**.",
            "Meşru menfaatlerimize dayanan işlemeye **itiraz etme** ve konuyu incelerken işlemeyi **kısıtlama**.",
            "Cihaz ayarlarınızdan istediğiniz zaman reklamlara ilişkin **rızanızı geri çekme** ve bildirimleri aynı yoldan kapatma.",
          ],
        },
        {
          type: "p",
          text: "Bir hakkınızı kullanmak için hesabınıza bağlı adresten [contact@geofastgames.com](mailto:contact@geofastgames.com) adresine e-posta gönderin ya da hesabınızın e-postası yoksa bize kullanıcı adınızı bildirin; kimliğinizi oyun içinden doğrularız. Silme talepleri [veri silme sayfamızdan](/datadeletion) da başlatılabilir. Bir ay içinde yanıt veriyoruz.",
        },
        {
          type: "p",
          text: "Verilerinizi hukuka aykırı işlediğimizi düşünüyorsanız Belçika Veri Koruma Otoritesi'ne (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Brüksel, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), veya yaşadığınız ülkedeki denetim makamına şikâyette bulunabilirsiniz.",
        },
      ],
    },
    {
      id: "children",
      title: "Çocuklar",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* 13 yaşından küçük çocuklara yönelik değildir ve onlardan bilerek kişisel veri toplamayız. Belçika'da 13, çevrimiçi hizmetlere kendi başınıza rıza verebileceğiniz yaştır. Oyun, her mağazada çevrimiçi sohbetini ve isteğe bağlı satın almalarını yansıtan bir yaş derecelendirmesi taşır; ebeveynler, satın almaları ve bir çocuğun yükleyebileceği uygulamaları kısıtlamak için Google Play ve App Store'un ebeveyn denetimlerini kullanabilir.",
        },
        {
          type: "p",
          text: "13 yaşından küçük bir çocuğun hesabı olduğunu düşünüyorsanız bize e-posta gönderin; hesabı sileriz.",
        },
      ],
    },
    {
      id: "security",
      title: "Güvenlik",
      blocks: [
        {
          type: "p",
          text: "Oyun, bu web sitesi ve sunucularımız arasındaki tüm trafik şifrelidir (TLS). Şifreler özetlenmiş olarak saklanır. Veritabanına internetten erişilemez. Sunuculara ve verilere erişim iki geliştiriciyle sınırlıdır; moderatörler sohbet geçmişini yalnızca her sorguyu kaydeden bir araç üzerinden görür. Hiçbir sistem kusursuz derecede güvenli değildir; verilerinizi etkileyen bir ihlalden haberdar olursak kanunun gerektirdiği şekilde sizi ve ilgili makamı bilgilendiririz.",
        },
      ],
    },
    {
      id: "website",
      title: "Bu web sitesi",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com çerez yerleştirmez ve takip veya analiz komut dosyaları kullanmaz. Ziyaretinizde tarayıcınızdan üç şey çıkar: sayfa yazı tipi Google Fonts'tan yüklenir, dolayısıyla Google IP adresinizi görür; Discord üye sayısı Discord'un herkese açık API'sinden alınır; canlı istatistikler ise kendi sunucumuzdan gelir. Uygulama mağazalarına giden bağlantılar, bir indirmenin bu siteden geldiğini görebilmemiz için bir kampanya etiketi taşır; bu etiket sizi değil, siteyi tanımlar.",
        },
      ],
    },
    {
      id: "changes",
      title: "Bu politikadaki değişiklikler",
      blocks: [
        {
          type: "p",
          text: "Verileri işleme biçimimizi değiştirdiğimizde bu sayfayı ve tarihini güncelleriz; önemli değişiklikleri ise size oyun içinde bildiririz.",
        },
      ],
    },
  ],
};
