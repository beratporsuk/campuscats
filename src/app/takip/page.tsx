'use client';

import { QRCodeSVG } from 'qrcode.react';
import { ClipboardList, CheckCircle, MapPin, Camera, Clock, ExternalLink, Info } from 'lucide-react';

// Google Form oluşturduktan sonra bu URL'i değiştirin
const FORM_URL = 'https://forms.gle/BURAYA_FORM_LINKINI_EKLE';

const formFields = [
  {
    icon: '👤',
    label: 'İsim',
    desc: 'İsteğe bağlı',
    color: 'bg-gray-50 border-gray-200',
  },
  {
    icon: '📍',
    label: 'Besleme Noktası',
    desc: 'A Blok, Kütüphane, Kantin...',
    color: 'bg-orange-50 border-orange-200',
  },
  {
    icon: '🍽️',
    label: 'Ne Doldurdunuz?',
    desc: 'Mama / Su / İkisi de',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    icon: '📊',
    label: 'Mama Durumu',
    desc: 'Boş / Yarı dolu / Dolu',
    color: 'bg-green-50 border-green-200',
  },
  {
    icon: '🕐',
    label: 'Saat',
    desc: 'Otomatik kaydedilir',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    icon: '📸',
    label: 'Fotoğraf',
    desc: 'İsteğe bağlı',
    color: 'bg-violet-50 border-violet-200',
  },
];

const steps = [
  {
    num: '1',
    title: 'Hayvanları Besleyin',
    desc: 'Mama veya su doldurun.',
    icon: '🐱',
  },
  {
    num: '2',
    title: 'QR Kodu Tarayın',
    desc: 'Bu sayfayı açın ve forma gidin.',
    icon: '📱',
  },
  {
    num: '3',
    title: 'Formu Doldurun',
    desc: 'Hangi noktada, ne doldurduğunuzu seçin.',
    icon: '✍️',
  },
  {
    num: '4',
    title: 'Otomatik Kaydedilir',
    desc: 'Bilgiler Google Sheets\'e düşer, ekip görür.',
    icon: '✅',
  },
];

export default function TakipPage() {
  const formReady = !FORM_URL.includes('BURAYA');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ClipboardList className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Besleme Takibi</h1>
          <p className="text-orange-100 max-w-xl mx-auto text-lg">
            Mama veya su doldurduktan sonra formu doldurarak kaydını bırakın.
            Ekibimiz hangi noktanın ne zaman beslendiğini takip edebilsin.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">

        {/* Form not ready warning */}
        {!formReady && (
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800">Google Form henüz bağlanmadı</p>
              <p className="text-sm text-amber-700 mt-1">
                <code className="bg-amber-100 px-1 rounded">src/app/takip/page.tsx</code> dosyasının
                en üstündeki <code className="bg-amber-100 px-1 rounded">FORM_URL</code> değişkenini
                Google Form linkinizle güncelleyin.
              </p>
            </div>
          </div>
        )}

        {/* Main CTA */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
          <div className="text-6xl mb-4">🐱</div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Besleme Kaydı Bırak</h2>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">
            Formu doldurmak 30 saniye alır. Her kayıt, kampüs hayvanlarının
            daha iyi bakılmasına yardımcı olur.
          </p>

          <a
            href={formReady ? FORM_URL : '#'}
            target={formReady ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-200 ${
              formReady
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:scale-105 hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ClipboardList className="w-6 h-6" />
            Formu Aç
            {formReady && <ExternalLink className="w-4 h-4 opacity-70" />}
          </a>

          {formReady && (
            <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
              <ExternalLink className="w-3 h-3" />
              Google Forms'ta açılır — uygulama gerekmez
            </p>
          )}
        </div>

        {/* QR Code */}
        {formReady && (
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <Camera className="w-5 h-5 text-orange-400" />
              QR Kodla Direkt Aç
            </h3>
            <p className="text-sm text-gray-500 mb-6">Telefon kameranı aç ve tara</p>
            <div className="inline-block bg-white p-5 rounded-2xl border-2 border-orange-100 shadow-sm">
              <QRCodeSVG
                value={FORM_URL}
                size={200}
                fgColor="#ea580c"
                level="M"
              />
            </div>
          </div>
        )}

        {/* How it works */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Nasıl Çalışır?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-4">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0">
                  {s.num}
                </div>
                <div>
                  <p className="text-2xl mb-1">{s.icon}</p>
                  <p className="font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form fields preview */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-xl mb-2 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-orange-400" />
            Formda Neler Var?
          </h3>
          <p className="text-sm text-gray-500 mb-6">Dolduracağınız alanlar bunlar:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {formFields.map((f) => (
              <div key={f.label} className={`flex items-center gap-3 rounded-xl p-4 border ${f.color}`}>
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{f.label}</p>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sheets info */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📊</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Veriler Otomatik Kaydedilir</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-3">
                Her form cevabı anında Google Sheets'e işlenir. Ekibimiz hangi noktanın
                ne zaman beslendiğini, mama durumunu ve kim beslediğini takip edebilir.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Kim besledi', 'Saat', 'Hangi nokta', 'Mama durumu', 'Fotoğraf'].map((tag) => (
                  <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location reminder */}
        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">
          <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Besleme Noktaları
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['A Blok', 'Kütüphane', 'Kantin', 'B Blok', 'Spor Kompleksi', 'Merkez Park'].map((loc) => (
              <div key={loc} className="flex items-center gap-2 text-sm text-orange-700">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                {loc}
              </div>
            ))}
          </div>
          <p className="text-xs text-orange-600 mt-3 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Saat bilgisi form gönderildiğinde otomatik eklenir
          </p>
        </div>
      </div>
    </div>
  );
}
