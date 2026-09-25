import type { TermsContent } from "./types";

// Spanish. Informal "tu" throughout, as in the Spanish privacy policy and the
// game's Spanish translation (both es-ES and es-LA); regionalisms are avoided.
// Opening question and exclamation marks as Spanish requires; guillemets for
// quotations. The document is called "Condiciones del servicio", the term the
// privacy policy links to; the privacy policy is "Politica de privacidad", as
// it names itself. Legal vocabulary follows the official Spanish text of the
// Consumer Rights Directive and the Digital Content Directive: "derecho de
// desistimiento", "conformidad", "normas imperativas de proteccion de los
// consumidores", "negligencia grave", "responsabilidad", "tribunales del
// lugar donde vives". Game terms follow the game: "batalla", "nacion",
// "chat", "monedas", "diamantes", "estrellas", "temporada",
// "clasificaciones", "armas", "skins", "codigo de referido"; the game
// translates Battle Pass as "Pase de Batalla", so this text does too, as the
// privacy policy does. As there, cheating is "trampas", a mute a
// "silenciamiento", a ban a "bloqueo", a report a "denuncia".
export const es: TermsContent = {
  lang: "es",
  label: "Español",
  pageTitle: "Condiciones del servicio | Geofast: Battle of Nations",
  metaDescription:
    "Las reglas para jugar a Geofast: Battle of Nations: cuentas, conducta, moderación y reclamaciones, compras y Pase de Batalla, cambios y tus derechos.",
  gameName: "Geofast: Battle of Nations",
  docName: "Condiciones del servicio",
  lastUpdated: "Última actualización: 25 de septiembre de 2026",
  sectionsLabel: "Secciones",
  languageLabel: "Idioma",
  contact: {
    line: "¿Tienes preguntas? Plantéalas en Discord. Para solicitudes sobre tus datos: escríbenos por correo.",
    discord: "Preguntar en Discord",
    back: "Volver a Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "1. Quiénes somos y qué cubren estas condiciones",
      blocks: [
        {
          type: "p",
          text: "Estas condiciones del servicio son el contrato entre tú y Geofast Games, un estudio de videojuegos independiente con sede en Bélgica, para *Geofast: Battle of Nations* (el juego) y el sitio web geofastgames.com. Puedes contactarnos en [contact@geofastgames.com](mailto:contact@geofastgames.com).",
        },
        {
          type: "p",
          text: "Al crear una cuenta o jugar, aceptas estas condiciones. Si no estás de acuerdo con ellas, no juegues. Nuestra [política de privacidad](/privacy) explica qué hacemos con tus datos; es un documento aparte y se aplica junto con estas condiciones.",
        },
        {
          type: "p",
          text: "En iOS, la aplicación se te concede bajo licencia conforme al contrato de licencia de usuario final estándar de Apple, que regula tu uso de la aplicación en sí. Estas condiciones regulan el servicio del juego, tu cuenta y cómo juegas con los demás. Donde ambos se superpongan, el contrato de Apple se aplica a la licencia de la aplicación y estas condiciones a todo lo demás.",
        },
        {
          type: "p",
          text: "Estas condiciones están redactadas en inglés. Las traducciones se ofrecen por comodidad; si una traducción difiere del texto en inglés, prevalece el texto en inglés.",
        },
      ],
    },
    {
      id: "who-can-play",
      title: "2. Quién puede jugar",
      blocks: [
        {
          type: "p",
          text: "Debes tener al menos 13 años para jugar. Si tienes menos de 18, necesitas el permiso de un progenitor o tutor para jugar y para hacer cualquier compra, y al jugar confirmas que lo tienes. Los padres y tutores son responsables de lo que hacen en el juego los menores a su cargo y de las compras realizadas a través de su cuenta de la tienda. El control parental de Google Play y de la App Store permite restringir compras y descargas.",
        },
        {
          type: "p",
          text: "Las clasificaciones por edad del juego en las tiendas reflejan que tiene chat entre jugadores y compras opcionales.",
        },
      ],
    },
    {
      id: "account",
      title: "3. Tu cuenta",
      blocks: [
        {
          type: "p",
          text: "Cuando juegas en línea por primera vez, el juego crea una cuenta vinculada a tu dispositivo. Puedes vincular una dirección de correo electrónico con contraseña, o un inicio de sesión de Google o Apple, para conservar tu progreso en varios dispositivos. No compartas tus credenciales: todo lo que se haga a través de tu cuenta es tu responsabilidad, y debes avisarnos de inmediato si crees que otra persona la está usando.",
        },
        {
          type: "p",
          text: "Solo un dispositivo puede estar conectado a una cuenta a la vez. Conectarse desde un dispositivo nuevo desconecta el anterior.",
        },
        {
          type: "p",
          text: "Si pierdes o restableces tu dispositivo sin haber vinculado una dirección de correo o un inicio de sesión de Google o Apple, no tenemos forma de confirmar que la cuenta es tuya, y no se puede restaurar. Vincula tu cuenta si tu progreso te importa.",
        },
        {
          type: "p",
          text: "Compartir una cuenta con otra persona no está permitido, porque da una ventaja injusta en las clasificaciones. Tener más de una cuenta está permitido, siempre que ninguna se use para obtener una ventaja injusta, amañar partidas o eludir una sanción impuesta a otra cuenta. Las cuentas y lo que contienen no se pueden vender, comprar, intercambiar ni regalar.",
        },
        {
          type: "p",
          text: "Tu nombre de usuario es visible para todos. No debe ser ofensivo ni engañoso, ni hacerse pasar por nadie, incluido nuestro equipo. Puedes cambiarlo una vez en el juego, por la tarifa que allí se indica. Podemos cambiar un nombre de usuario que incumpla estas reglas.",
        },
        {
          type: "p",
          text: "No eliminamos cuentas inactivas. Puedes eliminar tu cuenta en cualquier momento desde el juego, en tu perfil, o a través de nuestra [página de eliminación de datos](/datadeletion). La eliminación es permanente e incluye tu progreso, tus monedas virtuales y tus objetos.",
        },
      ],
    },
    {
      id: "licence",
      title: "4. Tu licencia para jugar",
      blocks: [
        {
          type: "p",
          text: "Te concedemos una licencia personal, no exclusiva e intransferible para instalar y jugar al juego en dispositivos que posees o controlas, para tu propio entretenimiento. El juego, su arte, sus sonidos, sus textos, su código y su diseño pertenecen a Geofast Games o a nuestros licenciantes y están protegidos por la legislación de propiedad intelectual. No puedes copiar, modificar, distribuir, vender ni alquilar ninguna parte del juego, ni aplicarle ingeniería inversa, salvo donde la ley lo permita expresamente.",
        },
        {
          type: "p",
          text: "El juego funciona en las versiones de Android e iOS indicadas en las tiendas. Jugar en línea requiere una versión razonablemente actual del juego: publicamos actualizaciones a través de las tiendas, y una versión obsoleta puede perder el acceso a las funciones en línea hasta que se actualice.",
        },
        {
          type: "p",
          text: "Puedes grabar, retransmitir y publicar vídeos y capturas de pantalla de tus partidas, incluso en plataformas donde ganes dinero con anuncios o suscripciones. No presentes tu contenido como creado o respaldado por nosotros, no vendas productos con nuestro arte y no muestres trampas ni exploits. Podemos pedirte que retires contenido que incumpla estas reglas o la ley.",
        },
      ],
    },
    {
      id: "conduct",
      title: "5. Normas de conducta",
      blocks: [
        { type: "p", text: "Juega limpio y trata a los demás jugadores con respeto. No puedes:" },
        {
          type: "ul",
          items: [
            "usar trampas, exploits, bots, automatización, clientes modificados o cualquier herramienta que interfiera con el juego o sus servidores;",
            "explotar errores para obtener una ventaja en lugar de informar de ellos;",
            "coludirte con otros jugadores, amañar partidas, intercambiar victorias o manipular de cualquier otra forma las clasificaciones o las recompensas, incluso con cuentas adicionales;",
            "compartir, vender, comprar o transferir cuentas, o intercambiar objetos virtuales fuera del juego;",
            "acosar, amenazar, insultar o intimidar a otros jugadores, o publicar contenido de odio, sexual, violento o abusivo de cualquier otra forma;",
            "hacerte pasar por otros jugadores, por nuestro equipo o por cualquier persona u organización;",
            "hacer spam, publicidad o compartir enlaces a contenido dañino;",
            "pedir o recopilar información personal o datos de acceso de otros jugadores, o compartir los tuyos o los de cualquier otra persona en el chat;",
            "hacer denuncias falsas a sabiendas sobre otros jugadores, o hacer un uso indebido del proceso de apelación;",
            "organizar apuestas o juegos de azar sobre partidas o sobre cualquier otra cosa del juego, o participar en ellos;",
            "atacar, sondear o sobrecargar nuestros servidores, o interferir con las conexiones de otros jugadores;",
            "arruinar deliberadamente el juego a otros jugadores;",
            "usar el juego para cualquier fin ilegal.",
          ],
        },
        {
          type: "p",
          text: "La rivalidad, las burlas y el lenguaje bélico entre naciones forman parte del juego. Los ataques a personas reales, el odio dirigido a grupos, las amenazas y el contenido sexual no.",
        },
      ],
    },
    {
      id: "content",
      title: "6. Chat, nombres de usuario y contenido que creas",
      blocks: [
        {
          type: "p",
          text: "El juego tiene chat entre jugadores. Lo que escribes se entrega a los demás jugadores de ese chat y se almacena en nuestros servidores durante los plazos establecidos en la política de privacidad, para que los moderadores puedan revisar las denuncias. El chat no es privado: los demás jugadores lo ven, y los moderadores pueden leerlo al gestionar una denuncia. No compartas datos personales en el chat.",
        },
        {
          type: "p",
          text: "Conservas los derechos sobre lo que escribes. Nos das permiso para almacenarlo, mostrarlo, moderarlo y, cuando sea necesario, eliminarlo para hacer funcionar el juego. Eres responsable de lo que publicas. Eliminamos el contenido que incumple estas condiciones o la ley.",
        },
        {
          type: "p",
          text: "Si nos envías sugerencias o ideas, a través del juego, nuestro sitio web o Discord, podemos usarlas libremente, sin pago ni obligación alguna hacia ti, y sin mencionarte.",
        },
      ],
    },
    {
      id: "moderation",
      title: "7. Cómo moderamos",
      blocks: [
        { type: "p", text: "La moderación combina herramientas automáticas y personas:" },
        {
          type: "ul",
          items: [
            "Antes de que un mensaje se entregue, un filtro automático en nuestros servidores lo comprueba frente a límites de frecuencia, una lista de palabras y patrones de discurso de odio. Un mensaje bloqueado nunca se envía.",
            "Cuando tenemos activada esa función, los mensajes entregados también son clasificados por un servicio automático (Gemini de Google), que recibe el mensaje y tus mensajes recientes en ese chat como contexto. Los nombres de usuario se comprueban del mismo modo cuando los estableces o los cambias. Un mensaje clasificado como abusivo se elimina y se registra una infracción en tu cuenta.",
            "Los moderadores humanos revisan las denuncias de los jugadores y actúan según lo que encuentran. Su acceso al historial del chat queda registrado.",
          ],
        },
        {
          type: "p",
          text: "Las consecuencias de las infracciones en el chat son advertencias y silenciamientos temporales. Las infracciones automáticas dan lugar primero a una advertencia, y a un silenciamiento breve si reincides rápidamente. Los silenciamientos aplicados por los moderadores son temporales y aumentan con cada silenciamiento que ya hayas recibido, de horas a meses. El registro de tus infracciones y silenciamientos permanece en tu cuenta para que pueda reconocerse la reincidencia.",
        },
        {
          type: "p",
          text: "Siempre que te silenciamos, retiramos tu contenido o sancionamos tu cuenta, te decimos en el juego qué se hizo y por qué, y puedes impugnarlo como se describe en la sección 9.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "8. Aplicación del juego limpio",
      blocks: [
        {
          type: "p",
          text: "Las acciones de batalla se validan en nuestros servidores mientras ocurren, de modo que un cliente modificado no puede cambiar el resultado de una partida. Una comprobación automática revisa periódicamente los registros de partidas recientes en busca de jugadores que coinciden en las mismas partidas con mucha más frecuencia de la que permite el azar; así se detectan el amaño de partidas y la colusión.",
        },
        {
          type: "p",
          text: "Las trampas y la colusión se castigan por pasos. Primero se advierte al jugador, una vez. Las sanciones solo aumentan cuando hay nuevas pruebas después de la advertencia y con tiempo entre pasos: reinicio de clasificaciones y monedas, luego un reinicio completo del progreso y, por último, un bloqueo permanente del dispositivo, que también impide crear cuentas nuevas desde él. Las cuentas implicadas en trampas graves o reiteradas pueden cerrarse. Antes de aplicar un reinicio guardamos una instantánea de la cuenta, para que una sanción que resulte errónea pueda revertirse. El registro de sanciones permanece en tu cuenta.",
        },
        {
          type: "p",
          text: "Cada sanción va acompañada de un aviso en el juego que indica qué se hizo y por qué, y puedes impugnarla como se describe en la sección 9.",
        },
      ],
    },
    {
      id: "reporting",
      title: "9. Denuncias y apelaciones",
      blocks: [
        {
          type: "p",
          text: "Para denunciar a un jugador o un contenido que incumpla estas condiciones o la ley, usa el botón «Reportar» en el juego, el [formulario de denuncia de nuestro sitio web](/report) o escribe a [contact@geofastgames.com](mailto:contact@geofastgames.com). Dinos quién, qué y dónde. Confirmamos que hemos recibido tu denuncia y te informamos de lo que hemos decidido, sin demoras indebidas. Las denuncias las gestionan personas, con ayuda de las herramientas descritas más arriba, de buena fe y sin arbitrariedad.",
        },
        {
          type: "p",
          text: "Si crees que un silenciamiento, una sanción, un bloqueo o una retirada de contenido fue erróneo, apela por correo electrónico o en Discord en el plazo de un mes. Una persona que no participó en la decisión original la revisa, y respondemos en 14 días. Si la decisión fue errónea, la anulamos y, cuando es posible, restauramos lo perdido. Nada de lo aquí dispuesto limita tu derecho a llevar el asunto ante un tribunal o un organismo de consumo.",
        },
      ],
    },
    {
      id: "purchases",
      title: "10. Monedas virtuales, objetos y compras",
      blocks: [
        {
          type: "p",
          text: "El juego tiene monedas virtuales (diamantes, monedas y estrellas) y objetos virtuales como armas, skins, mejoras y recompensas del Pase de Batalla. Los diamantes pueden comprarse con dinero real a través de Google Play o de la App Store; las monedas y las estrellas se ganan jugando o se intercambian dentro del juego. Los precios se muestran en tu moneda local en la tienda y en el juego antes de comprar.",
        },
        {
          type: "p",
          text: "Las monedas y los objetos virtuales se te conceden bajo licencia para usarlos en el juego. No son de tu propiedad, no tienen valor fuera del juego, no pueden cambiarse por dinero real, bienes ni servicios, y no pueden transferirse a otra cuenta ni a otra persona.",
        },
        {
          type: "p",
          text: "Las compras se entregan de inmediato. Al comprar, nos pides que entreguemos en el acto y reconoces que, una vez iniciada la entrega, el derecho legal de desistimiento de 14 días deja de aplicarse. Por lo demás, las compras son definitivas, salvo donde la ley te dé derecho a un reembolso. Las solicitudes de reembolso se dirigen a la tienda donde compraste, que gestiona el pago; nosotros nunca vemos tus datos de pago.",
        },
        {
          type: "p",
          text: "Podemos cambiar, reequilibrar, añadir o retirar monedas y objetos virtuales por motivos válidos: mantener el juego equilibrado y divertido, corregir errores, por seguridad o por exigencias legales. Cuando un cambio afecte de forma significativa a algo por lo que has pagado recientemente, te lo comunicamos con antelación, y cuando la ley te dé derecho a poner fin al contrato y a ser reembolsado a causa de ese cambio, lo respetamos. Tus derechos legales como consumidor, incluido el derecho a un juego que funcione como se describe, no se ven afectados.",
        },
        {
          type: "p",
          text: "El juego no tiene publicidad forzosa. Cuando el juego ofrece anuncios con recompensa opcionales, ver uno es tu decisión, y podemos cambiar o retirar esa oferta.",
        },
      ],
    },
    {
      id: "battle-pass",
      title: "11. El Pase de Batalla",
      blocks: [
        {
          type: "p",
          text: "El Pase de Batalla es una suscripción que se compra a través de Google Play o de la App Store. Se renueva automáticamente cada mes al precio indicado en la tienda hasta que la canceles. Puedes cancelarla en cualquier momento en los ajustes de suscripciones de tu tienda; el pase sigue activo hasta el final del periodo que hayas pagado, y conservas las recompensas que hayas reclamado. Los cambios de precio se aplican a partir de la siguiente renovación, y la tienda te avisa antes de que entren en vigor.",
        },
        {
          type: "p",
          text: "Las recompensas del Pase de Batalla se desbloquean jugando durante la temporada; un pase no otorga por sí solo todas las recompensas. Los reembolsos de suscripciones los gestiona la tienda según sus reglas y la ley.",
        },
      ],
    },
    {
      id: "programs",
      title: "12. Recompensas por referidos y programa de creadores",
      blocks: [
        {
          type: "p",
          text: "El juego te recompensa cuando un jugador nuevo se une con tu código de referido, y también lo recompensa a él. Las recompensas por referidos son para jugadores nuevos de verdad. Referirte a ti mismo, a tus otras cuentas o a cuentas creadas solo para cobrar la recompensa no está permitido, y las recompensas obtenidas así se retiran.",
        },
        {
          type: "p",
          text: "Nuestro programa de creadores recompensa a los jugadores que publican vídeos sobre el juego cuando su contenido alcanza ciertos hitos de visualizaciones. Los hitos, las recompensas y los requisitos se publican en el juego y pueden cambiar. Las recompensas las verificamos y concedemos manualmente, y en caso de duda decidimos nosotros. Las recompensas reclamadas con visualizaciones falsas, o con contenido que incumpla estas condiciones, se rechazan o se retiran.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Servicios de terceros",
      blocks: [
        {
          type: "p",
          text: "El juego usa Google Play y la App Store para descargas, pagos y suscripciones; Google y Apple para el inicio de sesión opcional; Google AdMob para anuncios con recompensa opcionales; y Discord para nuestro servidor de la comunidad. Tu uso de esos servicios se rige por sus propias condiciones y políticas de privacidad, que no controlamos.",
        },
      ],
    },
    {
      id: "availability",
      title: "14. Disponibilidad y cambios en el juego",
      blocks: [
        {
          type: "p",
          text: "Trabajamos para mantener el juego disponible, pero no podemos prometer que nunca se interrumpa. Las funciones en línea pueden no estar disponibles durante el mantenimiento, por problemas técnicos o por causas ajenas a nuestro control. Los modos sin conexión siguen funcionando sin internet.",
        },
        {
          type: "p",
          text: "El juego es un servicio vivo y cambia con el tiempo: añadimos, ajustamos y retiramos funciones, armas, naciones, temporadas y eventos para mantenerlo equilibrado y fresco, corregir problemas, por seguridad y para cumplir con las exigencias legales. Los cambios que afectan de forma significativa a cómo puedes jugar se anuncian en el juego con antelación. Tus derechos legales no se ven afectados.",
        },
      ],
    },
    {
      id: "ending",
      title: "15. Fin del contrato",
      blocks: [
        {
          type: "p",
          text: "Puedes dejar de jugar en cualquier momento desinstalando el juego, y puedes eliminar tu cuenta desde el juego, en tu perfil, o a través de nuestra [página de eliminación de datos](/datadeletion). Eliminar tu cuenta borra de forma permanente tu progreso, tus monedas virtuales y tus objetos; no se reembolsa nada por ellos.",
        },
        {
          type: "p",
          text: "Podemos suspender o cerrar tu cuenta si incumples estas condiciones de forma grave o reiterada, o si la ley lo exige. Salvo en casos graves, como trampas, abusos o una obligación legal, te advertimos primero y te damos la oportunidad de responder. Te indicamos el motivo y cómo apelar (sección 9). Cerrar una cuenta pone fin a tu licencia y a tu acceso a sus monedas y objetos virtuales.",
        },
        {
          type: "p",
          text: "Si alguna vez tenemos que cerrar el juego, lo avisamos con al menos 30 días de antelación en el juego y en nuestro sitio web. Las monedas y los objetos virtuales terminan con el juego. Tus derechos legales sobre compras recientes no se ven afectados.",
        },
      ],
    },
    {
      id: "liability",
      title: "16. Nuestra responsabilidad",
      blocks: [
        {
          type: "p",
          text: "Somos responsables ante ti según lo dispuesto por la ley. No excluimos ni limitamos nuestra responsabilidad por muerte o lesiones personales causadas por nuestra negligencia, por fraude, por conducta dolosa o por negligencia grave, ni por nada más que no pueda excluirse conforme a las normas que te protegen como consumidor, incluido tu derecho a un juego conforme con lo prometido.",
        },
        {
          type: "p",
          text: "Más allá de eso, solo somos responsables de los daños que eran previsibles cuando aceptaste estas condiciones y que resulten de nuestro incumplimiento de las mismas. El juego es gratuito y se ofrece como servicio vivo; no somos responsables de las pérdidas causadas por interrupciones, por la conducta de otros jugadores o por sucesos fuera de nuestro control razonable, salvo que la ley disponga otra cosa.",
        },
        {
          type: "p",
          text: "Tú eres responsable de los daños que nos causes al incumplir estas condiciones, en la medida en que la ley lo permita.",
        },
      ],
    },
    {
      id: "privacy",
      title: "17. Privacidad",
      blocks: [
        {
          type: "p",
          text: "Cómo recogemos y usamos tus datos se describe en nuestra [política de privacidad](/privacy). No forma parte de estas condiciones ni depende de que las aceptes: te informa de lo que hacemos y de cuáles son tus derechos.",
        },
      ],
    },
    {
      id: "changes",
      title: "18. Cambios en estas condiciones",
      blocks: [
        {
          type: "p",
          text: "Cambiamos estas condiciones cuando cambian el juego, la ley o nuestros servicios, o para hacerlas más claras. Para los cambios que afecten a tus derechos o a cómo juegas, avisamos en el juego con al menos 30 días de antelación antes de que entren en vigor, y puedes dejar de jugar y eliminar tu cuenta antes de esa fecha si no estás de acuerdo. Las aclaraciones y correcciones que no te afectan entran en vigor al publicarse. La fecha de arriba te indica cuándo entró en vigor la versión actual.",
        },
      ],
    },
    {
      id: "law",
      title: "19. Ley aplicable, disputas y reclamaciones",
      blocks: [
        {
          type: "p",
          text: "Estas condiciones se rigen por la ley belga. Si vives en otro país, conservas la protección de las normas imperativas de consumo de ese país, y puedes presentar una demanda ante los tribunales del lugar donde vives. Nosotros solo podemos demandarte allí.",
        },
        {
          type: "p",
          text: "Si tienes una reclamación, contáctanos primero en [contact@geofastgames.com](mailto:contact@geofastgames.com) o en Discord; la mayoría de las cosas pueden resolverse directamente. También puedes acudir a un organismo de resolución de conflictos de consumo de tu país; en Bélgica es el Servicio de Mediación para el Consumidor (Consumentenombudsdienst / Service de Médiation pour le Consommateur). Estas condiciones no contienen ninguna cláusula de arbitraje ni ninguna renuncia a acciones colectivas.",
        },
      ],
    },
    {
      id: "final",
      title: "20. Disposiciones finales",
      blocks: [
        {
          type: "p",
          text: "Nos comunicamos contigo mediante avisos en el juego, en nuestro sitio web y, si has vinculado una dirección de correo, por correo electrónico. Tú te comunicas con nosotros en [contact@geofastgames.com](mailto:contact@geofastgames.com); esa es también nuestra dirección para notificaciones legales y nuestro punto de contacto para las autoridades.",
        },
        {
          type: "p",
          text: "Si una parte de estas condiciones resulta inválida, el resto sigue en vigor. Si en algún momento no hacemos cumplir una regla, podemos seguir haciéndola cumplir después. Podemos transferir este contrato a una empresa que se haga cargo del juego, siempre que tus derechos no se reduzcan; tú no puedes transferir tu cuenta ni este contrato. Estas condiciones y la política de privacidad constituyen el acuerdo completo entre tú y nosotros sobre el juego.",
        },
      ],
    },
  ],
};
