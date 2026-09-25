import type { DataDeletionContent } from "./types";

// Korean. Formal polite "-seupnida" style throughout, as in the Korean
// privacy policy and Terms; "gwiha" where a pronoun for the reader is
// unavoidable, otherwise the subject is left implicit as Korean allows. The
// page is "deiteo sakje yocheong"; both other documents link to it as
// "deiteo sakje peiji". Terminology follows them: "gyejeong", "gigi",
// "sayongja ireum", "jinhaeng sanghwang", "gasang hwapye" and "aitem",
// "silsigan deiteobeiseu" and "silsigan siseutem" for the live database and
// live systems, "akaibeu", "gudok", "seutoeo" for the store; the game writes
// Battle Pass as "baeteul paeseu", so this text does too. The privacy policy
// is "gaeinjeongbo cheori bangchim", the Terms are "seobiseu iyong yakgwan",
// as they name themselves.
export const ko: DataDeletionContent = {
  lang: "ko",
  label: "한국어",
  pageTitle: "데이터 삭제 요청 | Geofast: Battle of Nations",
  metaDescription:
    "Geofast: Battle of Nations 계정과 개인정보를 게임 내에서 또는 이메일로 삭제하는 방법, 삭제되는 항목, 유지되는 항목, 소요 기간을 안내합니다.",
  gameName: "Geofast: Battle of Nations",
  docName: "데이터 삭제 요청",
  lastUpdated: "최종 업데이트: 2026년 9월 25일",
  sectionsLabel: "항목",
  languageLabel: "언어",
  contact: {
    line: "궁금한 점이 있으신가요? Discord에서 문의하세요. 데이터 관련 요청은 이메일로 보내 주세요.",
    discord: "Discord에서 문의",
    back: "Geofast Games로 돌아가기",
  },
  request: {
    title: "이메일로 삭제 요청하기",
    text: "게임을 더 이상 열 수 없을 때를 위한 방법입니다. 버튼을 누르면 요청 내용이 미리 작성된 이메일이 열립니다. 계정 정보를 채워 보내 주세요. 이 기기에 이메일 앱이 없다면 같은 정보를 적어 contact@geofastgames.com으로 보내 주세요.",
    button: "삭제 요청 보내기",
    emailSubject: "데이터 삭제 요청 - Geofast: Battle of Nations",
    emailBody: `Geofast Games 담당자님, 안녕하세요.

제 Geofast: Battle of Nations 계정과 개인정보를 삭제해 주시기 바랍니다.

제 계정:
- 게임 내 사용자 이름: [입력]
- 계정에 연결된 이메일(있는 경우): [입력]
- 플레이하는 국가: [입력]
- 플레이에 사용한 기기: [입력]

삭제가 영구적이며 진행 상황, 재화, 아이템이 사라진다는 점, 그리고 배틀 패스 구독은 앱 스토어에서 별도로 해지해야 한다는 점을 이해합니다.

감사합니다.`,
  },
  sections: [
    {
      id: "your-right",
      title: "데이터를 삭제할 권리",
      blocks: [
        {
          type: "p",
          text: "귀하는 거주지와 관계없이, 이유를 밝히지 않고도 언제든지 *Geofast: Battle of Nations* 계정과 그에 연결된 개인정보를 삭제할 수 있습니다. 방법은 두 가지입니다. 게임 내에서 즉시 삭제하거나, 게임을 더 이상 열 수 없다면 이메일로 요청하는 것입니다.",
        },
        {
          type: "p",
          text: "계정 삭제는 저희가 제공하는 유일한 삭제 방식입니다. 계정의 일부만 삭제하고 나머지를 남겨 두지는 않습니다.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "삭제하기 전에",
      blocks: [
        {
          type: "ul",
          items: [
            "**먼저 배틀 패스를 해지하세요.** 구독은 앱 스토어와의 계약이며, 계정을 삭제해도 해지되지 않습니다. Google Play 또는 App Store의 구독 설정에서 해지하지 않으면 계속 갱신됩니다.",
            "**환불되는 것은 없습니다.** 가상 화폐, 아이템, 남은 구독 기간은 [서비스 이용약관](/termsofservice)에 명시된 대로 계정과 함께 종료됩니다.",
            "**되돌릴 수 없습니다.** 유예 기간도 없고, 복원할 백업도 없습니다.",
            "**모든 기기에 적용됩니다.** 계정은 삭제한 기기뿐 아니라 연결되어 있던 모든 기기에서 사라집니다.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "게임 내에서 계정 삭제",
      blocks: [
        {
          type: "p",
          text: "프로필을 열고 **내 계정 삭제**를 탭한 뒤, 확인을 위해 사용자 이름을 입력하세요. 계정은 즉시 삭제됩니다. 그 기기에서 게임을 다음에 실행하면 새로운 빈 계정이 생성됩니다.",
        },
      ],
    },
    {
      id: "by-email",
      title: "또는 이메일로 요청",
      blocks: [
        {
          type: "p",
          text: "게임을 삭제했거나 기기를 잃어버렸다면, 게임 내 사용자 이름과 계정에 연결된 이메일 주소(있는 경우)를 적어 [contact@geofastgames.com](mailto:contact@geofastgames.com)으로 메일을 보내 주시거나 아래 버튼을 사용하세요. 그 주소에서 보내 주셔야 합니다. 요청이 계정 소유자에게서 왔다는 것을 그렇게 확인합니다. 계정에 이메일이 없다면 사용자 이름과 플레이하는 국가를 알려 주세요. 무엇이든 삭제하기 전에 게임 내에서 계정이 귀하의 것인지 확인합니다.",
        },
        {
          type: "p",
          text: "요청을 받았음을 확인해 드리고, 30일 이내에 삭제한 뒤, 완료되면 다시 확인해 드립니다. 알려 주신 정보와 일치하는 계정을 찾을 수 없으면 조치 전에 추가 정보를 요청합니다. 확인되지 않은 요청으로 계정을 삭제하는 일은 결코 없습니다.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "삭제되는 항목",
      blocks: [
        {
          type: "p",
          text: "계정을 삭제하면 계정과 그 아래에 저장된 모든 것이 제거됩니다.",
        },
        {
          type: "ul",
          items: [
            "계정, 사용자 이름, 그리고 계정에 연결된 기기·이메일·Google·Apple 연결 정보",
            "진행 상황: 순위, 아이템, 가상 화폐, 업그레이드, 업적, 시즌 진행 상황, 전투 기록",
            "친구 목록과 추천 코드",
            "푸시 알림 토큰",
          ],
        },
        {
          type: "p",
          text: "분석 이벤트, 실시간 데이터베이스에 아직 남아 있는 채팅 메시지, 개인정보 처리방침에 설명된 매치 기록과 첫 실행 기록 등 계정에 연결되어 있던 기술 기록은 30일 이내에 실시간 시스템에서 제거됩니다.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "유지되는 항목과 그 이유",
      blocks: [
        {
          type: "ul",
          items: [
            "회계 관련 법률이 보존을 요구하는 구매 기록. 해당 법률이 정한 기간 동안 보관합니다.",
            "특정 날짜에 진행된 전투 수와 같이 더 이상 귀하를 식별하지 않는 통계.",
            "삭제 전에 이미 실시간 데이터베이스를 떠나 아카이브로 이동한 기록. 개인정보 처리방침의 [데이터 보관 기간](/privacy#retention)에 설명되어 있습니다.",
            "앱 스토어, Google AdMob, Discord가 각자의 방침에 따라 보유하는 데이터. 저희가 통제할 수 없으므로, 삭제를 원하시면 해당 업체에 문의하세요.",
          ],
        },
        {
          type: "p",
          text: "기기의 로컬 파일은 귀하의 것입니다. 게임을 삭제하면 함께 제거됩니다.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "데이터 관련 기타 요청",
      blocks: [
        {
          type: "p",
          text: "데이터 사본을 요청하거나, 잘못된 데이터를 정정하거나, 데이터 이용에 반대할 수도 있습니다. 이 모든 요청은 같은 이메일 주소에서 처리하며, 각 권리는 [개인정보 처리방침](/privacy#rights)에 설명되어 있습니다. 한 달 이내에 답변드립니다.",
        },
      ],
    },
  ],
};
