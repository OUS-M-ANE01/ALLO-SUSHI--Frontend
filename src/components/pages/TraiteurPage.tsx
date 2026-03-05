import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TraiteurPageProps {
  onClose: () => void;
}

interface FormState {
  nom: string;
  tel: string;
  email: string;
  type: string;
  convives: string;
  date: string;
  message: string;
}

const prestations = [
  {
    icon: 'fa-ring',
    title: 'Mariage & Réception',
    desc: "Plateaux prestige, assortiments luxe, service soigné. Nous créons une expérience mémorable pour votre grand jour — de l'apéritif au buffet de minuit.",
    bg: '#fff8f8',
  },
  {
    icon: 'fa-briefcase',
    title: 'Séminaire & Corporate',
    desc: "Buffets japonais, déjeuners d'affaires, cocktails d'entreprise. Impressionnez vos clients et collaborateurs avec des créations haut de gamme.",
    bg: '#f8f9ff',
  },
  {
    icon: 'fa-champagne-glasses',
    title: 'Cocktail Dinatoire',
    desc: 'Pièces cocktail, makis en verrines, nigiris & rolls mignardises. Format convivial et élégant pour vos soirées et apéritifs dînatoires.',
    bg: '#f8fff9',
  },
  {
    icon: 'fa-balloons',
    title: 'Événement Privé',
    desc: 'Anniversaires, baptêmes, fêtes de famille. Formules modulables selon vos envies, votre lieu et votre budget.',
    bg: '#fffdf5',
  },
];

const formules = [
  {
    name: 'Découverte',
    range: '15 à 30 convives',
    accent: false,
    badge: null,
    items: [
      '1 assortiment au choix',
      'Plateaux Makis & Californias',
      'Plateaux Nigiris',
      'Accompagnements & sauces',
      'Livraison incluse (Dakar)',
    ],
    prix: 'Dès 150 000 FCFA',
  },
  {
    name: 'Prestige',
    range: '30 à 80 convives',
    accent: true,
    badge: 'Le plus populaire',
    items: [
      '2 assortiments premium',
      'Makis, Aromakis & Californias',
      'Nigiris & Sashimis premium',
      'Woks chauds au choix',
      'Boissons & desserts',
    ],
    prix: 'Dès 350 000 FCFA',
  },
  {
    name: 'Premium',
    range: '80 convives et plus',
    accent: false,
    badge: null,
    items: [
      'Menu élaboré sur mesure',
      'Chef à domicile disponible',
      'Service & matériel inclus',
      'Décoration japonaise',
      'Coordinateur dédié',
    ],
    prix: 'Sur devis',
  },
];

const faqs = [
  { q: "Combien de temps à l'avance faut-il réserver ?", a: "Nous recommandons de nous contacter au minimum 7 jours avant pour les petits événements, et 3 à 4 semaines pour les mariages ou grands rassemblements." },
  { q: "Livrez-vous dans toute la région de Dakar ?", a: "Oui, nous livrons dans tout le Grand Dakar, y compris Plateau, Mermoz, Ouakam, Almadies, Ngor, Sacré-Cœur, et bien d'autres. Les frais de livraison varient selon la distance." },
  { q: "Le devis est-il gratuit ?", a: "Absolument. Nos devis sont entièrement gratuits et sans engagement. Remplissez simplement le formulaire ci-dessus et nous vous recontactons sous 24h." },
  { q: "Fournissez-vous la vaisselle et la décoration ?", a: "Nos formules Prestige et Premium incluent la vaisselle jetable premium. Une décoration japonaise et du matériel de service peuvent être arrangés sur demande." },
  { q: "Peut-on personnaliser le menu ?", a: "Oui, chaque événement est unique. Nous proposons des menus entièrement sur mesure — précisez vos préférences et contraintes alimentaires lors de la demande de devis." },
];

