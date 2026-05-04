import { CheckCircle, XCircle, AlertTriangle, BookOpen, Heart, Info } from 'lucide-react';

const safefoods = [
  { name: 'Kedi/Köpek Maması', desc: 'Yaş veya kuru, en sağlıklı seçenek', emoji: '🥫' },
  { name: 'Haşlanmış Tavuk', desc: 'Tuzsuz, kemiksiz, az yağlı', emoji: '🍗' },
  { name: 'Haşlanmış Balık', desc: 'Kılçıksız, tuzsuz, az miktarda', emoji: '🐟' },
  { name: 'Haşlanmış Yumurta', desc: 'Az miktarda, tuzsuz', emoji: '🥚' },
  { name: 'Haşlanmış Pirinç', desc: 'Sadece mamayla karıştırarak', emoji: '🍚' },
  { name: 'Temiz Su', desc: 'Her zaman yanında taze su bırakın', emoji: '💧' },
];

const dangerousfoods = [
  { name: 'Soğan & Sarımsak', desc: 'Kanda zehirlenmeye yol açar', emoji: '🧅', severity: 'yüksek' },
  { name: 'Çikolata', desc: 'Kalp ritim bozukluğu yaratır', emoji: '🍫', severity: 'yüksek' },
  { name: 'Üzüm & Kuru Üzüm', desc: 'Böbrek yetmezliğine neden olur', emoji: '🍇', severity: 'yüksek' },
  { name: 'Alkol', desc: 'Son derece tehlikeli, ölümcül', emoji: '🍺', severity: 'yüksek' },
  { name: 'Tuzlu Yiyecekler', desc: 'Böbrek hasarına yol açar', emoji: '🧂', severity: 'orta' },
  { name: 'Çiğ Balık / Et', desc: 'Parazit ve bakteri riski', emoji: '🥩', severity: 'orta' },
  { name: 'Ekmek & Hamur İşi', desc: 'Besleyici değil, obeziteye neden olur', emoji: '🍞', severity: 'düşük' },
  { name: 'Süt & Süt Ürünleri', desc: 'Yetişkin kediler laktoz intoleranttır', emoji: '🥛', severity: 'düşük' },
];

const tips = [
  {
    icon: Heart,
    title: 'Günde 2-3 Kez Besleyin',
    desc: 'Hayvanların sindirim sistemi düzenli ama az beslenmeye uyarlanmıştır. Aşırı besleme obeziteye ve sağlık sorunlarına neden olur.',
    color: 'bg-orange-50 border-orange-200 text-orange-700',
    iconColor: 'text-orange-500',
  },
  {
    icon: CheckCircle,
    title: 'Yiyecek Kalıntısı Bırakmayın',
    desc: 'Yenilmeyen yiyecekleri kaldırın. Uzun süre açıkta kalan yiyecekler bakterilere ve zararlı böceklere davet çıkarır.',
    color: 'bg-green-50 border-green-200 text-green-700',
    iconColor: 'text-green-500',
  },
  {
    icon: Info,
    title: 'Temiz Su Unutmayın',
    desc: 'Su, hayvanlara verdiğiniz yiyecekten daha önemlidir. Özellikle yaz aylarında su kaplarını sürekli dolu tutun.',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconColor: 'text-blue-500',
  },
  {
    icon: AlertTriangle,
    title: 'İstasyon Dışına Yemek Bırakmayın',
    desc: 'Sadece belirlenen besleme noktalarını kullanın. Rastgele besleme alanları hayvanların tehlikeli bölgelere girmesine neden olur.',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    iconColor: 'text-amber-500',
  },
];

export default function RehberPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
            <BookOpen className="w-4 h-4" />
            TEDU Animal Friends tarafından hazırlandı
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Beslenme Rehberi</h1>
          <p className="text-green-100 max-w-xl mx-auto text-lg">
            Kampüs hayvanlarını doğru ve sağlıklı beslemek için bilmeniz gereken her şey.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-500" />
            Beslenme Kuralları
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className={`rounded-2xl p-5 border ${tip.color}`}>
                <div className="flex items-start gap-3">
                  <tip.icon className={`w-6 h-6 mt-0.5 flex-shrink-0 ${tip.iconColor}`} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safe foods */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Güvenli Yiyecekler</h2>
              <p className="text-sm text-gray-500">Verebileceğiniz, sağlıklı seçenekler</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safefoods.map((food) => (
              <div
                key={food.name}
                className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{food.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900">{food.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{food.desc}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 ml-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* Dangerous foods */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Zararlı Yiyecekler</h2>
              <p className="text-sm text-gray-500">Kesinlikle vermemeniz gereken maddeler</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {dangerousfoods.map((food) => (
              <div
                key={food.name}
                className={`bg-white rounded-2xl p-5 border shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow ${
                  food.severity === 'yüksek'
                    ? 'border-red-200'
                    : food.severity === 'orta'
                    ? 'border-orange-200'
                    : 'border-amber-200'
                }`}
              >
                <span className="text-3xl">{food.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900">{food.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{food.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      food.severity === 'yüksek'
                        ? 'bg-red-100 text-red-700'
                        : food.severity === 'orta'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {food.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency note */}
        <div className="bg-gradient-to-r from-red-500 to-rose-500 rounded-3xl p-8 text-white text-center">
          <AlertTriangle className="w-10 h-10 mx-auto mb-3 opacity-90" />
          <h3 className="text-2xl font-bold mb-2">Hasta veya Yaralı Hayvan Gördünüz mü?</h3>
          <p className="text-red-100 mb-5 max-w-md mx-auto">
            Acil durumda ne yapacağınızı öğrenin. TEDU Animal Friends acil hattına ulaşın.
          </p>
          <a
            href="/acil"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
          >
            Acil Durum Rehberi →
          </a>
        </div>
      </div>
    </div>
  );
}
