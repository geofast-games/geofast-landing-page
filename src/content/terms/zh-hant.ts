import type { TermsContent } from "./types";

// Traditional Chinese (html lang zh-Hant, URL /zh-hant/termsofservice).
// Polite "nin" throughout, as in the Traditional Chinese privacy policy, the
// game's Traditional Chinese translation and legal text. Taiwan vocabulary
// where it differs from the mainland: "ziliao" for data, "fuwuqi",
// "ruanti", "zhuangzhi" for device, "wanglu", "zixun", "dingyue" for
// subscription. Full-width punctuation, corner brackets for quotations, no
// spaces between Chinese words (Latin names keep their own spacing). The
// document is called "fuwu tiaokuan", the term the privacy policy links to;
// the privacy policy is "yinsi zhengce", as it names itself. Legal
// vocabulary follows Taiwan consumer-protection usage and Traditional
// Chinese renderings of the EU concepts used here: "chehuiquan" for the
// right of withdrawal, "fuhe yueding" for conformity, "qiangzhixing
// xiaofeizhe baohu guiding", "zhongda guoshi", "zeren", "juzhudi fayuan".
// Game terms follow the game: "zhandou" for battle, "guojia" for nation,
// "liaotian" for chat, "yingbi" for coins, "zuanshi" for diamonds,
// "xingxing" for stars, "saiji" for season, "paihangbang" for leaderboards,
// "wuqi" for weapons, "pifu" for skins, "yonghuming" for username,
// "tuijianma" for referral code; the game translates Battle Pass as "zhandou
// tongxingzheng", so this text does too, as the privacy policy does. As
// there, cheating is "zuobi", a mute "jinyan", a ban "tingquan", a report
// "jianju", moderators "guanliyuan".
export const zhHant: TermsContent = {
  lang: "zh-hant",
  htmlLang: "zh-Hant",
  label: "繁體中文",
  pageTitle: "服務條款 | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nations 的遊戲規則：帳戶、行為規範、管理與申訴、購買與戰鬥通行證、條款變更以及您的權利。",
  gameName: "Geofast: Battle of Nations",
  docName: "服務條款",
  lastUpdated: "最後更新：2026年9月25日",
  sectionsLabel: "章節",
  languageLabel: "語言",
  contact: {
    line: "有疑問？請在Discord上提問。與您的資料有關的請求，請寄電子郵件給我們。",
    discord: "在Discord上提問",
    back: "返回Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. 我們是誰，以及本條款涵蓋的內容",
      blocks: [
        {
          type: "p",
          text: "本服務條款是您與Geofast Games（一家位於比利時的獨立遊戲工作室）之間關於*Geofast: Battle of Nations*（本遊戲）及網站geofastgames.com的協議。您可以透過[contact@geofastgames.com](mailto:contact@geofastgames.com)聯絡我們。",
        },
        {
          type: "p",
          text: "建立帳戶或進行遊戲，即表示您接受本條款。如果您不同意本條款，請不要遊玩。我們的[隱私政策](/privacy)說明了我們如何處理您的資料；它是一份單獨的文件，與本條款一併適用。",
        },
        {
          type: "p",
          text: "在iOS上，本應用程式依據Apple的標準最終使用者授權合約授權給您，該合約規範您對應用程式本身的使用。本條款規範遊戲服務、您的帳戶以及您與他人遊玩的方式。兩者重疊時，Apple的合約適用於應用程式授權，本條款適用於其他一切事項。",
        },
        {
          type: "p",
          text: "本條款以英文撰寫。譯文僅為方便閱讀而提供；若譯文與英文文本不一致，以英文文本為準。",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. 誰可以遊玩",
      blocks: [
        {
          type: "p",
          text: "您必須年滿13歲才能遊玩。如果您未滿18歲，您需要父母或監護人的許可才能遊玩和進行任何購買，並且您一經遊玩即確認已取得該許可。父母和監護人對其照顧的未成年人在遊戲中的行為以及透過其商店帳戶進行的購買負責。Google Play和App Store的家長監護功能可以限制購買和下載。",
        },
        {
          type: "p",
          text: "本遊戲在各商店的年齡分級反映了它包含玩家之間的聊天和選擇性購買。",
        },
      ],
    },
    {
      id: "account",
      title: "3. 您的帳戶",
      blocks: [
        {
          type: "p",
          text: "當您首次線上遊玩時，遊戲會建立一個與您裝置連結的帳戶。您可以連結電子郵件地址和密碼，或Google或Apple登入，以便在多部裝置之間保留進度。請妥善保管您的登入憑證：透過您帳戶進行的一切均由您負責，如果您認為他人正在使用您的帳戶，應立即告知我們。",
        },
        {
          type: "p",
          text: "一個帳戶同一時間只能連線一部裝置。從新裝置連線會中斷之前的裝置。",
        },
        {
          type: "p",
          text: "如果您在未連結電子郵件地址或Google或Apple登入的情況下遺失或重設了裝置，我們將無法確認該帳戶屬於您，帳戶也無法復原。如果您重視自己的進度，請連結帳戶。",
        },
        {
          type: "p",
          text: "不允許與他人共用帳戶，因為這會在排行榜和排名中帶來不公平的優勢。允許擁有多個帳戶，但任何一個帳戶都不得用於取得不公平優勢、操縱對局，或規避對另一帳戶的處分。帳戶及其內容不得出售、購買、交易或贈與。",
        },
        {
          type: "p",
          text: "您的用戶名對所有人可見。用戶名不得具有攻擊性、誤導性，也不得冒充任何人，包括我們的工作人員。您可以在遊戲中按其中顯示的費用變更一次用戶名。我們可以變更違反這些規則的用戶名。",
        },
        {
          type: "p",
          text: "我們不刪除不活躍的帳戶。您可以隨時在遊戲內透過您的個人資料，或透過我們的[資料刪除頁面](/datadeletion)刪除您的帳戶。刪除是永久性的，包括您的進度、虛擬貨幣和物品。",
        },
      ],
    },
    {
      id: "licence",
      title: "4. 您的遊戲授權",
      blocks: [
        {
          type: "p",
          text: "我們授予您一項個人的、非專屬的、不可轉讓的授權，允許您在自己擁有或控制的裝置上安裝並遊玩本遊戲，供您個人娛樂之用。本遊戲及其美術、音效、文字、程式碼和設計屬於Geofast Games或我們的授權方，並受智慧財產權法保護。除法律明確允許外，您不得複製、修改、散布、出售或出租本遊戲的任何部分，也不得對其進行逆向工程。",
        },
        {
          type: "p",
          text: "本遊戲可在商店中列出的Android和iOS版本上運作。線上遊玩需要較新版本的遊戲：我們透過商店發布更新，過舊的版本在更新之前可能無法使用線上功能。",
        },
        {
          type: "p",
          text: "您可以錄製、直播和發布您的遊戲影片和截圖，包括在您透過廣告或會員取得收入的平台上。請勿將您的內容表述為由我們製作或認可，請勿使用我們的美術素材販售周邊商品，也請勿展示作弊工具或漏洞利用。我們可以要求您移除違反這些規則或法律的內容。",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. 行為規範",
      blocks: [
        { type: "p", text: "請公平遊玩，並以禮待人。您不得：" },
        {
          type: "ul",
          items: [
            "使用作弊工具、漏洞利用、機器人、自動化、修改過的客戶端，或任何干擾本遊戲或其伺服器的工具；",
            "利用漏洞取得優勢，而不是回報漏洞；",
            "與其他玩家串通、操縱對局、互換勝利，或以其他方式操縱排名、排行榜或獎勵，包括使用額外帳戶；",
            "共用、出售、購買或轉讓帳戶，或在遊戲之外交易虛擬物品；",
            "騷擾、威脅、侮辱或欺凌其他玩家，或發布仇恨、色情、暴力或其他不當內容；",
            "冒充其他玩家、我們的工作人員或任何個人或組織；",
            "發送垃圾訊息、發布廣告，或分享指向有害內容的連結；",
            "索取或收集其他玩家的個人資料或登入資訊，或在聊天中分享您自己或他人的這類資訊；",
            "明知不實而檢舉其他玩家，或濫用申訴流程；",
            "組織或參與對對局或遊戲中任何其他事項的投注或賭博；",
            "攻擊、探測或使我們的伺服器過載，或干擾其他玩家的連線；",
            "故意破壞其他玩家的遊戲體驗；",
            "將本遊戲用於任何違法用途。",
          ],
        },
        {
          type: "p",
          text: "國家之間的競爭、挑釁和戰爭言辭是遊戲的一部分。對真實人物的攻擊、針對群體的仇恨、威脅和色情內容則不是。",
        },
      ],
    },
    {
      id: "content",
      title: "6. 聊天、用戶名和您建立的內容",
      blocks: [
        {
          type: "p",
          text: "本遊戲包含玩家之間的聊天。您所寫的內容會傳送給該聊天中的其他玩家，並按隱私政策規定的期限儲存在我們的伺服器上，以便管理員審核檢舉。聊天不是私密的：其他玩家可以看到，管理員在處理檢舉時可以閱讀。請勿在聊天中分享個人資料。",
        },
        {
          type: "p",
          text: "您保留對所寫內容的權利。您允許我們為營運本遊戲而儲存、顯示、管理並在必要時移除這些內容。您對自己發布的內容負責。我們會移除違反本條款或法律的內容。",
        },
        {
          type: "p",
          text: "如果您透過遊戲、我們的網站或Discord向我們發送建議或想法，我們可以自由使用，無需付款或對您承擔任何義務，也無需提及您的姓名。",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. 我們如何管理",
      blocks: [
        { type: "p", text: "管理結合了自動化工具和人工：" },
        {
          type: "ul",
          items: [
            "在訊息傳送之前，我們伺服器上的自動過濾器會根據頻率限制、詞彙表和仇恨言論模式對其進行檢查。被攔截的訊息永遠不會送出。",
            "當我們啟用該功能時，已傳送的訊息還會由自動化服務（Google的Gemini）進行分類，該服務會接收該訊息以及您在該聊天中的近期訊息作為脈絡。您設定或變更用戶名時，用戶名也以同樣方式接受檢查。被分類為不當的訊息會被刪除，並在您的帳戶中記錄一次違規。",
            "人工管理員審核玩家的檢舉，並根據查證的情況採取行動。他們對聊天紀錄的存取會被記錄。",
          ],
        },
        {
          type: "p",
          text: "聊天違規的後果是警告和臨時禁言。自動判定的違規首先導致警告，如果您短時間內再犯，則導致短期禁言。管理員施加的禁言是臨時的，並隨著您已收到的每次禁言而遞增，從數小時到數月。您的違規和禁言紀錄會保留在您的帳戶中，以便辨識重複行為。",
        },
        {
          type: "p",
          text: "每當我們對您禁言、移除您的內容或處分您的帳戶時，我們都會在遊戲中告知您採取了什麼措施及其原因，您可以按第9節所述提出異議。",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. 公平遊戲的執行",
      blocks: [
        {
          type: "p",
          text: "戰鬥操作在發生時即在我們的伺服器上驗證，因此修改過的客戶端無法改變對局結果。自動檢查會定期審視近期對局紀錄，尋找進入同一對局的頻率遠超機率所允許的玩家；操縱對局和串通就是這樣被發現的。",
        },
        {
          type: "p",
          text: "作弊和串通按步驟處分。玩家首先會收到一次警告。只有在警告後出現新證據時，處分才會升級，且各步驟之間留有時間：重設排名和貨幣，然後完全重設進度，最後永久停權裝置，這也會阻止從該裝置建立新帳戶。涉及嚴重或重複作弊的帳戶可能被關閉。在執行重設之前，我們會儲存帳戶的快照，以便撤銷事後證明有誤的處分。處分紀錄會保留在您的帳戶中。",
        },
        {
          type: "p",
          text: "每項處分都附有遊戲內通知，說明採取了什麼措施及其原因，您可以按第9節所述提出異議。",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. 檢舉與申訴",
      blocks: [
        {
          type: "p",
          text: "要檢舉違反本條款或法律的玩家或內容，請使用遊戲中的「舉報」按鈕、[我們網站上的檢舉表單](/report)，或寄電子郵件至[contact@geofastgames.com](mailto:contact@geofastgames.com)。請告訴我們是誰、做了什麼、在哪裡。我們會確認收到您的檢舉，並及時告知您我們的決定。檢舉由人工在上述工具的協助下，以誠信、不武斷的方式處理。",
        },
        {
          type: "p",
          text: "如果您認為某次禁言、處分、停權或內容移除有誤，請在一個月內透過電子郵件或Discord提出申訴。由未參與原決定的人員進行複核，我們在14天內答覆。如果決定有誤，我們會撤銷該決定，並在可能的情況下復原所失去的內容。本條款的任何內容均不限制您向法院或消費者機構尋求救濟的權利。",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. 虛擬貨幣、物品和購買",
      blocks: [
        {
          type: "p",
          text: "本遊戲有虛擬貨幣（鑽石、硬幣和星星）以及武器、皮膚、升級和戰鬥通行證獎勵等虛擬物品。鑽石可以透過Google Play或App Store用真實貨幣購買；硬幣和星星透過遊玩取得或在遊戲內兌換。價格在您購買前以您的當地貨幣顯示在商店和遊戲中。",
        },
        {
          type: "p",
          text: "虛擬貨幣和物品授權給您在遊戲中使用。它們不是您的財產，在遊戲之外沒有價值，不能兌換為真實貨幣、商品或服務，也不能轉讓給其他帳戶或他人。",
        },
        {
          type: "p",
          text: "購買的內容會立即交付。購買即表示您要求我們立即交付，並確認一旦交付開始，法定的14天撤回權不再適用。除此之外，購買是最終的，除非法律賦予您退款的權利。退款請求請向您購買時所用的商店提出，由其處理付款；我們從不接觸您的付款資訊。",
        },
        {
          type: "p",
          text: "我們可以出於正當理由變更、重新平衡、新增或停用虛擬貨幣和物品：保持遊戲平衡有趣、修復漏洞、安全或法律要求。當某項變更會顯著影響您近期付費購買的內容時，我們會提前告知您；當法律因此類變更賦予您終止協議並取得退款的權利時，我們會予以尊重。您作為消費者的法定權利，包括取得一款按描述運作的遊戲的權利，不受影響。",
        },
        {
          type: "p",
          text: "本遊戲沒有強制廣告。當遊戲提供可選擇的獎勵廣告時，是否觀看由您決定，我們可以變更或取消該選項。",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. 戰鬥通行證",
      blocks: [
        {
          type: "p",
          text: "戰鬥通行證是透過Google Play或App Store購買的訂閱。它會按商店中顯示的價格每月自動續訂，直到您取消。您可以隨時在商店的訂閱設定中取消；通行證在您已付費的週期結束前保持有效，您已領取的獎勵也會保留。價格變動自下一次續訂起適用，商店會在生效前通知您。",
        },
        {
          type: "p",
          text: "戰鬥通行證獎勵透過在賽季期間遊玩來解鎖；通行證本身並不授予所有獎勵。訂閱退款由商店按其規則和法律處理。",
        },
      ],
    },
    {
      id: "programs",
      title: "12. 推薦獎勵與創作者計畫",
      blocks: [
        {
          type: "p",
          text: "當新玩家使用您的推薦碼加入時，遊戲會獎勵您，也會獎勵對方。推薦獎勵面向真正的新玩家。不允許推薦您自己、您自己的其他帳戶，或僅為領取獎勵而建立的帳戶，以此方式取得的獎勵將被收回。",
        },
        {
          type: "p",
          text: "我們的創作者計畫在玩家發布的遊戲影片達到觀看次數里程碑時給予獎勵。里程碑、獎勵和資格規則在遊戲中公布，並可能變更。獎勵由我們人工核實並發放，有疑問時由我們決定。以偽造觀看次數或以違反本條款的內容申領的獎勵將被拒絕或收回。",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. 第三方服務",
      blocks: [
        {
          type: "p",
          text: "本遊戲使用Google Play和App Store進行下載、付款和訂閱；使用Google和Apple提供選擇性登入；使用Google AdMob提供選擇性獎勵廣告；使用Discord作為我們的社群伺服器。您對這些服務的使用受其各自的條款和隱私政策約束，我們無法控制。",
        },
      ],
    },
    {
      id: "availability",
      title: "14. 可用性與遊戲變更",
      blocks: [
        {
          type: "p",
          text: "我們努力保持遊戲可用，但無法承諾它永不中斷。線上功能可能在維護期間、因技術問題或因我們無法控制的原因而無法使用。離線模式在沒有網路連線時仍可繼續使用。",
        },
        {
          type: "p",
          text: "本遊戲是一項持續營運的服務，會隨時間變化：我們會新增、調整和移除功能、武器、國家、賽季和活動，以保持遊戲的平衡和新鮮感，修復問題，保障安全，並符合法律要求。顯著影響您遊玩方式的變更會提前在遊戲中公告。您的法定權利不受影響。",
        },
      ],
    },
    {
      id: "ending",
      title: "15. 協議的終止",
      blocks: [
        {
          type: "p",
          text: "您可以隨時解除安裝遊戲以停止遊玩，也可以在遊戲內透過您的個人資料，或透過我們的[資料刪除頁面](/datadeletion)刪除您的帳戶。刪除帳戶會永久移除您的進度、虛擬貨幣和物品；這些均不予退款。",
        },
        {
          type: "p",
          text: "如果您嚴重或多次違反本條款，或法律要求，我們可以暫停或關閉您的帳戶。除作弊、濫用或法律義務等嚴重情形外，我們會先警告您並給您回應的機會。我們會告知您原因以及如何申訴（第9節）。帳戶關閉即終止您的授權以及對該帳戶虛擬貨幣和物品的存取。",
        },
        {
          type: "p",
          text: "如果我們不得不停止營運本遊戲，我們會在遊戲中和網站上至少提前30天通知。虛擬貨幣和物品隨遊戲一同終止。您對近期購買的法定權利不受影響。",
        },
      ],
    },
    {
      id: "liability",
      title: "16. 我們的責任",
      blocks: [
        {
          type: "p",
          text: "我們依法對您承擔責任。對於因我們的過失造成的死亡或人身傷害、詐欺、故意或重大過失行為，以及依據保護您作為消費者的法律不得排除的任何其他事項，包括您取得一款符合承諾的遊戲的權利，我們不排除或限制責任。",
        },
        {
          type: "p",
          text: "除此之外，我們僅對您接受本條款時可預見、且因我們違反本條款而產生的損失負責。本遊戲免費遊玩並作為持續營運的服務提供；除法律另有規定外，我們對因中斷、其他玩家的行為或我們無法合理控制的事件造成的損失不承擔責任。",
        },
        {
          type: "p",
          text: "在法律允許的範圍內，您應對因違反本條款而給我們造成的損失負責。",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. 隱私",
      blocks: [
        {
          type: "p",
          text: "我們如何收集和使用您的資料，見我們的[隱私政策](/privacy)。它不是本條款的一部分，也不取決於您是否同意本條款：它告知您我們做了什麼以及您享有哪些權利。",
        },
      ],
    },
    {
      id: "changes",
      title: "18. 本條款的變更",
      blocks: [
        {
          type: "p",
          text: "當遊戲、法律或我們的服務發生變化，或為使條款更清晰時，我們會變更本條款。對於影響您的權利或遊玩方式的變更，我們會在生效前至少30天在遊戲中通知您；如果您不同意，可以在此之前停止遊玩並刪除帳戶。不影響您的澄清和更正在發布時生效。頂部的日期告知您目前版本的生效時間。",
        },
      ],
    },
    {
      id: "law",
      title: "19. 法律、爭議與投訴",
      blocks: [
        {
          type: "p",
          text: "本條款受比利時法律管轄。如果您居住在其他國家，您仍受該國強制性消費者保護規定的保護，並可以向您居住地的法院提起訴訟。我們只能在該地對您提起訴訟。",
        },
        {
          type: "p",
          text: "如果您有投訴，請先透過[contact@geofastgames.com](mailto:contact@geofastgames.com)或Discord聯絡我們；大多數問題可以直接解決。您也可以求助於您所在國家的消費者爭議解決機構；在比利時，該機構是消費者調解服務處（Consumentenombudsdienst / Service de Médiation pour le Consommateur）。本條款不含仲裁條款，也不含放棄集體訴訟的條款。",
        },
      ],
    },
    {
      id: "final",
      title: "20. 最終條款",
      blocks: [
        {
          type: "p",
          text: "我們透過遊戲內通知、我們的網站，以及在您連結了電子郵件地址時透過電子郵件與您聯絡。您可以透過[contact@geofastgames.com](mailto:contact@geofastgames.com)聯絡我們；這也是我們接收法律通知的地址和面向主管機關的聯絡點。",
        },
        {
          type: "p",
          text: "如果本條款的某一部分被認定無效，其餘部分仍然有效。如果我們在某一時刻未執行某項規則，我們仍可在之後執行。在您的權利不被削減的前提下，我們可以將本協議轉讓給接手本遊戲的公司；您不得轉讓您的帳戶或本協議。本條款和隱私政策構成您與我們之間關於本遊戲的全部協議。",
        },
      ],
    },
  ],
};
