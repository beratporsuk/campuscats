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
              A smart awareness and support system for stray animals on the TEDU campus.
            </p>
            <p className="text-xs text-gray-500 mt-3">In collaboration with TEDU Animal Friends</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/takip', label: 'Feeding Tracker' },
                { href: '/rehber', label: 'Feeding Guide' },
                { href: '/acil', label: 'Emergency' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">About the Project</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              This project was developed as part of the TEDU102 Service Learning course
              to improve the well-being of campus animals and promote responsible feeding habits.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 PatiDurak — TEDU102 Service Learning Project</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-orange-400 fill-orange-400" /> for campus animals
          </p>
        </div>
      </div>
    </footer>
  );
}
