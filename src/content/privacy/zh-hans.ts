import type { PrivacyContent } from "./types";

// Simplified Chinese (html lang zh-Hans, URL /zh-hans/privacy). Polite "nin"
// throughout, the dominant form in the game's Chinese translation and the
// norm for Chinese legal text. Full-width punctuation, curly double quotes
// for quotations, no spaces between Chinese words (Latin names keep their own
// spacing). Legal vocabulary follows the Chinese GDPR translations used in
// mainland notices of European services: "shuju kongzhizhe" (controller),
// "shuju baohuguan" (data protection officer), "falv yiju", "hefa liyi",
// "luxing hetong", "tongyi", "falv yiwu", "jianguan jigou", "biaozhun hetong
// tiaokuan", and the rights of "fangwen", "gengzheng", "shanchu", "xianzhi
// chuli", "shuju kexie", "fandui". Game terms follow the game: "zhandou" for
// battle, "guojia" for nation, "liaotian", "yingbi" for coins, "paihangbang",
// "shangdian", "saiji", "zhandou huifang" for replay; the game translates
// Battle Pass as "zhandou tongxingzheng", so the policy does too. Mutes are
// "jinyan", bans "fengjin".
export const zhHans: PrivacyContent = {
  lang: "zh-hans",
  htmlLang: "zh-Hans",
  label: "简体中文",
  pageTitle: "隐私政策 | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nations 收集哪些数据、如何使用、与谁共享，以及如何申请删除。",
  gameName: "Geofast: Battle of Nations",
  policyName: "隐私政策",
  lastUpdated: "最后更新：2026年9月25日",
  sectionsLabel: "章节",
  languageLabel: "语言",
  legalBasisLabel: "法律依据：",
  contact: {
    line: "有疑问？请在Discord上提问。有关您数据的请求，请给我们发送电子邮件。",
    discord: "在Discord上提问",
    back: "返回Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "我们是谁",
      blocks: [
        {
          type: "p",
          text: "Geofast Games是一家位于比利时的独立游戏工作室。我们开发*Geofast: Battle of Nations*并运营本网站。我们是本政策所述个人数据的数据控制者：由我们决定收集什么以及为何收集。",
        },
        {
          type: "p",
          text: "您可以通过[contact@geofastgames.com](mailto:contact@geofastgames.com)联系我们。我们是一个两人工作室，未设立数据保护官；通过同一地址即可联系到负责您数据的人员。",
        },
        {
          type: "p",
          text: "本政策适用于iOS和Android上的游戏以及网站geofastgames.com。它不适用于Discord、App Store、Google Play或您与游戏一同使用的其他服务；这些服务各有自己的政策，我们在提及之处附有链接。",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "概览",
      blocks: [
        {
          type: "table",
          head: ["内容", "目的", "保留多久"],
          rows: [
            [
              "账户：设备标识符、您的用户名，以及您自行选择添加的电子邮件地址和密码，或Google或Apple登录",
              "为运行您的账户并让您在线游戏",
              "直至您删除账户；我们不会删除不活跃的账户",
            ],
            [
              "游戏数据：对局、排名、物品、购买确认",
              "为运行游戏、排行榜和您的库存",
              "直至您删除账户；战斗回放保留7天，随后归档",
            ],
            [
              "聊天消息",
              "为传送消息并对不当行为进行管理",
              "战斗聊天保留15天，随后删除；其他聊天保留90天，随后归档",
            ],
            [
              "IP地址、设备标识符、手机型号",
              "为检测作弊和串通并执行封禁",
              "对局记录保留30天，首次启动记录保留90天，随后归档；设备标识符始终与您的账户关联；封禁记录保留至我们解除封禁",
            ],
            [
              "推送通知令牌",
              "为发送您可以关闭的通知",
              "直至令牌失效（例如卸载后）或您删除账户",
            ],
            [
              "关于您游戏方式的分析事件",
              "为了解游戏模式并修复问题",
              "400天，随后归档",
            ],
            [
              "由Google AdMob软件读取的广告标识符",
              "为加载并展示您可以选择观看的激励广告",
              "在游戏启动和广告加载时发送给Google；我们不存储；适用AdMob的政策",
            ],
          ],
        },
        { type: "lead", text: "继续阅读之前值得了解的四件事" },
        {
          type: "ul",
          items: [
            "聊天并不私密。消息最多保留15天（战斗聊天）或90天（其他聊天），以便管理员审核举报；每条消息都会经过自动过滤，而当我们启用该功能时，消息还会由Google的Gemini服务进行分类。",
            "您游戏时，我们会记录您的IP地址和设备标识符，以查处作弊并确保封禁有效。",
            "我们的服务器位于德国法兰克福。我们使用的少数服务提供商（Google、Apple）在欧盟以外处理数据。",
            "在我们的在线数据库中到期的记录（战斗聊天以外的聊天、对局记录、分析数据等）会在法兰克福归档，而非销毁。请参阅“我们保留数据多久”。",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "您的账户",
      blocks: [
        {
          type: "p",
          text: "当您首次在线游戏时，我们会为您创建一个账户，并将其与您设备上生成的标识符关联。游戏无需其他任何信息，您也永远不必告诉我们您的姓名。",
        },
        {
          type: "p",
          text: "您选择一个其他玩家可以看到的用户名。除此之外，我们仅存储游戏为您运行所需的内容：您的进度、您的设置和好友，以及您使用的游戏版本。",
        },
        {
          type: "p",
          text: "如果您希望在多台设备之间保留进度，可以添加电子邮件地址和密码，或使用Google或Apple登录。密码以哈希形式存储，这意味着我们无法读取。我们从Google或Apple仅获取关联账户所需的信息，并且仅将您的电子邮件地址用于保护账户和重置密码。",
        },
        {
          type: "p",
          text: "在线游戏需要设备标识符。其他一切均为可选。",
        },
        { type: "basis", text: "履行我们与您之间的合同（提供游戏）。" },
      ],
    },
    {
      id: "gameplay",
      title: "游戏、进度与购买",
      blocks: [
        {
          type: "p",
          text: "为运行在线战斗、排行榜和您的库存，我们存储您的游戏进度：对局结果、排名、您拥有的物品和货币，以及您在活动和赛季中的进度。您最近的战斗作为历史记录保留；战斗回放在7天后离开在线数据库并归档。",
        },
        {
          type: "p",
          text: "付款完全由Google Play或App Store处理。我们永远不会看到您的银行卡或银行信息。商店告知我们您购买了什么，我们存储该确认信息，对于战斗通行证还会存储订阅状态，以便发放物品、恢复购买并提供支持。",
        },
        {
          type: "basis",
          text: "履行我们与您之间的合同。我们因会计要求必须保留的购买记录，依据法律义务保留。",
        },
      ],
    },
    {
      id: "chat",
      title: "聊天与管理",
      blocks: [
        {
          type: "p",
          text: "游戏中有玩家之间的聊天。消息会传送给该聊天中的其他玩家，并存储在我们的服务器上：战斗内的聊天保留15天，随后删除；其他所有聊天保留90天，随后归档（请参阅“我们保留数据多久”）。我们保留这些消息，以便管理员调查关于不当行为或作弊的举报。管理员的每一次查阅都会被记录。",
        },
        {
          type: "p",
          text: "管理分三步进行。第一，每条消息在传送前都会经过我们服务器上的自动过滤（频率限制、词汇表和仇恨言论模式）；被拦截的消息永远不会发送。第二，当我们启用该功能时，已传送的消息还会由Google的Gemini服务进行分类，Gemini会接收该消息以及您在该聊天中的近期消息作为上下文。您设置或更改用户名时，Gemini会对用户名进行检查。被Gemini分类为不当的消息会被删除，并记录一次违规。第三，人工管理员处理举报。",
        },
        {
          type: "p",
          text: "违规将导致警告和临时聊天禁言，具体见我们的[服务条款](/termsofservice)。您的违规和禁言记录会保留在您的账户中，以便识别重复行为。这些自动步骤仅影响您的聊天功能。如果您认为某项决定有误，请给我们发送电子邮件或在Discord上提问，将由人工进行复核。",
        },
        {
          type: "p",
          text: "请勿在聊天中分享个人信息。其他玩家可以看到您所写的内容。",
        },
        {
          type: "basis",
          text: "我们为所有玩家维护安全、公平游戏环境的合法利益。",
        },
      ],
    },
    {
      id: "fair-play",
      title: "公平游戏与安全",
      blocks: [
        {
          type: "p",
          text: "竞技游戏中的作弊会毁掉所有人的体验，因此我们保留少量技术数据以检测作弊并确保封禁有效：",
        },
        {
          type: "ul",
          items: [
            "当您首次启动游戏时，我们会记录您的设备标识符、手机型号、平台和IP地址，以及您完成的教程步骤。该记录在90天后离开在线数据库并归档。",
            "对于每一场在线对局，我们记录参与的账户及其设备标识符和IP地址。自动检查会定期审视近期记录，寻找进入同一对局的频率远超概率所允许的玩家组合。对局记录在30天后离开在线数据库并归档。",
            "查实的作弊会导致处罚，最高至封禁，具体见我们的[服务条款](/termsofservice)。处罚历史会保留在您的账户中，您可以要求人工复核任何处罚。",
            "设备封禁还会阻止从该设备创建新账户。封禁记录没有截止日期；当复核表明封禁有误时，我们会将其移除。",
          ],
        },
        {
          type: "p",
          text: "战斗操作本身在发生时即在我们的服务器上验证，除对局本身外无需任何数据。我们不使用您的IP地址来确定您的位置。当您首次加入时，游戏会根据您设备的语言和地区设置推荐一个国家；该读取在设备上进行，您也可以改选任何国家。",
        },
        {
          type: "basis",
          text: "我们防止作弊、欺诈和滥用并维护服务安全的合法利益。",
        },
      ],
    },
    {
      id: "notifications",
      title: "推送通知",
      blocks: [
        {
          type: "p",
          text: "如果您允许通知，您的设备会向我们提供一个推送令牌，我们存储并使用它来告知您游戏内的动态：与您的账户、好友和国家相关的事件，新的活动和赛季，以及您一段时间未上线时的提醒。",
        },
        {
          type: "p",
          text: "通知在Android上通过Firebase Cloud Messaging（Google）传送，在iOS上通过Apple Push Notification service传送。您可以随时在设备设置中关闭通知，关闭后通知将不再显示；令牌本身会保留至失效（例如您卸载游戏时）或您删除账户。已传送的通知在我们这边保留30天，随后归档。",
        },
        {
          type: "basis",
          text: "我们让您了解自己的账户和所玩游戏的合法利益，且只需一次点击即可退订。",
        },
      ],
    },
    {
      id: "ads",
      title: "可选的激励广告",
      blocks: [
        {
          type: "p",
          text: "游戏中没有强制广告：没有任何内容会打断战斗或菜单。商店提供激励广告，仅在您点击时播放，以换取游戏内货币。",
        },
        {
          type: "p",
          text: "广告由Google AdMob投放。其软件是游戏的一部分，随游戏启动，并在后台加载一条广告，以便您点击时可以立即播放。此时，无论您是否观看过广告，AdMob都会收到您的广告标识符以及根据您的IP地址推算的粗略位置；如果您观看了广告，还会收到您与广告的互动方式。在iOS上，系统会在首次启动时征求您的许可，然后才会将广告标识符用于跟踪；在Android上，您可以在设备设置中重置或删除广告标识符。Google在其[隐私政策](https://policies.google.com/privacy)中说明了它如何处理这些数据。",
        },
        {
          type: "basis",
          text: "您通过设备的权限和广告设置给予的同意，您可以随时在同一处撤回。",
        },
      ],
    },
    {
      id: "analytics",
      title: "分析",
      blocks: [
        {
          type: "p",
          text: "为了解游戏的玩法并发现问题，游戏会向我们自己的服务器发送事件：会话开始和结束、开始和完成的战斗、教程进度、商店中的购买、已打开的通知、错误，以及在Android上将您引导至游戏的商店来源。每个事件都包含您的账户标识符、设备标识符、平台、手机型号和游戏版本。我们不使用Google Analytics、Firebase Analytics或任何其他第三方分析服务。崩溃报告通过Google Play和App Store依据其各自的政策送达我们。",
        },
        {
          type: "p",
          text: "分析事件保留400天。由此得出的统计数据不包含个人数据，并无限期保留。",
        },
        {
          type: "basis",
          text: "我们改进游戏并保持其良好运行的合法利益。",
        },
      ],
    },
    {
      id: "support",
      title: "支持与社区",
      blocks: [
        {
          type: "p",
          text: "如果您给我们发送电子邮件，我们会在处理所需的期间内保留往来邮件。",
        },
        {
          type: "p",
          text: "我们的Discord服务器依据[Discord的隐私政策](https://discord.com/privacy)在Discord上运行。那里的管理员可以查阅游戏内聊天历史以处理举报，如聊天与管理一节所述。",
        },
        {
          type: "basis",
          text: "履行我们与您之间的合同（支持），以及我们围绕游戏运营社区的合法利益。",
        },
      ],
    },
    {
      id: "sharing",
      title: "我们与谁共享数据",
      blocks: [
        {
          type: "p",
          text: "我们不出售个人数据，也不与数据经纪商共享。以下公司代表我们处理数据，或因游戏的运作方式而接收数据：",
        },
        {
          type: "table",
          head: ["服务提供商", "用途", "地点"],
          rows: [
            ["DigitalOcean", "托管我们的游戏服务器和数据库", "德国法兰克福"],
            [
              "Gcore",
              "将部分游戏流量传输至我们服务器的内容分发网络；它在传输过程中可见您的IP地址",
              "遍布全球的边缘服务器；公司总部位于卢森堡",
            ],
            [
              "Google Cloud Storage",
              "到期记录的归档（请参阅“我们保留数据多久”）",
              "德国法兰克福",
            ],
            [
              "Google（Gemini API）",
              "对用户名以及（启用时）聊天消息进行分类",
              "全球：Google未对该API承诺特定区域",
            ],
            ["Google AdMob", "您选择观看的激励广告", "美国"],
            ["Google Firebase Cloud Messaging", "在Android上传送推送通知", "美国"],
            ["Apple Push Notification service", "在iOS上传送推送通知", "美国"],
            ["Zoho Mail", "我们的电子邮件，包括密码重置邮件", "欧盟"],
            [
              "Google Play和App Store",
              "登录、付款、订阅和崩溃报告",
              "依据其各自的政策",
            ],
          ],
        },
        {
          type: "p",
          text: "上述每家服务提供商均受合同约束，须至少按本政策所述的标准保护您的数据，并仅将其用于所列目的。其他玩家可以看到您的用户名、游戏内资料以及您在聊天中所写的内容。我们仅在法律要求时向主管机关披露数据。",
        },
      ],
    },
    {
      id: "storage",
      title: "您的数据存储在哪里",
      blocks: [
        {
          type: "p",
          text: "我们的服务器、数据库和备份托管于德国法兰克福，到期记录的归档位于同一城市的Google Cloud Storage存储桶中。您的数据保留在欧盟境内，但上文所列服务提供商在美国处理的情形，以及Gemini API由Google在任何地点运行的情形除外。对于这些传输，我们依据欧盟委员会的标准合同条款，以及在服务提供商已获认证的情况下，依据欧盟-美国数据隐私框架。",
        },
      ],
    },
    {
      id: "retention",
      title: "我们保留数据多久",
      blocks: [
        {
          type: "table",
          head: ["数据", "保留期限"],
          rows: [
            ["账户、进度、库存、好友、购买确认", "直至您删除账户"],
            [
              "聊天违规和禁言历史、串通处罚历史",
              "账户存续期间（禁言本身是临时的）",
            ],
            ["设备封禁", "直至我们解除"],
            ["分析事件", "400天，随后归档"],
            ["战斗聊天以外的聊天，包括私信", "90天，随后归档"],
            [
              "硬币和XP交易历史",
              "90天（XP历史：您最后一次活动后90天），随后归档",
            ],
            ["含IP地址和手机型号的首次启动记录", "90天，随后归档"],
            [
              "含IP地址和设备标识符的每场对局参与者记录",
              "30天，随后归档",
            ],
            ["已传送的通知、每日进度", "30天，随后归档"],
            ["战斗聊天", "15天，随后删除"],
            ["战斗回放", "7天，随后归档"],
            ["商店浏览事件", "3天，随后删除"],
          ],
        },
        {
          type: "p",
          text: "标注“随后归档”的行会在离开在线数据库之前复制到法兰克福的归档中。我们使用归档进行统计并调查过往的不当行为；访问权限仅限两名开发者，其中的任何内容都无法从游戏中访问。归档记录在上述目的所需的期间内保留，不再需要时即予删除。",
        },
        {
          type: "p",
          text: "当您删除账户时，我们会在30天内从在线系统中删除您的个人数据。我们保留法律要求保存的记录，例如用于会计的购买记录，以及不再能识别您身份的统计数据。",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "我们的法律依据汇总",
      blocks: [
        {
          type: "p",
          text: "根据GDPR，我们对您数据的每一项处理都需要法律依据。我们的依据如下：",
        },
        {
          type: "ul",
          items: [
            "**合同**：运行您的账户、游戏、您的购买和支持。没有这些数据，就没有可玩的游戏。",
            "**合法利益**：防止作弊和滥用、管理聊天、维护服务安全、了解游戏的玩法，以及告知您账户相关信息。我们的利益在于一个公平、安全、正常运行的游戏；我们将数据保持在最少量且短期保留，您可以随时反对。",
            "**同意**：激励广告中的个性化广告，通过您的设备设置给予，并可在同一处撤回。",
            "**法律义务**：保存会计记录，以及回应主管机关的合法请求。",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "您的权利",
      blocks: [
        { type: "p", text: "您有权：" },
        {
          type: "ul",
          items: [
            "**访问**我们持有的关于您的个人数据并获取副本。",
            "**更正**有误的数据。",
            "**删除**您的账户和数据。",
            "以可移植、机器可读的格式**获取**您的数据。",
            "**反对**基于我们合法利益的处理，并在我们审查期间**限制**处理。",
            "随时在设备设置中**撤回对广告的同意**，并以同样方式关闭通知。",
          ],
        },
        {
          type: "p",
          text: "如需行使权利，请从与您账户关联的地址发送电子邮件至[contact@geofastgames.com](mailto:contact@geofastgames.com)；如果您的账户没有电子邮件，请告知我们您的用户名，我们将在游戏内进行核实。删除请求也可以从我们的[数据删除页面](/datadeletion)发起。我们会在一个月内答复。",
        },
        {
          type: "p",
          text: "如果您认为我们非法处理您的数据，您可以向比利时数据保护机构（Gegevensbeschermingsautoriteit / Autorité de protection des données），Rue de la Presse 35, 1000 Brussels，[dataprotectionauthority.be](https://www.dataprotectionauthority.be)投诉，或向您所居住国家的监管机构投诉。",
        },
      ],
    },
    {
      id: "children",
      title: "儿童",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations*不面向13岁以下儿童，我们也不会有意收集他们的个人数据。在比利时，13岁是可以自行同意使用在线服务的年龄。游戏在每个商店都有反映其在线聊天和可选购买的年龄分级；家长可以使用Google Play和App Store的家长控制功能限制购买以及儿童可以安装的应用。",
        },
        {
          type: "p",
          text: "如果您认为有13岁以下儿童拥有账户，请给我们发送电子邮件，我们会将其删除。",
        },
      ],
    },
    {
      id: "security",
      title: "安全",
      blocks: [
        {
          type: "p",
          text: "游戏、本网站与我们服务器之间的所有流量均已加密（TLS）。密码经过哈希处理。数据库无法从互联网访问。服务器和数据的访问权限仅限两名开发者；管理员只能通过一个记录每次查阅的工具查看聊天历史。没有任何系统是绝对安全的；如果我们得知发生了影响您数据的泄露事件，我们将依法通知您和监管机构。",
        },
      ],
    },
    {
      id: "website",
      title: "本网站",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com不设置Cookie，也不使用任何跟踪或分析脚本。您访问时，浏览器只会向外发出三项内容：页面字体从Google Fonts加载，因此Google可见您的IP地址；Discord成员数从Discord的公开API获取；实时统计数据来自我们自己的服务器。指向应用商店的链接带有推广标记，以便我们知道某次下载来自本网站，它标识的是网站，而非您。",
        },
        {
          type: "p",
          text: "当您通过本网站上的表单向我们发送建议、错误报告、翻译问题报告或玩家举报时，我们会将您填写的内容、您附加的截图、时间、您的浏览器语言以及您IP地址的哈希值存储在我们位于欧盟的自有服务器上。我们使用这些信息来阅读并跟进您的消息，以及限制对表单的滥用。用户名和电子邮件地址为可选项；仅在您希望我们能够回复时填写。表单提交的内容会在十二个月后删除。",
        },
      ],
    },
    {
      id: "changes",
      title: "本政策的变更",
      blocks: [
        {
          type: "p",
          text: "当我们改变处理数据的方式时，我们会更新本页面及其日期；对于重大变更，我们会在游戏内告知您。",
        },
      ],
    },
  ],
};
