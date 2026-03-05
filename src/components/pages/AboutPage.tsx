import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AboutPageProps {
  onClose: () => void;
  onTraiteur: () => void;
}

const values = [
  { icon: 'fa-fish', title: 'Fraîcheur absolue', desc: 'Chaque poisson est sélectionné quotidiennement auprès de fournisseurs certifiés. Rien n\'est préparé à l\'avance — votre commande est confectionnée à la minute.' },
  { icon: 'fa-leaf', title: 'Ingrédients de qualité', desc: 'Riz à sushi japonais, saumon Label Rouge, avocats maturés à point, algues nori premium. Nous ne faisons aucun compromis sur la qualité des matières premières.' },
  { icon: 'fa-motorcycle', title: 'Livraison 7j/7', desc: 'Disponibles de 11h30 à 23h00, tous les jours de la semaine. Notre flotte de livreurs dédiés garantit une arrivée rapide et dans les meilleures conditions.' },
  { icon: 'fa-shield-halved', title: 'Hygiène & Sécurité', desc: 'Respect strict des normes HACCP, chaîne du froid maîtrisée, cuisine inspectée régulièrement. La sécurité alimentaire est notre priorité absolue.' },
  { icon: 'fa-heart', title: 'Passion japonaise', desc: 'Nos cuisiniers sont formés aux techniques traditionnelles japonaises — itamae, découpe du poisson, préparation du riz à sushi. L\'authenticité au cœur de chaque pièce.' },
  { icon: 'fa-concierge-bell', title: 'Service sur mesure', desc: 'De la commande individuelle au grand buffet d\'entreprise, nous nous adaptons à tous vos besoins. Traiteur, événements, livraison express — nous avons tout prévu.' },
];

const timeline = [
  { year: '2014', title: 'Les débuts', desc: 'AllooSushi ouvre ses portes au Plateau, Dakar, avec une petite équipe passionnée et une carte resserrée de 20 références.' },
  { year: '2016', title: 'Lancement de la livraison', desc: 'Face à la demande croissante, nous développons notre service de livraison à domicile — une première au Sénégal pour un restaurant japonais.' },
  { year: '2019', title: 'Expansion de la carte', desc: 'Intégration des woks thaï, des burgers gastronomiques et des pizzas artisanales. AllooSushi devient une référence multi-cuisines à Dakar.' },
  { year: '2021', title: 'Service Traiteur', desc: 'Lancement officiel du pôle traiteur événementiel — mariages, séminaires, cocktails. Plus de 200 événements réalisés la première année.' },
  { year: '2024', title: "Aujourd'hui", desc: 'Plus de 500 événements traiteur, des milliers de commandes livrées chaque mois, et toujours la même passion pour vous offrir le meilleur.' },
];

