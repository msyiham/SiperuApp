// menuData.js
const homeMenu = [
    {
      title: "Unsur",
      icon: require('../assets/img/ICON/unsur.png'), // Path ke gambar ikon
      description: "Ingin belajar Kimia, bingung harus darimana? Ayo belajar unsur kimia bersama PERU yang yang pasti seru!",
      page: "Unsur"
    },
    {
      title: "Permainan",
      icon: require('../assets/img/ICON/games.png'),
      description: "Belajar kimia gak harus pusing. Break dulu yuk dengan permainan yang pasti seru!",
      page: "MenuGames"
    },
    {
      title: "Eksplorasi",
      icon: require('../assets/img/ICON/eksplorasi.png'),
      description: "Ingin belajar Kimia, bingung harus darimana? Ayo cari tahu lebih lanjut tentang materinya PERU akan menemani Eksplorasimu!",
      page: "ExplorationMain"
    },
    {
      title: "Robo Peru (AI)",
      icon: require('../assets/img/ICON/ai.png'),
      description: "AI akan membantumu mengetahui hal baru.",
      page: "AI"
    },
    {
      title: "Forum Diskusi",
      icon: require('../assets/img/ICON/chat.png'),
      description: "Disnilah anda bisa berdiskusi dengan sesama pengguna.",
      page: "ShowDiscuss"
    }
];
const gamesData = [
    {
      title: "Pecah Balon",
      icon: require('../assets/img/GAMES/pecah-balon.png'), // Path ke gambar ikon
      description: "Mempelajari materi unsur golongan 1A",
      page: "PecahBalon",
      link: "https://wordwall.net/id/embed/8490b6e1e1124139bf112d3d494b633a?themeId=22&templateId=71&fontStackId=0"
    },
    {
      title: "Catch the Mouse",
      icon: require('../assets/img/GAMES/palu-tikus.png'),
      description: "Mempelajari materi kimia unsur pada sub bab Periode & Golongan",
      page: "PukulTikus",
      link:"https://wordwall.net/id/embed/67ed244828624f62994662fc0bafef7a?themeId=23&templateId=45&fontStackId=0"
    },
    {
      title: "Teka-Teki Silang",
      icon: require('../assets/img/GAMES/tts.png'),
      description: "Mempelajari materi kimia Atom & Unsur",
      page: "TTS",
      link:"https://wordwall.net/id/embed/b74a82f9d9eb4a2dad7832bacad64cdf?themeId=26&templateId=11&fontStackId=0"
    },
];

const unsurData = [
  {
    title: "Tabel Periodik",
    icon: require('../assets/img/UNSUR/2.png'),
    description: "Mempelajari materi kimia Atom & Unsur",
    page: "PeriodicTable",
    link:"https://heyzine.com/flip-book/39f69d27e6.html"
  },
  {
    title: "Lagu Si Peru",
    icon: require('../assets/img/UNSUR/3.png'),
    description: "Mempelajari materi kimia Atom & Unsur",
    page: "Music",
    link: ""
  },
]
const explorationMenu = [
  {
    title: "Latihan Soal",
    icon: require('../assets/img/EXPLORATION/1.png'),
    page: "ExcerciseMenu",
    link:"https://heyzine.com/flip-book/39f69d27e6.html"
  },
  {
    title: "AudioBook",
    icon: require('../assets/img/EXPLORATION/2.png'),
    page: "AudioBook",
    link: ""
  },
  {
    title: "Video Materi",
    icon: require('../assets/img/EXPLORATION/3.png'),
    page: "LearningVideos",
    link: ""
  },
]
const excerciseMenu = [
  {
    title: "Latihan 1",
    page: "Excercise1",
    data:"exercise1",
    description:"Perkembangan Sistem Periodik Unsur"
  },
  {
    title: "Latihan 2",
    page: "Excercise2",
    data:"exercise2",
    description: "Konfigurasi Elektron"
  },
  {
    title: "Latihan 3",
    page: "Excercise3",
    data:"exercise1",
    description: "Sifat-sifat Keperiodikan Unsur"
  },
]

