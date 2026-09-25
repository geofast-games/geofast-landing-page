import type { DataDeletionContent } from "./types";

// Simplified Chinese (html lang zh-Hans, URL /zh-hans/datadeletion). Polite
// "nin" throughout, as in the Simplified Chinese privacy policy and Terms.
// Full-width punctuation, no spaces between Chinese words (Latin names keep
// their own spacing). The page is "shuju shanchu qingqiu"; both other
// documents link to it as the "shuju shanchu yemian". Terminology follows
// them: "zhanghu", "shebei", "yonghuming", "jindu", "xuni huobi he wupin",
// "zaixian shujuku" and "zaixian xitong" for the live database and live
// systems, "guidang", "dingyue", "shangdian" for the store; the game
// translates Battle Pass as "zhandou tongxingzheng", so this text does too.
// The privacy policy is "yinsi zhengce", the Terms are "fuwu tiaokuan", as
// they name themselves.
export const zhHans: DataDeletionContent = {
  lang: "zh-hans",
  htmlLang: "zh-Hans",
  label: "简体中文",
  pageTitle: "数据删除请求 | Geofast: Battle of Nations",
  metaDescription:
    "如何在游戏内或通过电子邮件删除您的 Geofast: Battle of Nations 账户和个人数据，哪些内容会被删除，哪些会被保留，以及需要多长时间。",
  gameName: "Geofast: Battle of Nations",
  docName: "数据删除请求",
  lastUpdated: "最后更新：2026年9月25日",
  sectionsLabel: "章节",
  languageLabel: "语言",
  contact: {
    line: "有疑问？请在Discord上提问。有关您数据的请求，请给我们发送电子邮件。",
    discord: "在Discord上提问",
    back: "返回Geofast Games",
  },
  request: {
    title: "通过电子邮件申请删除",
    text: "适用于您已无法打开游戏的情况。此按钮会打开一封发给我们的电子邮件，请求内容已经写好；填入您的账户信息后发送即可。如果此设备上没有电子邮件应用，请附上同样的信息写信至contact@geofastgames.com。",
    button: "发送删除请求",
    emailSubject: "数据删除请求 - Geofast: Battle of Nations",
    emailBody: `Geofast Games，您好：

我希望删除我的Geofast: Battle of Nations账户和我的个人数据。

我的账户：
- 游戏内用户名：[请填写]
- 与账户关联的电子邮件（如有）：[请填写]
- 我效力的国家：[请填写]
- 用于游戏的设备：[请填写]

我了解删除是永久性的，我的进度、货币和物品将会丢失，并且战斗通行证订阅需要在我的应用商店中另行取消。

谢谢。`,
  },
  sections: [
    {
      id: "your-right",
      title: "您删除数据的权利",
      blocks: [
        {
          type: "p",
          text: "无论您居住在哪里，您都可以随时删除您的*Geofast: Battle of Nations*账户及与之关联的个人数据，无需说明理由。有两种方式：在游戏内删除，即时生效；或者在您无法再打开游戏时通过电子邮件申请。",
        },
        {
          type: "p",
          text: "删除账户是我们提供的唯一删除方式：我们不会删除账户的一部分而保留其余部分。",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "删除之前",
      blocks: [
        {
          type: "ul",
          items: [
            "**请先取消您的战斗通行证。**订阅是您与应用商店之间的合约，删除账户并不会取消订阅。请在Google Play或App Store的订阅设置中取消，否则它会继续续订。",
            "**不予任何退款。**虚拟货币、物品和未使用的订阅时间随账户一同终止，详见我们的[服务条款](/termsofservice)。",
            "**无法撤销。**没有宽限期，也没有可用于恢复的备份。",
            "**适用于每一台设备。**账户会从其关联过的每一台设备上消失，而不仅仅是您执行删除的那台设备。",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "在游戏内删除您的账户",
      blocks: [
        {
          type: "p",
          text: "打开您的个人资料，点击**删除我的账户**，然后输入您的用户名以确认。账户会立即删除。下次在该设备上启动游戏时，游戏会创建一个新的空账户。",
        },
      ],
    },
    {
      id: "by-email",
      title: "或通过电子邮件向我们申请",
      blocks: [
        {
          type: "p",
          text: "如果您已卸载游戏或丢失了设备，请发送电子邮件至[contact@geofastgames.com](mailto:contact@geofastgames.com)，或使用下方按钮，并提供您的游戏内用户名以及与账户关联的电子邮件地址（如有）。请从该地址发送：我们以此确认请求来自账户的所有者。如果您的账户没有电子邮件，请告知我们您的用户名和您效力的国家，我们会在删除任何内容之前通过游戏确认该账户属于您。",
        },
        {
          type: "p",
          text: "我们会确认收到您的请求，在30天内完成删除，并在完成后再次确认。如果我们无法将您提供的信息与某个账户匹配，我们会在采取行动之前向您索取更多信息；我们绝不会根据未经核实的请求删除账户。",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "哪些内容会被删除",
      blocks: [
        {
          type: "p",
          text: "删除账户会移除该账户及其下存储的所有内容：",
        },
        {
          type: "ul",
          items: [
            "您的账户、用户名，以及与之关联的设备、电子邮件、Google或Apple关联；",
            "您的进度：排名、物品、虚拟货币、升级、成就、赛季进度和战斗历史；",
            "您的好友列表和推荐码；",
            "您的推送通知令牌。",
          ],
        },
        {
          type: "p",
          text: "与账户关联的技术记录，例如分析事件、仍在我们在线数据库中的聊天消息，以及隐私政策中所述的对局记录和首次启动记录，会在30天内从我们的在线系统中移除。",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "我们保留哪些内容，以及原因",
      blocks: [
        {
          type: "ul",
          items: [
            "会计法律要求我们保存的购买记录，保留期限以该法律规定为准。",
            "不再能识别您身份的统计数据，例如某一天进行的战斗数量。",
            "在删除之前已从在线数据库转入我们归档的记录，详见隐私政策中的[我们保留数据多久](/privacy#retention)。",
            "应用商店、Google AdMob或Discord依据其各自政策持有的数据。这些不由我们控制；如需移除，请联系它们。",
          ],
        },
        {
          type: "p",
          text: "您设备上的本地文件属于您：卸载游戏即可移除它们。",
        },
      ],
    },
    {
      id: "other-requests",
      title: "关于您数据的其他请求",
      blocks: [
        {
          type: "p",
          text: "您还可以索取您数据的副本、更正有误的数据，或反对我们使用数据的方式。所有这些请求均由同一电子邮件地址处理，[隐私政策](/privacy#rights)对每项权利均有说明。我们会在一个月内答复。",
        },
      ],
    },
  ],
};