const faqItems = [
  {
    q: "Quels sont vos horaires d'ouverture ?",
    a: "Nous sommes ouverts 7j/7 de 11h30 à 23h00. En période de fêtes ou d'événements spéciaux, les horaires peuvent être étendus.",
  },
  {
    q: "Quel est le délai de livraison moyen ?",
    a: "En moyenne 30 à 50 minutes selon votre zone. Nos sushis étant préparés uniquement à la commande, comptez environ 20 min de préparation + le temps de trajet.",
  },
  {
    q: "Quelles zones de Dakar livrez-vous ?",
    a: "Nous livrons dans tout le Grand Dakar : Plateau, Mermoz, Almadies, Ngor, Ouakam, Sacré-Cœur, Liberté, Point E, Fann, Medina et bien d'autres. Les frais varient de 500 à 3 000 FCFA selon la zone.",
  },
  {
    q: "Y a-t-il un minimum de commande ?",
    a: "Aucun minimum n'est imposé. Cependant, nous recommandons un minimum de 5 000 FCFA pour que la livraison soit économiquement optimale.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Paiement en espèces à la livraison, Orange Money et Wave. D'autres modes peuvent être disponibles sur demande.",
  },
  {
    q: "Les sushis sont-ils toujours frais ?",
    a: "Absolument — c'est notre engagement fondamental. Aucune pièce n'est préparée à l'avance. Chaque commande est confectionnée au moment où vous passez votre commande.",
  },
  {
    q: "Comment passer une commande ?",
    a: "Par téléphone au 33 842 30 11, via WhatsApp au 78 142 46 46, ou directement sur notre site. Un conseiller est disponible 7j/7.",
  },
  {
    q: "Proposez-vous un service traiteur ?",
    a: "Oui ! Mariages, séminaires, cocktails, anniversaires — des formules sur mesure à partir de 30 convives. Devis gratuit et sans engagement.",
  },
  {
    q: "Vos produits contiennent-ils des allergènes ?",
    a: "Oui, nos sushis contiennent du poisson cru, du sésame, du soja (sauce et algues), du gluten (riz vinaigré, certaines sauces) et des crustacés. Informez-nous de vos allergies lors de la commande.",
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onClose, onTraiteur }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* TOP BAR */}
      <div className="flex-shrink-0 flex items-center justify-between px-5 sm:px-8 h-[62px] bg-white border-b border-gray-100 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/logo-alloo.png" alt="AllooSushi" className="h-9 w-auto object-contain" />
          <div>
            <div className="font-['Bebas_Neue'] text-[18px] tracking-wider text-gray-900 leading-none">
              ALL<span className="text-red-600">OO</span> SUSHI
            </div>
            <div className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
              À Propos
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

      {/* SCROLLABLE */}
      <div className="flex-1 overflow-y-auto">

        {/* HERO */}
        <div className="relative h-[240px] sm:h-[340px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1600&q=80"
            alt="AllooSushi"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.45)', transform: 'scale(1.04)' }}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <span className="text-red-400 text-[10px] font-bold tracking-[3px] uppercase mb-3">
              Notre Histoire
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-3 leading-tight">
              À Propos d'<span className="text-red-400">AllooSushi</span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
              Depuis 2014, nous mettons la fraîcheur et la passion au cœur de chaque pièce.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">

          {/* INTRO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
            <div>
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">Qui sommes-nous</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                Le goût du Japon,<br />livré à Dakar
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                AllooSushi est né d'une passion simple : rendre les saveurs authentiques du Japon accessibles aux Dakarois, directement chez eux, sans jamais sacrifier la qualité.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Chaque plat est préparé à la commande par des cuisiniers formés aux techniques traditionnelles japonaises — découpe du poisson, préparation du riz à sushi, façonnage à la main. Rien n'est préparé à l'avance, jamais.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                De la table individuelle au grand buffet d'entreprise, AllooSushi s'adapte à tous vos besoins avec la même exigence de qualité et le même soin du détail.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[380px]">
              <div className="absolute left-0 top-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=700&q=80"
                  alt="Chef"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[52%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80"
                  alt="Sushis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute top-4 right-2 z-10 w-20 h-20 bg-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg shadow-red-600/40">
                <div className="font-['Bebas_Neue'] text-[22px] leading-none">N°1</div>
                <div className="text-[8px] font-semibold tracking-widest uppercase opacity-85">à Dakar</div>
              </div>
            </div>
          </div>

          {/* CHIFFRES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {[
              { val: '10+', label: "Années d'expérience" },
              { val: '500+', label: 'Événements traiteur' },
              { val: '7j/7', label: 'Disponibilité' },
              { val: '98%', label: 'Clients satisfaits' },
            ].map((s, i) => (
              <div key={i} className="bg-[#faf8f4] rounded-2xl p-5 text-center border border-gray-100">
                <div className="font-['Bebas_Neue'] text-4xl text-red-600 mb-1">{s.val}</div>
                <div className="text-xs text-gray-400 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

          {/* NOS VALEURS */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">Ce qui nous définit</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Nos Engagements</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-[#faf8f4] border border-gray-100 rounded-2xl p-6 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <i className={`fas ${v.icon} text-red-600 text-sm`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">Notre parcours</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Une Décennie d'Excellence</h2>
            </div>
            <div className="relative max-w-2xl mx-auto">
              {/* vertical line */}
              <div className="absolute left-[28px] top-3 bottom-3 w-0.5 bg-gray-100 sm:left-1/2 sm:-translate-x-px" />
              <div className="flex flex-col gap-8">
                {timeline.map((t, i) => (
                  <div key={i} className={`flex gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start`}>
                    {/* dot */}
                    <div className="flex-shrink-0 w-14 h-14 bg-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg shadow-red-600/30 relative z-10">
                      <div className="font-['Bebas_Neue'] text-[15px] leading-tight">{t.year}</div>
                    </div>
                    <div className={`bg-white border border-gray-100 rounded-2xl p-5 flex-1 mt-1 shadow-sm ${i % 2 !== 0 ? 'sm:text-right' : ''}`}>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{t.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-red-600 text-[10px] font-bold tracking-[3px] uppercase">Questions Fréquentes</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Tout savoir sur AllooSushi</h2>
              <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto leading-relaxed">
                Les réponses aux questions les plus posées par nos clients.
              </p>
            </div>
            <div className="max-w-2xl mx-auto flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-[#faf8f4] border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-gray-900 hover:text-red-600 transition-colors"
                  >
                    <span>{item.q}</span>
                    <i className={`fas fa-chevron-down text-xs text-gray-400 ml-4 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-red-500' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="bg-gray-900 rounded-2xl p-7 sm:p-10 text-center text-white mb-4">
            <div className="text-[10px] font-bold tracking-[3px] text-red-400 uppercase mb-3">Prêt à commander ?</div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Des sushis frais, livrés chez vous</h3>
            <p className="text-white/40 text-sm mb-7">7j/7 de 11h30 à 23h00 · Livraison dans tout le Grand Dakar</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:338423011"
                className="flex items-center gap-2 bg-red-600 text-white rounded-full px-6 py-3 text-sm font-semibold no-underline hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30"
              >
                <i className="fas fa-phone text-xs" /> Commander — 33 842 30 11
              </a>
              <button
                onClick={() => { onClose(); onTraiteur(); }}
                className="flex items-center gap-2 bg-white/8 border border-white/15 text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/15 transition-all duration-300"
              >
                <i className="fas fa-concierge-bell text-red-400 text-xs" /> Service Traiteur
              </button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
