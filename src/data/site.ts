// Everything the site says. Add a game to `games` to give it a page in both languages.
// This repository and the site are public: nothing here may be secret.

export type Lang = 'en' | 'tr';
export const LANGS: Lang[] = ['en', 'tr'];

/** Google Analytics (GA4) measurement id, shared with karaman.dev. Public by nature; loaded only after consent. */
export const GA_ID = 'G-YDEV31NZ5J';

export const studio = {
  name: 'Tovrix Studio',
  email: 'tovrixstudio@gmail.com',
  address: 'ODTÜ Teknokent, Ankara, Türkiye',
  founded: 2026,
  // photos are the members' LinkedIn profile pictures
  team: [
    { name: 'Onur Çelebi', photo: 'assets/team/onur-celebi.jpg', linkedin: 'https://www.linkedin.com/in/onur-celebi-software/' },
    { name: 'M. Serdar Karaman', photo: 'assets/team/serdar-karaman.jpg', linkedin: 'https://www.linkedin.com/in/mserdarkaraman/' },
  ],
};

export const brand = {
  colors: [
    { name: 'Signal Coral', hex: '#FF6B4A', use: { en: 'The top block. Accents, calls to action.', tr: 'Üstteki blok. Vurgular, eylem çağrıları.' } },
    { name: 'Deep Navy', hex: '#1B2A4A', use: { en: 'The pillar. Text and the logo on light backgrounds.', tr: 'Sütun. Açık zeminde metin ve logo.' } },
    { name: 'Orbit Teal', hex: '#3FC1C9', use: { en: 'Secondary accent, links on dark backgrounds.', tr: 'İkincil vurgu, koyu zeminde bağlantılar.' } },
    { name: 'Launch Cream', hex: '#FFF4E8', use: { en: 'Paper. Backgrounds and the logo on dark.', tr: 'Kâğıt. Zeminler ve koyu zeminde logo.' } },
    { name: 'Night', hex: '#111B30', use: { en: 'Dark backgrounds.', tr: 'Koyu zeminler.' } },
  ],
  files: [
    { file: 'brand/tovrix-logo.svg', label: { en: 'Logo, horizontal', tr: 'Logo, yatay' }, dark: false },
    { file: 'brand/tovrix-logo-reverse.svg', label: { en: 'Logo, horizontal, on dark', tr: 'Logo, yatay, koyu zemin' }, dark: true },
    { file: 'brand/tovrix-logo-stacked.svg', label: { en: 'Logo, stacked', tr: 'Logo, dikey' }, dark: false },
    { file: 'brand/tovrix-mark.svg', label: { en: 'Mark', tr: 'Simge' }, dark: false },
    { file: 'brand/tovrix-mark-reverse.svg', label: { en: 'Mark, on dark', tr: 'Simge, koyu zemin' }, dark: true },
    { file: 'brand/tovrix-icon.svg', label: { en: 'App icon and avatar', tr: 'Uygulama simgesi ve profil resmi' }, dark: false },
    { file: 'brand/tovrix-icon-512.png', label: { en: 'App icon, PNG 512 px', tr: 'Uygulama simgesi, PNG 512 px' }, dark: false },
    { file: 'brand/tovrix-logo.png', label: { en: 'Logo, PNG', tr: 'Logo, PNG' }, dark: false },
  ],
};

export interface Game {
  slug: string;
  name: string;
  icon: string;
  feature: string;
  screenshots: string[];
  /** written by the game's own repository into public/<slug>/privacy/, English only */
  privacy: string;
  play?: string;
  /** set while the game is only in closed testing on Google Play */
  testing?: string;
  text: Record<Lang, { short: string; status: string; lead: string; body: string; features: [string, string[]][] }>;
}

