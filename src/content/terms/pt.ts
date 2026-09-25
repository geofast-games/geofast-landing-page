import type { TermsContent } from "./types";

// Brazilian Portuguese (html lang pt-BR, URL /pt/termsofservice, menu label
// "Portugues"). "Voce" throughout, as in the Brazilian privacy policy and the
// game's pt-BR translation. The document is called "Termos de Servico", the
// term the privacy policy links to; the privacy policy is "Politica de
// Privacidade", as it names itself. Legal vocabulary is the one Brazilian
// consumers know from the Codigo de Defesa do Consumidor, mapped onto the EU
// concepts used here: "direito de arrependimento" for the right of
// withdrawal, "conformidade", "normas imperativas de protecao ao consumidor",
// "culpa grave", "responsabilidade", "foro do seu domicilio". Game terms
// follow the game: "batalha", "nacao", "chat", "moedas", "diamantes",
// "estrelas", "temporada", "placar" for leaderboard, "armas", "skins",
// "codigo de indicacao"; the game translates Battle Pass as "Passe de
// Batalha", so this text does too, as the privacy policy does. As there,
// cheating is "trapaca", a mute a "silenciamento", a ban a "banimento", a
// report a "denuncia".
export const pt: TermsContent = {
  lang: "pt",
  htmlLang: "pt-BR",
  label: "Português",
  pageTitle: "Termos de Serviço | Geofast: Battle of Nations",
  metaDescription:
    "As regras para jogar Geofast: Battle of Nations: contas, conduta, moderação e recursos, compras e Passe de Batalha, alterações e seus direitos.",
  gameName: "Geofast: Battle of Nations",
  docName: "Termos de Serviço",
  lastUpdated: "Última atualização: 25 de setembro de 2026",
  sectionsLabel: "Seções",
  languageLabel: "Idioma",
  contact: {
    line: "Dúvidas? Pergunte no Discord. Solicitações sobre seus dados: envie um e-mail.",
    discord: "Perguntar no Discord",
    back: "Voltar para Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Quem somos e o que estes Termos abrangem",
      blocks: [
        {
          type: "p",
          text: "Estes Termos de Serviço são o contrato entre você e a Geofast Games, um estúdio de jogos independente sediado na Bélgica, para *Geofast: Battle of Nations* (o jogo) e o site geofastgames.com. Você nos encontra em [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Ao criar uma conta ou jogar, você aceita estes Termos. Se não concordar com eles, não jogue. Nossa [Política de Privacidade](/privacy) explica o que fazemos com seus dados; é um documento separado e se aplica junto com estes Termos.",
        },
        {
          type: "p",
          text: "No iOS, o aplicativo é licenciado a você sob o contrato de licença de usuário final padrão da Apple, que rege o uso do aplicativo em si. Estes Termos regem o serviço do jogo, sua conta e a forma como você joga com os outros. Onde os dois se sobrepõem, o contrato da Apple se aplica à licença do aplicativo e estes Termos a todo o resto.",
        },
        {
          type: "p",
          text: "Estes Termos foram escritos em inglês. As traduções são fornecidas por conveniência; se uma tradução divergir do texto em inglês, prevalece o texto em inglês.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Quem pode jogar",
      blocks: [
        {
          type: "p",
          text: "Você precisa ter pelo menos 13 anos para jogar. Se tiver menos de 18, precisa da permissão de um dos pais ou responsável para jogar e para fazer qualquer compra, e ao jogar você confirma que a tem. Pais e responsáveis respondem pelo que os menores sob seus cuidados fazem no jogo e pelas compras feitas pela conta deles na loja. Os controles parentais do Google Play e da App Store podem restringir compras e downloads.",
        },
        {
          type: "p",
          text: "As classificações etárias do jogo nas lojas refletem que ele tem chat entre jogadores e compras opcionais.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Sua conta",
      blocks: [
        {
          type: "p",
          text: "Quando você joga online pela primeira vez, o jogo cria uma conta vinculada ao seu dispositivo. Você pode vincular um endereço de e-mail e senha, ou um login do Google ou da Apple, para manter seu progresso em vários dispositivos. Guarde suas credenciais só para você: tudo o que for feito pela sua conta é responsabilidade sua, e você deve nos avisar imediatamente se achar que outra pessoa a está usando.",
        },
        {
          type: "p",
          text: "Apenas um dispositivo pode estar conectado a uma conta por vez. Conectar-se de um novo dispositivo desconecta o anterior.",
        },
        {
          type: "p",
          text: "Se você perder ou redefinir seu dispositivo sem ter vinculado um endereço de e-mail ou um login do Google ou da Apple, não temos como confirmar que a conta é sua, e ela não pode ser restaurada. Vincule sua conta se o seu progresso é importante para você.",
        },
        {
          type: "p",
          text: "Compartilhar uma conta com outra pessoa não é permitido, porque dá uma vantagem injusta no placar e nas classificações. Ter mais de uma conta é permitido, desde que nenhuma delas seja usada para obter vantagem injusta, manipular partidas ou contornar uma sanção aplicada a outra conta. Contas e o que elas contêm não podem ser vendidas, compradas, trocadas ou doadas.",
        },
        {
          type: "p",
          text: "Seu nome de usuário é visível para todos. Ele não pode ser ofensivo, enganoso ou se passar por alguém, incluindo nossa equipe. Você pode alterá-lo uma vez no jogo, pela taxa ali indicada. Podemos alterar um nome de usuário que viole estas regras.",
        },
        {
          type: "p",
          text: "Não excluímos contas inativas. Você pode excluir sua conta a qualquer momento no jogo, pelo seu perfil, ou pela nossa [página de exclusão de dados](/datadeletion). A exclusão é permanente e inclui seu progresso, moedas virtuais e itens.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Sua licença para jogar",
      blocks: [
        {
          type: "p",
          text: "Concedemos a você uma licença pessoal, não exclusiva e intransferível para instalar e jogar o jogo em dispositivos que você possui ou controla, para seu próprio entretenimento. O jogo, sua arte, sons, textos, código e design pertencem à Geofast Games ou aos nossos licenciadores e são protegidos pela legislação de propriedade intelectual. Você não pode copiar, modificar, distribuir, vender ou alugar qualquer parte do jogo, nem fazer engenharia reversa dele, exceto onde a lei expressamente permitir.",
        },
        {
          type: "p",
          text: "O jogo roda nas versões de Android e iOS listadas nas lojas. Jogar online exige uma versão razoavelmente atual do jogo: lançamos atualizações pelas lojas, e uma versão desatualizada pode perder acesso aos recursos online até ser atualizada.",
        },
        {
          type: "p",
          text: "Você pode gravar, transmitir e publicar vídeos e capturas de tela do seu jogo, inclusive em plataformas onde ganha dinheiro com anúncios ou assinaturas. Não apresente seu conteúdo como feito ou endossado por nós, não venda produtos usando nossa arte e não exiba trapaças ou exploits. Podemos pedir que você remova conteúdo que viole estas regras ou a lei.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Regras de conduta",
      blocks: [
        { type: "p", text: "Jogue limpo e trate os outros jogadores com respeito. Você não pode:" },
        {
          type: "ul",
          items: [
            "usar trapaças, exploits, bots, automação, clientes modificados ou qualquer ferramenta que interfira no jogo ou em seus servidores;",
            "explorar bugs para obter vantagem em vez de relatá-los;",
            "agir em conluio com outros jogadores, manipular partidas, trocar vitórias ou de outra forma manipular classificações, placares ou recompensas, inclusive com contas adicionais;",
            "compartilhar, vender, comprar ou transferir contas, ou negociar itens virtuais fora do jogo;",
            "assediar, ameaçar, insultar ou intimidar outros jogadores, ou publicar conteúdo de ódio, sexual, violento ou de outra forma abusivo;",
            "se passar por outros jogadores, por nossa equipe ou por qualquer pessoa ou organização;",
            "enviar spam, fazer propaganda ou compartilhar links para conteúdo nocivo;",
            "pedir ou coletar informações pessoais ou dados de login de outros jogadores, ou compartilhar os seus ou os de qualquer outra pessoa no chat;",
            "fazer denúncias falsas conscientemente sobre outros jogadores, ou abusar do processo de recurso;",
            "organizar ou participar de apostas ou jogos de azar sobre partidas ou sobre qualquer outra coisa no jogo;",
            "atacar, sondar ou sobrecarregar nossos servidores, ou interferir nas conexões de outros jogadores;",
            "arruinar deliberadamente o jogo para outros jogadores;",
            "usar o jogo para qualquer fim ilegal.",
          ],
        },
        {
          type: "p",
          text: "Rivalidade, provocações e linguagem de guerra entre nações fazem parte do jogo. Abuso contra pessoas reais, ódio dirigido a grupos, ameaças e conteúdo sexual não fazem.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, nomes de usuário e conteúdo que você cria",
      blocks: [
        {
          type: "p",
          text: "O jogo tem chat entre jogadores. O que você escreve é entregue aos outros jogadores daquele chat e armazenado em nossos servidores pelos períodos definidos na Política de Privacidade, para que os moderadores possam analisar denúncias. O chat não é privado: os outros jogadores o veem, e os moderadores podem lê-lo ao tratar uma denúncia. Não compartilhe dados pessoais no chat.",
        },
        {
          type: "p",
          text: "Você mantém os direitos sobre o que escreve. Você nos dá permissão para armazenar, exibir, moderar e, quando necessário, remover esse conteúdo para operar o jogo. Você é responsável pelo que publica. Removemos conteúdo que viole estes Termos ou a lei.",
        },
        {
          type: "p",
          text: "Se você nos enviar sugestões ou ideias, pelo jogo, pelo nosso site ou pelo Discord, podemos usá-las livremente, sem pagamento ou qualquer obrigação para com você, e sem citar seu nome.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Como moderamos",
      blocks: [
        { type: "p", text: "A moderação combina ferramentas automáticas e pessoas:" },
        {
          type: "ul",
          items: [
            "Antes de uma mensagem ser entregue, um filtro automático em nossos servidores a verifica contra limites de frequência, uma lista de palavras e padrões de discurso de ódio. Uma mensagem bloqueada nunca é enviada.",
            "Quando ativamos esse recurso, as mensagens entregues também são classificadas por um serviço automático (o Gemini do Google), que recebe a mensagem e suas mensagens recentes naquele chat como contexto. Os nomes de usuário são verificados da mesma forma quando você os define ou altera. Uma mensagem classificada como abusiva é excluída e uma violação é registrada na sua conta.",
            "Moderadores humanos analisam as denúncias dos jogadores e agem conforme o que encontram. O acesso deles ao histórico do chat é registrado.",
          ],
        },
        {
          type: "p",
          text: "As consequências de violações no chat são advertências e silenciamentos temporários. Violações automáticas levam primeiro a uma advertência, e a um silenciamento curto se você repetir rapidamente. Silenciamentos aplicados por moderadores são temporários e aumentam com cada silenciamento que você já recebeu, de horas a meses. O registro das suas violações e silenciamentos permanece na sua conta para que comportamentos repetidos possam ser reconhecidos.",
        },
        {
          type: "p",
          text: "Sempre que silenciamos você, removemos seu conteúdo ou penalizamos sua conta, informamos no jogo o que foi feito e por quê, e você pode contestar conforme descrito na seção 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Aplicação do jogo limpo",
      blocks: [
        {
          type: "p",
          text: "As ações de batalha são validadas em nossos servidores conforme acontecem, de modo que um cliente modificado não pode alterar o resultado de uma partida. Uma verificação automática analisa regularmente os registros de partidas recentes em busca de jogadores que caem nas mesmas partidas com muito mais frequência do que o acaso permitiria; é assim que manipulação de partidas e conluio são detectados.",
        },
        {
          type: "p",
          text: "Trapaça e conluio são punidos em etapas. O jogador é advertido primeiro, uma vez. As penalidades só aumentam quando há novas provas após a advertência e com tempo entre as etapas: redefinição de classificações e moedas, depois uma redefinição completa do progresso e, por fim, um banimento permanente do dispositivo, que também bloqueia novas contas criadas a partir dele. Contas envolvidas em trapaça grave ou repetida podem ser encerradas. Antes de aplicar uma redefinição, salvamos um instantâneo da conta, para que uma penalidade que se mostre indevida possa ser revertida. O registro de penalidades permanece na sua conta.",
        },
        {
          type: "p",
          text: "Toda penalidade vem com um aviso no jogo indicando o que foi feito e por quê, e você pode contestá-la conforme descrito na seção 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Denúncias e recursos",
      blocks: [
        {
          type: "p",
          text: "Para denunciar um jogador ou conteúdo que viole estes Termos ou a lei, use o botão “Denunciar” no jogo, o formulário de denúncia na nossa [página de feedback](/feedback), ou envie um e-mail para [contact@geofastgames.com](mailto:contact@geofastgames.com). Diga quem, o quê e onde. Confirmamos que recebemos sua denúncia e informamos o que decidimos, sem demora indevida. As denúncias são tratadas por pessoas, com a ajuda das ferramentas descritas acima, de boa-fé e sem arbitrariedade.",
        },
        {
          type: "p",
          text: "Se você achar que um silenciamento, penalidade, banimento ou remoção de conteúdo foi indevido, recorra por e-mail ou no Discord em até um mês. Uma pessoa que não participou da decisão original a revisa, e respondemos em 14 dias. Se a decisão foi indevida, nós a revertemos e, quando possível, restauramos o que foi perdido. Nada aqui limita seu direito de levar a questão a um tribunal ou a um órgão de defesa do consumidor.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Moedas virtuais, itens e compras",
      blocks: [
        {
          type: "p",
          text: "O jogo tem moedas virtuais (diamantes, moedas e estrelas) e itens virtuais como armas, skins, melhorias e recompensas do Passe de Batalha. Diamantes podem ser comprados com dinheiro real pelo Google Play ou pela App Store; moedas e estrelas são ganhas jogando ou trocadas dentro do jogo. Os preços são mostrados na sua moeda local na loja e no jogo antes de você comprar.",
        },
        {
          type: "p",
          text: "Moedas e itens virtuais são licenciados a você para uso no jogo. Eles não são sua propriedade, não têm valor fora do jogo, não podem ser trocados por dinheiro real, bens ou serviços, e não podem ser transferidos para outra conta ou pessoa.",
        },
        {
          type: "p",
          text: "As compras são entregues imediatamente. Ao comprar, você nos pede para entregar de imediato e reconhece que, uma vez iniciada a entrega, o direito legal de arrependimento de 14 dias deixa de se aplicar. Fora isso, as compras são definitivas, exceto onde a lei lhe der direito a reembolso. Pedidos de reembolso vão para a loja onde você comprou, que processa o pagamento; nunca vemos seus dados de pagamento.",
        },
        {
          type: "p",
          text: "Podemos alterar, rebalancear, adicionar ou descontinuar moedas e itens virtuais por motivos legítimos: manter o jogo equilibrado e divertido, corrigir bugs, segurança ou exigências legais. Quando uma alteração afetar significativamente algo pelo qual você pagou recentemente, avisamos com antecedência, e quando a lei lhe der o direito de encerrar o contrato e ser reembolsado por causa dessa alteração, nós o respeitamos. Seus direitos legais como consumidor, incluindo o direito a um jogo que funcione como descrito, não são afetados.",
        },
        {
          type: "p",
          text: "O jogo não tem publicidade forçada. Onde o jogo oferece anúncios opcionais com recompensa, assistir a um deles é escolha sua, e podemos alterar ou remover essa oferta.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. O Passe de Batalha",
      blocks: [
        {
          type: "p",
          text: "O Passe de Batalha é uma assinatura comprada pelo Google Play ou pela App Store. Ele se renova automaticamente todo mês pelo preço mostrado na loja até você cancelar. Você pode cancelar a qualquer momento nas configurações de assinatura da sua loja; o passe então continua ativo até o fim do período pago, e você mantém as recompensas que resgatou. Alterações de preço valem a partir da próxima renovação, e a loja avisa você antes de elas entrarem em vigor.",
        },
        {
          type: "p",
          text: "As recompensas do Passe de Batalha são desbloqueadas jogando durante a temporada; um passe, por si só, não concede todas as recompensas. Reembolsos de assinaturas são tratados pela loja de acordo com suas regras e com a lei.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Recompensas por indicação e programa de criadores",
      blocks: [
        {
          type: "p",
          text: "O jogo recompensa você quando um novo jogador entra com o seu código de indicação, e também o recompensa. As recompensas por indicação são para novos jogadores de verdade. Indicar a si mesmo, suas outras contas ou contas criadas só para coletar a recompensa não é permitido, e as recompensas obtidas dessa forma são removidas.",
        },
        {
          type: "p",
          text: "Nosso programa de criadores recompensa jogadores que publicam vídeos sobre o jogo quando seu conteúdo atinge marcos de visualizações. Os marcos, as recompensas e as regras de elegibilidade são publicados no jogo e podem mudar. As recompensas são verificadas e concedidas por nós manualmente, e em caso de dúvida a decisão é nossa. Recompensas reivindicadas com visualizações falsas, ou com conteúdo que viole estes Termos, são recusadas ou removidas.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Serviços de terceiros",
      blocks: [
        {
          type: "p",
          text: "O jogo usa o Google Play e a App Store para downloads, pagamentos e assinaturas; Google e Apple para login opcional; Google AdMob para anúncios opcionais com recompensa; e Discord para nosso servidor da comunidade. Seu uso desses serviços é regido pelos termos e políticas de privacidade deles, que não controlamos.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Disponibilidade e alterações no jogo",
      blocks: [
        {
          type: "p",
          text: "Trabalhamos para manter o jogo disponível, mas não podemos prometer que ele nunca será interrompido. Recursos online podem ficar indisponíveis durante manutenção, por problemas técnicos ou por motivos fora do nosso controle. Os modos offline continuam funcionando sem conexão.",
        },
        {
          type: "p",
          text: "O jogo é um serviço vivo e muda com o tempo: adicionamos, ajustamos e removemos recursos, armas, nações, temporadas e eventos para mantê-lo equilibrado e renovado, corrigir problemas, por segurança e para atender a exigências legais. Alterações que afetem significativamente a forma como você pode jogar são anunciadas no jogo com antecedência. Seus direitos legais não são afetados.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Encerramento do contrato",
      blocks: [
        {
          type: "p",
          text: "Você pode parar de jogar a qualquer momento desinstalando o jogo, e pode excluir sua conta no jogo, pelo seu perfil, ou pela nossa [página de exclusão de dados](/datadeletion). Excluir sua conta remove permanentemente seu progresso, moedas virtuais e itens; nada é reembolsado por eles.",
        },
        {
          type: "p",
          text: "Podemos suspender ou encerrar sua conta se você violar estes Termos de forma grave ou repetida, ou se a lei exigir. Exceto em casos graves, como trapaça, abuso ou uma obrigação legal, nós o advertimos primeiro e damos a você a chance de responder. Informamos o motivo e como recorrer (seção 9). O encerramento de uma conta encerra sua licença e seu acesso às moedas e itens virtuais dela.",
        },
        {
          type: "p",
          text: "Se um dia tivermos que encerrar o jogo, avisamos com pelo menos 30 dias de antecedência no jogo e no nosso site. Moedas e itens virtuais terminam com o jogo. Seus direitos legais quanto a compras recentes não são afetados.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Nossa responsabilidade",
      blocks: [
        {
          type: "p",
          text: "Somos responsáveis perante você conforme a lei determina. Não excluímos nem limitamos nossa responsabilidade por morte ou lesão pessoal causada por nossa negligência, por fraude, por conduta dolosa ou culpa grave, nem por qualquer outra coisa que não possa ser excluída sob as normas que protegem você como consumidor, incluindo seu direito a um jogo em conformidade com o que foi prometido.",
        },
        {
          type: "p",
          text: "Além disso, somos responsáveis apenas por danos que eram previsíveis quando você aceitou estes Termos e que resultem da nossa violação deles. O jogo é gratuito e fornecido como serviço vivo; não somos responsáveis por perdas causadas por interrupções, pelo comportamento de outros jogadores ou por eventos fora do nosso controle razoável, exceto onde a lei dispuser de outra forma.",
        },
        {
          type: "p",
          text: "Você é responsável pelos danos que nos causar ao violar estes Termos, na medida permitida pela lei.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Privacidade",
      blocks: [
        {
          type: "p",
          text: "Como coletamos e usamos seus dados está descrito na nossa [Política de Privacidade](/privacy). Ela não faz parte destes Termos e não depende da sua concordância com eles: ela informa o que fazemos e quais são seus direitos.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Alterações destes Termos",
      blocks: [
        {
          type: "p",
          text: "Alteramos estes Termos quando o jogo, a lei ou nossos serviços mudam, ou para deixá-los mais claros. Para alterações que afetem seus direitos ou a forma como você joga, avisamos no jogo com pelo menos 30 dias de antecedência antes de entrarem em vigor, e você pode parar de jogar e excluir sua conta antes disso se não concordar. Esclarecimentos e correções que não afetam você entram em vigor quando publicados. A data no topo indica quando a versão atual entrou em vigor.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Lei, disputas e reclamações",
      blocks: [
        {
          type: "p",
          text: "Estes Termos são regidos pela lei belga. Se você mora em outro país, mantém a proteção das normas imperativas de defesa do consumidor desse país, e pode propor uma ação nos tribunais do lugar onde mora. Só podemos propor uma ação contra você nesse mesmo lugar.",
        },
        {
          type: "p",
          text: "Se você tiver uma reclamação, fale primeiro conosco em [contact@geofastgames.com](mailto:contact@geofastgames.com) ou no Discord; a maioria das questões pode ser resolvida diretamente. Você também pode recorrer a um órgão de resolução de conflitos de consumo no seu país; na Bélgica, é o Serviço de Mediação do Consumidor (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Estes Termos não contêm cláusula de arbitragem nem renúncia a ações coletivas.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Disposições finais",
      blocks: [
        {
          type: "p",
          text: "Entramos em contato com você por avisos no jogo, no nosso site e, se você vinculou um endereço de e-mail, por e-mail. Você entra em contato conosco em [contact@geofastgames.com](mailto:contact@geofastgames.com); esse é também nosso endereço para notificações legais e nosso ponto de contato para autoridades.",
        },
        {
          type: "p",
          text: "Se uma parte destes Termos for considerada inválida, o restante continua em vigor. Se em algum momento não aplicarmos uma regra, ainda podemos aplicá-la depois. Podemos transferir este contrato para uma empresa que assuma o jogo, desde que seus direitos não sejam reduzidos; você não pode transferir sua conta nem este contrato. Estes Termos e a Política de Privacidade são o acordo integral entre você e nós sobre o jogo.",
        },
      ],
    },
  ],
};
