// Everything the site says. build.mjs turns it into the pages; add a game to `products` to give it a page.
// Legal pages (a game's privacy policy) come from that game's own repository and are not generated here.

export const studio = {
  name: 'Tovrix Studio',
  email: 'tovrixstudio@gmail.com',
  address: 'ODTÜ Teknokent, Ankara, Türkiye',
  // photos are the members' LinkedIn profile pictures, 240 px
  team: [
    { name: 'Onur Çelebi', photo: 'assets/team/onur-celebi.jpg', linkedin: 'https://www.linkedin.com/in/onur-celebi-software/' },
    { name: 'M. Serdar Karaman', photo: 'assets/team/serdar-karaman.jpg', linkedin: 'https://www.linkedin.com/in/mserdarkaraman/' },
  ],
};

export const text = {
  en: {
    lang: 'en',
    other: 'tr',
    otherLabel: 'Türkçe',
    tagline: 'An independent game studio in Ankara.',
    intro:
      'We make mobile games that are quick to pick up, fair to play and good for one more round. Every game we ship is built with care, and the way it treats your data is written down in plain words.',
    games: 'Games',
    team: 'Team',
    teamIntro: 'The people behind Tovrix Studio.',
    contact: 'Contact',
    contactIntro: 'Questions, feedback or a request about your data: write to us.',
    seeGame: 'About the game',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    deletion: 'Deleting your account',
    legalNote: '',
    screenshots: 'Screenshots',
    back: 'All games',
    notFound: 'This page does not exist.',
    home: 'Back to the home page',
  },
  tr: {
    lang: 'tr',
    other: 'en',
    otherLabel: 'English',
    tagline: "Ankara'da bağımsız bir oyun stüdyosu.",
    intro:
      'Kolay başlanan, adil oynanan ve "bir el daha" dedirten mobil oyunlar yapıyoruz. Çıkardığımız her oyuna özen gösteriyoruz; verilerine nasıl davrandığını da açık bir dille yazıyoruz.',
    games: 'Oyunlar',
    team: 'Ekip',
    teamIntro: "Tovrix Studio'nun arkasındaki insanlar.",
    contact: 'İletişim',
    contactIntro: 'Soruların, geri bildirimin ya da verilerinle ilgili bir isteğin için bize yaz.',
    seeGame: 'Oyunu tanı',
    legal: 'Yasal',
    privacy: 'Gizlilik Politikası',
    deletion: 'Hesabını silmek',
    legalNote: 'Yasal metinler İngilizcedir.',
    screenshots: 'Ekran görüntüleri',
    back: 'Tüm oyunlar',
    notFound: 'Bu sayfa yok.',
    home: 'Ana sayfaya dön',
  },
};

export const products = [
  {
    slug: 'orbit-stackers',
    name: 'Orbit Stackers',
    icon: 'assets/orbit-stackers/icon.png',
    feature: 'assets/orbit-stackers/feature.jpg',
    screenshots: ['01-home', '02-battle', '03-cards', '04-league', '05-result'].map((s) => `assets/orbit-stackers/${s}.jpg`),
    // written by the game's own repository (tools/privacy-page.ts there), in English only
    privacy: 'orbit-stackers/privacy/',
    en: {
      short: 'Stack space modules, outsmart your rival and race your tower to orbit!',
      status: 'In closed testing on Google Play. Coming soon.',
      lead: 'Build the tallest tower in the galaxy, before your rival does.',
      body:
        'Orbit Stackers is a real-time physics race. Station modules drop from above: steer them, spin them and stack them on your launch deck. Every piece obeys gravity, so one careless drop can send half your tower tumbling into space. Reach the Orbit Line and keep your tower above it until your uplink is fully charged: victory is yours.',
      features: [
        ['Race head to head', ['Fast 1v1 ranked races of about a minute', 'Both pilots receive the same modules: skill decides', "Watch your rival's tower live while you build"]],
        ['Play your cards', ['13 power cards to collect and upgrade', 'Raise a Deflector at the right moment to block an attack', 'Build a 4-card deck that fits your style']],
        ['Climb the leagues', ['Win trophies and rise through 10 leagues, from Launch Pad to Deep Space', 'Win crates in ranked races and unlock them as you fly', 'Chase the top of the leaderboard']],
        ['Easy to pick up', ['Drag to steer, tap to rotate, swipe down to drop', 'Practice mode and offline play against AI pilots', 'In English, Turkish, German, Spanish, French and Portuguese']],
      ],
    },
    tr: {
      short: 'Uzay modüllerini diz, rakibini alt et ve kuleni yörüngeye ilk sen ulaştır!',
      status: "Google Play'de kapalı testte. Yakında.",
      lead: 'Galaksinin en yüksek kulesini inşa et, rakibinden önce.',
      body:
        "Orbit Stackers gerçek zamanlı bir fizik yarışı. İstasyon modülleri yukarıdan düşer: onları yönlendir, döndür ve fırlatma platformuna diz. Her parça yerçekimine uyar; tek bir dikkatsiz bırakış kulenin yarısını uzaya savurabilir. Yörünge Çizgisine ulaş ve uplink'in dolana kadar kuleni çizginin üstünde tut: zafer senin.",
      features: [
        ['Kafa kafaya yarış', ["Yaklaşık bir dakika süren hızlı 1'e 1 dereceli yarışlar", 'İki pilot da aynı modülleri alır: sonucu beceri belirler', 'Kendi kuleni kurarken rakibinin kulesini canlı izle']],
        ['Kartlarını oyna', ['Toplayıp geliştirebileceğin 13 güç kartı', "Bir saldırıyı engellemek için Saptırıcı'yı tam zamanında aç", 'Tarzına uyan 4 kartlık donanımını kur']],
        ['Liglerde yüksel', ["Kupa kazan ve Fırlatma Rampası'ndan Derin Uzay'a kadar 10 ligde yüksel", 'Dereceli yarışlarda sandık kazan, uçtukça aç', 'Sıralamanın zirvesini hedefle']],
        ['Kolay başla', ['Yönlendirmek için sürükle, döndürmek için dokun, bırakmak için aşağı kaydır', 'Antrenman modu ve yapay zekâ pilotlara karşı çevrimdışı oyun', 'Türkçe, İngilizce, Almanca, İspanyolca, Fransızca ve Portekizce']],
      ],
    },
  },
];