export const games: Game[] = [
  {
    slug: 'orbit-stackers',
    name: 'Orbit Stackers',
    icon: 'assets/orbit-stackers/icon.png',
    feature: 'assets/orbit-stackers/feature.jpg',
    screenshots: ['01-home', '02-battle', '03-cards', '04-league', '05-result'].map((s) => `assets/orbit-stackers/${s}.jpg`),
    privacy: 'orbit-stackers/privacy/',
    play: 'https://play.google.com/store/apps/details?id=com.tovrixstudio.orbitstackers',
    testing: 'https://play.google.com/apps/testing/com.tovrixstudio.orbitstackers',
    text: {
      en: {
        short: 'Stack space modules, outsmart your rival and race your tower to orbit!',
        status: 'Coming soon to Google Play',
        lead: 'Build the tallest tower in the galaxy, before your rival does.',
        body: 'Orbit Stackers is a real-time physics race. Station modules drop from above: steer them, spin them and stack them on your launch deck. Every piece obeys gravity, so one careless drop can send half your tower tumbling into space. Reach the Orbit Line and keep your tower above it until your uplink is fully charged: victory is yours.',
        features: [
          ['Race head to head', ['Fast 1v1 ranked races of about a minute', 'Both pilots receive the same modules: skill decides', "Watch your rival's tower live while you build"]],
          ['Play your cards', ['13 power cards to collect and upgrade', 'Raise a Deflector at the right moment to block an attack', 'Build a 4-card deck that fits your style']],
          ['Climb the leagues', ['Win trophies and rise through 10 leagues, from Launch Pad to Deep Space', 'Win crates in ranked races and unlock them as you fly', 'Chase the top of the leaderboard']],
          ['Easy to pick up', ['Drag to steer, tap to rotate, swipe down to drop', 'Practice mode and offline play against AI pilots', 'In English, Turkish, German, Spanish, French and Portuguese']],
        ],
      },
      tr: {
        short: 'Uzay modüllerini diz, rakibini alt et ve kuleni yörüngeye ilk sen ulaştır!',
        status: "Yakında Google Play'de",
        lead: 'Galaksinin en yüksek kulesini inşa et, rakibinden önce.',
        body: "Orbit Stackers gerçek zamanlı bir fizik yarışı. İstasyon modülleri yukarıdan düşer: onları yönlendir, döndür ve fırlatma platformuna diz. Her parça yerçekimine uyar; tek bir dikkatsiz bırakış kulenin yarısını uzaya savurabilir. Yörünge Çizgisine ulaş ve uplink'in dolana kadar kuleni çizginin üstünde tut: zafer senin.",
        features: [
          ['Kafa kafaya yarış', ["Yaklaşık bir dakika süren hızlı 1'e 1 dereceli yarışlar", 'İki pilot da aynı modülleri alır: sonucu beceri belirler', 'Kendi kuleni kurarken rakibinin kulesini canlı izle']],
          ['Kartlarını oyna', ['Toplayıp geliştirebileceğin 13 güç kartı', "Bir saldırıyı engellemek için Saptırıcı'yı tam zamanında aç", 'Tarzına uyan 4 kartlık donanımını kur']],
          ['Liglerde yüksel', ["Kupa kazan ve Fırlatma Rampası'ndan Derin Uzay'a kadar 10 ligde yüksel", 'Dereceli yarışlarda sandık kazan, uçtukça aç', 'Sıralamanın zirvesini hedefle']],
          ['Kolay başla', ['Yönlendirmek için sürükle, döndürmek için dokun, bırakmak için aşağı kaydır', 'Antrenman modu ve yapay zekâ pilotlara karşı çevrimdışı oyun', 'Türkçe, İngilizce, Almanca, İspanyolca, Fransızca ve Portekizce']],
        ],
      },
    },
  },
];

