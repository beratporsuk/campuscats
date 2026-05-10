'use client';

import { QRCodeSVG } from 'qrcode.react';
import { ClipboardList, CheckCircle, MapPin, Camera, Clock, ExternalLink } from 'lucide-react';

const FORM_URL = 'https://forms.gle/8ntuG9zd7LQxb2iz8';

const formFields = [
  { icon: '👤', label: 'Name', desc: 'Optional', color: 'bg-gray-50 border-gray-200' },
  { icon: '📍', label: 'Feeding Point', desc: 'A Block, Library, Cafeteria...', color: 'bg-orange-50 border-orange-200' },
  { icon: '🍽️', label: 'What did you refill?', desc: 'Food / Water / Both', color: 'bg-amber-50 border-amber-200' },
  { icon: '📊', label: 'Food Status', desc: 'Empty / Half-full / Full', color: 'bg-green-50 border-green-200' },
  { icon: '🕐', label: 'Time', desc: 'Recorded automatically', color: 'bg-blue-50 border-blue-200' },
  { icon: '📸', label: 'Photo', desc: 'Optional', color: 'bg-violet-50 border-violet-200' },
];

const steps = [
  { num: '1', title: 'Feed the Animals', desc: 'Refill food or water.', icon: '🐱' },
  { num: '2', title: 'Scan the QR Code', desc: 'Open this page and go to the form.', icon: '📱' },
  { num: '3', title: 'Fill in the Form', desc: 'Select the location and what you refilled.', icon: '✍️' },
  { num: '4', title: 'Auto-saved', desc: 'Data goes to Google Sheets — the team can see it.', icon: '✅' },
];

export default function TakipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ClipboardList className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Feeding Tracker</h1>
          <p className="text-orange-100 max-w-xl mx-auto text-lg">
            After refilling food or water, fill in the form so our team knows
            which station was fed and when.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">

        {/* Main CTA */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
          <div className="text-6xl mb-4">🐱</div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Log a Feeding</h2>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">
            Takes less than 30 seconds. Every log helps us take better care of
            the campus animals.
          </p>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-200 bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:scale-105 hover:shadow-xl"
          >
            <ClipboardList className="w-6 h-6" />
            Open Form
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>

          <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
            <ExternalLink className="w-3 h-3" />
            Opens in Google Forms — no app needed
          </p>
        </div>

        {/* QR Code */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Camera className="w-5 h-5 text-orange-400" />
            Open with QR Code
          </h3>
          <p className="text-sm text-gray-500 mb-6">Point your phone camera at this code</p>
          <div className="inline-block bg-white p-5 rounded-2xl border-2 border-orange-100 shadow-sm">
            <QRCodeSVG value={FORM_URL} size={200} fgColor="#ea580c" level="M" />
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            How It Works
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
            What's in the Form?
          </h3>
          <p className="text-sm text-gray-500 mb-6">Fields you'll be asked to fill in:</p>
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
              <h3 className="text-xl font-bold mb-2">Responses are Saved Automatically</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-3">
                Every form submission is instantly logged in Google Sheets. Our team can
                track which station was fed, when, by whom, and the food status.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Who fed', 'Time', 'Which station', 'Food status', 'Photo'].map((tag) => (
                  <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location list */}
        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">
          <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Feeding Stations
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['A Block', 'Library', 'Cafeteria', 'B Block', 'Sports Complex', 'Central Park'].map((loc) => (
              <div key={loc} className="flex items-center gap-2 text-sm text-orange-700">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                {loc}
              </div>
            ))}
          </div>
          <p className="text-xs text-orange-600 mt-3 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Timestamp is recorded automatically when you submit
          </p>
        </div>
      </div>
    </div>
  );
}
