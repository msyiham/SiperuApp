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
      page: "Eksploras"
    },
    {
      title: "Robo Peru (AI)",
      icon: require('../assets/img/ICON/ai.png'),
      description: "AI akan membantumu mengetahui hal baru.",
      page: "AI"
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

export { homeMenu, gamesData };
  