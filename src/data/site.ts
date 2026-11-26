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
    nav: { games: 'Games', studio: 'Studio', careers: 'Careers', support: 'Support', contact: 'Contact', brand: 'Brand' },
    heroKicker: 'Independent game studio · Ankara',
    heroTitle: 'Fair games, built block by block.',
    heroBody: 'Tovrix Studio makes mobile games that are quick to learn, fair to play and built to last. Small team, careful work, and plain words about how our games treat your data.',
    heroCta: 'See our games',
    games: 'Games',
    gamesIntro: 'What we are building right now.',
    about: 'About the studio',
    values: [
      ['Skill decides', 'Both players get the same pieces, so the better pilot wins. Every AI rival carries an AI tag.'],
      ['Your time matters', 'Short matches that fit a coffee break. An ad plays only when you choose to watch one, never in a match.'],
      ['Plain privacy', 'Each game says in plain words what it collects, why, and how to delete it.'],
      ['Built with care', 'A small team that ships often, tests every change and reads every message.'],
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
    terms: 'Terms of Service',
    termsIntro: 'The terms for playing Tovrix Studio games: accounts, fair play, purchases and your rights.',
    support: 'Support',
    supportIntro: 'Answers to the questions players ask most. If yours is not here, write to us: we read every message.',
    supportWrite: 'Still need help?',
    supportWriteBody: 'Write to us and tell us what happened. It helps if you include:',
    supportInclude: ['the game and your pilot name', 'your friend code (on the Friends screen), so we can find your account', 'the version from Settings > Build info, and your phone model', 'for a purchase: the order number from your Google Play receipt (GPA.…)'],
    supportNever: 'We will never ask for your password or a sign-in code. Do not send them to anyone.',
    careers: 'Join us',
    careersKicker: 'Careers · ODTÜ Teknokent, Ankara',
    careersIntro: 'We are a small team making mobile games that are fair to play and careful with their players. If that sounds like your kind of work, we would like to hear from you.',
    careersHow: 'How we work',
    careersWays: [
      ['Small team, whole games', 'Everyone touches design, code and the player’s experience. You see your work in players’ hands within days.'],
      ['Ship small, ship often', 'Every change is tested before it lands, and the game on our phones is updated many times a week.'],
      ['Players first', 'We read every message, measure only what we need and never trade fairness for revenue.'],
    ] as [string, string][],
    careersOpen: 'Open positions',
    careersNone: 'There are no open positions right now. We are always glad to meet game developers, artists and designers, and students looking for an internship: write to us with a few lines about yourself and a link to your work.',
    careersSend: 'Send a short introduction, your CV and a link to your portfolio or projects.',
    careersPrivacy: 'We use what you send only to consider you for a role, and delete it within 12 months unless you ask us to keep it.',
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
    nav: { games: 'Oyunlar', studio: 'Stüdyo', careers: 'Kariyer', support: 'Destek', contact: 'İletişim', brand: 'Marka' },
    heroKicker: 'Bağımsız oyun stüdyosu · Ankara',
    heroTitle: 'Blok blok kurulan adil oyunlar.',
    heroBody: 'Tovrix Studio öğrenmesi kolay, adil oynanan ve uzun soluklu mobil oyunlar yapar. Küçük bir ekip, özenli iş ve oyunlarımızın verilerine nasıl davrandığını anlatan açık bir dil.',
    heroCta: 'Oyunlarımızı gör',
    games: 'Oyunlar',
    gamesIntro: 'Şu anda üzerinde çalıştıklarımız.',
    about: 'Stüdyo hakkında',
    values: [
      ['Beceri kazanır', 'İki oyuncu da aynı parçaları alır; iyi pilot kazanır. Her yapay zekâ rakibin AI etiketi vardır.'],
      ['Zamanına saygı', 'Bir kahve molasına sığan kısa maçlar. Reklam yalnızca izlemeyi seçtiğinde oynar, maç sırasında asla.'],
      ['Açık gizlilik', 'Her oyun neyi, neden topladığını ve nasıl silineceğini açık bir dille yazar.'],
      ['Özenle kurulur', 'Sık güncelleyen, her değişikliği test eden ve her mesajı okuyan küçük bir ekip.'],
    ] as [string, string][],
    team: 'Ekip',
    teamIntro: "Tovrix Studio'nun arkasındaki insanlar.",
    contact: 'İletişim',
    contactIntro: 'Soruların, geri bildirimin, basın talebin ya da verilerinle ilgili bir isteğin için bize yaz.',
    seeGame: 'Oyunu tanı',
    legal: 'Yasal',
    privacy: 'Gizlilik Politikası',
    deletion: 'Hesabını silmek',
    legalNote: 'Gizlilik politikası İngilizcedir.',
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
    terms: 'Kullanım Koşulları',
    termsIntro: 'Tovrix Studio oyunlarını oynamanın koşulları: hesaplar, adil oyun, satın almalar ve hakların.',
    support: 'Destek',
    supportIntro: 'Oyuncuların en sık sorduğu soruların yanıtları. Seninki burada yoksa bize yaz: her mesajı okuruz.',
    supportWrite: 'Hâlâ yardım mı gerekiyor?',
    supportWriteBody: 'Bize yaz ve ne olduğunu anlat. Şunları eklersen işimiz kolaylaşır:',
    supportInclude: ['oyunun adı ve pilot adın', 'hesabını bulabilmemiz için arkadaş kodun (Arkadaşlar ekranında)', 'Ayarlar > Derleme bilgisi bölümündeki sürüm ve telefonunun modeli', 'bir satın alma için: Google Play makbuzundaki sipariş numarası (GPA.…)'],
    supportNever: 'Şifreni ya da bir giriş kodunu asla istemeyiz. Bunları kimseye gönderme.',
    careers: 'Bize katıl',
    careersKicker: 'Kariyer · ODTÜ Teknokent, Ankara',
    careersIntro: 'Adil oynanan ve oyuncularına özen gösteren mobil oyunlar yapan küçük bir ekibiz. Bu sana uygun bir iş gibi geliyorsa senden haber almak isteriz.',
    careersHow: 'Nasıl çalışıyoruz',
    careersWays: [
      ['Küçük ekip, bütün oyun', 'Herkes tasarıma, koda ve oyuncunun deneyimine dokunur. Yaptığın işi birkaç gün içinde oyuncuların elinde görürsün.'],
      ['Küçük adımlar, sık güncelleme', 'Her değişiklik yayınlanmadan önce test edilir; telefonlarımızdaki oyun haftada birçok kez güncellenir.'],
      ['Önce oyuncu', 'Her mesajı okur, yalnızca gerekeni ölçeriz ve adaleti asla gelirle takas etmeyiz.'],
    ] as [string, string][],
    careersOpen: 'Açık pozisyonlar',
    careersNone: 'Şu anda açık pozisyon yok. Oyun geliştiricileri, sanatçılar, tasarımcılar ve staj arayan öğrencilerle tanışmaktan her zaman memnuniyet duyarız: kendinden birkaç satır ve çalışmalarının bağlantısıyla bize yaz.',
    careersSend: 'Kısa bir tanıtım, özgeçmişin ve portfolyonun ya da projelerinin bağlantısını gönder.',
    careersPrivacy: 'Gönderdiklerini yalnızca seni bir rol için değerlendirmek için kullanır, saklamamızı istemedikçe 12 ay içinde sileriz.',
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
