import type { DataDeletionContent } from "./types";

// Turkish. Formal "siz" throughout, as in the Turkish privacy policy and the
// Turkish Terms. The page is the "Veri Silme Talebi"; both other documents
// link to it as the "veri silme sayfasi" (there with a possessive and
// ablative suffix, "veri silme sayfamizdan"). Terminology follows them:
// "hesap", "cihaz", "kullanici adi", "ilerleme", "sanal para birimleri ve
// esyalar", "canli veritabani" and "canli sistemler", "arsiv", "abonelik",
// "magaza" for the store; the game translates Battle Pass as "Savas Bileti",
// so this text does too. The privacy policy is the "Gizlilik Politikasi",
// the Terms are the "Hizmet Sartlari", as they name themselves.
export const tr: DataDeletionContent = {
  lang: "tr",
  label: "Türkçe",
  pageTitle: "Veri Silme Talebi | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nations hesabınızı ve kişisel verilerinizi oyun içinden veya e-postayla nasıl silersiniz, neler silinir, neler saklanır ve ne kadar sürer.",
  gameName: "Geofast: Battle of Nations",
  docName: "Veri Silme Talebi",
  lastUpdated: "Son güncelleme: 25 Eylül 2026",
  sectionsLabel: "Bölümler",
  languageLabel: "Dil",
  contact: {
    line: "Sorularınız mı var? Discord'da sorun. Verilerinizle ilgili talepler için bize e-posta gönderin.",
    discord: "Discord'da sor",
    back: "Geofast Games'e dön",
  },
  request: {
    title: "E-postayla silme talebinde bulunun",
    text: "Oyunu artık açamadığınız durumlar için. Düğme, talebin hazır yazılı olduğu bir e-postayı bize gönderilmek üzere açar; hesap bilgilerinizi doldurup gönderin. Bu cihazda e-posta uygulaması yoksa aynı bilgilerle contact@geofastgames.com adresine yazın.",
    button: "Silme talebini gönder",
    emailSubject: "Veri Silme Talebi - Geofast: Battle of Nations",
    emailBody: `Merhaba Geofast Games,

Geofast: Battle of Nations hesabımın ve kişisel verilerimin silinmesini istiyorum.

Hesabım:
- Oyun içi kullanıcı adı: [doldurun]
- Hesaba bağlı e-posta adresi, varsa: [doldurun]
- Adına oynadığım ulus: [doldurun]
- Oynamak için kullandığım cihaz: [doldurun]

Silmenin kalıcı olduğunu, ilerlememin, para birimlerimin ve eşyalarımın kaybolacağını ve bir Savaş Bileti aboneliğinin uygulama mağazamdan ayrıca iptal edilmesi gerektiğini anlıyorum.

Teşekkürler.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Verilerinizi silme hakkınız",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* hesabınızı ve ona bağlı kişisel verilerinizi, nerede yaşadığınızdan bağımsız olarak ve gerekçe göstermeden istediğiniz zaman sildirebilirsiniz. İki yol vardır: anında gerçekleşen oyun içi silme ya da oyunu artık açamıyorsanız e-posta.",
        },
        {
          type: "p",
          text: "Hesabınızı silmek sunduğumuz tek silme biçimidir: bir hesabın bazı bölümlerini silip geri kalanını saklamıyoruz.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Silmeden önce",
      blocks: [
        {
          type: "ul",
          items: [
            "**Önce Savaş Biletinizi iptal edin.** Abonelik, uygulama mağazanızla yaptığınız bir sözleşmedir ve hesabınızı silmek onu iptal etmez. Google Play veya App Store abonelik ayarlarından iptal edin; aksi halde yenilenmeye devam eder.",
            "**Hiçbir iade yapılmaz.** Sanal para birimleri, eşyalar ve kullanılmamış abonelik süresi, [Hizmet Şartlarımızda](/termsofservice) belirtildiği gibi hesapla birlikte sona erer.",
            "**Geri alınamaz.** Bekleme süresi yoktur ve geri yüklenebilecek bir yedek bulunmaz.",
            "**Her cihaz için geçerlidir.** Hesap, yalnızca silme işlemini yaptığınız cihazdan değil, bağlı olduğu her cihazdan kaybolur.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Hesabınızı oyun içinden silin",
      blocks: [
        {
          type: "p",
          text: "Profilinizi açın, **Hesabımı sil** düğmesine dokunun ve onaylamak için kullanıcı adınızı yazın. Hesap anında silinir. Oyun o cihazda bir sonraki açılışında yeni, boş bir hesap oluşturur.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Ya da bize e-postayla başvurun",
      blocks: [
        {
          type: "p",
          text: "Oyunu kaldırdıysanız veya cihazınızı kaybettiyseniz, oyun içi kullanıcı adınızı ve varsa hesabınıza bağlı e-posta adresini belirterek [contact@geofastgames.com](mailto:contact@geofastgames.com) adresine e-posta gönderin ya da aşağıdaki düğmeyi kullanın. O adresten yazın: talebin hesabın sahibinden geldiğini böyle anlarız. Hesabınızın e-postası yoksa bize kullanıcı adınızı ve adına oynadığınız ulusu bildirin; herhangi bir şeyi silmeden önce hesabın size ait olduğunu oyun içinden doğrularız.",
        },
        {
          type: "p",
          text: "Talebinizi aldığımızı onaylar, 30 gün içinde sileriz ve işlem tamamlandığında yeniden onaylarız. Bilgilerinizi bir hesapla eşleştiremezsek harekete geçmeden önce sizden ek bilgi isteriz; doğrulanmamış bir talep üzerine hiçbir zaman hesap silmeyiz.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Neler silinir",
      blocks: [
        {
          type: "p",
          text: "Hesabınızı silmek, hesabı ve altında saklanan her şeyi kaldırır:",
        },
        {
          type: "ul",
          items: [
            "hesabınız, kullanıcı adınız ve hesaba bağlı cihaz, e-posta, Google veya Apple bağlantıları;",
            "ilerlemeniz: sıralamalar, eşyalar, sanal para birimleri, yükseltmeler, başarımlar, sezon ilerlemesi ve savaş geçmişi;",
            "arkadaş listeniz ve referans kodunuz;",
            "anlık bildirim jetonunuz.",
          ],
        },
        {
          type: "p",
          text: "Hesaba bağlı teknik kayıtlar, örneğin analiz olayları, hâlâ canlı veritabanımızda bulunan sohbet mesajları ile Gizlilik Politikası'nda açıklanan maç kayıtları ve ilk açılış kaydı, 30 gün içinde canlı sistemlerimizden kaldırılır.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Neleri saklıyoruz ve neden",
      blocks: [
        {
          type: "ul",
          items: [
            "Muhasebe mevzuatının saklamamızı zorunlu kıldığı satın alma kayıtları, o mevzuatın belirlediği süre boyunca.",
            "Sizi artık tanımlamayan istatistikler, örneğin belirli bir günde oynanan savaş sayısı.",
            "Silme işleminden önce canlı veritabanından arşivimize geçmiş olan kayıtlar; Gizlilik Politikası'ndaki [verileri ne kadar süre saklıyoruz](/privacy#retention) bölümünde açıklandığı gibi.",
            "Uygulama mağazalarının, Google AdMob'un veya Discord'un kendi politikaları kapsamında tuttuğu veriler. Bunlar bizim kontrolümüzde değildir; kaldırılmaları için onlarla iletişime geçin.",
          ],
        },
        {
          type: "p",
          text: "Cihazınızdaki yerel dosyalar sizindir: oyunu kaldırmak onları da kaldırır.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Verilerinizle ilgili diğer talepler",
      blocks: [
        {
          type: "p",
          text: "Ayrıca verilerinizin bir kopyasını isteyebilir, hatalı verileri düzelttirebilir veya verilerinizi kullanma biçimimize itiraz edebilirsiniz. Tüm bu talepler aynı e-posta adresinden yürütülür ve [Gizlilik Politikası](/privacy#rights) her bir hakkı açıklar. Bir ay içinde yanıt veriyoruz.",
        },
      ],
    },
  ],
};
