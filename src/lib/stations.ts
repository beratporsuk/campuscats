import { Station, TeamMember } from './types';

export const stations: Station[] = [
  {
    id: '1',
    name: 'Kütüphane Önü',
    description: 'Ana kütüphane girişinin hemen yanındaki besleme noktası. Sabah ve akşam saatlerinde yoğun aktivite gözlemlenmektedir.',
    location: 'Kütüphane Binası, Ana Giriş Kapısı',
    animals: ['kedi', 'köpek'],
    emoji: '📚',
  },
  {
    id: '2',
    name: 'Kantin Bahçesi',
    description: 'Merkez kantinin dış bahçesinde bulunan besleme noktası. Öğle saatlerinde en yoğun noktalardan biridir.',
    location: 'Merkez Kantin, Dış Oturma Alanı',
    animals: ['kedi'],
    emoji: '☕',
  },
  {
    id: '3',
    name: 'Mühendislik Binası',
    description: 'Mühendislik Fakültesi arka bahçesinde yer alan besleme noktası. Birden fazla kedi ve köpek bu noktayı yuva edinmiştir.',
    location: 'Mühendislik Fakültesi, Arka Bahçe',
    animals: ['kedi', 'köpek'],
    emoji: '⚙️',
  },
  {
    id: '4',
    name: 'Spor Kompleksi',
    description: 'Spor tesislerinin yan girişinde bulunan besleme noktası. Özellikle köpeklerin sık ziyaret ettiği bir alan.',
    location: 'Spor Kompleksi, Yan Kapı',
    animals: ['köpek'],
    emoji: '🏃',
  },
  {
    id: '5',
    name: 'Merkez Park',
    description: 'Kampüsün tam ortasındaki parkta bulunan ana besleme noktası. En fazla hayvan barındıran istasyondur.',
    location: 'Merkez Park, Oturma Alanları Yanı',
    animals: ['kedi', 'köpek'],
    emoji: '🌳',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Fulya Ulusoy',
    role: 'Proje Koordinatörü',
    description: 'Genel planlama, zaman yönetimi ve iş akışının organizasyonundan sorumlu.',
    emoji: '👩‍💼',
  },
  {
    name: 'Busenur Yukarıdere',
    role: 'Tasarım Lideri',
    description: 'Bilgi panoları ve görsel materyallerin Canva gibi dijital araçlarla tasarımından sorumlu.',
    emoji: '🎨',
  },
  {
    name: 'Beren Nur Yağmur',
    role: 'Araştırma & İçerik',
    description: 'Hayvanlara zararlı ve uygun yiyeceklerin araştırılması ve yazılı içerik hazırlanmasından sorumlu.',
    emoji: '📖',
  },
  {
    name: 'Fatma İkra Uğurel',
    role: 'Saha Koordinatörü',
    description: 'Besleme alanlarının belirlenmesi, önce-sonra fotoğrafların çekilmesi ve kurulum sürecinin yönetiminden sorumlu.',
    emoji: '📸',
  },
  {
    name: 'Damla Çalışkan',
    role: 'İletişim & Lojistik',
    description: 'TEDU Animal Friends ile iletişim, izin alma ve malzeme ile baskı süreçlerinin organizasyonundan sorumlu.',
    emoji: '📋',
  },
  {
    name: 'Şahin Atak',
    role: 'Dijital Sistem',
    description: 'QR kod sisteminin oluşturulması, yönetimi ve kullanıcı verilerinin takibinden sorumlu.',
    emoji: '💻',
  },
];

export function getStationById(id: string): Station | undefined {
  return stations.find((s) => s.id === id);
}
