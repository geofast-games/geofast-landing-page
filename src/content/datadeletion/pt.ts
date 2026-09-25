import type { DataDeletionContent } from "./types";

// Brazilian Portuguese (html lang pt-BR, URL /pt/datadeletion, menu label
// "Portugues"). "Voce" throughout, as in the Brazilian privacy policy and
// Terms. The page is the "Solicitacao de exclusao de dados"; both other
// documents link to it as the "pagina de exclusao de dados". Terminology
// follows them: "conta", "dispositivo", "nome de usuario", "progresso",
// "moedas virtuais e itens", "banco de dados ativo" and "sistemas ativos",
// "arquivo", "assinatura", "loja" for the store; the game translates Battle
// Pass as "Passe de Batalha", so this text does too. The privacy policy is
// the "Politica de Privacidade", the Terms are the "Termos de Servico", as
// they name themselves.
export const pt: DataDeletionContent = {
  lang: "pt",
  htmlLang: "pt-BR",
  label: "Português",
  pageTitle: "Solicitação de exclusão de dados | Geofast: Battle of Nations",
  metaDescription:
    "Como excluir sua conta e seus dados pessoais no Geofast: Battle of Nations, no jogo ou por e-mail, o que é excluído, o que é mantido e quanto tempo leva.",
  gameName: "Geofast: Battle of Nations",
  docName: "Solicitação de exclusão de dados",
  lastUpdated: "Última atualização: 25 de setembro de 2026",
  sectionsLabel: "Seções",
  languageLabel: "Idioma",
  contact: {
    line: "Dúvidas? Pergunte no Discord. Solicitações sobre seus dados: envie um e-mail.",
    discord: "Perguntar no Discord",
    back: "Voltar para Geofast Games",
  },
  request: {
    title: "Solicitar a exclusão por e-mail",
    text: "Para quando você não consegue mais abrir o jogo. O botão abre um e-mail para nós com a solicitação já escrita; preencha os dados da sua conta e envie. Se não houver um aplicativo de e-mail neste dispositivo, escreva para contact@geofastgames.com com os mesmos dados.",
    button: "Enviar solicitação de exclusão",
    emailSubject: "Solicitação de exclusão de dados - Geofast: Battle of Nations",
    emailBody: `Olá, Geofast Games,

Quero que minha conta no Geofast: Battle of Nations e meus dados pessoais sejam excluídos.

Minha conta:
- Nome de usuário no jogo: [preencher]
- E-mail vinculado à conta, se houver: [preencher]
- Nação pela qual jogo: [preencher]
- Dispositivo usado para jogar: [preencher]

Entendo que a exclusão é permanente, que meu progresso, moedas e itens são perdidos, e que uma assinatura do Passe de Batalha precisa ser cancelada separadamente na minha loja de aplicativos.

Obrigado.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Seu direito de excluir seus dados",
      blocks: [
        {
          type: "p",
          text: "Você pode ter sua conta do *Geofast: Battle of Nations* e os dados pessoais vinculados a ela excluídos a qualquer momento, onde quer que você more, sem precisar dar um motivo. Há duas formas: no jogo, que é imediata, ou por e-mail, se você não consegue mais abrir o jogo.",
        },
        {
          type: "p",
          text: "Excluir sua conta é a única forma de exclusão que oferecemos: não excluímos partes de uma conta mantendo o restante.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Antes de excluir",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cancele seu Passe de Batalha primeiro.** Uma assinatura é um contrato com a sua loja de aplicativos, e excluir sua conta não a cancela. Cancele-a nas configurações de assinatura do Google Play ou da App Store, ou ela continuará sendo renovada.",
            "**Nada é reembolsado.** Moedas virtuais, itens e o tempo de assinatura não usado terminam com a conta, conforme estabelecido em nossos [Termos de Serviço](/termsofservice).",
            "**Não pode ser desfeito.** Não há período de carência nem backup para restaurar.",
            "**Vale para todos os dispositivos.** A conta desaparece de todos os dispositivos aos quais estava vinculada, não apenas daquele em que você a exclui.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Excluir sua conta no jogo",
      blocks: [
        {
          type: "p",
          text: "Abra seu perfil, toque em **Excluir minha conta** e digite seu nome de usuário para confirmar. A conta é excluída na hora. Na próxima vez que o jogo abrir nesse dispositivo, ele cria uma conta nova e vazia.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Ou peça a nós por e-mail",
      blocks: [
        {
          type: "p",
          text: "Se você desinstalou o jogo ou perdeu o dispositivo, envie um e-mail para [contact@geofastgames.com](mailto:contact@geofastgames.com), ou use o botão abaixo, com seu nome de usuário no jogo e, se tiver, o endereço de e-mail vinculado à sua conta. Escreva a partir desse endereço: é assim que sabemos que a solicitação vem do dono da conta. Se sua conta não tem e-mail, informe seu nome de usuário e a nação pela qual você joga, e confirmaremos pelo jogo que a conta é sua antes de excluir qualquer coisa.",
        },
        {
          type: "p",
          text: "Confirmamos que recebemos sua solicitação, excluímos em até 30 dias e confirmamos novamente quando estiver concluído. Se não conseguirmos associar seus dados a uma conta, pedimos mais informações antes de agir; nunca excluímos uma conta com base em uma solicitação não verificada.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "O que é excluído",
      blocks: [
        {
          type: "p",
          text: "Excluir sua conta remove a conta e tudo o que está armazenado nela:",
        },
        {
          type: "ul",
          items: [
            "sua conta, seu nome de usuário e os vínculos de dispositivo, e-mail, Google ou Apple ligados a ela;",
            "seu progresso: classificações, itens, moedas virtuais, melhorias, conquistas, progresso da temporada e histórico de batalhas;",
            "sua lista de amigos e seu código de indicação;",
            "seu token de notificações push.",
          ],
        },
        {
          type: "p",
          text: "Registros técnicos que estavam ligados à conta, como eventos de análise, mensagens de chat ainda presentes em nosso banco de dados ativo e os registros de partida e da primeira abertura descritos na Política de Privacidade, são removidos dos nossos sistemas ativos em até 30 dias.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "O que mantemos, e por quê",
      blocks: [
        {
          type: "ul",
          items: [
            "Registros de compra que a legislação contábil nos obriga a guardar, pelo prazo que essa lei estabelece.",
            "Estatísticas que não identificam mais você, como o número de batalhas jogadas em um determinado dia.",
            "Registros que já haviam saído do banco de dados ativo para o nosso arquivo antes da exclusão, conforme descrito em [por quanto tempo guardamos os dados](/privacy#retention) na Política de Privacidade.",
            "Dados mantidos pelas lojas de aplicativos, pelo Google AdMob ou pelo Discord sob as políticas deles. Não controlamos esses dados; para removê-los, entre em contato com eles.",
          ],
        },
        {
          type: "p",
          text: "Os arquivos locais no seu dispositivo são seus: desinstalar o jogo os remove.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Outras solicitações sobre seus dados",
      blocks: [
        {
          type: "p",
          text: "Você também pode pedir uma cópia dos seus dados, corrigir dados errados ou se opor à forma como os usamos. O mesmo endereço de e-mail cuida de todas essas solicitações, e a [Política de Privacidade](/privacy#rights) descreve cada direito. Respondemos em até um mês.",
        },
      ],
    },
  ],
};
