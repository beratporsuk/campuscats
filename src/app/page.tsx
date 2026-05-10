import Link from 'next/link';
import Image from 'next/image';
import { ClipboardList, BookOpen, Phone, Heart, Shield, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://chat.whatsapp.com/I9AYlxEAKtIERwgqUYHAPR?mode=gi_t';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-orange-200">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            TEDU Animal Friends iş birliği ile
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative animate-float">
              <Image
                src="/logo.png"
                alt="Campus Cats Logo"
                width={160}
                height={160}
                className="rounded-full shadow-2xl"
                priority
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Pati
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              Durak
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto font-medium">
            Kampüs sokak hayvanları için akıllı farkındalık ve destek sistemi
          </p>
          <p className="text-base text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Sorumlu besleme alışkanlıkları oluşturun, aşırı beslenmeyi önleyin
            ve kampüs hayvanlarının sağlığını birlikte koruyun.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/takip"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <ClipboardList className="w-5 h-5" />
              Besleme Kaydı Bırak
            </Link>
            <Link
              href="/rehber"
              className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-gray-200"
            >
              <BookOpen className="w-5 h-5 text-orange-500" />
              Beslenme Rehberi
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs">Aşağı kaydır</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-white text-center">
            {[
              { value: '📋', label: 'Google Form Takibi', icon: ClipboardList },
              { value: '♥', label: 'Sorumlu Besleme', icon: Heart },
              { value: '100%', label: 'Ücretsiz & Açık', icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="w-6 h-6 opacity-80 mb-1" />
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="text-sm opacity-80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Nasıl Çalışır?</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">3 Basit Adım</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                emoji: '🐱',
                title: 'Hayvanları Besle',
                desc: 'Mama veya su doldurun. Her besleme noktasında bir kap bulunmaktadır.',
                color: 'bg-orange-50 border-orange-200',
              },
              {
                step: '02',
                emoji: '📱',
                title: 'Formu Aç',
                desc: 'QR kodu tarayın veya "Besleme Kaydı Bırak" butonuna basın. Uygulama gerekmez.',
                color: 'bg-amber-50 border-amber-200',
              },
              {
                step: '03',
                emoji: '✅',
                title: 'Kaydını Bırak',
                desc: 'Hangi noktada ne doldurduğunu seç, gönder. Otomatik olarak kaydedilir.',
                color: 'bg-green-50 border-green-200',
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`relative bg-white rounded-3xl p-8 border shadow-sm hover:shadow-md transition-shadow ${item.color}`}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div className="text-5xl mb-5">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/takip"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <ClipboardList className="w-5 h-5" />
              Besleme Kaydı Bırak
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#25D366] rounded-3xl p-10 text-white text-center shadow-xl">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90 fill-white" />
            <h2 className="text-3xl font-bold mb-3">Topluluğa Katıl</h2>
            <p className="text-green-100 mb-6 max-w-lg mx-auto">
              TEDU Animal Friends WhatsApp grubuna katılın. Acil durumlar, beslenme tavsiyeleri
              ve kampüs hayvanlarına destek için tek adres.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#25D366] font-bold px-8 py-3.5 rounded-xl hover:scale-105 transition-transform shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366]" />
              WhatsApp Grubuna Katıl
            </a>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-red-500 to-rose-500 rounded-3xl p-10 text-white text-center shadow-xl">
            <Phone className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">Acil Durum mu?</h2>
            <p className="text-red-100 mb-6 max-w-lg mx-auto">
              Yaralı veya hasta bir hayvan gördüğünüzde ne yapmanız gerektiğini öğrenin.
            </p>
            <Link
              href="/acil"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-3.5 rounded-xl hover:scale-105 transition-transform shadow-md"
            >
              <Phone className="w-4 h-4" />
              Acil Rehberi Görüntüle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
