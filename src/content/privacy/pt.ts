import type { PrivacyContent } from "./types";

// Brazilian Portuguese (html lang pt-BR, URL /pt/privacy, menu label
// "Portugues"). "Voce" throughout, as in the game's pt-BR translation and in
// Brazilian legal writing for consumers. Legal vocabulary is the one Brazilian
// readers know from the LGPD, which maps one to one onto the GDPR concepts
// used here: "controlador", "encarregado" for the data protection officer,
// "base legal", "legitimo interesse", "execucao do contrato", "autoridade de
// protecao de dados", "clausulas contratuais padrao"; the regulation itself
// is referred to as GDPR, the name in common use in Brazil. Game terms follow
// the game: "batalha", "nacao", "chat", "moedas", "loja", "temporada",
// "replay", "placar" for leaderboard; the game translates Battle Pass as
// "Passe de Batalha", so the policy does too. Bans are "banimentos".
export const pt: PrivacyContent = {
  lang: "pt",
  htmlLang: "pt-BR",
  label: "Português",
  pageTitle: "Política de Privacidade | Geofast: Battle of Nations",
  metaDescription:
    "Quais dados o Geofast: Battle of Nations coleta, como são usados, com quem são compartilhados e como solicitar a exclusão.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Política de Privacidade",
  lastUpdated: "Última atualização: 25 de setembro de 2026",
  sectionsLabel: "Seções",
  languageLabel: "Idioma",
  legalBasisLabel: "Base legal:",
  contact: {
    line: "Dúvidas? Pergunte no Discord. Solicitações sobre seus dados: envie um e-mail.",
    discord: "Perguntar no Discord",
    back: "Voltar para Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Quem somos",
      blocks: [
        {
          type: "p",
          text: "A Geofast Games é um estúdio de jogos independente sediado na Bélgica. Nós desenvolvemos o *Geofast: Battle of Nations* e mantemos este site. Somos o controlador dos dados pessoais descritos nesta política: decidimos o que é coletado e por quê.",
        },
        {
          type: "p",
          text: "Você pode nos contatar em [contact@geofastgames.com](mailto:contact@geofastgames.com). Somos um estúdio de duas pessoas e não designamos um encarregado de proteção de dados; o mesmo endereço chega às pessoas responsáveis pelos seus dados.",
        },
        {
          type: "p",
          text: "Esta política abrange o jogo no iOS e no Android e o site geofastgames.com. Ela não abrange o Discord, a App Store, o Google Play ou outros serviços que você usa junto com o jogo; esses têm políticas próprias, com links onde são mencionados.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "Em resumo",
      blocks: [
        {
          type: "table",
          head: ["O que", "Por quê", "Por quanto tempo"],
          rows: [
            [
              "Conta: um identificador do dispositivo, seu nome de usuário e, se você quiser, um endereço de e-mail com senha ou um login com Google ou Apple",
              "Para manter sua conta e permitir que você jogue online",
              "Até você excluir sua conta; não excluímos contas inativas",
            ],
            [
              "Jogo: partidas, classificações, itens, confirmações de compra",
              "Para manter o jogo, os placares e seu inventário",
              "Até você excluir sua conta; replays de batalha por 7 dias, depois arquivados",
            ],
            [
              "Mensagens de chat",
              "Para entregá-las e moderar abusos",
              "Chat de batalha por 15 dias, depois excluído; demais chats por 90 dias, depois arquivados",
            ],
            [
              "Endereço IP, identificador do dispositivo, modelo do celular",
              "Para detectar trapaças e conluio e aplicar banimentos",
              "Registros de partida por 30 dias e registro da primeira abertura por 90 dias, depois arquivados; o identificador do dispositivo permanece na sua conta; um registro de banimento permanece até que o banimento seja revogado",
            ],
            [
              "Token de notificações push",
              "Para enviar notificações que você pode desativar",
              "Até o token deixar de funcionar (por exemplo, após a desinstalação) ou até você excluir sua conta",
            ],
            [
              "Eventos de análise sobre como você joga",
              "Para entender padrões de jogo e corrigir problemas",
              "400 dias, depois arquivados",
            ],
            [
              "Identificador de publicidade, lido pelo software do Google AdMob",
              "Para carregar e exibir anúncios recompensados que você pode escolher assistir",
              "Enviado ao Google quando o jogo abre e quando um anúncio é carregado; não é armazenado por nós; vale a política do AdMob",
            ],
          ],
        },
        { type: "lead", text: "Quatro coisas que vale saber antes de continuar" },
        {
          type: "ul",
          items: [
            "O chat não é privado. As mensagens ficam guardadas por até 15 dias (chat de batalha) ou 90 dias (demais chats) para que os moderadores possam analisar denúncias; toda mensagem passa por um filtro automático e, quando ativarmos esse recurso, as mensagens também serão classificadas pelo serviço Gemini do Google.",
            "Registramos seu endereço IP e um identificador do dispositivo quando você joga, para detectar trapaças e fazer os banimentos valerem.",
            "Nossos servidores ficam em Frankfurt, na Alemanha. Alguns fornecedores que usamos (Google, Apple) tratam dados fora da União Europeia.",
            "Registros que expiram do nosso banco de dados ativo (chats além do chat de batalha, registros de partida, dados de análise e outros) são arquivados em Frankfurt em vez de destruídos. Veja “Por quanto tempo guardamos os dados”.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Sua conta",
      blocks: [
        {
          type: "p",
          text: "Quando você joga online pela primeira vez, criamos uma conta para você e a vinculamos a um identificador gerado no seu dispositivo. Nada mais é necessário para jogar, e você nunca precisa nos informar seu nome.",
        },
        {
          type: "p",
          text: "Você escolhe um nome de usuário, que os outros jogadores podem ver. Além disso, armazenamos o que o jogo precisa para funcionar para você: seu progresso, suas configurações e amigos, e a versão do jogo que você usa.",
        },
        {
          type: "p",
          text: "Se quiser manter seu progresso em vários dispositivos, você pode adicionar um endereço de e-mail com senha ou fazer login com Google ou Apple. As senhas são armazenadas com hash, o que significa que não conseguimos lê-las. Do Google ou da Apple recebemos apenas o necessário para vincular a conta, e usamos seu endereço de e-mail somente para proteger a conta e redefinir a senha.",
        },
        {
          type: "p",
          text: "O identificador do dispositivo é obrigatório para jogar online. Todo o resto é opcional.",
        },
        { type: "basis", text: "execução do nosso contrato com você (o fornecimento do jogo)." },
      ],
    },
    {
      id: "gameplay",
      title: "Jogo, progresso e compras",
      blocks: [
        {
          type: "p",
          text: "Para manter as batalhas online, os placares e seu inventário, armazenamos seu progresso no jogo: resultados de partidas, classificações, os itens e moedas que você possui e seu progresso em eventos e temporadas. Suas batalhas recentes ficam guardadas como histórico; os replays de batalha saem do banco de dados ativo após 7 dias e são arquivados.",
        },
        {
          type: "p",
          text: "Os pagamentos são processados integralmente pelo Google Play ou pela App Store. Nunca vemos os dados do seu cartão ou da sua conta bancária. A loja nos informa o que você comprou, e armazenamos essa confirmação e, no caso do Passe de Batalha, o status da assinatura, para poder entregar itens, restaurar compras e ajudar no suporte.",
        },
        {
          type: "basis",
          text: "execução do nosso contrato com você. Os registros de compra que precisamos guardar para a contabilidade são mantidos com base em nossas obrigações legais.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat e moderação",
      blocks: [
        {
          type: "p",
          text: "O jogo tem chat entre jogadores. As mensagens são entregues aos outros jogadores daquele chat e armazenadas em nossos servidores: o chat dentro de uma batalha por 15 dias, após os quais é excluído; todos os demais chats por 90 dias, após os quais são arquivados (veja “Por quanto tempo guardamos os dados”). Nós as guardamos para que os moderadores possam investigar denúncias de abuso ou trapaça. Toda consulta feita por um moderador é registrada.",
        },
        {
          type: "p",
          text: "A moderação funciona em três etapas. Primeiro, toda mensagem passa por um filtro automático em nossos servidores (limites de frequência, uma lista de palavras e padrões de discurso de ódio) antes de ser entregue; uma mensagem bloqueada nunca é enviada. Segundo, quando ativarmos esse recurso, as mensagens entregues também serão classificadas pelo serviço Gemini do Google, que recebe a mensagem e suas mensagens recentes naquele chat como contexto. Os nomes de usuário são verificados pelo Gemini quando você os define ou altera. Uma mensagem que o Gemini classifica como abusiva é excluída e uma violação é registrada. Terceiro, moderadores humanos agem sobre as denúncias.",
        },
        {
          type: "p",
          text: "As violações levam a advertências e a silenciamentos temporários do chat, conforme previsto em nossos [Termos de Serviço](/termsofservice). O registro das suas violações e silenciamentos permanece na sua conta para que comportamentos repetidos possam ser reconhecidos. Essas etapas automáticas afetam apenas sua capacidade de usar o chat. Se você acha que uma decisão foi errada, envie um e-mail ou pergunte no Discord e uma pessoa irá analisar.",
        },
        {
          type: "p",
          text: "Não compartilhe dados pessoais no chat. Os outros jogadores podem ver o que você escreve.",
        },
        {
          type: "basis",
          text: "nosso legítimo interesse em manter o jogo seguro e justo para todos que o jogam.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Jogo limpo e segurança",
      blocks: [
        {
          type: "p",
          text: "Trapaça em um jogo competitivo estraga a experiência de todos, por isso guardamos uma pequena quantidade de dados técnicos para detectá-la e fazer os banimentos valerem:",
        },
        {
          type: "ul",
          items: [
            "Quando você abre o jogo pela primeira vez, registramos o identificador do seu dispositivo, o modelo do celular, a plataforma e o endereço IP, junto com as etapas do tutorial que você conclui. Esse registro sai do banco de dados ativo após 90 dias e é arquivado.",
            "Para cada partida online, registramos quais contas participaram, com seu identificador do dispositivo e endereço IP. Uma verificação automática examina regularmente os registros recentes em busca de pares de jogadores que caem nas mesmas partidas com muito mais frequência do que o acaso permitiria. Os registros de partida saem do banco de dados ativo após 30 dias e são arquivados.",
            "Trapaças detectadas levam a penalidades, até o banimento, conforme previsto em nossos [Termos de Serviço](/termsofservice). O histórico de penalidades permanece na sua conta, e você pode pedir que uma pessoa revise qualquer penalidade.",
            "Um banimento de dispositivo também bloqueia novas contas criadas a partir daquele dispositivo. Os registros de banimento não têm data de término; nós os removemos quando uma revisão mostra que o banimento foi indevido.",
          ],
        },
        {
          type: "p",
          text: "As ações de batalha em si são validadas em nossos servidores conforme acontecem, o que não exige nenhum dado além da própria partida. Não usamos seu endereço IP para determinar sua localização. Quando você entra pela primeira vez, o jogo sugere uma nação a partir da configuração de idioma e região do seu dispositivo; essa leitura acontece no dispositivo, e você pode escolher qualquer outra nação.",
        },
        {
          type: "basis",
          text: "nosso legítimo interesse em prevenir trapaças, fraudes e abusos e em manter o serviço seguro.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notificações push",
      blocks: [
        {
          type: "p",
          text: "Se você permitir notificações, seu dispositivo nos fornece um token push, que armazenamos e usamos para avisar sobre eventos do jogo: coisas que acontecem com sua conta, seus amigos e sua nação, novos eventos e temporadas, e um lembrete se você ficar um tempo sem jogar.",
        },
        {
          type: "p",
          text: "As notificações são entregues pelo Firebase Cloud Messaging (Google) no Android e pelo Apple Push Notification service no iOS. Você pode desativá-las a qualquer momento nas configurações do seu dispositivo, o que impede que sejam exibidas; o token em si permanece até se tornar inválido (por exemplo, quando você desinstala o jogo) ou até você excluir sua conta. As notificações entregues ficam guardadas do nosso lado por 30 dias, depois são arquivadas.",
        },
        {
          type: "basis",
          text: "nosso legítimo interesse em manter você informado sobre sua conta e o jogo que você joga, com uma desativação que leva um toque.",
        },
      ],
    },
    {
      id: "ads",
      title: "Anúncios recompensados opcionais",
      blocks: [
        {
          type: "p",
          text: "O jogo não tem anúncios forçados: nada interrompe uma batalha ou um menu. A loja oferece anúncios recompensados que só são exibidos quando você toca neles, em troca de moeda do jogo.",
        },
        {
          type: "p",
          text: "Os anúncios são fornecidos pelo Google AdMob. O software dele faz parte do jogo, inicia junto com ele e carrega um anúncio em segundo plano para que haja um pronto caso você toque. Nesse momento, assista ou não a algum anúncio, o AdMob recebe seu identificador de publicidade e uma localização aproximada derivada do seu endereço IP; se você assistir a um, também a forma como interagiu com ele. No iOS, o sistema pede sua permissão na primeira abertura antes que o identificador de publicidade seja usado para rastreamento; no Android, você pode redefinir ou excluir o identificador de publicidade nas configurações do dispositivo. O Google descreve o que faz com esses dados em sua [política de privacidade](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "seu consentimento, dado por meio das permissões e das configurações de publicidade do seu dispositivo, onde você pode retirá-lo a qualquer momento.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Análise",
      blocks: [
        {
          type: "p",
          text: "Para entender como o jogo é jogado e encontrar problemas, o jogo envia eventos aos nossos próprios servidores: início e fim de sessão, batalhas jogadas e concluídas, progresso no tutorial, compras na loja, notificações abertas, erros e, no Android, o referenciador da loja que trouxe você ao jogo. Cada evento traz seu identificador de conta, identificador do dispositivo, plataforma, modelo do celular e versão do jogo. Não usamos Google Analytics, Firebase Analytics nem qualquer outro serviço de análise de terceiros. Os relatórios de falhas chegam até nós pelo Google Play e pela App Store, sob as políticas deles.",
        },
        {
          type: "p",
          text: "Os eventos de análise são guardados por 400 dias. As estatísticas derivadas deles não contêm dados pessoais e são mantidas por tempo indeterminado.",
        },
        {
          type: "basis",
          text: "nosso legítimo interesse em melhorar o jogo e mantê-lo funcionando bem.",
        },
      ],
    },
    {
      id: "support",
      title: "Suporte e comunidade",
      blocks: [
        {
          type: "p",
          text: "Se você nos enviar um e-mail, guardamos a conversa pelo tempo necessário para resolvê-la.",
        },
        {
          type: "p",
          text: "Nosso servidor do Discord funciona no Discord sob a [política de privacidade do Discord](https://discord.com/privacy). Os moderadores de lá podem consultar o histórico do chat do jogo para tratar denúncias, como descrito em “Chat e moderação”.",
        },
        {
          type: "basis",
          text: "execução do nosso contrato com você (suporte) e nosso legítimo interesse em manter uma comunidade em torno do jogo.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Com quem compartilhamos dados",
      blocks: [
        {
          type: "p",
          text: "Não vendemos dados pessoais e não os compartilhamos com corretores de dados. As empresas abaixo tratam dados em nosso nome ou os recebem por causa da forma como o jogo funciona:",
        },
        {
          type: "table",
          head: ["Fornecedor", "Para quê", "Onde"],
          rows: [
            ["DigitalOcean", "Hospedagem dos nossos servidores de jogo e do banco de dados", "Frankfurt, Alemanha"],
            [
              "Gcore",
              "Rede de distribuição de conteúdo que transporta parte do tráfego do jogo até nossos servidores; vê seu endereço IP em trânsito",
              "Servidores de borda no mundo todo; a empresa é sediada em Luxemburgo",
            ],
            [
              "Google Cloud Storage",
              "Arquivo de registros expirados (veja “Por quanto tempo guardamos os dados”)",
              "Frankfurt, Alemanha",
            ],
            [
              "Google (Gemini API)",
              "Classificação de nomes de usuário e, quando ativada, de mensagens de chat",
              "Mundo todo: o Google não se compromete com uma região para essa API",
            ],
            ["Google AdMob", "Anúncios recompensados que você escolhe assistir", "Estados Unidos"],
            ["Google Firebase Cloud Messaging", "Entrega de notificações push no Android", "Estados Unidos"],
            ["Apple Push Notification service", "Entrega de notificações push no iOS", "Estados Unidos"],
            ["Zoho Mail", "Nosso e-mail, incluindo os e-mails de redefinição de senha", "União Europeia"],
            [
              "Google Play e App Store",
              "Login, pagamentos, assinaturas e relatórios de falhas",
              "Sob as políticas deles",
            ],
          ],
        },
        {
          type: "p",
          text: "Cada um desses fornecedores é obrigado por contrato a proteger seus dados pelo menos tão bem quanto esta política descreve e a usá-los somente para a finalidade indicada. Os outros jogadores veem seu nome de usuário, seu perfil no jogo e o que você escreve no chat. Só divulgamos dados a autoridades quando a lei exige.",
        },
      ],
    },
    {
      id: "storage",
      title: "Onde seus dados são armazenados",
      blocks: [
        {
          type: "p",
          text: "Nossos servidores, banco de dados e backups são hospedados em Frankfurt, na Alemanha, e nosso arquivo de registros expirados fica em um bucket do Google Cloud Storage na mesma cidade. Seus dados permanecem na União Europeia, exceto quando um fornecedor listado acima os trata nos Estados Unidos ou, no caso da Gemini API, onde quer que o Google a execute. Para essas transferências, nos baseamos nas cláusulas contratuais padrão da Comissão Europeia e, quando o fornecedor é certificado, no Data Privacy Framework UE-EUA.",
        },
      ],
    },
    {
      id: "retention",
      title: "Por quanto tempo guardamos os dados",
      blocks: [
        {
          type: "table",
          head: ["Dados", "Guardados por"],
          rows: [
            ["Conta, progresso, inventário, amigos, confirmações de compra", "Até você excluir sua conta"],
            [
              "Histórico de violações e silenciamentos no chat, histórico de penalidades por conluio",
              "Toda a vida da conta (os silenciamentos em si são temporários)",
            ],
            ["Banimentos de dispositivo", "Até serem revogados por nós"],
            ["Eventos de análise", "400 dias, depois arquivados"],
            ["Chats além do chat de batalha, incluindo mensagens diretas", "90 dias, depois arquivados"],
            [
              "Histórico de transações de moedas e XP",
              "90 dias (histórico de XP: 90 dias após sua última atividade), depois arquivado",
            ],
            ["Registro da primeira abertura com endereço IP e modelo do celular", "90 dias, depois arquivado"],
            [
              "Registros de participantes por partida com endereço IP e identificador do dispositivo",
              "30 dias, depois arquivados",
            ],
            ["Notificações entregues, progresso diário", "30 dias, depois arquivados"],
            ["Chat de batalha", "15 dias, depois excluído"],
            ["Replays de batalha", "7 dias, depois arquivados"],
            ["Eventos de navegação na loja", "3 dias, depois excluídos"],
          ],
        },
        {
          type: "p",
          text: "As linhas marcadas com “depois arquivados” são copiadas para um arquivo em Frankfurt antes de sair do banco de dados ativo. Usamos o arquivo para estatísticas e para investigar abusos passados; o acesso é restrito aos dois desenvolvedores, e nada nele pode ser acessado a partir do jogo. Mantemos os registros arquivados enquanto forem necessários para essas finalidades e os excluímos quando deixam de ser.",
        },
        {
          type: "p",
          text: "Quando você exclui sua conta, excluímos seus dados pessoais dos sistemas ativos em até 30 dias. Mantemos os registros que somos legalmente obrigados a guardar, como registros de compra para a contabilidade, e estatísticas que não identificam mais você.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Nossas bases legais em um só lugar",
      blocks: [
        {
          type: "p",
          text: "Pelo GDPR, precisamos de uma base legal para cada coisa que fazemos com seus dados. As nossas são:",
        },
        {
          type: "ul",
          items: [
            "**Contrato**: manter sua conta, o jogo, suas compras e o suporte. Sem esses dados, não há jogo para jogar.",
            "**Legítimo interesse**: prevenir trapaças e abusos, moderar o chat, manter o serviço seguro, entender como o jogo é jogado e avisar você sobre sua conta. Nosso interesse é um jogo justo, seguro e funcionando; mantemos os dados no mínimo e por pouco tempo, e você pode se opor a qualquer momento.",
            "**Consentimento**: publicidade personalizada nos anúncios recompensados, dado por meio das configurações do seu dispositivo e retirável lá mesmo.",
            "**Obrigação legal**: guardar registros contábeis e responder a solicitações legítimas de autoridades.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Seus direitos",
      blocks: [
        { type: "p", text: "Você tem o direito de:" },
        {
          type: "ul",
          items: [
            "**Acessar** os dados pessoais que temos sobre você e obter uma cópia.",
            "**Corrigir** dados que estejam errados.",
            "**Excluir** sua conta e seus dados.",
            "**Receber** seus dados em um formato portável e legível por máquina.",
            "**Opor-se** ao tratamento baseado em nossos legítimos interesses, e **restringir** o tratamento enquanto analisamos o caso.",
            "**Retirar o consentimento** para publicidade a qualquer momento nas configurações do seu dispositivo, e desativar as notificações da mesma forma.",
          ],
        },
        {
          type: "p",
          text: "Para exercer um direito, envie um e-mail para [contact@geofastgames.com](mailto:contact@geofastgames.com) a partir do endereço vinculado à sua conta ou, se sua conta não tiver e-mail, informe seu nome de usuário e faremos a verificação dentro do jogo. As solicitações de exclusão também podem começar pela nossa [página de exclusão de dados](/datadeletion). Respondemos em até um mês.",
        },
        {
          type: "p",
          text: "Se você acredita que tratamos seus dados de forma ilícita, pode apresentar uma reclamação à Autoridade de Proteção de Dados da Bélgica (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Bruxelas, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), ou à autoridade do país onde você mora.",
        },
      ],
    },
    {
      id: "children",
      title: "Crianças",
      blocks: [
        {
          type: "p",
          text: "O *Geofast: Battle of Nations* não é dirigido a crianças menores de 13 anos, e não coletamos intencionalmente dados pessoais delas. Na Bélgica, 13 é a idade a partir da qual você pode consentir por conta própria com serviços online. O jogo tem em cada loja uma classificação etária que reflete seu chat online e suas compras opcionais; os pais podem usar os controles parentais do Google Play e da App Store para restringir compras e quais aplicativos uma criança pode instalar.",
        },
        {
          type: "p",
          text: "Se você acredita que uma criança menor de 13 anos tem uma conta, envie um e-mail e nós a excluiremos.",
        },
      ],
    },
    {
      id: "security",
      title: "Segurança",
      blocks: [
        {
          type: "p",
          text: "Todo o tráfego entre o jogo, este site e nossos servidores é criptografado (TLS). As senhas são armazenadas com hash. O banco de dados não é acessível pela internet. O acesso a servidores e dados é restrito aos dois desenvolvedores; os moderadores veem o histórico do chat apenas por meio de uma ferramenta que registra toda consulta. Nenhum sistema é perfeitamente seguro; se algum dia tomarmos conhecimento de uma violação que afete seus dados, avisaremos você e a autoridade conforme a lei exige.",
        },
      ],
    },
    {
      id: "website",
      title: "Este site",
      blocks: [
        {
          type: "p",
          text: "O geofastgames.com não grava cookies e não usa scripts de rastreamento ou de análise. Três coisas saem do seu navegador quando você visita o site: a fonte da página é carregada do Google Fonts, então o Google vê seu endereço IP; o número de membros do Discord é obtido da API pública do Discord; e as estatísticas ao vivo vêm do nosso próprio servidor. Os links para as lojas de aplicativos levam uma tag de campanha para que possamos ver que um download veio deste site, o que identifica o site, não você.",
        },
      ],
    },
    {
      id: "changes",
      title: "Alterações nesta política",
      blocks: [
        {
          type: "p",
          text: "Quando mudamos a forma como tratamos os dados, atualizamos esta página e sua data, e, no caso de mudanças significativas, avisamos você dentro do jogo.",
        },
      ],
    },
  ],
};
