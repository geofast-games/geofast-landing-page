import type { DataDeletionContent } from "./types";

// Japanese. Polite desu/masu style, as in the Japanese privacy policy and
// Terms. The reader is "okyakusama", as there, and the subject is left
// implicit wherever Japanese allows. Full-width punctuation, no spaces
// between Japanese words (Latin names keep their own spacing). The page is
// "deeta sakujo no seikyuu", the privacy policy's own word for a request;
// both other documents link to it as the "deeta sakujo peeji". Terminology
// follows them: "akaunto", "tanmatsu", "yuuzaa mei", "shinkou joukyou",
// "kasou tsuuka to aitemu", "kadou chuu no deetabeesu" and "kadou chuu no
// shisutemu" for the live database and live systems, "aakaibu",
// "sabusukuripushon", "sutoa" for the store; the game writes Battle Pass as
// "batoru pasu", so this text does too. The privacy policy is "puraibashii
// porishii", the Terms are "riyou kiyaku", as they name themselves.
export const ja: DataDeletionContent = {
  lang: "ja",
  label: "日本語",
  pageTitle: "データ削除の請求 | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nationsのアカウントと個人データをゲーム内またはメールで削除する方法、削除されるもの、保持されるもの、所要期間について説明します。",
  gameName: "Geofast: Battle of Nations",
  docName: "データ削除の請求",
  lastUpdated: "最終更新日：2026年9月25日",
  sectionsLabel: "セクション",
  languageLabel: "言語",
  contact: {
    line: "ご質問はDiscordでお尋ねください。お客様のデータに関するご請求はメールでお送りください。",
    discord: "Discordで質問する",
    back: "Geofast Gamesに戻る",
  },
  request: {
    title: "メールで削除を請求する",
    text: "ゲームを開けなくなった場合の方法です。ボタンを押すと、請求文があらかじめ書かれた私たち宛てのメールが開きます。アカウント情報を記入して送信してください。この端末にメールアプリがない場合は、同じ情報をcontact@geofastgames.comまでお送りください。",
    button: "削除請求を送信する",
    emailSubject: "データ削除の請求 - Geofast: Battle of Nations",
    emailBody: `Geofast Games ご担当者様

Geofast: Battle of Nationsのアカウントと私の個人データの削除を希望します。

私のアカウント：
- ゲーム内のユーザー名：[記入してください]
- アカウントに紐づいたメールアドレス（ある場合）：[記入してください]
- 所属している国：[記入してください]
- プレイに使用している端末：[記入してください]

削除が永久的であること、進行状況、通貨、アイテムが失われること、バトルパスのサブスクリプションはアプリストアで別途解約する必要があることを理解しています。

よろしくお願いいたします。`,
  },
  sections: [
    {
      id: "your-right",
      title: "データを削除する権利",
      blocks: [
        {
          type: "p",
          text: "お客様は、お住まいの場所を問わず、理由を示すことなく、いつでも*Geofast: Battle of Nations*のアカウントとそれに紐づく個人データを削除できます。方法は2つあります。ゲーム内で行う方法（即時に完了します）と、ゲームを開けなくなった場合のメールによる方法です。",
        },
        {
          type: "p",
          text: "アカウントの削除が、私たちが提供する唯一の削除の形です。アカウントの一部だけを削除して残りを保持することはありません。",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "削除する前に",
      blocks: [
        {
          type: "ul",
          items: [
            "**まずバトルパスを解約してください。**サブスクリプションはお客様とアプリストアとの契約であり、アカウントを削除しても解約されません。Google PlayまたはApp Storeのサブスクリプション設定で解約しないと、更新が続きます。",
            "**返金はありません。**仮想通貨、アイテム、未使用のサブスクリプション期間は、[利用規約](/termsofservice)に定めるとおり、アカウントとともに終了します。",
            "**取り消すことはできません。**猶予期間はなく、復元できるバックアップもありません。",
            "**すべての端末に適用されます。**アカウントは、削除操作を行った端末だけでなく、紐づいていたすべての端末から消えます。",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "ゲーム内でアカウントを削除する",
      blocks: [
        {
          type: "p",
          text: "プロフィールを開き、**アカウントを削除する**をタップして、確認のためにユーザー名を入力します。アカウントはすぐに削除されます。その端末で次にゲームを起動すると、新しい空のアカウントが作成されます。",
        },
      ],
    },
    {
      id: "by-email",
      title: "またはメールで私たちに請求する",
      blocks: [
        {
          type: "p",
          text: "ゲームをアンインストールした、または端末を紛失した場合は、ゲーム内のユーザー名と、あればアカウントに紐づいたメールアドレスを添えて、[contact@geofastgames.com](mailto:contact@geofastgames.com)にメールをお送りいただくか、下のボタンをご利用ください。そのメールアドレスからお送りください。それが、請求がアカウントの所有者からのものであることを私たちが確認する方法です。アカウントにメールアドレスがない場合は、ユーザー名と所属している国をお知らせください。何かを削除する前に、そのアカウントがお客様のものであることをゲーム内で確認します。",
        },
        {
          type: "p",
          text: "私たちは請求を受け取ったことを確認し、30日以内に削除し、完了時に改めてご連絡します。お知らせいただいた情報がどのアカウントとも一致しない場合は、対応する前に追加の情報をお願いします。確認の取れていない請求でアカウントを削除することは決してありません。",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "削除されるもの",
      blocks: [
        {
          type: "p",
          text: "アカウントを削除すると、アカウントとその下に保存されているすべてが削除されます。",
        },
        {
          type: "ul",
          items: [
            "アカウント、ユーザー名、およびそれに紐づく端末、メール、Google、Appleとの連携",
            "進行状況：ランキング、アイテム、仮想通貨、アップグレード、実績、シーズンの進行状況、バトル履歴",
            "フレンドリストと紹介コード",
            "プッシュ通知トークン",
          ],
        },
        {
          type: "p",
          text: "分析イベント、稼働中のデータベースにまだ残っているチャットメッセージ、プライバシーポリシーに記載の対戦記録および初回起動記録など、アカウントに関連づけられていた技術的な記録は、30日以内に稼働中のシステムから削除されます。",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "保持するもの、その理由",
      blocks: [
        {
          type: "ul",
          items: [
            "会計に関する法律により保存が義務づけられている購入記録。その法律が定める期間保持します。",
            "特定の日にプレイされたバトルの数など、もはやお客様を特定しない統計。",
            "削除の前にすでに稼働中のデータベースからアーカイブへ移っていた記録。プライバシーポリシーの[データの保存期間](/privacy#retention)に記載のとおりです。",
            "アプリストア、Google AdMob、Discordがそれぞれのポリシーのもとで保有するデータ。私たちはこれらを管理していません。削除を希望される場合は、各社にお問い合わせください。",
          ],
        },
        {
          type: "p",
          text: "端末上のローカルファイルはお客様のものです。ゲームをアンインストールすると削除されます。",
        },
      ],
    },
    {
      id: "other-requests",
      title: "データに関するその他のご請求",
      blocks: [
        {
          type: "p",
          text: "データの写しの請求、誤ったデータの訂正、データの利用への異議申し立てもできます。これらはすべて同じメールアドレスで受け付けており、それぞれの権利は[プライバシーポリシー](/privacy#rights)に記載しています。1か月以内に回答します。",
        },
      ],
    },
  ],
};
