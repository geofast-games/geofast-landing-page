import type { DataDeletionContent } from "./types";

// Spanish. Informal "tu" throughout, as in the Spanish privacy policy and
// Terms; regionalisms are avoided. Opening question and exclamation marks as
// Spanish requires. The page is the "Solicitud de eliminacion de datos";
// both other documents link to it as the "pagina de eliminacion de datos".
// Terminology follows them: "cuenta", "dispositivo", "nombre de usuario",
// "progreso", "monedas virtuales y objetos", "base de datos activa" and
// "sistemas activos", "archivo", "suscripcion", "tienda" for the store; the
// game translates Battle Pass as "Pase de Batalla", so this text does too.
// The privacy policy is the "politica de privacidad", the Terms are the
// "condiciones del servicio", as they name themselves.
export const es: DataDeletionContent = {
  lang: "es",
  label: "Español",
  pageTitle: "Solicitud de eliminación de datos | Geofast: Battle of Nations",
  metaDescription:
    "Cómo eliminar tu cuenta y tus datos personales de Geofast: Battle of Nations, en el juego o por correo electrónico, qué se elimina, qué se conserva y cuánto tarda.",
  gameName: "Geofast: Battle of Nations",
  docName: "Solicitud de eliminación de datos",
  lastUpdated: "Última actualización: 25 de septiembre de 2026",
  sectionsLabel: "Secciones",
  languageLabel: "Idioma",
  contact: {
    line: "¿Tienes preguntas? Plantéalas en Discord. Para solicitudes sobre tus datos: escríbenos por correo.",
    discord: "Preguntar en Discord",
    back: "Volver a Geofast Games",
  },
  request: {
    title: "Solicitar la eliminación por correo electrónico",
    text: "Para cuando ya no puedes abrir el juego. El botón abre un correo dirigido a nosotros con la solicitud ya redactada; completa los datos de tu cuenta y envíalo. Si no tienes una aplicación de correo en este dispositivo, escribe a contact@geofastgames.com con los mismos datos.",
    button: "Enviar solicitud de eliminación",
    emailSubject: "Solicitud de eliminación de datos - Geofast: Battle of Nations",
    emailBody: `Hola, Geofast Games:

Quiero que se eliminen mi cuenta de Geofast: Battle of Nations y mis datos personales.

Mi cuenta:
- Nombre de usuario en el juego: [completar]
- Correo electrónico vinculado a la cuenta, si lo hay: [completar]
- Nación por la que juego: [completar]
- Dispositivo con el que juego: [completar]

Entiendo que la eliminación es permanente, que mi progreso, mis monedas y mis objetos se pierden, y que una suscripción al Pase de Batalla debe cancelarse por separado en mi tienda de aplicaciones.

Gracias.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Tu derecho a eliminar tus datos",
      blocks: [
        {
          type: "p",
          text: "Puedes hacer que se eliminen tu cuenta de *Geofast: Battle of Nations* y los datos personales vinculados a ella en cualquier momento, vivas donde vivas, sin dar ningún motivo. Hay dos formas: en el juego, que es inmediata, o por correo electrónico si ya no puedes abrir el juego.",
        },
        {
          type: "p",
          text: "Eliminar tu cuenta es la única forma de eliminación que ofrecemos: no eliminamos partes de una cuenta conservando el resto.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Antes de eliminar",
      blocks: [
        {
          type: "ul",
          items: [
            "**Cancela primero tu Pase de Batalla.** Una suscripción es un contrato con tu tienda de aplicaciones, y eliminar tu cuenta no la cancela. Cancélala en los ajustes de suscripciones de Google Play o de la App Store, o seguirá renovándose.",
            "**No se reembolsa nada.** Las monedas virtuales, los objetos y el tiempo de suscripción no utilizado terminan con la cuenta, como establecen nuestras [condiciones del servicio](/termsofservice).",
            "**No se puede deshacer.** No hay periodo de gracia ni copia de seguridad desde la que restaurar.",
            "**Se aplica a todos los dispositivos.** La cuenta desaparece de todos los dispositivos a los que estaba vinculada, no solo de aquel desde el que la eliminas.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Eliminar tu cuenta en el juego",
      blocks: [
        {
          type: "p",
          text: "Abre tu perfil, toca **Eliminar mi cuenta** y escribe tu nombre de usuario para confirmar. La cuenta se elimina al instante. La próxima vez que el juego se inicie en ese dispositivo, crea una cuenta nueva y vacía.",
        },
      ],
    },
    {
      id: "by-email",
      title: "O pídenoslo por correo electrónico",
      blocks: [
        {
          type: "p",
          text: "Si has desinstalado el juego o has perdido el dispositivo, escribe a [contact@geofastgames.com](mailto:contact@geofastgames.com), o usa el botón de abajo, indicando tu nombre de usuario en el juego y, si la tienes, la dirección de correo vinculada a tu cuenta. Escribe desde esa dirección: así sabemos que la solicitud viene del titular de la cuenta. Si tu cuenta no tiene correo electrónico, indícanos tu nombre de usuario y la nación por la que juegas, y confirmaremos a través del juego que la cuenta es tuya antes de eliminar nada.",
        },
        {
          type: "p",
          text: "Confirmamos que hemos recibido tu solicitud, eliminamos en un plazo de 30 días y volvemos a confirmar cuando está hecho. Si no podemos asociar tus datos a una cuenta, te pedimos más información antes de actuar; nunca eliminamos una cuenta a partir de una solicitud sin verificar.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Qué se elimina",
      blocks: [
        {
          type: "p",
          text: "Eliminar tu cuenta la borra junto con todo lo que se almacena en ella:",
        },
        {
          type: "ul",
          items: [
            "tu cuenta, tu nombre de usuario y los vínculos de dispositivo, correo electrónico, Google o Apple asociados a ella;",
            "tu progreso: clasificaciones, objetos, monedas virtuales, mejoras, logros, progreso de temporada e historial de batallas;",
            "tu lista de amigos y tu código de referido;",
            "tu token de notificaciones push.",
          ],
        },
        {
          type: "p",
          text: "Los registros técnicos que estaban vinculados a la cuenta, como los eventos de análisis, los mensajes de chat que siguen en nuestra base de datos activa y los registros de partida y del primer inicio descritos en la política de privacidad, se eliminan de nuestros sistemas activos en un plazo de 30 días.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Qué conservamos, y por qué",
      blocks: [
        {
          type: "ul",
          items: [
            "Los registros de compra que la legislación contable nos obliga a guardar, durante el plazo que fija esa ley.",
            "Las estadísticas que ya no te identifican, como el número de batallas jugadas un día determinado.",
            "Los registros que ya habían salido de la base de datos activa hacia nuestro archivo antes de la eliminación, como se describe en [cuánto tiempo conservamos los datos](/privacy#retention) en la política de privacidad.",
            "Los datos que las tiendas de aplicaciones, Google AdMob o Discord conservan según sus propias políticas. No los controlamos; para que se eliminen, contacta con ellos.",
          ],
        },
        {
          type: "p",
          text: "Los archivos locales de tu dispositivo son tuyos: al desinstalar el juego se eliminan.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Otras solicitudes sobre tus datos",
      blocks: [
        {
          type: "p",
          text: "También puedes pedir una copia de tus datos, hacer que se rectifiquen los datos incorrectos u oponerte a cómo los usamos. La misma dirección de correo atiende todas estas solicitudes, y la [política de privacidad](/privacy#rights) describe cada derecho. Respondemos en el plazo de un mes.",
        },
      ],
    },
  ],
};
