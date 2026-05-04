import { AlertTriangle, Heart, MapPin, Shield, MessageCircle, Info } from 'lucide-react';

const WHATSAPP_LINK = 'https://chat.whatsapp.com/I9AYlxEAKtIERwgqUYHAPR?mode=gi_t';

const groupRules = [
  {
    num: '1',
    title: 'Hayvanları Kesinlikle Satmıyoruz',
    desc: 'Eğer birisi gruba sahiplendirmek için yazarsa ve para talep ederse lütfen Animal Friends ile iletişime geçin. Bu, Türkiye\'de yasal olmayan bir eylemdir.',
    icon: '🚫',
    color: 'border-red-200 bg-red-50',
  },
  {
    num: '2',
    title: 'Yardım için Ana Gruba Yazın',
    desc: 'Yardıma ihtiyacı olan bir hayvanı bildirmek veya veteriner/mama konusunda fikir almak için bu ana gruba yazmanızı rica ediyoruz. Ana grupta daha fazla üye olduğu için yardım almanız daha hızlı ve kolay olacaktır.',
    icon: '💬',
    color: 'border-orange-200 bg-orange-50',
  },
  {
    num: '3',
    title: 'Şikayet ve Öneriler',
    desc: 'Eğer bir şikayet/öneri veya bize bildirmek istediğiniz herhangi bir konu olursa bize WhatsApp üzerinden ulaşabilirsiniz.',
    icon: '📢',
    color: 'border-blue-200 bg-blue-50',
  },
  {
    num: '4',
    title: 'Hepimiz Yardımcı Olabiliriz',
    desc: 'Hepimizin öğrenci olduğunu ve okulumuzun hayvanları ile ilgilenmekte herkesin yardımcı olabileceğini unutmayın. Bazen yetişemediğimiz yerler oluyor, bu durumda bizimle iletişime geçerek yardımcı olabilirsiniz.',
    icon: '🤝',
    color: 'border-green-200 bg-green-50',
  },
  {
    num: '5',
    title: 'Evcil Hayvanınızı Okula Bırakmayın',
    desc: 'Okula bırakmak için lütfen hayvanlarınızı getirmeyin! Bu canlar ev yaşamına alıştığı için okulda dejenerasyona giriyor ve buradaki kedilerimiz maalesef onlarla kavga ederek zarar verebiliyor. Okul güvenli diye düşünerek bırakmayın — kediler kolayca kampüse girip çıkabilirler.',
    icon: '🏠',
    color: 'border-amber-200 bg-amber-50',
  },
  {
    num: '6',
    title: 'Veterinere Götürmeden Önce Haber Verin',
    desc: 'Bizim ile iletişime geçmeden kedileri kampüsten çıkarmayın veya veterinere götürmeyin! Daha önce bir canımızı hasta olduğu için habersizce veterinere götürdükleri için ilaçları aksamıştı ve kedimizin iyileşme süreci uzamıştı. Önce bizimle iletişime geçip bilgi almayı/vermeyi unutmayın.',
    icon: '🏥',
    color: 'border-violet-200 bg-violet-50',
  },
];

const steps = [
  {
    step: 1,
    title: 'Sakin Olun, Yaklaşmayın',
    desc: 'Yaralı veya hasta bir hayvan stres altında saldırgan olabilir. Güvenli bir mesafeden durumu değerlendirin.',
    icon: Shield,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    step: 2,
    title: 'Animal Friends Grubuna Yazın',
    desc: 'Önce WhatsApp grubuna yazın. Konumu, hayvanın durumunu ve saati belirtin. Fotoğraf ekleyebilirsiniz.',
    icon: MessageCircle,
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    step: 3,
    title: 'Konumu Kaydedin',
    desc: 'Hayvanın tam konumunu belirleyin. Kampüs içinde ise bina veya alan adını net olarak belirtin.',
    icon: MapPin,
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    step: 4,
    title: 'Kendi Başınıza Taşımayın',
    desc: 'Animal Friends onayı olmadan hayvanı kampüsten çıkarmayın veya veterinere götürmeyin. İlaç uyumsuzluğu gibi ciddi sorunlara yol açabilir.',
    icon: AlertTriangle,
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
  },
];

