import type { PrivacyContent } from "./types";

// Indonesian. Formal "Anda" throughout, which is both the dominant register
// of the game's Indonesian translation and the norm for Indonesian legal
// text. Legal vocabulary follows the terms used in Indonesian GDPR notices,
// which the UU PDP shares: "pengendali data", "petugas perlindungan data",
// "dasar hukum", "kepentingan yang sah", "pelaksanaan perjanjian",
// "persetujuan", "kewajiban hukum", "otoritas pengawas", "klausul kontrak
// standar", and the rights of "akses", "perbaikan", "penghapusan",
// "pembatasan pemrosesan", "portabilitas data", "keberatan". Game terms
// follow the game: "pertempuran", "negara" for nation, "obrolan" for chat,
// "koin", "papan peringkat", "toko", "musim", "tayangan ulang" for replay;
// "Battle Pass" stays untranslated, as in the game. Mutes are "pembisuan",
// bans "pemblokiran".
export const id: PrivacyContent = {
  lang: "id",
  label: "Bahasa Indonesia",
  pageTitle: "Kebijakan Privasi | Geofast: Battle of Nations",
  metaDescription:
    "Data apa yang dikumpulkan Geofast: Battle of Nations, bagaimana data itu digunakan, dengan siapa dibagikan, dan cara meminta penghapusan.",
  gameName: "Geofast: Battle of Nations",
  policyName: "Kebijakan Privasi",
  lastUpdated: "Terakhir diperbarui: 25 September 2026",
  sectionsLabel: "Bagian",
  languageLabel: "Bahasa",
  legalBasisLabel: "Dasar hukum:",
  contact: {
    line: "Ada pertanyaan? Tanyakan di Discord. Permintaan terkait data Anda: kirimkan email kepada kami.",
    discord: "Tanya di Discord",
    back: "Kembali ke Geofast Games",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Siapa kami",
      blocks: [
        {
          type: "p",
          text: "Geofast Games adalah studio gim independen yang berbasis di Belgia. Kami membuat *Geofast: Battle of Nations* dan mengelola situs web ini. Kami adalah pengendali data untuk data pribadi yang diuraikan dalam kebijakan ini: kami yang menentukan apa yang dikumpulkan dan untuk apa.",
        },
        {
          type: "p",
          text: "Anda dapat menghubungi kami di [contact@geofastgames.com](mailto:contact@geofastgames.com). Kami adalah studio beranggotakan dua orang dan belum menunjuk petugas perlindungan data; alamat yang sama menjangkau orang-orang yang bertanggung jawab atas data Anda.",
        },
        {
          type: "p",
          text: "Kebijakan ini mencakup gim di iOS dan Android serta situs web geofastgames.com. Kebijakan ini tidak mencakup Discord, App Store, Google Play, atau layanan lain yang Anda gunakan bersama gim; masing-masing memiliki kebijakan sendiri, yang tautannya diberikan di tempat layanan itu disebut.",
        },
      ],
    },
    {
      id: "at-a-glance",
      title: "Sekilas",
      blocks: [
        {
          type: "table",
          head: ["Apa", "Mengapa", "Berapa lama"],
          rows: [
            [
              "Akun: pengenal perangkat, nama pengguna Anda, dan, jika Anda memilihnya, alamat email dengan kata sandi atau masuk dengan Google atau Apple",
              "Untuk menjalankan akun Anda dan memungkinkan Anda bermain daring",
              "Sampai Anda menghapus akun; kami tidak menghapus akun yang tidak aktif",
            ],
            [
              "Permainan: pertandingan, peringkat, item, konfirmasi pembelian",
              "Untuk menjalankan gim, papan peringkat, dan inventaris Anda",
              "Sampai Anda menghapus akun; tayangan ulang pertempuran 7 hari, lalu diarsipkan",
            ],
            [
              "Pesan obrolan",
              "Untuk menyampaikannya dan memoderasi penyalahgunaan",
              "Obrolan pertempuran 15 hari, lalu dihapus; obrolan lainnya 90 hari, lalu diarsipkan",
            ],
            [
              "Alamat IP, pengenal perangkat, model ponsel",
              "Untuk mendeteksi kecurangan dan persekongkolan serta menegakkan pemblokiran",
              "Catatan pertandingan 30 hari dan catatan peluncuran pertama 90 hari, lalu diarsipkan; pengenal perangkat tetap melekat pada akun Anda; catatan pemblokiran tetap ada sampai kami mencabut pemblokiran",
            ],
            [
              "Token notifikasi push",
              "Untuk mengirim notifikasi yang dapat Anda matikan",
              "Sampai token berhenti berfungsi (misalnya setelah Anda mencopot pemasangan) atau Anda menghapus akun",
            ],
            [
              "Peristiwa analitik tentang cara Anda bermain",
              "Untuk memahami pola permainan dan memperbaiki masalah",
              "400 hari, lalu diarsipkan",
            ],
            [
              "Pengenal iklan, dibaca oleh perangkat lunak Google AdMob",
              "Untuk memuat dan menampilkan iklan berhadiah yang dapat Anda pilih untuk ditonton",
              "Dikirim ke Google saat gim dimulai dan saat iklan dimuat; tidak kami simpan; kebijakan AdMob yang berlaku",
            ],
          ],
        },
        { type: "lead", text: "Empat hal yang perlu diketahui sebelum Anda membaca lebih lanjut" },
        {
          type: "ul",
          items: [
            "Obrolan tidak bersifat privat. Pesan disimpan hingga 15 hari (obrolan pertempuran) atau 90 hari (obrolan lainnya) agar moderator dapat meninjau laporan; setiap pesan melewati filter otomatis, dan ketika kami mengaktifkannya, pesan juga diklasifikasikan oleh layanan Gemini dari Google.",
            "Kami mencatat alamat IP Anda dan pengenal perangkat saat Anda bermain, untuk menangkap kecurangan dan membuat pemblokiran tetap berlaku.",
            "Server kami berada di Frankfurt, Jerman. Beberapa penyedia yang kami gunakan (Google, Apple) memproses data di luar Uni Eropa.",
            "Catatan yang kedaluwarsa dari basis data aktif kami (obrolan selain obrolan pertempuran, catatan pertandingan, analitik, dan lainnya) diarsipkan di Frankfurt, bukan dihancurkan. Lihat “Berapa lama kami menyimpan data”.",
          ],
        },
      ],
    },
    {
      id: "account",
      title: "Akun Anda",
      blocks: [
        {
          type: "p",
          text: "Saat Anda pertama kali bermain daring, kami membuat akun untuk Anda dan menautkannya ke pengenal yang dibuat di perangkat Anda. Tidak ada hal lain yang diperlukan untuk bermain, dan Anda tidak pernah harus memberikan nama Anda kepada kami.",
        },
        {
          type: "p",
          text: "Anda memilih nama pengguna, yang dapat dilihat pemain lain. Selain itu, kami menyimpan apa yang dibutuhkan gim agar berfungsi untuk Anda: kemajuan Anda, pengaturan dan teman Anda, serta versi gim yang Anda gunakan.",
        },
        {
          type: "p",
          text: "Jika Anda ingin mempertahankan kemajuan di beberapa perangkat, Anda dapat menambahkan alamat email dengan kata sandi atau masuk dengan Google atau Apple. Kata sandi disimpan dalam bentuk hash, yang berarti kami tidak dapat membacanya. Dari Google atau Apple, kami hanya menerima apa yang diperlukan untuk menautkan akun, dan kami menggunakan alamat email Anda hanya untuk mengamankan akun dan mengatur ulang kata sandi.",
        },
        {
          type: "p",
          text: "Pengenal perangkat diperlukan untuk bermain daring. Semua yang lain bersifat opsional.",
        },
        { type: "basis", text: "pelaksanaan perjanjian kami dengan Anda (penyediaan gim)." },
      ],
    },
    {
      id: "gameplay",
      title: "Permainan, kemajuan, dan pembelian",
      blocks: [
        {
          type: "p",
          text: "Untuk menjalankan pertempuran daring, papan peringkat, dan inventaris Anda, kami menyimpan kemajuan permainan Anda: hasil pertandingan, peringkat, item dan mata uang yang Anda miliki, serta kemajuan Anda dalam acara dan musim. Pertempuran terbaru Anda disimpan sebagai riwayat; tayangan ulang pertempuran keluar dari basis data aktif setelah 7 hari dan diarsipkan.",
        },
        {
          type: "p",
          text: "Pembayaran ditangani sepenuhnya oleh Google Play atau App Store. Kami tidak pernah melihat data kartu atau rekening bank Anda. Toko memberi tahu kami apa yang Anda beli, dan kami menyimpan konfirmasi itu serta, untuk Battle Pass, status langganan, agar kami dapat mengirimkan item, memulihkan pembelian, dan membantu dalam dukungan.",
        },
        {
          type: "basis",
          text: "pelaksanaan perjanjian kami dengan Anda. Catatan pembelian yang harus kami simpan untuk pembukuan disimpan berdasarkan kewajiban hukum kami.",
        },
      ],
    },
    {
      id: "chat",
      title: "Obrolan dan moderasi",
      blocks: [
        {
          type: "p",
          text: "Gim ini memiliki obrolan antarpemain. Pesan disampaikan kepada pemain lain di obrolan tersebut dan disimpan di server kami: obrolan di dalam pertempuran selama 15 hari, setelah itu dihapus; semua obrolan lainnya selama 90 hari, setelah itu diarsipkan (lihat “Berapa lama kami menyimpan data”). Kami menyimpannya agar moderator dapat menyelidiki laporan penyalahgunaan atau kecurangan. Setiap pencarian oleh moderator dicatat.",
        },
        {
          type: "p",
          text: "Moderasi bekerja dalam tiga langkah. Pertama, setiap pesan melewati filter otomatis di server kami (batas frekuensi, daftar kata, dan pola ujaran kebencian) sebelum disampaikan; pesan yang diblokir tidak pernah dikirim. Kedua, ketika kami mengaktifkannya, pesan yang telah disampaikan juga diklasifikasikan oleh layanan Gemini dari Google, yang menerima pesan tersebut dan pesan-pesan terbaru Anda di obrolan itu sebagai konteks. Nama pengguna diperiksa oleh Gemini saat Anda menetapkan atau mengubahnya. Pesan yang diklasifikasikan Gemini sebagai kasar dihapus dan pelanggaran dicatat. Ketiga, moderator manusia menindaklanjuti laporan.",
        },
        {
          type: "p",
          text: "Pelanggaran berujung pada peringatan dan pembisuan obrolan sementara, sebagaimana diatur dalam [Ketentuan Layanan](/termsofservice) kami. Catatan pelanggaran dan pembisuan Anda tetap ada di akun Anda agar perilaku yang berulang dapat dikenali. Langkah-langkah otomatis ini hanya memengaruhi kemampuan Anda untuk mengobrol. Jika Anda merasa suatu keputusan keliru, kirimkan email kepada kami atau tanyakan di Discord dan seseorang akan memeriksanya.",
        },
        {
          type: "p",
          text: "Jangan membagikan data pribadi di obrolan. Pemain lain dapat melihat apa yang Anda tulis.",
        },
        {
          type: "basis",
          text: "kepentingan kami yang sah untuk menjaga gim tetap aman dan adil bagi semua yang memainkannya.",
        },
      ],
    },
    {
      id: "fair-play",
      title: "Permainan adil dan keamanan",
      blocks: [
        {
          type: "p",
          text: "Kecurangan dalam gim kompetitif merusaknya bagi semua orang, jadi kami menyimpan sedikit data teknis untuk mendeteksinya dan membuat pemblokiran tetap berlaku:",
        },
        {
          type: "ul",
          items: [
            "Saat Anda pertama kali meluncurkan gim, kami mencatat pengenal perangkat, model ponsel, platform, dan alamat IP Anda, bersama langkah-langkah tutorial yang Anda selesaikan. Catatan ini keluar dari basis data aktif setelah 90 hari dan diarsipkan.",
            "Untuk setiap pertandingan daring, kami mencatat akun mana yang ikut serta, beserta pengenal perangkat dan alamat IP-nya. Pemeriksaan otomatis secara berkala menelusuri catatan terbaru untuk mencari pasangan pemain yang berada dalam pertandingan yang sama jauh lebih sering daripada yang dimungkinkan kebetulan. Catatan pertandingan keluar dari basis data aktif setelah 30 hari dan diarsipkan.",
            "Kecurangan yang terdeteksi berujung pada sanksi, hingga pemblokiran, sebagaimana diatur dalam [Ketentuan Layanan](/termsofservice) kami. Riwayat sanksi tetap ada di akun Anda, dan Anda dapat meminta seseorang meninjau sanksi apa pun.",
            "Pemblokiran perangkat juga memblokir akun baru dari perangkat tersebut. Catatan pemblokiran tidak memiliki tanggal berakhir; kami menghapusnya ketika peninjauan menunjukkan pemblokiran itu keliru.",
          ],
        },
        {
          type: "p",
          text: "Tindakan pertempuran itu sendiri divalidasi di server kami saat terjadi, yang tidak membutuhkan data apa pun di luar pertandingan itu sendiri. Kami tidak menggunakan alamat IP Anda untuk menentukan lokasi Anda. Saat Anda pertama kali bergabung, gim menyarankan sebuah negara berdasarkan pengaturan bahasa dan wilayah perangkat Anda; pembacaan itu terjadi di perangkat, dan Anda dapat memilih negara mana pun sebagai gantinya.",
        },
        {
          type: "basis",
          text: "kepentingan kami yang sah untuk mencegah kecurangan, penipuan, dan penyalahgunaan, serta menjaga keamanan layanan.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notifikasi push",
      blocks: [
        {
          type: "p",
          text: "Jika Anda mengizinkan notifikasi, perangkat Anda memberi kami token push, yang kami simpan dan gunakan untuk memberi tahu Anda tentang peristiwa dalam gim: hal-hal yang terjadi pada akun, teman, dan negara Anda, acara dan musim baru, serta pengingat jika Anda sudah lama tidak bermain.",
        },
        {
          type: "p",
          text: "Notifikasi disampaikan melalui Firebase Cloud Messaging (Google) di Android dan Apple Push Notification service di iOS. Anda dapat mematikannya kapan saja di pengaturan perangkat Anda, yang menghentikan penampilannya; token itu sendiri tetap ada sampai menjadi tidak valid (misalnya saat Anda mencopot pemasangan gim) atau Anda menghapus akun. Notifikasi yang telah disampaikan disimpan di sisi kami selama 30 hari, lalu diarsipkan.",
        },
        {
          type: "basis",
          text: "kepentingan kami yang sah untuk memberi Anda informasi tentang akun Anda dan gim yang Anda mainkan, dengan pilihan berhenti yang hanya butuh satu ketukan.",
        },
      ],
    },
    {
      id: "ads",
      title: "Iklan berhadiah opsional",
      blocks: [
        {
          type: "p",
          text: "Gim ini tidak memiliki iklan paksa: tidak ada yang menyela pertempuran atau menu. Toko menawarkan iklan berhadiah yang hanya diputar saat Anda mengetuknya, dengan imbalan mata uang dalam gim.",
        },
        {
          type: "p",
          text: "Iklan disajikan oleh Google AdMob. Perangkat lunaknya merupakan bagian dari gim, dimulai bersamanya, dan memuat iklan di latar belakang agar ada yang siap jika Anda mengetuk. Pada saat itu, terlepas dari apakah Anda pernah menonton iklan atau tidak, AdMob menerima pengenal iklan Anda dan lokasi kasar yang diturunkan dari alamat IP Anda; jika Anda menonton iklan, juga cara Anda berinteraksi dengannya. Di iOS, sistem meminta izin Anda pada peluncuran pertama sebelum pengenal iklan digunakan untuk pelacakan; di Android, Anda dapat mengatur ulang atau menghapus pengenal iklan di pengaturan perangkat Anda. Google menjelaskan apa yang dilakukannya dengan data ini dalam [kebijakan privasinya](https://policies.google.com/privacy).",
        },
        {
          type: "basis",
          text: "persetujuan Anda, yang diberikan melalui izin dan pengaturan iklan perangkat Anda, yang dapat Anda tarik di sana kapan saja.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analitik",
      blocks: [
        {
          type: "p",
          text: "Untuk memahami bagaimana gim dimainkan dan menemukan masalah, gim mengirimkan peristiwa ke server kami sendiri: awal dan akhir sesi, pertempuran yang dimainkan dan diselesaikan, kemajuan tutorial, pembelian di toko, notifikasi yang dibuka, kesalahan, dan di Android, perujuk toko yang membawa Anda ke gim. Setiap peristiwa membawa pengenal akun, pengenal perangkat, platform, model ponsel, dan versi gim Anda. Kami tidak menggunakan Google Analytics, Firebase Analytics, atau layanan analitik pihak ketiga lainnya. Laporan kerusakan sampai kepada kami melalui Google Play dan App Store berdasarkan kebijakan mereka sendiri.",
        },
        {
          type: "p",
          text: "Peristiwa analitik disimpan selama 400 hari. Statistik yang diturunkan darinya tidak mengandung data pribadi dan disimpan tanpa batas waktu.",
        },
        {
          type: "basis",
          text: "kepentingan kami yang sah untuk meningkatkan gim dan menjaganya berjalan dengan baik.",
        },
      ],
    },
    {
      id: "support",
      title: "Dukungan dan komunitas",
      blocks: [
        {
          type: "p",
          text: "Jika Anda mengirimkan email kepada kami, kami menyimpan percakapan itu selama waktu yang diperlukan untuk menanganinya.",
        },
        {
          type: "p",
          text: "Server Discord kami dijalankan di Discord berdasarkan [kebijakan privasi Discord](https://discord.com/privacy). Moderator di sana dapat melihat riwayat obrolan dalam gim untuk menangani laporan, sebagaimana diuraikan dalam bagian obrolan dan moderasi.",
        },
        {
          type: "basis",
          text: "pelaksanaan perjanjian kami dengan Anda (dukungan) dan kepentingan kami yang sah untuk menjalankan komunitas di sekitar gim.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Dengan siapa kami membagikan data",
      blocks: [
        {
          type: "p",
          text: "Kami tidak menjual data pribadi dan tidak membagikannya kepada pialang data. Perusahaan di bawah ini memproses data atas nama kami atau menerimanya karena cara kerja gim:",
        },
        {
          type: "table",
          head: ["Penyedia", "Untuk apa", "Di mana"],
          rows: [
            ["DigitalOcean", "Hosting server gim dan basis data kami", "Frankfurt, Jerman"],
            [
              "Gcore",
              "Jaringan pengiriman konten yang membawa sebagian lalu lintas gim ke server kami; melihat alamat IP Anda saat transit",
              "Server tepi di seluruh dunia; perusahaan berbasis di Luksemburg",
            ],
            [
              "Google Cloud Storage",
              "Arsip catatan yang kedaluwarsa (lihat “Berapa lama kami menyimpan data”)",
              "Frankfurt, Jerman",
            ],
            [
              "Google (Gemini API)",
              "Klasifikasi nama pengguna dan, saat diaktifkan, pesan obrolan",
              "Seluruh dunia: Google tidak menjamin wilayah tertentu untuk API ini",
            ],
            ["Google AdMob", "Iklan berhadiah yang Anda pilih untuk ditonton", "Amerika Serikat"],
            ["Google Firebase Cloud Messaging", "Penyampaian notifikasi push di Android", "Amerika Serikat"],
            ["Apple Push Notification service", "Penyampaian notifikasi push di iOS", "Amerika Serikat"],
            ["Zoho Mail", "Email kami, termasuk email pengaturan ulang kata sandi", "Uni Eropa"],
            [
              "Google Play dan App Store",
              "Masuk, pembayaran, langganan, dan laporan kerusakan",
              "Berdasarkan kebijakan mereka sendiri",
            ],
          ],
        },
        {
          type: "p",
          text: "Masing-masing penyedia ini terikat kontrak untuk melindungi data Anda setidaknya sebaik yang diuraikan kebijakan ini dan untuk menggunakannya hanya untuk tujuan yang disebutkan. Pemain lain melihat nama pengguna Anda, profil dalam gim Anda, dan apa yang Anda tulis di obrolan. Kami mengungkapkan data kepada pihak berwenang hanya jika diwajibkan oleh hukum.",
        },
      ],
    },
    {
      id: "storage",
      title: "Di mana data Anda disimpan",
      blocks: [
        {
          type: "p",
          text: "Server, basis data, dan cadangan kami dihosting di Frankfurt, Jerman, dan arsip catatan kedaluwarsa kami berada di bucket Google Cloud Storage di kota yang sama. Data Anda tetap berada di Uni Eropa kecuali jika penyedia yang tercantum di atas memprosesnya di Amerika Serikat atau, untuk Gemini API, di mana pun Google menjalankannya. Untuk transfer tersebut, kami mengandalkan klausul kontrak standar Komisi Eropa dan, jika penyedia bersertifikasi, Kerangka Privasi Data UE-AS (Data Privacy Framework).",
        },
      ],
    },
    {
      id: "retention",
      title: "Berapa lama kami menyimpan data",
      blocks: [
        {
          type: "table",
          head: ["Data", "Disimpan selama"],
          rows: [
            ["Akun, kemajuan, inventaris, teman, konfirmasi pembelian", "Sampai Anda menghapus akun"],
            [
              "Riwayat pelanggaran dan pembisuan obrolan, riwayat sanksi persekongkolan",
              "Sepanjang masa akun (pembisuan itu sendiri bersifat sementara)",
            ],
            ["Pemblokiran perangkat", "Sampai kami mencabutnya"],
            ["Peristiwa analitik", "400 hari, lalu diarsipkan"],
            ["Obrolan selain obrolan pertempuran, termasuk pesan langsung", "90 hari, lalu diarsipkan"],
            [
              "Riwayat transaksi koin dan XP",
              "90 hari (riwayat XP: 90 hari setelah aktivitas terakhir Anda), lalu diarsipkan",
            ],
            ["Catatan peluncuran pertama dengan alamat IP dan model ponsel", "90 hari, lalu diarsipkan"],
            [
              "Catatan peserta per pertandingan dengan alamat IP dan pengenal perangkat",
              "30 hari, lalu diarsipkan",
            ],
            ["Notifikasi yang telah disampaikan, kemajuan harian", "30 hari, lalu diarsipkan"],
            ["Obrolan pertempuran", "15 hari, lalu dihapus"],
            ["Tayangan ulang pertempuran", "7 hari, lalu diarsipkan"],
            ["Peristiwa penelusuran toko", "3 hari, lalu dihapus"],
          ],
        },
        {
          type: "p",
          text: "Baris yang ditandai “lalu diarsipkan” disalin ke arsip di Frankfurt sebelum keluar dari basis data aktif. Kami menggunakan arsip untuk statistik dan untuk menyelidiki penyalahgunaan di masa lalu; aksesnya terbatas pada dua pengembang, dan tidak ada isinya yang dapat dijangkau dari gim. Kami menyimpan catatan yang diarsipkan selama diperlukan untuk tujuan tersebut dan menghapusnya ketika tidak lagi diperlukan.",
        },
        {
          type: "p",
          text: "Saat Anda menghapus akun, kami menghapus data pribadi Anda dari sistem aktif dalam 30 hari. Kami menyimpan catatan yang secara hukum wajib kami simpan, seperti catatan pembelian untuk pembukuan, dan statistik yang tidak lagi mengidentifikasi Anda.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Dasar hukum kami di satu tempat",
      blocks: [
        {
          type: "p",
          text: "Berdasarkan GDPR, kami memerlukan dasar hukum untuk setiap hal yang kami lakukan dengan data Anda. Dasar hukum kami adalah:",
        },
        {
          type: "ul",
          items: [
            "**Perjanjian**: menjalankan akun Anda, gim, pembelian Anda, dan dukungan. Tanpa data ini tidak ada gim yang dapat dimainkan.",
            "**Kepentingan yang sah**: mencegah kecurangan dan penyalahgunaan, memoderasi obrolan, menjaga keamanan layanan, memahami bagaimana gim dimainkan, dan memberi tahu Anda tentang akun Anda. Kepentingan kami adalah gim yang adil, aman, dan berfungsi; kami menjaga data seminimal dan sesingkat mungkin, dan Anda dapat mengajukan keberatan kapan saja.",
            "**Persetujuan**: iklan yang dipersonalisasi dalam iklan berhadiah, diberikan melalui pengaturan perangkat Anda dan dapat ditarik di sana.",
            "**Kewajiban hukum**: menyimpan catatan pembukuan dan menjawab permintaan yang sah dari pihak berwenang.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "Hak Anda",
      blocks: [
        { type: "p", text: "Anda berhak untuk:" },
        {
          type: "ul",
          items: [
            "**Mengakses** data pribadi yang kami simpan tentang Anda dan mendapatkan salinannya.",
            "**Memperbaiki** data yang keliru.",
            "**Menghapus** akun dan data Anda.",
            "**Menerima** data Anda dalam format yang portabel dan dapat dibaca mesin.",
            "**Mengajukan keberatan** atas pemrosesan yang didasarkan pada kepentingan kami yang sah, dan **membatasi** pemrosesan sementara kami menelitinya.",
            "**Menarik persetujuan** untuk iklan kapan saja di pengaturan perangkat Anda, dan mematikan notifikasi dengan cara yang sama.",
          ],
        },
        {
          type: "p",
          text: "Untuk menggunakan hak Anda, kirimkan email ke [contact@geofastgames.com](mailto:contact@geofastgames.com) dari alamat yang tertaut ke akun Anda, atau jika akun Anda tidak memiliki email, beri tahu kami nama pengguna Anda dan kami akan memverifikasinya dari dalam gim. Permintaan penghapusan juga dapat dimulai dari [halaman penghapusan data](/datadeletion) kami. Kami menjawab dalam waktu satu bulan.",
        },
        {
          type: "p",
          text: "Jika Anda yakin kami menangani data Anda secara tidak sah, Anda dapat mengajukan pengaduan kepada Otoritas Perlindungan Data Belgia (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Brussel, [dataprotectionauthority.be](https://www.dataprotectionauthority.be), atau kepada otoritas di negara tempat Anda tinggal.",
        },
      ],
    },
    {
      id: "children",
      title: "Anak-anak",
      blocks: [
        {
          type: "p",
          text: "*Geofast: Battle of Nations* tidak ditujukan untuk anak-anak di bawah 13 tahun, dan kami tidak dengan sengaja mengumpulkan data pribadi dari mereka. Di Belgia, 13 tahun adalah usia ketika Anda dapat memberikan persetujuan sendiri untuk layanan daring. Gim ini memiliki peringkat usia di setiap toko yang mencerminkan obrolan daring dan pembelian opsionalnya; orang tua dapat menggunakan kontrol orang tua di Google Play dan App Store untuk membatasi pembelian dan aplikasi yang dapat dipasang anak.",
        },
        {
          type: "p",
          text: "Jika Anda yakin seorang anak di bawah 13 tahun memiliki akun, kirimkan email kepada kami dan kami akan menghapusnya.",
        },
      ],
    },
    {
      id: "security",
      title: "Keamanan",
      blocks: [
        {
          type: "p",
          text: "Semua lalu lintas antara gim, situs web ini, dan server kami dienkripsi (TLS). Kata sandi disimpan dalam bentuk hash. Basis data tidak dapat dijangkau dari internet. Akses ke server dan data terbatas pada dua pengembang; moderator melihat riwayat obrolan hanya melalui alat yang mencatat setiap pencarian. Tidak ada sistem yang sepenuhnya aman; jika kami mengetahui adanya pelanggaran yang memengaruhi data Anda, kami akan memberi tahu Anda dan otoritas sebagaimana diwajibkan oleh hukum.",
        },
      ],
    },
    {
      id: "website",
      title: "Situs web ini",
      blocks: [
        {
          type: "p",
          text: "geofastgames.com tidak memasang cookie dan tidak menggunakan skrip pelacakan atau analitik. Tiga hal keluar dari peramban Anda saat berkunjung: fon halaman dimuat dari Google Fonts, sehingga Google melihat alamat IP Anda; jumlah anggota Discord diambil dari API publik Discord; dan statistik langsung berasal dari server kami sendiri. Tautan ke toko aplikasi membawa tag kampanye agar kami dapat melihat bahwa suatu unduhan berasal dari situs ini, yang mengidentifikasi situs, bukan Anda.",
        },
      ],
    },
    {
      id: "changes",
      title: "Perubahan pada kebijakan ini",
      blocks: [
        {
          type: "p",
          text: "Ketika kami mengubah cara kami menangani data, kami memperbarui halaman ini dan tanggalnya, dan untuk perubahan yang signifikan kami memberi tahu Anda di dalam gim.",
        },
      ],
    },
  ],
};
