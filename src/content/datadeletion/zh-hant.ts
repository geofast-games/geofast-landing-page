import type { DataDeletionContent } from "./types";

// Traditional Chinese (html lang zh-Hant, URL /zh-hant/datadeletion). Polite
// "nin" throughout, as in the Traditional Chinese privacy policy and Terms.
// Taiwan vocabulary where it differs from the mainland: "ziliao" for data,
// "zhuangzhi" for device, "dingyue" for subscription, "jiechu anzhuang" for
// uninstalling. Full-width punctuation, no spaces between Chinese words
// (Latin names keep their own spacing). The page is "ziliao shanchu
// qingqiu"; both other documents link to it as the "ziliao shanchu yemian".
// Terminology follows them: "zhanghu", "yonghuming", "jindu", "xuni huobi he
// wupin", "xianshang ziliaoku" and "xianshang xitong" for the live database
// and live systems, "guidang", "shangdian" for the store; the game
// translates Battle Pass as "zhandou tongxingzheng", so this text does too.
// The privacy policy is "yinsi zhengce", the Terms are "fuwu tiaokuan", as
// they name themselves.
export const zhHant: DataDeletionContent = {
  lang: "zh-hant",
  htmlLang: "zh-Hant",
  label: "繁體中文",
  pageTitle: "資料刪除請求 | Geofast: Battle of Nations",
  metaDescription:
    "如何在遊戲內或透過電子郵件刪除您的 Geofast: Battle of Nations 帳戶和個人資料，哪些內容會被刪除，哪些會被保留，以及需要多長時間。",
  gameName: "Geofast: Battle of Nations",
  docName: "資料刪除請求",
  lastUpdated: "最後更新：2026年9月25日",
  sectionsLabel: "章節",
  languageLabel: "語言",
  contact: {
    line: "有疑問？請在Discord上提問。與您的資料有關的請求，請寄電子郵件給我們。",
    discord: "在Discord上提問",
    back: "返回Geofast Games",
  },
  request: {
    title: "透過電子郵件申請刪除",
    text: "適用於您已無法開啟遊戲的情況。此按鈕會開啟一封寄給我們的電子郵件，請求內容已經寫好；填入您的帳戶資料後送出即可。如果此裝置上沒有電子郵件應用程式，請附上同樣的資料寄信至contact@geofastgames.com。",
    button: "送出刪除請求",
    emailSubject: "資料刪除請求 - Geofast: Battle of Nations",
    emailBody: `Geofast Games，您好：

我希望刪除我的Geofast: Battle of Nations帳戶和我的個人資料。

我的帳戶：
- 遊戲內用戶名：[請填寫]
- 與帳戶連結的電子郵件（如有）：[請填寫]
- 我效力的國家：[請填寫]
- 用於遊玩的裝置：[請填寫]

我了解刪除是永久性的，我的進度、貨幣和物品將會遺失，並且戰鬥通行證訂閱需要在我的應用程式商店中另行取消。

謝謝。`,
  },
  sections: [
    {
      id: "your-right",
      title: "您刪除資料的權利",
      blocks: [
        {
          type: "p",
          text: "無論您居住在哪裡，您都可以隨時刪除您的*Geofast: Battle of Nations*帳戶及與之連結的個人資料，無需說明理由。有兩種方式：在遊戲內刪除，即時生效；或者在您無法再開啟遊戲時透過電子郵件申請。",
        },
        {
          type: "p",
          text: "刪除帳戶是我們提供的唯一刪除方式：我們不會刪除帳戶的一部分而保留其餘部分。",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "刪除之前",
      blocks: [
        {
          type: "ul",
          items: [
            "**請先取消您的戰鬥通行證。**訂閱是您與應用程式商店之間的契約，刪除帳戶並不會取消訂閱。請在Google Play或App Store的訂閱設定中取消，否則它會繼續續訂。",
            "**不予任何退款。**虛擬貨幣、物品和未使用的訂閱時間隨帳戶一同終止，詳見我們的[服務條款](/termsofservice)。",
            "**無法復原。**沒有寬限期，也沒有可用於還原的備份。",
            "**適用於每一部裝置。**帳戶會從其連結過的每一部裝置上消失，而不僅僅是您執行刪除的那部裝置。",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "在遊戲內刪除您的帳戶",
      blocks: [
        {
          type: "p",
          text: "開啟您的個人資料，點選**刪除我的帳戶**，然後輸入您的用戶名以確認。帳戶會立即刪除。下次在該裝置上啟動遊戲時，遊戲會建立一個新的空帳戶。",
        },
      ],
    },
    {
      id: "by-email",
      title: "或透過電子郵件向我們申請",
      blocks: [
        {
          type: "p",
          text: "如果您已解除安裝遊戲或遺失了裝置，請寄電子郵件至[contact@geofastgames.com](mailto:contact@geofastgames.com)，或使用下方按鈕，並提供您的遊戲內用戶名以及與帳戶連結的電子郵件地址（如有）。請從該地址寄出：我們以此確認請求來自帳戶的所有者。如果您的帳戶沒有電子郵件，請告知我們您的用戶名和您效力的國家，我們會在刪除任何內容之前透過遊戲確認該帳戶屬於您。",
        },
        {
          type: "p",
          text: "我們會確認收到您的請求，在30天內完成刪除，並在完成後再次確認。如果我們無法將您提供的資料與某個帳戶比對，我們會在採取行動之前向您索取更多資料；我們絕不會根據未經核實的請求刪除帳戶。",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "哪些內容會被刪除",
      blocks: [
        {
          type: "p",
          text: "刪除帳戶會移除該帳戶及其下儲存的所有內容：",
        },
        {
          type: "ul",
          items: [
            "您的帳戶、用戶名，以及與之連結的裝置、電子郵件、Google或Apple連結；",
            "您的進度：排名、物品、虛擬貨幣、升級、成就、賽季進度和戰鬥歷史；",
            "您的好友清單和推薦碼；",
            "您的推播通知權杖。",
          ],
        },
        {
          type: "p",
          text: "與帳戶連結的技術紀錄，例如分析事件、仍在我們線上資料庫中的聊天訊息，以及隱私政策中所述的對局紀錄和首次啟動紀錄，會在30天內從我們的線上系統中移除。",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "我們保留哪些內容，以及原因",
      blocks: [
        {
          type: "ul",
          items: [
            "會計法律要求我們保存的購買紀錄，保留期限以該法律規定為準。",
            "不再能識別您身分的統計資料，例如某一天進行的戰鬥數量。",
            "在刪除之前已從線上資料庫轉入我們歸檔的紀錄，詳見隱私政策中的[我們保留資料多久](/privacy#retention)。",
            "應用程式商店、Google AdMob或Discord依據其各自政策持有的資料。這些不由我們控制；如需移除，請聯絡它們。",
          ],
        },
        {
          type: "p",
          text: "您裝置上的本機檔案屬於您：解除安裝遊戲即可移除它們。",
        },
      ],
    },
    {
      id: "other-requests",
      title: "關於您資料的其他請求",
      blocks: [
        {
          type: "p",
          text: "您還可以索取您資料的副本、更正有誤的資料，或反對我們使用資料的方式。所有這些請求均由同一電子郵件地址處理，[隱私政策](/privacy#rights)對每項權利均有說明。我們會在一個月內回覆。",
        },
      ],
    },
  ],
};