const recomendationDetail = [
  {
    title: "VISUAL",
    description: [
      [
        { type: "regular", text: "Berdasarkan hasil tes gaya belajar yang Anda lakukan, gaya belajar Anda yang paling dominan adalah Visual. Ini berarti Anda cenderung lebih mudah memahami dan mengingat informasi melalui penglihatan. Anda belajar terbaik dengan melihat gambar, grafik, diagram, dan presentasi visual lainnya.\n\nBerikut adalah rekomendasi untuk Gaya Belajar Visual" },
      ],
      [
        { type: "bold", text: "1.  	Augmented Reality (AR)" },
        { type: "regular", text: "Gunakan buku marker SI PERU untuk men scan AR. SI PERU menawarkan pengalaman pembelajaran yang interaktif dan menyenangkan melalui teknologi augmented reality. Fitur augmented reality (AR) dalam aplikasi ini dirancang khusus untuk membantu visual learners. Melalui AR, Anda dapat melihat model 3D dari bentuk nyata unsur-unsur kimia dan konfigurasinya." },
      ],
      [
        { type: "bold", text: "2.  	Tonton Video Pembelajaran" },
        { type: "regular", text: "Video pembelajaran SI PERU sudah dibuat dengan sangat menarik dan dilengkapi dengan video berbahasa isyarat “Sibi” sehingga memudahkan semua siswa termasuk siswa tunarungu dalam belajar." },
      ],
      [
        { type: "bold", text: "3.  	Bermain Game dalam aplikasi" },
        { type: "regular", text: "Manfaatkan beragam game dalam aplikasi SI PERU sebagai alat evaluasi setelah Anda belajar sistem periodik unsur." },
      ],
    ],
  },
  {
    title: "AUDITORI",
    description: [
      [
        { type: "regular", text: "Berdasarkan hasil tes gaya belajar yang Anda lakukan, gaya belajar Anda yang paling dominan adalah Auditori. Ini berarti Anda cenderung lebih mudah memahami dan mengingat informasi melalui pendengaran. Anda belajar terbaik dengan mendengarkan penjelasan, diskusi, dan audio lainnya.\n\nBerikut adalah rekomendasi untuk Gaya Belajar Auditori" },
      ],
      [
        { type: "bold", text: "1. Audio Book" },
        { type: "regular", text: "Manfaatkan audio book untuk mendengarkan penjelasan verbal mengenai sistem periodik unsur karena hal ini akan membantu Anda memahami materi dengan lebih baik." },
      ],
      [
        { type: "bold", text: "2. Lagu SI PERU" },
        { type: "regular", text: "Dengarkan lagu SI PERU untuk mempermudah Anda dalam menghafal nama dan golongan dari tiap unsur kimia." },
      ],
      [
        { type: "bold", text: "3. SPU ber Audio" },
        { type: "regular", text: "Sistem Periodik Unsur (SPU) ber audio memberikan penjelasan terperinci mengenai unsur-unsur kimia secara verbal. Mendengarkan penjelasan tentang sifat dan karakteristik setiap unsur membantu anak auditori dalam memahami materi.\nDengan menggunakan SPU ber audio, Anda dapat fokus pada pendengaran, yang merupakan kekuatan utama Anda dalam proses belajar. Anda dapat mendengarkan penjelasan berkali-kali hingga benar-benar memahami materi." },
      ],
    ],
  },
  {
    title: "KINESTETIK",
    description: [
      [
        { type: "regular", text: "Berdasarkan hasil tes gaya belajar yang Anda lakukan, gaya belajar Anda yang paling dominan adalah Kinestetik. Ini berarti Anda cenderung lebih mudah memahami dan mengingat informasi melalui aktivitas fisik dan manipulasi objek. Anda belajar terbaik dengan cara melakukan, bergerak, sentuhan dan berinteraksi secara fisik dengan materi pembelajaran.\n\nBerikut adalah rekomendasi untuk Gaya Belajar Kinestetik" },
      ],
      [
        { type: "bold", text: "1.  	Chem Card" },
        { type: "regular", text: "Interaksi Fisik: Anak-anak kinestetik belajar paling baik melalui aktivitas fisik. Permainan kartu memungkinkan Anda untuk memegang, memindahkan, dan mengatur kartu secara fisik, yang membantu Anda terlibat lebih dalam dengan materi.\nPermainan Aktif: Bermain kartu biasanya melibatkan gerakan tangan yang konstan dan manipulasi objek, yang membantu anak kinestetik tetap fokus dan terlibat.\nKolaboratif: Permainan kartu sering kali dimainkan bersama teman-teman, mendorong interaksi sosial dan kerja sama yang bisa memperkuat pemahaman melalui diskusi dan tindakan." },
      ],
      [
        { type: "bold", text: "2.  	SPU Braille" },
        { type: "regular", text: "Sentuhan dan Tekstur: Anak kinestetik sangat responsif terhadap pengalaman belajar yang melibatkan sentuhan. Menggunakan tabel Braille memungkinkan Anda untuk 'melihat' dengan tangan Anda, memberi pengalaman taktil yang memperkuat ingatan dan pemahaman.\nInteraksi Fisik: Membaca Braille melibatkan gerakan tangan yang spesifik, yang sejalan dengan kebutuhan kinestetik untuk bergerak dan berinteraksi secara fisik dengan bahan belajar" },
      ],
      [
        { type: "bold", text: "3.  	Augmented Reality" },
        { type: "regular", text: "Manfaatkan fitur augmented reality (AR) di aplikasi SI PERU untuk berinteraksi dengan model 3D unsur-unsur kimia. Bergerak dan memanipulasi model melalui AR akan membuat pembelajaran lebih seru dan menyenangkan" },
      ],
    ],
  },
];

export { homeMenu, gamesData, unsurData, explorationMenu, excerciseMenu, recomendationDetail };
  