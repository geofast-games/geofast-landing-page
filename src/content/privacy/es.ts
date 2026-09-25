import type { PrivacyContent } from "./types";

// Spanish. Informal "tu" throughout, as in the game's Spanish translation
// (both es-ES and es-LA) and in the Spanish privacy notices of large consumer
// platforms; the two game variants differ only in a few words, and this text
// avoids those regionalisms. Legal vocabulary follows the official Spanish
// text of the RGPD: "responsable del tratamiento", "base juridica", "interes
// legitimo", "supresion", "limitacion del tratamiento", "autoridad de
// control", "clausulas contractuales tipo". Game terms follow the game:
// "batalla", "nacion", "chat", "monedas", "clasificaciones", "tienda",
// "temporada", "repeticion" for replay; the game translates Battle Pass as
// "Pase de Batalla", so the policy does too. Bans are "bloqueos".
export const es: PrivacyContent = {
  lang: "es",
  label: "Español",
  pageTitle: "Política de privacidad | Geofast: Battle of Nations",
  metaDescription:
    "Qué datos recoge Geofast: Battle of Nations, cómo se usan, con quién se comparten y cómo solicitar su supresión.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Política de privacidad",
  lastUpdated: "Última actualización: 25 de septiembre de 2026",
  sectionsLabel: "Secciones",
  languageLabel: "Idioma",
  legalBasisLabel: "Base jurídica:",
  contact: {
    line: "¿Tienes preguntas? Plantéalas en Discord. Para solicitudes sobre tus datos: escríbenos por correo.",
    discord: "Preguntar en Discord",
    back: "Volver a Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Quiénes somos",
      blocks: [
        {
          type: "p",
          text: "Geofast Games es un estudio de videojuegos independiente con sede en Bélgica. Desarrollamos *Geofast: Battle of Nations* y gestionamos este sitio web. Somos el responsable del tratamiento de los datos personales descritos en esta política: decidimos qué se recoge y con qué fin.",
        },
        {
          type: "p",
          text: "Puedes contactarnos en [contact@geofastgames.com](mailto:contact@geofastgames.com). Somos un estudio de dos personas y no hemos designado un delegado de protección de datos; en esa misma dirección atienden las personas responsables de tus datos.",
        },
        {
          type: "p",
          text: "Esta política se aplica al juego en iOS y Android y al sitio web geofastgames.com. No se aplica a Discord, la App Store, Google Play ni a otros servicios que uses junto con el juego; cada uno tiene su propia política, enlazada allí donde se menciona.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "De un vistazo",
      blocks: [
        {
          type: "table",
          head: ["Qué", "Para qué", "Cuánto tiempo"],
          rows: [
            [
              "Cuenta: un identificador del dispositivo, tu nombre de usuario y, si lo eliges, una dirección de correo electrónico con contraseña o un inicio de sesión con Google o Apple",
              "Para gestionar tu cuenta y permitirte jugar en línea",
              "Hasta que elimines tu cuenta; no eliminamos las cuentas inactivas",
            ],
            [
              "Juego: partidas, clasificaciones, objetos, confirmaciones de compra",
              "Para hacer funcionar el juego, las clasificaciones y tu inventario",
              "Hasta que elimines tu cuenta; las repeticiones de batalla 7 días, después se archivan",
            ],
            [
              "Mensajes de chat",
              "Para entregarlos y moderar los abusos",
              "Chat de batalla 15 días, después se elimina; el resto del chat 90 días, después se archiva",
            ],
            [
              "Dirección IP, identificador del dispositivo, modelo de teléfono",
              "Para detectar trampas y colusión y hacer cumplir los bloqueos",
              "Registros de partida 30 días y registro del primer inicio 90 días, después se archivan; el identificador del dispositivo permanece vinculado a tu cuenta; un registro de bloqueo permanece hasta que levantemos el bloqueo",
            ],
            [
              "Token de notificaciones push",
              "Para enviarte notificaciones que puedes desactivar",
              "Hasta que el token deje de funcionar (por ejemplo, tras desinstalar el juego) o elimines tu cuenta",
            ],
            [
              "Eventos de análisis sobre cómo juegas",
              "Para entender los patrones de juego y corregir problemas",
              "400 días, después se archivan",
            ],
            [
              "Identificador de publicidad, leído por el software de Google AdMob",
              "Para cargar y mostrar anuncios con recompensa que puedes elegir ver",
              "Se envía a Google al iniciar el juego y al cargar un anuncio; no lo almacenamos; se aplica la política de AdMob",
            ],
          ],
        },
        { type: "lead", text: "Cuatro cosas que conviene saber antes de seguir leyendo" },
        {
          type: "ul",
          items: [
            "El chat no es privado. Los mensajes se conservan hasta 15 días (chat de batalla) o 90 días (resto del chat) para que los moderadores puedan revisar las denuncias; cada mensaje pasa por un filtro automático y, cuando activemos esa función, los mensajes también serán clasificados por el servicio Gemini de Google.",
            "Registramos tu dirección IP y un identificador del dispositivo cuando juegas, para detectar trampas y hacer que los bloqueos sean efectivos.",
            "Nuestros servidores están en Fráncfort, Alemania. Algunos proveedores que usamos (Google, Apple) tratan datos fuera de la Unión Europea.",
            "Los registros que caducan en nuestra base de datos activa (el chat distinto del chat de batalla, los registros de partida, los datos de análisis y otros) se archivan en Fráncfort en lugar de destruirse. Consulta «Cuánto tiempo conservamos los datos».",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Tu cuenta",
      blocks: [
        {
          type: "p",
          text: "Cuando juegas en línea por primera vez, creamos una cuenta para ti y la vinculamos a un identificador generado en tu dispositivo. No hace falta nada más para jugar, y nunca tienes que darnos tu nombre.",
        },
        {
          type: "p",
          text: "Eliges un nombre de usuario, que los demás jugadores pueden ver. Más allá de eso, almacenamos lo que el juego necesita para funcionar: tu progreso, tus ajustes y tus amigos, y la versión del juego que usas.",
        },
        {
          type: "p",
          text: "Si quieres conservar tu progreso en varios dispositivos, puedes añadir una dirección de correo electrónico con contraseña o iniciar sesión con Google o Apple. Las contraseñas se almacenan cifradas con hash, lo que significa que no podemos leerlas. De Google o Apple recibimos solo lo necesario para vincular la cuenta, y usamos tu dirección de correo únicamente para proteger la cuenta y restablecer la contraseña.",
        },
        {
          type: "p",
          text: "El identificador del dispositivo es necesario para jugar en línea. Todo lo demás es opcional.",
        },
        { type: "basis", text: "la ejecución de nuestro contrato contigo (la prestación del juego)." },
      ],
    },
    {
      id: "gameplay",
      title: "Juego, progreso y compras",
      blocks: [
        {
          type: "p",
          text: "Para hacer funcionar las batallas en línea, las clasificaciones y tu inventario, almacenamos tu progreso en el juego: resultados de partidas, posiciones en la clasificación, los objetos y monedas que posees y tu progreso en eventos y temporadas. Tus batallas recientes se conservan como historial; las repeticiones de batalla salen de la base de datos activa a los 7 días y se archivan.",
        },
        {
          type: "p",
          text: "Los pagos los gestionan íntegramente Google Play o la App Store. Nunca vemos los datos de tu tarjeta ni de tu banco. La tienda nos comunica qué has comprado, y almacenamos esa confirmación y, en el caso del Pase de Batalla, el estado de la suscripción, para poder entregar los objetos, restaurar las compras y ayudarte con el soporte.",
        },
        {
          type: "basis",
          text: "la ejecución de nuestro contrato contigo. Los registros de compra que debemos conservar a efectos contables se conservan en virtud de nuestras obligaciones legales.",
        },
      ],
    },
    {
      id: "chat",
      title: "Chat y moderación",
      blocks: [
        {
          type: "p",
          text: "El juego tiene chat entre jugadores. Los mensajes se entregan a los demás jugadores de ese chat y se almacenan en nuestros servidores: el chat dentro de una batalla durante 15 días, tras los cuales se elimina; el resto del chat durante 90 días, tras los cuales se archiva (consulta «Cuánto tiempo conservamos los datos»). Los conservamos para que los moderadores puedan investigar las denuncias de abuso o trampas. Cada consulta de un moderador queda registrada.",
        },
        {
          type: "p",
          text: "La moderación funciona en tres pasos. Primero, cada mensaje pasa por un filtro automático en nuestros servidores (límites de frecuencia, una lista de palabras y patrones de discurso de odio) antes de entregarse; un mensaje bloqueado nunca se envía. Segundo, cuando activemos esa función, los mensajes entregados también serán clasificados por el servicio Gemini de Google, que recibe el mensaje y tus mensajes recientes en ese chat como contexto. Gemini comprueba los nombres de usuario cuando los estableces o los cambias. Un mensaje que Gemini clasifica como abusivo se elimina y se registra una infracción. Tercero, los moderadores humanos actúan sobre las denuncias.",
        },
        {
          type: "p",
          text: "Las infracciones dan lugar a advertencias y a silenciamientos temporales del chat, según se establece en nuestras [condiciones del servicio](/termsofservice). El registro de tus infracciones y silenciamientos permanece en tu cuenta para que pueda reconocerse la reincidencia. Estos pasos automáticos afectan únicamente a tu capacidad de chatear. Si crees que una decisión fue errónea, escríbenos por correo o pregunta en Discord y una persona lo revisará.",
        },
        {
          type: "p",
          text: "No compartas datos personales en el chat. Los demás jugadores pueden ver lo que escribes.",
        },
        {
          type: "basis",
          text: "nuestro interés legítimo en mantener el juego seguro y justo para todos los que lo juegan.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Juego limpio y seguridad",
      blocks: [
        {
          type: "p",
          text: "Las trampas arruinan un juego competitivo para todos, así que conservamos una pequeña cantidad de datos técnicos para detectarlas y hacer que los bloqueos sean efectivos:",
        },
        {
          type: "ul",
          items: [
            "Cuando inicias el juego por primera vez, registramos el identificador de tu dispositivo, el modelo de teléfono, la plataforma y tu dirección IP, junto con los pasos del tutorial que completas. Este registro sale de la base de datos activa a los 90 días y se archiva.",
            "De cada partida en línea registramos qué cuentas participaron, con su identificador del dispositivo y su dirección IP. Una comprobación automática revisa periódicamente los registros recientes en busca de parejas de jugadores que coinciden en las mismas partidas con mucha más frecuencia de la que permite el azar. Los registros de partida salen de la base de datos activa a los 30 días y se archivan.",
            "Las trampas detectadas conllevan sanciones, hasta el bloqueo de la cuenta, según se establece en nuestras [condiciones del servicio](/termsofservice). El historial de sanciones permanece en tu cuenta, y puedes pedir que una persona revise cualquier sanción.",
            "Un bloqueo de dispositivo también impide crear cuentas nuevas desde ese dispositivo. Los registros de bloqueo no tienen fecha de fin; los eliminamos cuando una revisión demuestra que el bloqueo fue erróneo.",
          ],
        },
        {
          type: "p",
          text: "Las acciones de batalla en sí se validan en nuestros servidores mientras ocurren, lo que no requiere más datos que los de la propia partida. No usamos tu dirección IP para determinar tu ubicación. Cuando te unes por primera vez, el juego te sugiere una nación a partir de la configuración de idioma y región de tu dispositivo; esa lectura se hace en el dispositivo, y puedes elegir cualquier otra nación en su lugar.",
        },
        {
          type: "basis",
          text: "nuestro interés legítimo en prevenir las trampas, el fraude y los abusos, y en mantener el servicio seguro.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notificaciones push",
      blocks: [
        {
          type: "p",
          text: "Si permites las notificaciones, tu dispositivo nos proporciona un token push, que almacenamos y usamos para informarte de eventos del juego: lo que ocurre con tu cuenta, tus amigos y tu nación, nuevos eventos y temporadas, y un recordatorio si llevas un tiempo sin jugar.",
        },
        {
          type: "p",
          text: "Las notificaciones se entregan a través de Firebase Cloud Messaging (Google) en Android y del Apple Push Notification service en iOS. Puedes desactivarlas en cualquier momento en los ajustes de tu dispositivo, lo que impide que se muestren; el token en sí permanece hasta que deja de ser válido (por ejemplo, cuando desinstalas el juego) o eliminas tu cuenta. Las notificaciones entregadas se conservan por nuestra parte durante 30 días y después se archivan.",
        },
        {
          type: "basis",
          text: "nuestro interés legítimo en mantenerte informado sobre tu cuenta y el juego al que juegas, con una desactivación que solo requiere un toque.",
        },
      ],
    },
    {
      id: "ads",
      title: "Anuncios con recompensa opcionales",
      blocks: [
        {
          type: "p",
          text: "El juego no tiene anuncios forzados: nada interrumpe una batalla ni un menú. La tienda ofrece anuncios con recompensa que solo se reproducen cuando los tocas, a cambio de moneda del juego.",
        },
        {
          type: "p",
          text: "Los anuncios los sirve Google AdMob. Su software forma parte del juego, se inicia con él y carga un anuncio en segundo plano para que haya uno listo si lo tocas. En ese momento, veas o no algún anuncio, AdMob recibe tu identificador de publicidad y una ubicación aproximada derivada de tu dirección IP; si ves uno, también cómo has interactuado con él. En iOS el sistema te pide permiso en el primer inicio antes de que el identificador de publicidad se use para el seguimiento; en Android puedes restablecer o eliminar el identificador de publicidad en los ajustes de tu dispositivo. Google describe qué hace con estos datos en su [política de privacidad](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "tu consentimiento, otorgado a través de los permisos y los ajustes de publicidad de tu dispositivo, donde puedes retirarlo en cualquier momento.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Análisis",
      blocks: [
        {
          type: "p",
          text: "Para entender cómo se juega y detectar problemas, el juego envía eventos a nuestros propios servidores: inicio y fin de sesión, batallas jugadas y terminadas, progreso en el tutorial, compras en la tienda, notificaciones abiertas, errores y, en Android, la referencia de la tienda que te trajo al juego. Cada evento incluye tu identificador de cuenta, el identificador del dispositivo, la plataforma, el modelo de teléfono y la versión del juego. No usamos Google Analytics, Firebase Analytics ni ningún otro servicio de análisis de terceros. Los informes de fallos nos llegan a través de Google Play y la App Store conforme a sus propias políticas.",
        },
        {
          type: "p",
          text: "Los eventos de análisis se conservan durante 400 días. Las estadísticas derivadas de ellos no contienen datos personales y se conservan indefinidamente.",
        },
        {
          type: "basis",
          text: "nuestro interés legítimo en mejorar el juego y mantenerlo funcionando correctamente.",
        },
      ],
    },
    {
      id: "support",
      title: "Soporte y comunidad",
      blocks: [
        {
          type: "p",
          text: "Si nos escribes por correo, conservamos la conversación durante el tiempo necesario para atenderla.",
        },
        {
          type: "p",
          text: "Nuestro servidor de Discord funciona en Discord conforme a la [política de privacidad de Discord](https://discord.com/privacy). Los moderadores de allí pueden consultar el historial del chat del juego para atender las denuncias, como se describe en «Chat y moderación».",
        },
        {
          type: "basis",
          text: "la ejecución de nuestro contrato contigo (soporte) y nuestro interés legítimo en mantener una comunidad en torno al juego.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Con quién compartimos datos",
      blocks: [
        {
          type: "p",
          text: "No vendemos datos personales ni los compartimos con intermediarios de datos. Las empresas siguientes tratan datos por encargo nuestro o los reciben por el modo en que funciona el juego:",
        },
        {
          type: "table",
          head: ["Proveedor", "Para qué", "Dónde"],
          rows: [
            ["DigitalOcean", "Alojamiento de nuestros servidores de juego y de la base de datos", "Fráncfort, Alemania"],
            [
              "Gcore",
              "Red de distribución de contenidos que transporta parte del tráfico del juego hasta nuestros servidores; ve tu dirección IP en tránsito",
              "Servidores perimetrales en todo el mundo; la empresa tiene su sede en Luxemburgo",
            ],
            [
              "Google Cloud Storage",
              "Archivo de registros caducados (consulta «Cuánto tiempo conservamos los datos»)",
              "Fráncfort, Alemania",
            ],
            [
              "Google (Gemini API)",
              "Clasificación de nombres de usuario y, cuando esté activada, de mensajes de chat",
              "Todo el mundo: Google no se compromete a una región para esta API",
            ],
            ["Google AdMob", "Anuncios con recompensa que eliges ver", "Estados Unidos"],
            ["Google Firebase Cloud Messaging", "Entrega de notificaciones push en Android", "Estados Unidos"],
            ["Apple Push Notification service", "Entrega de notificaciones push en iOS", "Estados Unidos"],
            ["Zoho Mail", "Nuestro correo electrónico, incluidos los correos de restablecimiento de contraseña", "Unión Europea"],
            [
              "Google Play y la App Store",
              "Inicio de sesión, pagos, suscripciones e informes de fallos",
              "Conforme a sus propias políticas",
            ],
          ],
        },
        {
          type: "p",
          text: "Cada uno de estos proveedores está obligado por contrato a proteger tus datos al menos tan bien como describe esta política y a usarlos solo para el fin indicado. Los demás jugadores ven tu nombre de usuario, tu perfil en el juego y lo que escribes en el chat. Solo comunicamos datos a las autoridades cuando la ley lo exige.",
        },
      ],
    },
    {
      id: "storage",
      title: "Dónde se almacenan tus datos",
      blocks: [
        {
          type: "p",
          text: "Nuestros servidores, la base de datos y las copias de seguridad están alojados en Fráncfort, Alemania, y nuestro archivo de registros caducados está en un bucket de Google Cloud Storage en la misma ciudad. Tus datos permanecen en la Unión Europea salvo cuando un proveedor de los indicados arriba los trata en Estados Unidos o, en el caso de la Gemini API, allí donde Google la ejecute. Para esas transferencias nos amparamos en las cláusulas contractuales tipo de la Comisión Europea y, cuando el proveedor está certificado, en el Marco de Privacidad de Datos UE-EE. UU.",
        },
      ],
    },
    {
      id: "retention",
      title: "Cuánto tiempo conservamos los datos",
      blocks: [
        {
          type: "table",
          head: ["Datos", "Conservación"],
          rows: [
            ["Cuenta, progreso, inventario, amigos, confirmaciones de compra", "Hasta que elimines tu cuenta"],
            [
              "Historial de infracciones y silenciamientos del chat, historial de sanciones por colusión",
              "Toda la vida de la cuenta (los silenciamientos en sí son temporales)",
            ],
            ["Bloqueos de dispositivo", "Hasta que los levantemos"],
            ["Eventos de análisis", "400 días, después se archivan"],
            ["Chat distinto del chat de batalla, incluidos los mensajes directos", "90 días, después se archiva"],
            [
              "Historial de transacciones de monedas y XP",
              "90 días (historial de XP: 90 días desde tu última actividad), después se archiva",
            ],
            ["Registro del primer inicio con dirección IP y modelo de teléfono", "90 días, después se archiva"],
            [
              "Registros de participantes por partida con dirección IP e identificador del dispositivo",
              "30 días, después se archivan",
            ],
            ["Notificaciones entregadas, progreso diario", "30 días, después se archivan"],
            ["Chat de batalla", "15 días, después se elimina"],
            ["Repeticiones de batalla", "7 días, después se archivan"],
            ["Eventos de navegación por la tienda", "3 días, después se eliminan"],
          ],
        },
        {
          type: "p",
          text: "Las filas marcadas con «después se archiva» se copian a un archivo en Fráncfort antes de salir de la base de datos activa. Usamos el archivo para estadísticas y para investigar abusos pasados; el acceso está limitado a los dos desarrolladores, y nada de su contenido es accesible desde el juego. Conservamos los registros archivados mientras sean necesarios para esos fines y los eliminamos cuando dejan de serlo.",
        },
        {
          type: "p",
          text: "Cuando eliminas tu cuenta, eliminamos tus datos personales de los sistemas activos en un plazo de 30 días. Conservamos los registros que la ley nos obliga a guardar, como los registros de compra a efectos contables, y las estadísticas que ya no te identifican.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Nuestras bases jurídicas en un solo lugar",
      blocks: [
        {
          type: "p",
          text: "Según el RGPD, necesitamos una base jurídica para cada cosa que hacemos con tus datos. Las nuestras son:",
        },
        {
          type: "ul",
          items: [
            "**Contrato**: gestionar tu cuenta, el juego, tus compras y el soporte. Sin estos datos no hay juego al que jugar.",
            "**Interés legítimo**: prevenir las trampas y los abusos, moderar el chat, mantener el servicio seguro, entender cómo se juega e informarte sobre tu cuenta. Nuestro interés es un juego justo, seguro y que funcione; mantenemos los datos al mínimo y durante poco tiempo, y puedes oponerte en cualquier momento.",
            "**Consentimiento**: la publicidad personalizada en los anuncios con recompensa, otorgado a través de los ajustes de tu dispositivo y revocable allí mismo.",
            "**Obligación legal**: conservar los registros contables y responder a las solicitudes legítimas de las autoridades.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Tus derechos",
      blocks: [
        { type: "p", text: "Tienes derecho a:" },
        {
          type: "ul",
          items: [
            "**Acceder** a los datos personales que tenemos sobre ti y obtener una copia.",
            "**Rectificar** los datos que sean inexactos.",
            "**Suprimir** tu cuenta y tus datos.",
            "**Recibir** tus datos en un formato portable y legible por máquina.",
            "**Oponerte** al tratamiento basado en nuestros intereses legítimos, y **limitar** el tratamiento mientras lo examinamos.",
            "**Retirar el consentimiento** para la publicidad en cualquier momento en los ajustes de tu dispositivo, y desactivar las notificaciones del mismo modo.",
          ],
        },
        {
          type: "p",
          text: "Para ejercer un derecho, escribe a [contact@geofastgames.com](mailto:contact@geofastgames.com) desde la dirección vinculada a tu cuenta o, si tu cuenta no tiene correo electrónico, indícanos tu nombre de usuario y lo verificaremos desde dentro del juego. Las solicitudes de supresión también pueden iniciarse desde nuestra [página de eliminación de datos](/datadeletion). Respondemos en el plazo de un mes.",
        },
        {
          type: "p",
          text: "Si crees que tratamos tus datos de forma ilícita, puedes presentar una reclamación ante la Autoridad de Protección de Datos belga (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Bruselas, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), o ante la autoridad del país en el que vives.",
        },
      ],
    },
    {
      id: "children",
      title: "Menores",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* no está dirigido a menores de 13 años, y no recogemos a sabiendas datos personales de ellos. En Bélgica, 13 años es la edad a partir de la cual puedes dar por ti mismo tu consentimiento a servicios en línea. El juego tiene en cada tienda una clasificación por edad que refleja su chat en línea y sus compras opcionales; los padres pueden usar el control parental de Google Play y de la App Store para restringir las compras y las aplicaciones que un menor puede instalar.",
        },
        {
          type: "p",
          text: "Si crees que un menor de 13 años tiene una cuenta, escríbenos por correo y la eliminaremos.",
        },
      ],
    },
    {
      id: "security",
      title: "Seguridad",
      blocks: [
        {
          type: "p",
          text: "Todo el tráfico entre el juego, este sitio web y nuestros servidores está cifrado (TLS). Las contraseñas se almacenan con hash. La base de datos no es accesible desde internet. El acceso a los servidores y a los datos está limitado a los dos desarrolladores; los moderadores ven el historial del chat solo a través de una herramienta que registra cada consulta. Ningún sistema es perfectamente seguro; si alguna vez tenemos conocimiento de una violación que afecte a tus datos, te lo comunicaremos a ti y a la autoridad como exige la ley.",
        },
      ],
    },
    {
      id: "website",
      title: "Este sitio web",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com no instala cookies ni usa scripts de seguimiento o de análisis. Tres cosas salen de tu navegador cuando lo visitas: la fuente de la página se carga desde Google Fonts, por lo que Google ve tu dirección IP; el número de miembros de Discord se obtiene de la API pública de Discord; y las estadísticas en directo proceden de nuestro propio servidor. Los enlaces a las tiendas de aplicaciones llevan una etiqueta de campaña para que podamos ver que una descarga procede de este sitio, lo que identifica al sitio, no a ti.",
        },
        {
          type: "p",
          text: "Cuando nos envías una sugerencia, un informe de error, un aviso sobre una traducción o una denuncia de un jugador a través de un formulario de este sitio, almacenamos lo que has escrito, las capturas de pantalla que hayas adjuntado, la hora, el idioma de tu navegador y tu dirección IP en forma de hash en nuestro propio servidor en la UE. Los usamos para leer tu mensaje y darle seguimiento, y para limitar el abuso de los formularios. Tu nombre de usuario y tu dirección de correo electrónico son opcionales; indícalos solo si quieres que podamos responderte. Los envíos de los formularios se eliminan a los doce meses.",
        },
      ],
    },
    {
      id: "changes",
      title: "Cambios en esta política",
      blocks: [
        {
          type: "p",
          text: "Cuando cambiamos la forma en que tratamos los datos, actualizamos esta página y su fecha, y en el caso de cambios significativos te lo comunicamos en el juego.",
        },
      ],
    },
  ],
};