const symptoms = [
  { sign: 'Yürüyemiyor veya topallıyor', urgent: true },
  { sign: 'Açık yara veya kanama var', urgent: true },
  { sign: 'Bilinç kaybı var, hareketsiz', urgent: true },
  { sign: 'Nefes almakta güçlük çekiyor', urgent: true },
  { sign: 'Aşırı kusma veya ishal', urgent: false },
  { sign: 'Normalden fazla uyuklama', urgent: false },
  { sign: 'Yemek yemiyor, içmiyor', urgent: false },
  { sign: 'Gözünde akıntı veya şişlik', urgent: false },
];

export default function AcilPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-rose-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Acil Durum Rehberi</h1>
          <p className="text-red-100 max-w-xl mx-auto text-lg">
            Kampüste hasta veya yaralı bir hayvan gördüğünüzde yapmanız gereken
            <span className="font-bold text-white"> tek şey</span>: Animal Friends grubuna yazın.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* PRIMARY CTA — WhatsApp */}
        <div className="bg-[#25D366] rounded-3xl p-8 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-5xl">
              🐾
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-green-100 text-sm font-medium mb-1">Birinci öncelik</p>
              <h2 className="text-2xl font-black mb-2">TEDU Animal Friends WhatsApp Grubuna Katıl</h2>
              <p className="text-green-100 text-sm leading-relaxed">
                Acil bir durumda, veterinere götürmeden veya herhangi bir adım atmadan önce
                lütfen gruba yazın. Topluluk sizi yönlendirecektir.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 bg-white text-[#25D366] font-bold text-lg px-7 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              Gruba Katıl
            </a>
          </div>
        </div>

        {/* Steps */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-orange-500" />
            Acil Durumda Ne Yapmalısınız?
          </h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className={`rounded-2xl p-5 border ${s.color} flex items-start gap-4`}>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase">Adım {s.step}</span>
                  <h3 className="font-bold text-gray-900 mt-0.5 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group rules */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Info className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Grup Kuralları</h2>
              <p className="text-sm text-gray-500">Animal Friends tarafından belirlenen önemli kurallar</p>
            </div>
          </div>

          <div className="space-y-3">
            {groupRules.map((rule) => (
              <div key={rule.num} className={`rounded-2xl p-5 border ${rule.color} flex items-start gap-4`}>
                <div className="flex-shrink-0 flex flex-col items-center gap-1">
                  <span className="text-2xl">{rule.icon}</span>
                  <span className="text-xs font-bold text-gray-400">{rule.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{rule.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-4 italic">
            Hepinize çok teşekkür ederiz 🐾 — TEDU Animal Friends
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Belirtileri Tanıyın
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {symptoms.map((s, i) => (
              <div
                key={s.sign}
                className={`flex items-center gap-4 px-5 py-3.5 ${
                  i !== symptoms.length - 1 ? 'border-b border-gray-50' : ''
                } ${s.urgent ? 'bg-red-50' : ''}`}
              >
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.urgent ? 'bg-red-500' : 'bg-amber-400'}`} />
                <p className="text-gray-700 text-sm flex-1">{s.sign}</p>
                {s.urgent && (
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium border border-red-200 flex-shrink-0">
                    Acil
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Don't do */}
        <div className="bg-gray-900 rounded-3xl p-8 text-white">
          <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Kesinlikle Yapmayın
          </h3>
          <ul className="space-y-3">
            {[
              'Animal Friends\'e haber vermeden hayvanı kampüsten çıkarmayın',
              'Gruba sormadan veterinere götürmeyin — ilaç uyumsuzluğu tehlikeli olabilir',
              'Evcil hayvanınızı "güvenli" diye okula bırakmayın',
              'Sahiplendirme için para talep eden kişilerle muhatap olmayın, grubu bilgilendirin',
              'İnsan ilacı vermeyin — çoğu ilaç hayvanlar için zehirlidir',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom WhatsApp reminder */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[#25D366] rounded-2xl p-5 text-white hover:opacity-95 transition-opacity shadow-md"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 fill-white" />
            <div>
              <p className="font-bold">TEDU Animal Friends</p>
              <p className="text-green-100 text-sm">WhatsApp Topluluğu</p>
            </div>
          </div>
          <span className="bg-white text-[#25D366] font-bold text-sm px-4 py-2 rounded-xl">
            Katıl →
          </span>
        </a>
      </div>
    </div>
  );
}
