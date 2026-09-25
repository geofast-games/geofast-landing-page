import type { TermsContent } from "./types";

// Turkish. Formal "siz" throughout, as in the Turkish privacy policy, the
// game's Turkish translation and Turkish legal text. The document is called
// "Hizmet Sartlari", the term the privacy policy links to (there with a
// possessive and locative suffix, "Hizmet Sartlarimizda"); the privacy policy
// is "Gizlilik Politikasi", as it names itself. Legal vocabulary follows the
// Turkish consumer code (TKHK) and its distance-contract regulation, which
// share the EU concepts used here: "cayma hakki" for the right of
// withdrawal, "sozlesmeye uygunluk", "emredici tuketici koruma hukumleri",
// "agir ihmal", "sorumluluk", "yerlesim yerinizdeki mahkemeler". Game terms
// follow the game: "savas" for battle, "ulus", "sohbet", "para" for coins,
// "elmaslar", "yildizlar", "sezon", "liderlik tablosu", "silahlar", "referans
// kodu"; the game translates Battle Pass as "Savas Bileti", so this text does
// too, as the privacy policy does. The game renders "Skins" as "Deri
// Kaplamalar" (leather coverings), a mistranslation; this text uses
// "gorunumler", the usual Turkish gaming term. As in the privacy policy,
// cheating is "hile", a mute a "susturma", a ban a "yasaklama", a report a
// "sikayet".
export const tr: TermsContent = {
  lang: "tr",
  label: "Türkçe",
  pageTitle: "Hizmet Şartları | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nations oynama kuralları: hesaplar, davranış, moderasyon ve itiraz, satın almalar ve Savaş Bileti, değişiklikler ve haklarınız.",
  gameName: "Geofast: Battle of Nations",
  docName: "Hizmet Şartları",
  lastUpdated: "Son güncelleme: 25 Eylül 2026",
  sectionsLabel: "Bölümler",
  languageLabel: "Dil",
  contact: {
    line: "Sorularınız mı var? Discord'da sorun. Verilerinizle ilgili talepler için bize e-posta gönderin.",
    discord: "Discord'da sor",
    back: "Geofast Games'e dön",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Biz kimiz ve bu Şartlar neleri kapsar",
      blocks: [
        {
          type: "p",
          text: "Bu Hizmet Şartları, sizinle Belçika merkezli bağımsız bir oyun stüdyosu olan Geofast Games arasında, *Geofast: Battle of Nations* (oyun) ve geofastgames.com web sitesi için yapılan sözleşmedir. Bize [contact@geofastgames.com](mailto:contact@geofastgames.com) adresinden ulaşabilirsiniz.",
        },
        {
          type: "p",
          text: "Bir hesap oluşturarak veya oynayarak bu Şartları kabul edersiniz. Bunları kabul etmiyorsanız oynamayın. [Gizlilik Politikamız](/privacy), verilerinizle ne yaptığımızı açıklar; ayrı bir belgedir ve bu Şartlarla birlikte uygulanır.",
        },
        {
          type: "p",
          text: "iOS'ta uygulama size, uygulamanın kendisini kullanımınızı düzenleyen Apple'ın standart son kullanıcı lisans sözleşmesi kapsamında lisanslanır. Bu Şartlar ise oyun hizmetini, hesabınızı ve başkalarıyla nasıl oynadığınızı düzenler. İkisinin çakıştığı yerlerde Apple'ın sözleşmesi uygulama lisansına, bu Şartlar ise diğer her şeye uygulanır.",
        },
        {
          type: "p",
          text: "Bu Şartlar İngilizce yazılmıştır. Çeviriler kolaylık sağlamak için sunulur; bir çeviri İngilizce metinden farklıysa İngilizce metin geçerlidir.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Kimler oynayabilir",
      blocks: [
        {
          type: "p",
          text: "Oynamak için en az 13 yaşında olmanız gerekir. 18 yaşından küçükseniz oynamak ve herhangi bir satın alma yapmak için bir ebeveyninizin veya velinizin iznine ihtiyacınız vardır ve oynayarak bu izne sahip olduğunuzu onaylarsınız. Ebeveynler ve veliler, bakımlarındaki küçüklerin oyunda yaptıklarından ve mağaza hesapları üzerinden yapılan satın almalardan sorumludur. Google Play ve App Store'un ebeveyn denetimleri satın almaları ve indirmeleri kısıtlayabilir.",
        },
        {
          type: "p",
          text: "Oyunun mağazalardaki yaş derecelendirmeleri, oyuncular arasında sohbet ve isteğe bağlı satın almalar içerdiğini yansıtır.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Hesabınız",
      blocks: [
        {
          type: "p",
          text: "İlk kez çevrimiçi oynadığınızda oyun, cihazınıza bağlı bir hesap oluşturur. İlerlemenizi cihazlar arasında korumak için bir e-posta adresi ve şifre ya da Google veya Apple girişi bağlayabilirsiniz. Giriş bilgilerinizi kimseyle paylaşmayın: hesabınız üzerinden yapılan her şey sizin sorumluluğunuzdadır ve başka birinin hesabınızı kullandığını düşünüyorsanız bize hemen bildirmelisiniz.",
        },
        {
          type: "p",
          text: "Bir hesaba aynı anda yalnızca bir cihaz bağlı olabilir. Yeni bir cihazdan bağlanmak öncekinin bağlantısını keser.",
        },
        {
          type: "p",
          text: "Bir e-posta adresi ya da Google veya Apple girişi bağlamadan cihazınızı kaybederseniz veya sıfırlarsanız, hesabın size ait olduğunu doğrulamanın bir yolu olmaz ve hesap geri getirilemez. İlerlemeniz sizin için önemliyse hesabınızı bağlayın.",
        },
        {
          type: "p",
          text: "Bir hesabı başka bir kişiyle paylaşmak, liderlik tablolarında ve sıralamalarda haksız avantaj sağladığı için izinli değildir. Birden fazla hesaba sahip olmak, hiçbiri haksız avantaj elde etmek, maçlara şike karıştırmak veya başka bir hesaptaki bir yaptırımı aşmak için kullanılmadığı sürece izinlidir. Hesaplar ve içerdikleri satılamaz, satın alınamaz, takas edilemez veya devredilemez.",
        },
        {
          type: "p",
          text: "Kullanıcı adınız herkes tarafından görülebilir. Saldırgan veya yanıltıcı olamaz ve ekibimiz dahil hiç kimseyi taklit edemez. Kullanıcı adınızı oyunda, orada gösterilen ücret karşılığında bir kez değiştirebilirsiniz. Bu kuralları ihlal eden bir kullanıcı adını değiştirebiliriz.",
        },
        {
          type: "p",
          text: "Etkin olmayan hesapları silmiyoruz. Hesabınızı istediğiniz zaman oyun içinden, profilinizden veya [veri silme sayfamızdan](/datadeletion) silebilirsiniz. Silme işlemi kalıcıdır ve ilerlemenizi, sanal para birimlerinizi ve eşyalarınızı kapsar.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Oynama lisansınız",
      blocks: [
        {
          type: "p",
          text: "Size, oyunu sahip olduğunuz veya kontrol ettiğiniz cihazlara kurmanız ve kendi eğlenceniz için oynamanız amacıyla kişisel, münhasır olmayan ve devredilemez bir lisans veriyoruz. Oyun, görselleri, sesleri, metinleri, kodu ve tasarımı Geofast Games'e veya lisans verenlerimize aittir ve fikri mülkiyet hukukuyla korunur. Yasanın açıkça izin verdiği durumlar dışında oyunun hiçbir bölümünü kopyalayamaz, değiştiremez, dağıtamaz, satamaz veya kiralayamaz ya da tersine mühendislik uygulayamazsınız.",
        },
        {
          type: "p",
          text: "Oyun, mağazalarda listelenen Android ve iOS sürümlerinde çalışır. Çevrimiçi oynamak, oyunun makul ölçüde güncel bir sürümünü gerektirir: güncellemeleri mağazalar üzerinden yayınlarız ve eski bir sürüm güncellenene kadar çevrimiçi özelliklere erişimini kaybedebilir.",
        },
        {
          type: "p",
          text: "Oyununuzun videolarını ve ekran görüntülerini, reklamlardan veya üyeliklerden para kazandığınız platformlar dahil, kaydedebilir, yayınlayabilir ve paylaşabilirsiniz. İçeriğinizi bizim yapmışız veya onaylamışız gibi sunmayın, görsellerimizi kullanan ürünler satmayın ve hile veya açıklardan yararlanma göstermeyin. Bu kuralları veya yasayı ihlal eden içeriği kaldırmanızı isteyebiliriz.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Davranış kuralları",
      blocks: [
        { type: "p", text: "Adil oynayın ve diğer oyunculara saygılı davranın. Şunları yapamazsınız:" },
        {
          type: "ul",
          items: [
            "hile, açıklardan yararlanma, bot, otomasyon, değiştirilmiş istemci veya oyuna ya da sunucularına müdahale eden herhangi bir araç kullanmak;",
            "hataları bildirmek yerine avantaj elde etmek için bunlardan yararlanmak;",
            "diğer oyuncularla gizli anlaşma yapmak, maçlara şike karıştırmak, galibiyet takas etmek veya ek hesaplarla dahil olmak üzere sıralamaları, liderlik tablolarını ya da ödülleri başka şekilde manipüle etmek;",
            "hesapları paylaşmak, satmak, satın almak veya devretmek ya da sanal eşyaları oyun dışında takas etmek;",
            "diğer oyuncuları taciz etmek, tehdit etmek, aşağılamak veya zorbalık yapmak ya da nefret içeren, cinsel, şiddet içeren veya başka şekilde kötüye kullanım niteliğinde içerik paylaşmak;",
            "diğer oyuncuları, ekibimizi veya herhangi bir kişi ya da kuruluşu taklit etmek;",
            "spam göndermek, reklam yapmak veya zararlı içeriğe bağlantı paylaşmak;",
            "diğer oyuncuların kişisel bilgilerini veya giriş bilgilerini istemek ya da toplamak veya kendinizin ya da başkasının bilgilerini sohbette paylaşmak;",
            "diğer oyuncular hakkında bilerek yanlış şikâyetlerde bulunmak veya itiraz sürecini kötüye kullanmak;",
            "maçlar veya oyundaki başka herhangi bir şey üzerine bahis ya da kumar düzenlemek veya bunlara katılmak;",
            "sunucularımıza saldırmak, bunları taramak veya aşırı yüklemek ya da diğer oyuncuların bağlantılarına müdahale etmek;",
            "oyunu diğer oyuncular için bilerek mahvetmek;",
            "oyunu yasa dışı herhangi bir amaçla kullanmak.",
          ],
        },
        {
          type: "p",
          text: "Uluslar arasında rekabet, sataşma ve savaş söylemi oyunun bir parçasıdır. Gerçek kişilere yönelik kötüye kullanım, gruplara yönelik nefret, tehditler ve cinsel içerik ise değildir.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Sohbet, kullanıcı adları ve oluşturduğunuz içerik",
      blocks: [
        {
          type: "p",
          text: "Oyunda oyuncular arasında sohbet vardır. Yazdıklarınız o sohbetteki diğer oyunculara iletilir ve moderatörlerin şikâyetleri inceleyebilmesi için Gizlilik Politikası'nda belirtilen süreler boyunca sunucularımızda saklanır. Sohbet özel değildir: diğer oyuncular görür ve moderatörler bir şikâyeti ele alırken okuyabilir. Sohbette kişisel bilgilerinizi paylaşmayın.",
        },
        {
          type: "p",
          text: "Yazdıklarınız üzerindeki haklar sizde kalır. Oyunu işletmek için bunları saklamamıza, göstermemize, moderasyonunu yapmamıza ve gerektiğinde kaldırmamıza izin verirsiniz. Paylaştıklarınızdan siz sorumlusunuz. Bu Şartları veya yasayı ihlal eden içeriği kaldırırız.",
        },
        {
          type: "p",
          text: "Bize oyun, web sitemiz veya Discord üzerinden öneri veya fikir gönderirseniz bunları size ödeme yapmadan veya herhangi bir yükümlülük altına girmeden ve adınızı anmadan serbestçe kullanabiliriz.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Nasıl moderasyon yapıyoruz",
      blocks: [
        { type: "p", text: "Moderasyon, otomatik araçlarla insanları bir araya getirir:" },
        {
          type: "ul",
          items: [
            "Bir mesaj iletilmeden önce sunucularımızdaki otomatik bir filtre, mesajı hız sınırları, bir kelime listesi ve nefret söylemi kalıpları açısından denetler. Engellenen bir mesaj hiçbir zaman gönderilmez.",
            "Bu özelliği açtığımızda iletilen mesajlar ayrıca otomatik bir hizmet (Google'ın Gemini'si) tarafından sınıflandırılır; bu hizmet, bağlam olarak mesajı ve o sohbetteki son mesajlarınızı alır. Kullanıcı adları, belirlediğiniz veya değiştirdiğiniz zaman aynı şekilde denetlenir. Kötüye kullanım olarak sınıflandırılan bir mesaj silinir ve hesabınıza bir ihlal kaydedilir.",
            "İnsan moderatörler oyuncuların şikâyetlerini inceler ve bulgularına göre hareket eder. Sohbet geçmişine erişimleri kayda geçer.",
          ],
        },
        {
          type: "p",
          text: "Sohbet ihlallerinin sonuçları uyarılar ve geçici susturmalardır. Otomatik ihlaller önce bir uyarıya, kısa sürede tekrarlarsanız kısa bir susturmaya yol açar. Moderatörlerin uyguladığı susturmalar geçicidir ve daha önce aldığınız her susturmayla birlikte saatlerden aylara kadar artar. İhlallerinizin ve susturmalarınızın kaydı, tekrarlanan davranışın tanınabilmesi için hesabınızda kalır.",
        },
        {
          type: "p",
          text: "Sizi ne zaman sustursak, içeriğinizi kaldırsak veya hesabınıza ceza uygulasak, ne yapıldığını ve nedenini oyunda size bildiririz ve buna 9. bölümde açıklandığı gibi itiraz edebilirsiniz.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Adil oyunun uygulanması",
      blocks: [
        {
          type: "p",
          text: "Savaş hamleleri gerçekleştikleri anda sunucularımızda doğrulanır; böylece değiştirilmiş bir istemci bir maçın sonucunu değiştiremez. Otomatik bir kontrol, son maç kayıtlarını düzenli olarak inceleyip aynı maçlara rastlantının izin verdiğinden çok daha sık düşen oyuncuları arar; şike ve gizli anlaşma bu şekilde tespit edilir.",
        },
        {
          type: "p",
          text: "Hile ve gizli anlaşma kademeli olarak cezalandırılır. Oyuncu önce bir kez uyarılır. Cezalar yalnızca uyarıdan sonra yeni kanıt bulunduğunda ve kademeler arasında zaman bırakılarak ağırlaşır: sıralamaların ve para birimlerinin sıfırlanması, ardından ilerlemenin tamamen sıfırlanması ve son olarak cihazın kalıcı olarak yasaklanması; bu yasak, o cihazdan açılan yeni hesapları da engeller. Ciddi veya tekrarlanan hileye karışan hesaplar kapatılabilir. Bir sıfırlama uygulamadan önce hesabın bir anlık görüntüsünü kaydederiz; böylece hatalı olduğu anlaşılan bir ceza geri alınabilir. Cezaların kaydı hesabınızda kalır.",
        },
        {
          type: "p",
          text: "Her cezaya, ne yapıldığını ve nedenini belirten bir oyun içi bildirim eşlik eder ve buna 9. bölümde açıklandığı gibi itiraz edebilirsiniz.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Şikâyet ve itiraz",
      blocks: [
        {
          type: "p",
          text: "Bu Şartları veya yasayı ihlal eden bir oyuncuyu ya da içeriği şikâyet etmek için oyundaki “Rapor Et” düğmesini, [web sitemizdeki şikâyet formunu](/report) kullanın veya [contact@geofastgames.com](mailto:contact@geofastgames.com) adresine e-posta gönderin. Bize kimi, neyi ve nerede olduğunu söyleyin. Şikâyetinizi aldığımızı onaylar ve ne karar verdiğimizi gereksiz gecikme olmaksızın size bildiririz. Şikâyetler, yukarıda açıklanan araçların yardımıyla, iyi niyetle ve keyfilikten uzak biçimde insanlar tarafından ele alınır.",
        },
        {
          type: "p",
          text: "Bir susturmanın, cezanın, yasağın veya içerik kaldırmanın hatalı olduğunu düşünüyorsanız bir ay içinde e-posta ile veya Discord'da itiraz edin. İlk kararda yer almamış bir kişi kararı inceler ve 14 gün içinde yanıt veririz. Karar hatalıysa kaldırırız ve mümkün olduğunda kaybedilenleri geri veririz. Buradaki hiçbir şey, konuyu bir mahkemeye veya tüketici kuruluşuna götürme hakkınızı sınırlamaz.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Sanal para birimleri, eşyalar ve satın almalar",
      blocks: [
        {
          type: "p",
          text: "Oyunda sanal para birimleri (elmaslar, paralar ve yıldızlar) ile silahlar, görünümler, yükseltmeler ve Savaş Bileti ödülleri gibi sanal eşyalar vardır. Elmaslar Google Play veya App Store üzerinden gerçek parayla satın alınabilir; paralar ve yıldızlar oynayarak kazanılır veya oyun içinde takas edilir. Fiyatlar, satın almadan önce mağazada ve oyunda yerel para biriminizde gösterilir.",
        },
        {
          type: "p",
          text: "Sanal para birimleri ve eşyalar, oyunda kullanılmak üzere size lisanslanır. Mülkiyetiniz değildir, oyun dışında değeri yoktur, gerçek para, mal veya hizmetle değiştirilemez ve başka bir hesaba veya kişiye devredilemez.",
        },
        {
          type: "p",
          text: "Satın almalar anında teslim edilir. Satın alarak bizden hemen teslim etmemizi istersiniz ve teslimat başladıktan sonra yasal 14 günlük cayma hakkının artık uygulanmayacağını kabul edersiniz. Bunun dışında, yasanın size iade hakkı verdiği durumlar hariç, satın almalar kesindir. İade talepleri, ödemeyi işleyen ve satın aldığınız mağazaya yapılır; biz ödeme bilgilerinizi hiçbir zaman görmeyiz.",
        },
        {
          type: "p",
          text: "Sanal para birimlerini ve eşyaları geçerli nedenlerle değiştirebilir, yeniden dengeleyebilir, ekleyebilir veya kaldırabiliriz: oyunu dengeli ve eğlenceli tutmak, hataları düzeltmek, güvenlik veya yasal gereklilikler. Bir değişiklik yakın zamanda ödeme yaptığınız bir şeyi önemli ölçüde etkileyecekse sizi önceden bilgilendiririz ve yasa böyle bir değişiklik nedeniyle size sözleşmeyi sona erdirme ve iade alma hakkı veriyorsa buna uyarız. Açıklandığı gibi çalışan bir oyun hakkı dahil, tüketici olarak yasal haklarınız etkilenmez.",
        },
        {
          type: "p",
          text: "Oyunda zorunlu reklam yoktur. Oyun isteğe bağlı ödüllü reklamlar sunduğunda bunları izlemek sizin seçiminizdir ve bu teklifi değiştirebilir veya kaldırabiliriz.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. Savaş Bileti",
      blocks: [
        {
          type: "p",
          text: "Savaş Bileti, Google Play veya App Store üzerinden satın alınan bir aboneliktir. İptal edene kadar her ay mağazada gösterilen fiyattan otomatik olarak yenilenir. Mağazanızın abonelik ayarlarından istediğiniz zaman iptal edebilirsiniz; bilet, ödediğiniz dönemin sonuna kadar etkin kalır ve aldığınız ödülleri korursunuz. Fiyat değişiklikleri bir sonraki yenilemeden itibaren geçerli olur ve mağaza, yürürlüğe girmeden önce sizi bilgilendirir.",
        },
        {
          type: "p",
          text: "Savaş Bileti ödülleri sezon boyunca oynayarak açılır; bilet tek başına her ödülü vermez. Abonelik iadeleri, mağaza tarafından kendi kuralları ve yasaya göre ele alınır.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Referans ödülleri ve içerik üreticisi programı",
      blocks: [
        {
          type: "p",
          text: "Yeni bir oyuncu referans kodunuzla katıldığında oyun sizi ödüllendirir ve o oyuncuyu da ödüllendirir. Referans ödülleri gerçek yeni oyuncular içindir. Kendinizi, kendi diğer hesaplarınızı veya yalnızca ödülü almak için açılan hesapları referans göstermek izinli değildir ve bu yolla elde edilen ödüller kaldırılır.",
        },
        {
          type: "p",
          text: "İçerik üreticisi programımız, oyun hakkında video yayınlayan oyuncuları içerikleri belirli izlenme eşiklerine ulaştığında ödüllendirir. Eşikler, ödüller ve uygunluk kuralları oyunda yayınlanır ve değişebilir. Ödüller tarafımızca elle doğrulanır ve verilir; şüphe halinde karar bize aittir. Sahte izlenmelerle veya bu Şartları ihlal eden içerikle talep edilen ödüller reddedilir veya kaldırılır.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Üçüncü taraf hizmetleri",
      blocks: [
        {
          type: "p",
          text: "Oyun; indirmeler, ödemeler ve abonelikler için Google Play ve App Store'u, isteğe bağlı giriş için Google ve Apple'ı, isteğe bağlı ödüllü reklamlar için Google AdMob'u ve topluluk sunucumuz için Discord'u kullanır. Bu hizmetleri kullanımınız, kontrolümüzde olmayan kendi şartlarına ve gizlilik politikalarına tabidir.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Erişilebilirlik ve oyundaki değişiklikler",
      blocks: [
        {
          type: "p",
          text: "Oyunu erişilebilir tutmak için çalışıyoruz ancak hiçbir zaman kesintiye uğramayacağını vaat edemeyiz. Çevrimiçi özellikler bakım sırasında, teknik sorunlar nedeniyle veya kontrolümüz dışındaki nedenlerle kullanılamayabilir. Çevrimdışı modlar bağlantı olmadan çalışmaya devam eder.",
        },
        {
          type: "p",
          text: "Oyun canlı bir hizmettir ve zamanla değişir: oyunu dengeli ve taze tutmak, sorunları gidermek, güvenlik ve yasal gereklilikleri karşılamak için özellikler, silahlar, uluslar, sezonlar ve etkinlikler ekler, ayarlar ve kaldırırız. Nasıl oynayabileceğinizi önemli ölçüde etkileyen değişiklikler oyunda önceden duyurulur. Yasal haklarınız etkilenmez.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Sözleşmenin sona ermesi",
      blocks: [
        {
          type: "p",
          text: "Oyunu kaldırarak istediğiniz zaman oynamayı bırakabilir ve hesabınızı oyun içinden, profilinizden veya [veri silme sayfamızdan](/datadeletion) silebilirsiniz. Hesabınızı silmek ilerlemenizi, sanal para birimlerinizi ve eşyalarınızı kalıcı olarak kaldırır; bunlar için hiçbir iade yapılmaz.",
        },
        {
          type: "p",
          text: "Bu Şartları ciddi biçimde veya tekrar tekrar ihlal ederseniz ya da yasa gerektirirse hesabınızı askıya alabilir veya kapatabiliriz. Hile, kötüye kullanım veya yasal bir yükümlülük gibi ciddi durumlar dışında sizi önce uyarır ve yanıt verme fırsatı tanırız. Size nedenini ve nasıl itiraz edeceğinizi bildiririz (9. bölüm). Bir hesabın kapatılması lisansınızı ve o hesaptaki sanal para birimlerine ve eşyalara erişiminizi sona erdirir.",
        },
        {
          type: "p",
          text: "Oyunu bir gün kapatmak zorunda kalırsak bunu oyunda ve web sitemizde en az 30 gün önceden bildiririz. Sanal para birimleri ve eşyalar oyunla birlikte sona erer. Yakın zamandaki satın almalara ilişkin yasal haklarınız etkilenmez.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Sorumluluğumuz",
      blocks: [
        {
          type: "p",
          text: "Size karşı yasanın öngördüğü şekilde sorumluyuz. İhmalimizden kaynaklanan ölüm veya bedensel yaralanma, hile ile aldatma, kasıtlı veya ağır ihmal niteliğindeki davranışlar ya da vaat edilene uygun bir oyun hakkınız dahil, sizi tüketici olarak koruyan yasa uyarınca dışlanamayacak başka herhangi bir husus için sorumluluğumuzu dışlamıyor veya sınırlamıyoruz.",
        },
        {
          type: "p",
          text: "Bunun ötesinde, yalnızca bu Şartları kabul ettiğiniz anda öngörülebilir olan ve bu Şartları ihlal etmemizden kaynaklanan zararlardan sorumluyuz. Oyun ücretsiz oynanır ve canlı bir hizmet olarak sunulur; yasa aksini söylemedikçe kesintilerden, diğer oyuncuların davranışlarından veya makul kontrolümüz dışındaki olaylardan kaynaklanan kayıplardan sorumlu değiliz.",
        },
        {
          type: "p",
          text: "Bu Şartları ihlal ederek bize verdiğiniz zarardan, yasanın izin verdiği ölçüde siz sorumlusunuz.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Gizlilik",
      blocks: [
        {
          type: "p",
          text: "Verilerinizi nasıl topladığımız ve kullandığımız [Gizlilik Politikamızda](/privacy) açıklanmıştır. Bu politika bu Şartların bir parçası değildir ve bunları kabul etmenize bağlı değildir: ne yaptığımızı ve haklarınızın neler olduğunu size anlatır.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Bu Şartlardaki değişiklikler",
      blocks: [
        {
          type: "p",
          text: "Oyun, yasa veya hizmetlerimiz değiştiğinde ya da daha anlaşılır kılmak için bu Şartları değiştiririz. Haklarınızı veya nasıl oynadığınızı etkileyen değişiklikler için, yürürlüğe girmelerinden en az 30 gün önce oyunda bildirim yaparız ve kabul etmiyorsanız o tarihe kadar oynamayı bırakıp hesabınızı silebilirsiniz. Sizi etkilemeyen açıklamalar ve düzeltmeler yayınlandığında yürürlüğe girer. Üstteki tarih, mevcut sürümün ne zaman yürürlüğe girdiğini gösterir.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Hukuk, uyuşmazlıklar ve şikâyetler",
      blocks: [
        {
          type: "p",
          text: "Bu Şartlar Belçika hukukuna tabidir. Başka bir ülkede yaşıyorsanız o ülkenin emredici tüketici hukukunun korumasını saklı tutarsınız ve yaşadığınız yerdeki mahkemelerde dava açabilirsiniz. Biz size karşı yalnızca orada dava açabiliriz.",
        },
        {
          type: "p",
          text: "Bir şikâyetiniz varsa önce [contact@geofastgames.com](mailto:contact@geofastgames.com) adresinden veya Discord'da bizimle iletişime geçin; çoğu konu doğrudan çözülebilir. Ayrıca ülkenizdeki bir tüketici uyuşmazlık çözüm kuruluşuna da başvurabilirsiniz; Belçika'da bu kuruluş Tüketici Arabuluculuk Hizmeti'dir (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Bu Şartlar tahkim şartı veya toplu davadan feragat içermez.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Son hükümler",
      blocks: [
        {
          type: "p",
          text: "Sizinle oyun içi bildirimler, web sitemiz ve bir e-posta adresi bağladıysanız e-posta yoluyla iletişim kurarız. Siz bize [contact@geofastgames.com](mailto:contact@geofastgames.com) adresinden ulaşırsınız; bu adres aynı zamanda yasal bildirimler için adresimiz ve yetkili makamlar için irtibat noktamızdır.",
        },
        {
          type: "p",
          text: "Bu Şartların bir bölümü geçersiz çıkarsa geri kalanı yürürlükte kalır. Bir kuralı bir noktada uygulamazsak daha sonra yine de uygulayabiliriz. Haklarınız azaltılmamak kaydıyla bu sözleşmeyi oyunu devralan bir şirkete devredebiliriz; siz hesabınızı veya bu sözleşmeyi devredemezsiniz. Bu Şartlar ve Gizlilik Politikası, oyunla ilgili sizinle aramızdaki sözleşmenin tamamını oluşturur.",
        },
      ],
    },
  ],
};
