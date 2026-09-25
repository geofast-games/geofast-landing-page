import type { PrivacyContent } from "./types";

// Traditional Chinese (html lang zh-Hant, URL /zh-hant/privacy). Polite "nin"
// throughout, the dominant form in the game's Traditional Chinese translation
// and the norm for legal text. Taiwan vocabulary where it differs from the
// mainland: "ziliao" for data, "fuwuqi", "ruanti", "zhuangzhi" for device,
// "wanglu", "zixun". Full-width punctuation, corner brackets for quotations,
// no spaces between Chinese words (Latin names keep their own spacing). Legal
// vocabulary follows the Traditional Chinese GDPR translations used in Taiwan
// and Hong Kong notices of European services: "ziliao kongzhizhe"
// (controller), "ziliao baohuzhang" (data protection officer), "falv yiju",
// "hefa liyi", "luxing qiyue", "tongyi", "falv yiwu", "jianguan jiguan",
// "biaozhun qiyue tiaokuan", and the rights of "chayue", "gengzheng",
// "shanchu", "xianzhi chuli", "ziliao kexie", "fandui". Game terms follow the
// game: "zhandou" for battle, "guojia" for nation, "liaotian", "yingbi" for
// coins, "paihangbang", "shangdian", "saiji", "zhandou huifang" for replay,
// "yonghuming" for username; the game translates Battle Pass as "zhandou
// tongxingzheng", so the policy does too. Mutes are "jinyan", bans
// "tingquan".
export const zhHant: PrivacyContent = {
  lang: "zh-hant",
  htmlLang: "zh-Hant",
  label: "繁體中文",
  pageTitle: "隱私政策 | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nations 收集哪些資料、如何使用、與誰分享，以及如何申請刪除。",
  gameName: "Geofast: Battle of Nations",
  policyName: "隱私政策",
  lastUpdated: "最後更新：2026年9月25日",
  sectionsLabel: "章節",
  languageLabel: "語言",
  legalBasisLabel: "法律依據：",
  contact: {
    line: "有疑問？請在Discord上提問。與您的資料有關的請求，請寄電子郵件給我們。",
    discord: "在Discord上提問",
    back: "返回Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "我們是誰",
      blocks: [
        {
          type: "p",
          text: "Geofast Games是一家位於比利時的獨立遊戲工作室。我們開發*Geofast: Battle of Nations*並經營本網站。我們是本政策所述個人資料的資料控制者：由我們決定收集什麼以及為何收集。",
        },
        {
          type: "p",
          text: "您可以透過[contact@geofastgames.com](mailto:contact@geofastgames.com)與我們聯絡。我們是一個兩人工作室，未設置資料保護長；透過同一地址即可聯絡到負責您資料的人員。",
        },
        {
          type: "p",
          text: "本政策適用於iOS和Android上的遊戲以及網站geofastgames.com。它不適用於Discord、App Store、Google Play或您與遊戲一同使用的其他服務；這些服務各有自己的政策，我們在提及之處附有連結。",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "概覽",
      blocks: [
        {
          type: "table",
          head: ["內容", "目的", "保留多久"],
          rows: [
            [
              "帳戶：裝置識別碼、您的用戶名，以及您自行選擇新增的電子郵件地址和密碼，或Google或Apple登入",
              "為了經營您的帳戶並讓您線上遊玩",
              "直到您刪除帳戶；我們不會刪除不活躍的帳戶",
            ],
            [
              "遊戲資料：對局、排名、物品、購買確認",
              "為了運作遊戲、排行榜和您的物品欄",
              "直到您刪除帳戶；戰鬥回放保留7天，隨後歸檔",
            ],
            [
              "聊天訊息",
              "為了傳送訊息並管理不當行為",
              "戰鬥聊天保留15天，隨後刪除；其他聊天保留90天，隨後歸檔",
            ],
            [
              "IP位址、裝置識別碼、手機型號",
              "為了偵測作弊和串通並執行停權",
              "對局紀錄保留30天，首次啟動紀錄保留90天，隨後歸檔；裝置識別碼始終與您的帳戶連結；停權紀錄保留至我們解除停權",
            ],
            [
              "推播通知權杖",
              "為了發送您可以關閉的通知",
              "直到權杖失效（例如解除安裝後）或您刪除帳戶",
            ],
            [
              "關於您遊玩方式的分析事件",
              "為了了解遊玩模式並修正問題",
              "400天，隨後歸檔",
            ],
            [
              "由Google AdMob軟體讀取的廣告識別碼",
              "為了載入並顯示您可以選擇觀看的獎勵廣告",
              "在遊戲啟動和廣告載入時傳送給Google；我們不儲存；適用AdMob的政策",
            ],
          ],
        },
        { type: "lead", text: "繼續閱讀之前值得了解的四件事" },
        {
          type: "ul",
          items: [
            "聊天並不私密。訊息最多保留15天（戰鬥聊天）或90天（其他聊天），以便管理員審核檢舉；每則訊息都會經過自動過濾，而當我們啟用該功能時，訊息還會由Google的Gemini服務進行分類。",
            "您遊玩時，我們會記錄您的IP位址和裝置識別碼，以查處作弊並確保停權有效。",
            "我們的伺服器位於德國法蘭克福。我們使用的少數服務供應商（Google、Apple）在歐盟以外處理資料。",
            "在我們的線上資料庫中到期的紀錄（戰鬥聊天以外的聊天、對局紀錄、分析資料等）會在法蘭克福歸檔，而非銷毀。請參閱「我們保留資料多久」。",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "您的帳戶",
      blocks: [
        {
          type: "p",
          text: "當您首次線上遊玩時，我們會為您建立一個帳戶，並將其與您裝置上產生的識別碼連結。遊玩不需要其他任何資訊，您也永遠不必告訴我們您的姓名。",
        },
        {
          type: "p",
          text: "您選擇一個其他玩家可以看到的用戶名。除此之外，我們僅儲存遊戲為您運作所需的內容：您的進度、您的設定和好友，以及您使用的遊戲版本。",
        },
        {
          type: "p",
          text: "如果您希望在多部裝置之間保留進度，可以新增電子郵件地址和密碼，或使用Google或Apple登入。密碼以雜湊形式儲存，這表示我們無法讀取。我們從Google或Apple僅取得連結帳戶所需的資訊，並且僅將您的電子郵件地址用於保護帳戶和重設密碼。",
        },
        {
          type: "p",
          text: "線上遊玩需要裝置識別碼。其他一切均為選擇性。",
        },
        { type: "basis", text: "履行我們與您之間的契約（提供遊戲）。" },
      ],
    },
    {
      id: "gameplay",
      title: "遊戲、進度與購買",
      blocks: [
        {
          type: "p",
          text: "為了運作線上戰鬥、排行榜和您的物品欄，我們儲存您的遊戲進度：對局結果、排名、您擁有的物品和貨幣，以及您在活動和賽季中的進度。您最近的戰鬥作為歷史紀錄保留；戰鬥回放在7天後離開線上資料庫並歸檔。",
        },
        {
          type: "p",
          text: "付款完全由Google Play或App Store處理。我們永遠不會看到您的信用卡或銀行資料。商店告知我們您購買了什麼，我們儲存該確認資訊，對於戰鬥通行證還會儲存訂閱狀態，以便發放物品、還原購買並提供支援。",
        },
        {
          type: "basis",
          text: "履行我們與您之間的契約。我們因會計要求必須保留的購買紀錄，依據法律義務保留。",
        },
      ],
    },
    {
      id: "chat",
      title: "聊天與管理",
      blocks: [
        {
          type: "p",
          text: "遊戲中有玩家之間的聊天。訊息會傳送給該聊天中的其他玩家，並儲存在我們的伺服器上：戰鬥內的聊天保留15天，隨後刪除；其他所有聊天保留90天，隨後歸檔（請參閱「我們保留資料多久」）。我們保留這些訊息，以便管理員調查關於不當行為或作弊的檢舉。管理員的每一次查閱都會被記錄。",
        },
        {
          type: "p",
          text: "管理分三步進行。第一，每則訊息在傳送前都會經過我們伺服器上的自動過濾（頻率限制、詞彙表和仇恨言論模式）；被攔截的訊息永遠不會送出。第二，當我們啟用該功能時，已傳送的訊息還會由Google的Gemini服務進行分類，Gemini會接收該訊息以及您在該聊天中的近期訊息作為脈絡。您設定或變更用戶名時，Gemini會對用戶名進行檢查。被Gemini分類為不當的訊息會被刪除，並記錄一次違規。第三，人工管理員處理檢舉。",
        },
        {
          type: "p",
          text: "違規將導致警告和臨時聊天禁言，詳見我們的[服務條款](/termsofservice)。您的違規和禁言紀錄會保留在您的帳戶中，以便辨識重複行為。這些自動步驟僅影響您的聊天功能。如果您認為某項決定有誤，請寄電子郵件給我們或在Discord上提問，將由人工進行複核。",
        },
        {
          type: "p",
          text: "請勿在聊天中分享個人資料。其他玩家可以看到您所寫的內容。",
        },
        {
          type: "basis",
          text: "我們為所有玩家維護安全、公平遊戲環境的合法利益。",
        },
      ],
    },
    {
      id: "fair-play",
      title: "公平遊戲與安全",
      blocks: [
        {
          type: "p",
          text: "競技遊戲中的作弊會毀掉所有人的體驗，因此我們保留少量技術資料以偵測作弊並確保停權有效：",
        },
        {
          type: "ul",
          items: [
            "當您首次啟動遊戲時，我們會記錄您的裝置識別碼、手機型號、平台和IP位址，以及您完成的教學步驟。該紀錄在90天後離開線上資料庫並歸檔。",
            "對於每一場線上對局，我們記錄參與的帳戶及其裝置識別碼和IP位址。自動檢查會定期審視近期紀錄，尋找進入同一對局的頻率遠超機率所允許的玩家組合。對局紀錄在30天後離開線上資料庫並歸檔。",
            "查實的作弊會導致處分，最重至停權，詳見我們的[服務條款](/termsofservice)。處分歷史會保留在您的帳戶中，您可以要求人工複核任何處分。",
            "裝置停權還會阻止從該裝置建立新帳戶。停權紀錄沒有截止日期；當複核顯示停權有誤時，我們會將其移除。",
          ],
        },
        {
          type: "p",
          text: "戰鬥操作本身在發生時即在我們的伺服器上驗證，除對局本身外不需要任何資料。我們不使用您的IP位址來判定您的位置。當您首次加入時，遊戲會根據您裝置的語言和地區設定建議一個國家；該讀取在裝置上進行，您也可以改選任何國家。",
        },
        {
          type: "basis",
          text: "我們防止作弊、詐欺和濫用並維護服務安全的合法利益。",
        },
      ],
    },
    {
      id: "notifications",
      title: "推播通知",
      blocks: [
        {
          type: "p",
          text: "如果您允許通知，您的裝置會向我們提供一個推播權杖，我們儲存並使用它來告知您遊戲內的動態：與您的帳戶、好友和國家相關的事件，新的活動和賽季，以及您一段時間未上線時的提醒。",
        },
        {
          type: "p",
          text: "通知在Android上透過Firebase Cloud Messaging（Google）傳送，在iOS上透過Apple Push Notification service傳送。您可以隨時在裝置設定中關閉通知，關閉後通知將不再顯示；權杖本身會保留至失效（例如您解除安裝遊戲時）或您刪除帳戶。已傳送的通知在我們這邊保留30天，隨後歸檔。",
        },
        {
          type: "basis",
          text: "我們讓您了解自己的帳戶和所玩遊戲的合法利益，且只需輕觸一下即可取消。",
        },
      ],
    },
    {
      id: "ads",
      title: "選擇性的獎勵廣告",
      blocks: [
        {
          type: "p",
          text: "遊戲中沒有強制廣告：沒有任何內容會打斷戰鬥或選單。商店提供獎勵廣告，僅在您點選時播放，以換取遊戲內貨幣。",
        },
        {
          type: "p",
          text: "廣告由Google AdMob投放。其軟體是遊戲的一部分，隨遊戲啟動，並在背景載入一則廣告，以便您點選時可以立即播放。此時，無論您是否觀看過廣告，AdMob都會收到您的廣告識別碼以及根據您的IP位址推算的粗略位置；如果您觀看了廣告，還會收到您與廣告的互動方式。在iOS上，系統會在首次啟動時徵求您的許可，然後才會將廣告識別碼用於追蹤；在Android上，您可以在裝置設定中重設或刪除廣告識別碼。Google在其[隱私政策](https://policies.google.com/privacy)中說明了它如何處理這些資料。",
        },
        {
          type: "basis",
          text: "您透過裝置的權限和廣告設定給予的同意，您可以隨時在同一處撤回。",
        },
      ],
    },
    {
      id: "analytics",
      title: "分析",
      blocks: [
        {
          type: "p",
          text: "為了了解遊戲的玩法並發現問題，遊戲會向我們自己的伺服器傳送事件：工作階段開始和結束、開始和完成的戰鬥、教學進度、商店中的購買、已開啟的通知、錯誤，以及在Android上將您引導至遊戲的商店來源。每個事件都包含您的帳戶識別碼、裝置識別碼、平台、手機型號和遊戲版本。我們不使用Google Analytics、Firebase Analytics或任何其他第三方分析服務。當機報告透過Google Play和App Store依據其各自的政策送達我們。",
        },
        {
          type: "p",
          text: "分析事件保留400天。由此得出的統計資料不包含個人資料，並無限期保留。",
        },
        {
          type: "basis",
          text: "我們改進遊戲並維持其良好運作的合法利益。",
        },
      ],
    },
    {
      id: "support",
      title: "支援與社群",
      blocks: [
        {
          type: "p",
          text: "如果您寄電子郵件給我們，我們會在處理所需的期間內保留往來郵件。",
        },
        {
          type: "p",
          text: "我們的Discord伺服器依據[Discord的隱私政策](https://discord.com/privacy)在Discord上運作。那裡的管理員可以查閱遊戲內聊天歷史以處理檢舉，如聊天與管理一節所述。",
        },
        {
          type: "basis",
          text: "履行我們與您之間的契約（支援），以及我們圍繞遊戲經營社群的合法利益。",
        },
      ],
    },
    {
      id: "sharing",
      title: "我們與誰分享資料",
      blocks: [
        {
          type: "p",
          text: "我們不出售個人資料，也不與資料仲介分享。以下公司代表我們處理資料，或因遊戲的運作方式而接收資料：",
        },
        {
          type: "table",
          head: ["服務供應商", "用途", "地點"],
          rows: [
            ["DigitalOcean", "託管我們的遊戲伺服器和資料庫", "德國法蘭克福"],
            [
              "Gcore",
              "將部分遊戲流量傳輸至我們伺服器的內容傳遞網路；它在傳輸過程中可見您的IP位址",
              "遍布全球的邊緣伺服器；公司總部位於盧森堡",
            ],
            [
              "Google Cloud Storage",
              "到期紀錄的歸檔（請參閱「我們保留資料多久」）",
              "德國法蘭克福",
            ],
            [
              "Google（Gemini API）",
              "對用戶名以及（啟用時）聊天訊息進行分類",
              "全球：Google未對該API承諾特定區域",
            ],
            ["Google AdMob", "您選擇觀看的獎勵廣告", "美國"],
            ["Google Firebase Cloud Messaging", "在Android上傳送推播通知", "美國"],
            ["Apple Push Notification service", "在iOS上傳送推播通知", "美國"],
            ["Zoho Mail", "我們的電子郵件，包括密碼重設郵件", "歐盟"],
            [
              "Google Play和App Store",
              "登入、付款、訂閱和當機報告",
              "依據其各自的政策",
            ],
          ],
        },
        {
          type: "p",
          text: "上述每家服務供應商均受契約約束，須至少按本政策所述的標準保護您的資料，並僅將其用於所列目的。其他玩家可以看到您的用戶名、遊戲內個人檔案以及您在聊天中所寫的內容。我們僅在法律要求時向主管機關揭露資料。",
        },
      ],
    },
    {
      id: "storage",
      title: "您的資料儲存在哪裡",
      blocks: [
        {
          type: "p",
          text: "我們的伺服器、資料庫和備份託管於德國法蘭克福，到期紀錄的歸檔位於同一城市的Google Cloud Storage儲存桶中。您的資料保留在歐盟境內，但上文所列服務供應商在美國處理的情形，以及Gemini API由Google在任何地點運作的情形除外。對於這些傳輸，我們依據歐盟執委會的標準契約條款，以及在服務供應商已獲認證的情況下，依據歐盟－美國資料隱私框架。",
        },
      ],
    },
    {
      id: "retention",
      title: "我們保留資料多久",
      blocks: [
        {
          type: "table",
          head: ["資料", "保留期限"],
          rows: [
            ["帳戶、進度、物品欄、好友、購買確認", "直到您刪除帳戶"],
            [
              "聊天違規和禁言歷史、串通處分歷史",
              "帳戶存續期間（禁言本身是臨時的）",
            ],
            ["裝置停權", "直到我們解除"],
            ["分析事件", "400天，隨後歸檔"],
            ["戰鬥聊天以外的聊天，包括私訊", "90天，隨後歸檔"],
            [
              "硬幣和XP交易歷史",
              "90天（XP歷史：您最後一次活動後90天），隨後歸檔",
            ],
            ["含IP位址和手機型號的首次啟動紀錄", "90天，隨後歸檔"],
            [
              "含IP位址和裝置識別碼的每場對局參與者紀錄",
              "30天，隨後歸檔",
            ],
            ["已傳送的通知、每日進度", "30天，隨後歸檔"],
            ["戰鬥聊天", "15天，隨後刪除"],
            ["戰鬥回放", "7天，隨後歸檔"],
            ["商店瀏覽事件", "3天，隨後刪除"],
          ],
        },
        {
          type: "p",
          text: "標註「隨後歸檔」的列會在離開線上資料庫之前複製到法蘭克福的歸檔中。我們使用歸檔進行統計並調查過往的不當行為；存取權限僅限兩名開發者，其中的任何內容都無法從遊戲中存取。歸檔紀錄在上述目的所需的期間內保留，不再需要時即予刪除。",
        },
        {
          type: "p",
          text: "當您刪除帳戶時，我們會在30天內從線上系統中刪除您的個人資料。我們保留法律要求保存的紀錄，例如用於會計的購買紀錄，以及不再能識別您身分的統計資料。",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "我們的法律依據彙總",
      blocks: [
        {
          type: "p",
          text: "根據GDPR，我們對您資料的每一項處理都需要法律依據。我們的依據如下：",
        },
        {
          type: "ul",
          items: [
            "**契約**：經營您的帳戶、遊戲、您的購買和支援。沒有這些資料，就沒有可玩的遊戲。",
            "**合法利益**：防止作弊和濫用、管理聊天、維護服務安全、了解遊戲的玩法，以及告知您帳戶相關資訊。我們的利益在於一個公平、安全、正常運作的遊戲；我們將資料保持在最少量且短期保留，您可以隨時反對。",
            "**同意**：獎勵廣告中的個人化廣告，透過您的裝置設定給予，並可在同一處撤回。",
            "**法律義務**：保存會計紀錄，以及回應主管機關的合法請求。",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "您的權利",
      blocks: [
        { type: "p", text: "您有權：" },
        {
          type: "ul",
          items: [
            "**查閱**我們持有的關於您的個人資料並取得副本。",
            "**更正**有誤的資料。",
            "**刪除**您的帳戶和資料。",
            "以可攜、機器可讀的格式**取得**您的資料。",
            "**反對**基於我們合法利益的處理，並在我們審查期間**限制**處理。",
            "隨時在裝置設定中**撤回對廣告的同意**，並以同樣方式關閉通知。",
          ],
        },
        {
          type: "p",
          text: "如需行使權利，請從與您帳戶連結的地址寄電子郵件至[contact@geofastgames.com](mailto:contact@geofastgames.com)；如果您的帳戶沒有電子郵件，請告知我們您的用戶名，我們將在遊戲內進行核實。刪除請求也可以從我們的[資料刪除頁面](/datadeletion)發起。我們會在一個月內回覆。",
        },
        {
          type: "p",
          text: "如果您認為我們非法處理您的資料，您可以向比利時資料保護機關（Gegevensbeschermingsautoriteit / Autorité de protection des données），Rue de la Presse 35, 1000 Brussels，[dataprotectionauthority.be](https://www.dataprotectionauthority.be)投訴，或向您所居住國家的監管機關投訴。",
        },
      ],
    },
    {
      id: "children",
      title: "兒童",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations*不以13歲以下兒童為對象，我們也不會有意收集他們的個人資料。在比利時，13歲是可以自行同意使用線上服務的年齡。遊戲在每個商店都有反映其線上聊天和選擇性購買的年齡分級；家長可以使用Google Play和App Store的家長監護功能限制購買以及兒童可以安裝的應用程式。",
        },
        {
          type: "p",
          text: "如果您認為有13歲以下兒童擁有帳戶，請寄電子郵件給我們，我們會將其刪除。",
        },
      ],
    },
    {
      id: "security",
      title: "安全",
      blocks: [
        {
          type: "p",
          text: "遊戲、本網站與我們伺服器之間的所有流量均已加密（TLS）。密碼經過雜湊處理。資料庫無法從網際網路存取。伺服器和資料的存取權限僅限兩名開發者；管理員只能透過一個記錄每次查閱的工具查看聊天歷史。沒有任何系統是絕對安全的；如果我們得知發生了影響您資料的外洩事件，我們將依法通知您和監管機關。",
        },
      ],
    },
    {
      id: "website",
      title: "本網站",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com不設定Cookie，也不使用任何追蹤或分析指令碼。您造訪時，瀏覽器只會向外送出三項內容：頁面字型從Google Fonts載入，因此Google可見您的IP位址；Discord成員數從Discord的公開API取得；即時統計資料來自我們自己的伺服器。指向應用程式商店的連結帶有推廣標記，以便我們知道某次下載來自本網站，它識別的是網站，而非您。",
        },
        {
          type: "p",
          text: "當您透過本網站上的表單向我們傳送建議、錯誤回報、翻譯問題回報或玩家檢舉時，我們會將您填寫的內容、您附加的截圖、時間、您的瀏覽器語言以及您IP位址的雜湊值儲存在我們位於歐盟的自有伺服器上。我們使用這些資訊來閱讀並跟進您的訊息，以及限制對表單的濫用。用戶名和電子郵件地址為選填；僅在您希望我們能夠回覆時填寫。表單提交的內容會在十二個月後刪除。",
        },
      ],
    },
    {
      id: "changes",
      title: "本政策的變更",
      blocks: [
        {
          type: "p",
          text: "當我們改變處理資料的方式時，我們會更新本頁面及其日期；對於重大變更，我們會在遊戲內告知您。",
        },
      ],
    },
  ],
};
