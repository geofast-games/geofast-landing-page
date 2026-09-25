import type { DataDeletionContent } from "./types";

// Indonesian. Formal "Anda" throughout, as in the Indonesian privacy policy
// and Terms. The page is the "Permintaan Penghapusan Data"; both other
// documents link to it as the "halaman penghapusan data". Terminology
// follows them: "akun", "perangkat", "nama pengguna", "kemajuan", "mata uang
// virtual dan item", "basis data aktif" and "sistem aktif" for the live
// database and live systems, "arsip", "langganan", "toko" for the store;
// "Battle Pass" stays untranslated, as in the game. The privacy policy is the
// "Kebijakan Privasi", the Terms are the "Ketentuan Layanan", as they name
// themselves.
export const id: DataDeletionContent = {
  lang: "id",
  label: "Bahasa Indonesia",
  pageTitle: "Permintaan Penghapusan Data | Geofast: Battle of Nations",
  metaDescription:
    "Cara menghapus akun dan data pribadi Anda di Geofast: Battle of Nations, di dalam gim atau melalui email, apa yang dihapus, apa yang disimpan, dan berapa lama prosesnya.",
  gameName: "Geofast: Battle of Nations",
  docName: "Permintaan Penghapusan Data",
  lastUpdated: "Terakhir diperbarui: 25 September 2026",
  sectionsLabel: "Bagian",
  languageLabel: "Bahasa",
  contact: {
    line: "Ada pertanyaan? Tanyakan di Discord. Permintaan terkait data Anda: kirimkan email kepada kami.",
    discord: "Tanya di Discord",
    back: "Kembali ke Geofast Games",
  },
  request: {
    title: "Minta penghapusan melalui email",
    text: "Untuk saat Anda tidak lagi dapat membuka gim. Tombol ini membuka email kepada kami dengan permintaan yang sudah ditulis; isi detail akun Anda dan kirimkan. Jika tidak ada aplikasi email di perangkat ini, kirimkan detail yang sama ke contact@geofastgames.com.",
    button: "Kirim permintaan penghapusan",
    emailSubject: "Permintaan Penghapusan Data - Geofast: Battle of Nations",
    emailBody: `Halo Geofast Games,

Saya ingin akun Geofast: Battle of Nations saya dan data pribadi saya dihapus.

Akun saya:
- Nama pengguna dalam gim: [isi]
- Email yang tertaut ke akun, jika ada: [isi]
- Negara yang saya bela: [isi]
- Perangkat yang digunakan untuk bermain: [isi]

Saya memahami bahwa penghapusan bersifat permanen, bahwa kemajuan, mata uang, dan item saya akan hilang, dan bahwa langganan Battle Pass harus dibatalkan secara terpisah di toko aplikasi saya.

Terima kasih.`,
  },
  sections: [
    {
      id: "your-right",
      title: "Hak Anda untuk menghapus data Anda",
      blocks: [
        {
          type: "p",
          text: "Anda dapat meminta akun *Geofast: Battle of Nations* Anda dan data pribadi yang tertaut padanya dihapus kapan saja, di mana pun Anda tinggal, tanpa memberikan alasan. Ada dua cara: di dalam gim, yang berlaku seketika, atau melalui email jika Anda tidak lagi dapat membuka gim.",
        },
        {
          type: "p",
          text: "Menghapus akun adalah satu-satunya bentuk penghapusan yang kami tawarkan: kami tidak menghapus sebagian akun sambil menyimpan sisanya.",
        },
      ],
    },
    {
      id: "before-you-delete",
      title: "Sebelum Anda menghapus",
      blocks: [
        {
          type: "ul",
          items: [
            "**Batalkan Battle Pass Anda terlebih dahulu.** Langganan adalah perjanjian dengan toko aplikasi Anda, dan menghapus akun tidak membatalkannya. Batalkan di pengaturan langganan Google Play atau App Store, atau langganan akan terus diperpanjang.",
            "**Tidak ada pengembalian dana.** Mata uang virtual, item, dan sisa waktu langganan yang belum terpakai berakhir bersama akun, sebagaimana diatur dalam [Ketentuan Layanan](/termsofservice) kami.",
            "**Tidak dapat dibatalkan.** Tidak ada masa tenggang dan tidak ada cadangan untuk memulihkan.",
            "**Berlaku untuk setiap perangkat.** Akun hilang dari setiap perangkat yang pernah ditautkan padanya, bukan hanya dari perangkat tempat Anda menghapusnya.",
          ],
        },
      ],
    },
    {
      id: "in-the-game",
      title: "Hapus akun Anda di dalam gim",
      blocks: [
        {
          type: "p",
          text: "Buka profil Anda, ketuk **Hapus akun saya**, dan ketik nama pengguna Anda untuk mengonfirmasi. Akun dihapus seketika. Saat gim berikutnya dimulai di perangkat itu, gim membuat akun baru yang kosong.",
        },
      ],
    },
    {
      id: "by-email",
      title: "Atau minta kami melalui email",
      blocks: [
        {
          type: "p",
          text: "Jika Anda telah mencopot pemasangan gim atau kehilangan perangkat, kirimkan email ke [contact@geofastgames.com](mailto:contact@geofastgames.com), atau gunakan tombol di bawah, dengan nama pengguna Anda dalam gim dan, jika ada, alamat email yang tertaut ke akun Anda. Kirim dari alamat tersebut: dengan begitu kami tahu permintaan datang dari pemilik akun. Jika akun Anda tidak memiliki email, beri tahu kami nama pengguna Anda dan negara yang Anda bela, dan kami akan mengonfirmasi melalui gim bahwa akun itu milik Anda sebelum menghapus apa pun.",
        },
        {
          type: "p",
          text: "Kami mengonfirmasi bahwa kami telah menerima permintaan Anda, menghapus dalam 30 hari, dan mengonfirmasi lagi setelah selesai. Jika kami tidak dapat mencocokkan detail Anda dengan sebuah akun, kami meminta informasi lebih lanjut sebelum bertindak; kami tidak pernah menghapus akun berdasarkan permintaan yang belum diverifikasi.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "Apa yang dihapus",
      blocks: [
        {
          type: "p",
          text: "Menghapus akun Anda menghilangkan akun tersebut dan semua yang tersimpan di dalamnya:",
        },
        {
          type: "ul",
          items: [
            "akun, nama pengguna, dan tautan perangkat, email, Google, atau Apple yang melekat padanya;",
            "kemajuan Anda: peringkat, item, mata uang virtual, peningkatan, pencapaian, kemajuan musim, dan riwayat pertempuran;",
            "daftar teman dan kode referensi Anda;",
            "token notifikasi push Anda.",
          ],
        },
        {
          type: "p",
          text: "Catatan teknis yang terkait dengan akun, seperti peristiwa analitik, pesan obrolan yang masih ada di basis data aktif kami, serta catatan pertandingan dan catatan peluncuran pertama yang diuraikan dalam Kebijakan Privasi, dihapus dari sistem aktif kami dalam 30 hari.",
        },
      ],
    },
    {
      id: "what-is-kept",
      title: "Apa yang kami simpan, dan mengapa",
      blocks: [
        {
          type: "ul",
          items: [
            "Catatan pembelian yang wajib kami simpan menurut hukum akuntansi, selama jangka waktu yang ditetapkan hukum tersebut.",
            "Statistik yang tidak lagi mengidentifikasi Anda, seperti jumlah pertempuran yang dimainkan pada hari tertentu.",
            "Catatan yang sudah keluar dari basis data aktif ke arsip kami sebelum penghapusan, seperti diuraikan di bagian [berapa lama kami menyimpan data](/privacy#retention) dalam Kebijakan Privasi.",
            "Data yang dipegang oleh toko aplikasi, Google AdMob, atau Discord berdasarkan kebijakan mereka sendiri. Kami tidak mengendalikannya; untuk menghapusnya, hubungi mereka.",
          ],
        },
        {
          type: "p",
          text: "Berkas lokal di perangkat Anda adalah milik Anda: mencopot pemasangan gim akan menghapusnya.",
        },
      ],
    },
    {
      id: "other-requests",
      title: "Permintaan lain terkait data Anda",
      blocks: [
        {
          type: "p",
          text: "Anda juga dapat meminta salinan data Anda, memperbaiki data yang keliru, atau mengajukan keberatan atas cara kami menggunakannya. Alamat email yang sama menangani semua permintaan ini, dan [Kebijakan Privasi](/privacy#rights) menjelaskan setiap hak tersebut. Kami menjawab dalam waktu satu bulan.",
        },
      ],
    },
  ],
};