export const TraiteurPage: React.FC<TraiteurPageProps> = ({ onClose }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    nom: '', tel: '', email: '', type: '', convives: '', date: '', message: '',
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Bonjour AllooSushi ! Je souhaite un devis traiteur.\n\n` +
      `▸ Nom : ${form.nom}\n` +
      `▸ Tél : ${form.tel}\n` +
      (form.email ? `▸ Email : ${form.email}\n` : '') +
      `▸ Type d\u2019événement : ${form.type}\n` +
      `▸ Nombre de convives : ${form.convives}\n` +
      (form.date ? `▸ Date souhaitée : ${form.date}\n` : '') +
      (form.message ? `▸ Message : ${form.message}` : '');
    window.open(`https://wa.me/221781424646?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── TOP BAR ── */}
      <div className="flex-shrink-0 flex items-center justify-between px-5 sm:px-8 h-[62px] bg-white border-b border-gray-100 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/logo-alloo.png" alt="AllooSushi" className="h-9 w-auto object-contain" />
          <div>
            <div className="font-['Bebas_Neue'] text-[18px] tracking-wider text-gray-900 leading-none">
              ALL<span className="text-red-600">OO</span> SUSHI
            </div>
            <div className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
              Service Traiteur
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-300"
          aria-label="Fermer"
        >
          <i className="fas fa-times text-sm" />
        </button>
      </div>

      {/* ── SCROLLABLE CONTENT ── */}
      <div className="flex-1 overflow-y-auto">

        {/* HERO */}
        <div className="relative h-[240px] sm:h-[360px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=1600&q=80"
            alt="Traiteur AllooSushi"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)', transform: 'scale(1.04)' }}
            loading="eager"
            decoding="async"
          />
          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <span className="text-red-400 text-[10px] font-bold tracking-[3px] uppercase mb-3">
              Service Traiteur
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-3 leading-tight">
              Vos Événements, <span className="text-red-400">Sublimés</span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
              Mariages, séminaires, cocktails, soirées privées — AllooSushi sublime chaque
              occasion avec des créations japonaises haut de gamme.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">

          {/* ── STATS ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { val: '10+', label: "Années d'expérience" },
              { val: '500+', label: 'Événements réalisés' },
              { val: '30', label: 'Convives minimum' },
              { val: '7j/7', label: 'Disponibilité' },
            ].map((s, i) => (
              <div key={i} className="bg-[#faf8f4] rounded-2xl p-5 text-center border border-gray-100">
                <div className="font-['Bebas_Neue'] text-4xl text-red-600 mb-1">{s.val}</div>
                <div className="text-xs text-gray-400 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── PRESTATIONS ── */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">
                Nos Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Nos Prestations
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto leading-relaxed">
                Chaque événement est unique — nous adaptons nos formules à vos exigences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {prestations.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border border-gray-100 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                  style={{ background: p.bg }}
                >
                  <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <i className={`fas ${p.icon} text-red-600`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-[15px] mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── FORMULES ── */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">
                Tarification
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Nos Formules
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                Prix indicatifs — un devis personnalisé vous sera transmis après étude de votre demande.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {formules.map((f, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-7 border-2 ${
                    f.accent
                      ? 'bg-gray-900 border-gray-900 text-white'
                      : 'bg-white border-gray-100 text-gray-800'
                  }`}
                >
                  {f.badge && (
                    <div className="text-[9px] font-bold tracking-[2px] text-red-400 uppercase mb-3">
                      {f.badge}
                    </div>
                  )}
                  <div
                    className={`font-['Bebas_Neue'] text-2xl mb-0.5 ${
                      f.accent ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {f.name}
                  </div>
                  <div className="text-xs mb-6 opacity-40">{f.range}</div>
                  <ul className="flex flex-col gap-3 mb-7">
                    {f.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm">
                        <i
                          className={`fas fa-check mt-0.5 text-xs ${
                            f.accent ? 'text-red-400' : 'text-red-600'
                          }`}
                        />
                        <span className={f.accent ? 'text-white/75' : 'text-gray-600'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`font-['Bebas_Neue'] text-2xl ${
                      f.accent ? 'text-red-400' : 'text-red-600'
                    }`}
                  >
                    {f.prix}
                  </div>
                  <p className="text-[11px] opacity-35 mt-1">Prix indicatif · devis personnalisé</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DEVIS FORM ── */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">
                Gratuit &amp; Sans Engagement
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Demande de Devis
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                Remplissez le formulaire — nous vous recontactons sous 24h avec une proposition personnalisée.
              </p>
            </div>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center max-w-lg mx-auto">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <i className="fas fa-check text-green-600 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-2">Demande envoyée !</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Votre demande a été transmise via WhatsApp. Notre équipe traiteur vous recontacte sous 24h.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-red-600 hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#faf8f4] border border-gray-100 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Nom */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Prénom & Nom"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  {/* Tel */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      required
                      value={form.tel}
                      onChange={handleChange}
                      placeholder="+221 7X XXX XX XX"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  {/* Type événement */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Type d'événement *
                    </label>
                    <select
                      name="type"
                      required
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    >
                      <option value="">Sélectionner…</option>
                      <option>Mariage &amp; Réception</option>
                      <option>Séminaire / Corporate</option>
                      <option>Cocktail Dinatoire</option>
                      <option>Buffet Privé</option>
                      <option>Anniversaire</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  {/* Convives */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Nombre de convives *
                    </label>
                    <input
                      type="number"
                      name="convives"
                      required
                      min="15"
                      value={form.convives}
                      onChange={handleChange}
                      placeholder="Ex : 50"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  {/* Date */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                    Message (lieu, budget, attentes…)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre événement, le lieu de réception, vos attentes particulières…"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-xl text-sm font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-base" />
                  Envoyer ma demande via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Vous serez redirigé·e vers WhatsApp avec votre message pré-rempli.
                </p>
              </form>
            )}
          </div>

          {/* ── FAQ ── */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">
                Questions Fréquentes
              </span>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2">FAQ Traiteur</h2>
            </div>
            <div className="max-w-2xl mx-auto flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-gray-900 hover:text-red-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <i
                      className={`fas fa-chevron-down text-xs text-gray-400 ml-3 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180 text-red-500' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── CONTACT DIRECT ── */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-10 text-white text-center mb-4">
            <div className="text-[10px] font-bold tracking-[3px] text-red-400 uppercase mb-3">
              Contact Direct
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Parlons de votre projet
            </h3>
            <p className="text-white/40 text-sm mb-8">
              Notre équipe traiteur est disponible 7j/7 pour vous conseiller.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:338423011"
                className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-5 py-3 text-sm font-medium no-underline text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <i className="fas fa-phone text-red-400" /> 33 842 30 11
              </a>
              <a
                href="https://wa.me/221781424646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-5 py-3 text-sm font-medium no-underline text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <i className="fab fa-whatsapp text-red-400" /> 78 142 46 46
              </a>
              <a
                href="mailto:Traiteur@alloosushi.com"
                className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-5 py-3 text-sm font-medium no-underline text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <i className="fas fa-envelope text-red-400" /> Traiteur@alloosushi.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