export const text = {
  en: {
    otherLabel: 'Türkçe',
    nav: { games: 'Games', studio: 'Studio', brand: 'Brand', contact: 'Contact' },
    heroKicker: 'Independent game studio · Ankara',
    heroTitle: 'Games you can pick up in a second and keep playing for months.',
    heroBody: 'Tovrix Studio makes mobile games that are quick to learn, fair to play and built to last. Small team, careful work, and plain words about how our games treat your data.',
    heroCta: 'See our games',
    games: 'Games',
    gamesIntro: 'What we are building right now.',
    about: 'About the studio',
    values: [
      ['Fair play', 'Both players get the same pieces, so skill decides. No forced ads, and every bot rival is labelled as one.'],
      ['Small and careful', 'A small team that ships often, tests everything and reads every message.'],
      ['Plain privacy', 'Each game says in plain words what it collects, why, and how to delete it.'],
    ] as [string, string][],
    team: 'Team',
    teamIntro: 'The people behind Tovrix Studio.',
    contact: 'Contact',
    contactIntro: 'Questions, feedback, press or a request about your data: write to us.',
    seeGame: 'About the game',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    deletion: 'Deleting your account',
    legalNote: '',
    screenshots: 'Screenshots',
    download: 'Download',
    testingNote: 'Orbit Stackers is in closed testing. The store page opens once it is released; testers on the list can join now.',
    joinTest: 'Join the test',
    back: 'All games',
    brandTitle: 'Brand',
    brandIntro: 'The Tovrix Studio identity: the logo, its colours and type, and the files to use them.',
    brandLogoTitle: 'The logo',
    brandLogoBody: 'Three blocks stacked into a T, the top one a little tilted: a tower that holds because it was built with care. Keep clear space of at least one block height around it, never rotate, recolour or stretch it, and do not place the navy version on dark backgrounds.',
    brandColors: 'Colours',
    brandType: 'Type',
    brandTypeBody: 'Outfit for headings and the wordmark, Inter for text. Both are free fonts and are served from this site.',
    brandFiles: 'Files',
    brandFilesBody: 'SVG and PNG files, free to use when you write about Tovrix Studio or its games.',
    sitePrivacy: 'Website privacy',
    cookieSettings: 'Cookie settings',
    consentText: 'We would like to use Google Analytics to count visits. It sets cookies and sends data to Google, so it only starts if you agree.',
    consentAccept: 'Allow analytics',
    consentReject: 'No thanks',
    consentMore: 'Website privacy',
    notFound: 'This page does not exist.',
    home: 'Back to the home page',
  },
  tr: {
    otherLabel: 'English',
    nav: { games: 'Oyunlar', studio: 'Stüdyo', brand: 'Marka', contact: 'İletişim' },
    heroKicker: 'Bağımsız oyun stüdyosu · Ankara',
    heroTitle: 'Bir saniyede başlanan, aylarca oynanan oyunlar.',
    heroBody: 'Tovrix Studio öğrenmesi kolay, adil oynanan ve uzun soluklu mobil oyunlar yapar. Küçük bir ekip, özenli iş ve oyunlarımızın verilerine nasıl davrandığını anlatan açık bir dil.',
    heroCta: 'Oyunlarımızı gör',
    games: 'Oyunlar',
    gamesIntro: 'Şu anda üzerinde çalıştıklarımız.',
    about: 'Stüdyo hakkında',
    values: [
      ['Adil oyun', 'İki oyuncu da aynı parçaları alır, sonucu beceri belirler. Zorunlu reklam yok; her bot rakip bot olarak işaretli.'],
      ['Küçük ve özenli', 'Sık güncelleyen, her şeyi test eden ve her mesajı okuyan küçük bir ekip.'],
      ['Açık gizlilik', 'Her oyun neyi, neden topladığını ve nasıl silineceğini açık bir dille yazar.'],
    ] as [string, string][],
    team: 'Ekip',
    teamIntro: "Tovrix Studio'nun arkasındaki insanlar.",
    contact: 'İletişim',
    contactIntro: 'Soruların, geri bildirimin, basın talebin ya da verilerinle ilgili bir isteğin için bize yaz.',
    seeGame: 'Oyunu tanı',
    legal: 'Yasal',
    privacy: 'Gizlilik Politikası',
    deletion: 'Hesabını silmek',
    legalNote: 'Yasal metinler İngilizcedir.',
    screenshots: 'Ekran görüntüleri',
    download: 'İndir',
    testingNote: 'Orbit Stackers kapalı testte. Mağaza sayfası yayınlandığında açılacak; test listesindekiler şimdiden katılabilir.',
    joinTest: 'Teste katıl',
    back: 'Tüm oyunlar',
    brandTitle: 'Marka',
    brandIntro: 'Tovrix Studio kimliği: logo, renkleri, yazı tipleri ve kullanım dosyaları.',
    brandLogoTitle: 'Logo',
    brandLogoBody: 'Bir T oluşturacak şekilde dizilmiş üç blok; en üstteki biraz eğik: özenle kurulduğu için ayakta duran bir kule. Çevresinde en az bir blok yüksekliğinde boşluk bırak; döndürme, yeniden renklendirme ya da esnetme. Lacivert sürümü koyu zeminde kullanma.',
    brandColors: 'Renkler',
    brandType: 'Yazı tipleri',
    brandTypeBody: 'Başlıklar ve logo yazısı için Outfit, metin için Inter. İkisi de ücretsiz ve bu siteden sunuluyor.',
    brandFiles: 'Dosyalar',
    brandFilesBody: "SVG ve PNG dosyaları; Tovrix Studio'yu ya da oyunlarını anlatırken serbestçe kullanabilirsin.",
    sitePrivacy: 'Site gizliliği',
    cookieSettings: 'Çerez ayarları',
    consentText: 'Ziyaretleri saymak için Google Analytics kullanmak istiyoruz. Çerez bırakır ve Google’a veri gönderir; bu yüzden yalnızca onay verirsen başlar.',
    consentAccept: 'Analitiğe izin ver',
    consentReject: 'Hayır, teşekkürler',
    consentMore: 'Site gizliliği',
    notFound: 'Bu sayfa yok.',
    home: 'Ana sayfaya dön',
  },
} as const;
