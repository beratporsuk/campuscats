import { CheckCircle, XCircle, AlertTriangle, BookOpen, Heart, Info } from 'lucide-react';

const safefoods = [
  { name: 'Cat / Dog Food', desc: 'Wet or dry — the healthiest option', emoji: '🥫' },
  { name: 'Boiled Chicken', desc: 'Unsalted, boneless, low-fat', emoji: '🍗' },
  { name: 'Boiled Fish', desc: 'Boneless, unsalted, in small amounts', emoji: '🐟' },
  { name: 'Boiled Egg', desc: 'Small amounts, unsalted', emoji: '🥚' },
  { name: 'Boiled Rice', desc: 'Only mixed with cat/dog food', emoji: '🍚' },
  { name: 'Fresh Water', desc: 'Always leave clean, fresh water nearby', emoji: '💧' },
];

const dangerousfoods = [
  { name: 'Onion & Garlic', desc: 'Causes blood poisoning', emoji: '🧅', severity: 'high' },
  { name: 'Chocolate', desc: 'Can cause heart arrhythmia', emoji: '🍫', severity: 'high' },
  { name: 'Grapes & Raisins', desc: 'Leads to kidney failure', emoji: '🍇', severity: 'high' },
  { name: 'Alcohol', desc: 'Extremely dangerous — can be fatal', emoji: '🍺', severity: 'high' },
  { name: 'Salty Foods', desc: 'Causes kidney damage', emoji: '🧂', severity: 'medium' },
  { name: 'Raw Fish / Meat', desc: 'Risk of parasites and bacteria', emoji: '🥩', severity: 'medium' },
  { name: 'Bread & Pastries', desc: 'Not nutritious; causes obesity', emoji: '🍞', severity: 'low' },
  { name: 'Milk & Dairy', desc: 'Adult cats are lactose intolerant', emoji: '🥛', severity: 'low' },
];

const tips = [
  {
    icon: Heart,
    title: 'Feed 2–3 Times a Day',
    desc: 'A cat\'s digestive system is adapted to regular but small meals. Overfeeding leads to obesity and health problems.',
    color: 'bg-orange-50 border-orange-200 text-orange-700',
    iconColor: 'text-orange-500',
  },
  {
    icon: CheckCircle,
    title: 'Remove Uneaten Food',
    desc: 'Pick up any leftover food. Food left out for too long attracts bacteria, insects, and other pests.',
    color: 'bg-green-50 border-green-200 text-green-700',
    iconColor: 'text-green-500',
  },
  {
    icon: Info,
    title: 'Always Leave Water',
    desc: 'Water is more important than food. Especially in summer, keep water bowls filled and refreshed regularly.',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconColor: 'text-blue-500',
  },
  {
    icon: AlertTriangle,
    title: 'Use Designated Stations Only',
    desc: 'Only feed at the marked feeding stations. Random feeding spots can lead animals into dangerous areas.',
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
            Prepared by TEDU Animal Friends
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Feeding Guide</h1>
          <p className="text-green-100 max-w-xl mx-auto text-lg">
            Everything you need to know about feeding campus animals correctly and safely.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-500" />
            Feeding Rules
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
              <h2 className="text-2xl font-bold text-gray-900">Safe Foods</h2>
              <p className="text-sm text-gray-500">Healthy options you can give</p>
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
              <h2 className="text-2xl font-bold text-gray-900">Harmful Foods</h2>
              <p className="text-sm text-gray-500">Items you should never give</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {dangerousfoods.map((food) => (
              <div
                key={food.name}
                className={`bg-white rounded-2xl p-5 border shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow ${
                  food.severity === 'high' ? 'border-red-200' : food.severity === 'medium' ? 'border-orange-200' : 'border-amber-200'
                }`}
              >
                <span className="text-3xl">{food.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900">{food.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{food.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    food.severity === 'high' ? 'bg-red-100 text-red-700' : food.severity === 'medium' ? 'bg-orange-100 text-orange-700' : 'bg-amber-100 text-amber-700'
                  }`}>
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
          <h3 className="text-2xl font-bold mb-2">Found a Sick or Injured Animal?</h3>
          <p className="text-red-100 mb-5 max-w-md mx-auto">
            Learn what to do in an emergency and how to reach TEDU Animal Friends immediately.
          </p>
          <a
            href="/acil"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
          >
            Emergency Guide →
          </a>
        </div>
      </div>
    </div>
  );
}
