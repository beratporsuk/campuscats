import Link from 'next/link';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Campus Cats Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-bold text-white text-lg">
                Pati<span className="text-orange-400">Durak</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              TEDU kampüsündeki sokak hayvanları için akıllı farkındalık ve destek sistemi.
            </p>
            <p className="text-xs text-gray-500 mt-3">TEDU Animal Friends iş birliği ile</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/rehber', label: 'Beslenme Rehberi' },
                { href: '/acil', label: 'Acil Durum' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Proje Hakkında</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bu proje, TEDU102 Servis Öğrenimi dersi kapsamında hazırlanmıştır.
              Kampüs hayvanlarının refahını artırmak ve sorumlu besleme alışkanlıklarını
              teşvik etmek amacıyla geliştirilmiştir.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 PatiDurak — TEDU102 Servis Öğrenimi Projesi</p>
          <p className="flex items-center gap-1">
            Kampüs hayvanları için <Heart className="w-3 h-3 text-orange-400 fill-orange-400" /> ile yapıldı
          </p>
        </div>
      </div>
    </footer>
  );
}
