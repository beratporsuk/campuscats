import { AlertTriangle, Heart, MapPin, Shield, MessageCircle, Info } from 'lucide-react';

const WHATSAPP_LINK = 'https://chat.whatsapp.com/I9AYlxEAKtIERwgqUYHAPR?mode=gi_t';

const groupRules = [
  {
    num: '1',
    title: 'We Never Sell Animals',
    desc: 'If someone in the group asks for money in exchange for adoption, please contact Animal Friends immediately. This is illegal in Turkey.',
    icon: '🚫',
    color: 'border-red-200 bg-red-50',
  },
  {
    num: '2',
    title: 'Write to the Main Group for Help',
    desc: 'To report an animal in need or ask for advice on food/vet care, please write in this main group. We have more members here so you\'ll get help faster.',
    icon: '💬',
    color: 'border-orange-200 bg-orange-50',
  },
  {
    num: '3',
    title: 'Complaints & Suggestions',
    desc: 'If you have a complaint, suggestion, or anything you\'d like to share with us, you can reach us via WhatsApp.',
    icon: '📢',
    color: 'border-blue-200 bg-blue-50',
  },
  {
    num: '4',
    title: 'Everyone Can Help',
    desc: 'Remember that we\'re all students and anyone can help care for campus animals. Sometimes we can\'t reach every spot — contact us and we\'ll guide you.',
    icon: '🤝',
    color: 'border-green-200 bg-green-50',
  },
  {
    num: '5',
    title: 'Do Not Bring Your Pet to Campus',
    desc: 'Please don\'t bring your pets to leave on campus. House cats aren\'t used to outdoor life and may fight with campus cats, causing harm. Campus is an open area — cats can easily wander into danger.',
    icon: '🏠',
    color: 'border-amber-200 bg-amber-50',
  },
  {
    num: '6',
    title: 'Contact Us Before Taking an Animal to the Vet',
    desc: 'Do not remove a cat from campus or take it to a vet without contacting us first. A previous incident caused a cat\'s medication to be disrupted because we weren\'t informed. Always check with us first so we can coordinate care.',
    icon: '🏥',
    color: 'border-violet-200 bg-violet-50',
  },
];

const steps = [
  {
    step: 1,
    title: 'Stay Calm — Don\'t Approach',
    desc: 'An injured or sick animal may act aggressively under stress. Assess the situation from a safe distance.',
    icon: Shield,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    step: 2,
    title: 'Write to the Animal Friends Group',
    desc: 'Message the WhatsApp group first. Include the location, the animal\'s condition, and the time. Photos help.',
    icon: MessageCircle,
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    step: 3,
    title: 'Note the Location',
    desc: 'Identify the exact location clearly — building name, area, or nearby landmark on campus.',
    icon: MapPin,
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    step: 4,
    title: 'Do Not Move the Animal',
    desc: 'Do not remove the animal from campus or take it to a vet without Animal Friends\' approval. Medication inconsistency can seriously delay recovery.',
    icon: AlertTriangle,
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
  },
];

const symptoms = [
  { sign: 'Cannot walk or is limping', urgent: true },
  { sign: 'Visible wound or bleeding', urgent: true },
  { sign: 'Unconscious or unresponsive', urgent: true },
  { sign: 'Difficulty breathing', urgent: true },
  { sign: 'Excessive vomiting or diarrhea', urgent: false },
  { sign: 'Sleeping more than usual', urgent: false },
  { sign: 'Not eating or drinking', urgent: false },
  { sign: 'Discharge or swelling around the eye', urgent: false },
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
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Emergency Guide</h1>
          <p className="text-red-100 max-w-xl mx-auto text-lg">
            Found a sick or injured animal on campus? The
            <span className="font-bold text-white"> one thing</span> you should do:
            write to the Animal Friends group.
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
              <p className="text-green-100 text-sm font-medium mb-1">First priority</p>
              <h2 className="text-2xl font-black mb-2">Join the TEDU Animal Friends WhatsApp Group</h2>
              <p className="text-green-100 text-sm leading-relaxed">
                In an emergency, before taking any action — before going to a vet —
                please write to the group. The team will guide you.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 bg-white text-[#25D366] font-bold text-lg px-7 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              Join Group
            </a>
          </div>
        </div>

        {/* Steps */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-orange-500" />
            What Should You Do?
          </h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className={`rounded-2xl p-5 border ${s.color} flex items-start gap-4`}>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase">Step {s.step}</span>
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
              <h2 className="text-2xl font-bold text-gray-900">Group Rules</h2>
              <p className="text-sm text-gray-500">Important rules set by Animal Friends</p>
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
            Thank you all so much 🐾 — TEDU Animal Friends
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Recognise the Signs
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {symptoms.map((s, i) => (
              <div
                key={s.sign}
                className={`flex items-center gap-4 px-5 py-3.5 ${i !== symptoms.length - 1 ? 'border-b border-gray-50' : ''} ${s.urgent ? 'bg-red-50' : ''}`}
              >
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.urgent ? 'bg-red-500' : 'bg-amber-400'}`} />
                <p className="text-gray-700 text-sm flex-1">{s.sign}</p>
                {s.urgent && (
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium border border-red-200 flex-shrink-0">
                    Urgent
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
            Never Do These
          </h3>
          <ul className="space-y-3">
            {[
              'Do not remove an animal from campus without notifying Animal Friends first',
              'Do not take it to a vet without checking with the group — medication conflicts can be dangerous',
              'Do not bring your pet to campus thinking it\'s "safe"',
              'Do not deal with anyone asking for money for adoption — report it to the group',
              'Do not give human medication — most drugs are toxic to cats and dogs',
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
              <p className="text-green-100 text-sm">WhatsApp Community</p>
            </div>
          </div>
          <span className="bg-white text-[#25D366] font-bold text-sm px-4 py-2 rounded-xl">
            Join →
          </span>
        </a>
      </div>
    </div>
  );
}
