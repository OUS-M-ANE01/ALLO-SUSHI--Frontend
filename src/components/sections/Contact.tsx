import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    nom: '',
    tel: '',
    adresse: '',
    commande: ''
  });

  const handleSubmit = () => {
    if (!formData.commande) {
      alert('Veuillez entrer votre commande.');
      return;
    }

    const message = `Bonjour Alloo Sushi !%0AJe souhaite commander :%0A%0ANom : ${formData.nom}%0ATél : ${formData.tel}%0AAdresse : ${formData.adresse}%0A%0ACommande : ${formData.commande}`;
    window.open(`https://wa.me/221781424646?text=${message}`, '_blank');
  };

  const contactItems = [
    { icon: 'fa-phone', label: 'Téléphone', value: '33 842 30 11', href: 'tel:338423011' },
    { icon: 'fa-whatsapp fab', label: 'WhatsApp', value: '78 142 46 46', href: 'https://wa.me/221781424646' },
    { icon: 'fa-envelope', label: 'Email', value: 'contact@allosushifood.com', href: 'mailto:contact@allosushifood.com' },
    { icon: 'fa-map-marker-alt', label: 'Adresse', value: '62 Rue Félix Faure, à côté Hôtel Fleur de Lys, Plateau — Dakar' },
    { icon: 'fa-clock', label: 'Horaires', value: 'Ouvert 7j/7 — Livraison à domicile' },
    { icon: 'fa-globe', label: 'Site web', value: 'www.allosushifood.com', href: 'http://www.allosushifood.com' }
  ];

  return (
    <section className="bg-[#faf8f4] py-16 md:py-25 px-4 sm:px-8 md:px-16" id="contact">
      <div 
        ref={ref}
        className={`text-center mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        <SectionHeader 
          label="Nous Contacter"
          title="Commander ou Nous Joindre"
          centered
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 mt-10 md:mt-14">
        <div className={`flex flex-col gap-3.5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          {contactItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 transition-all duration-300 hover:border-red-300"
            >
              <div className="w-10 h-10 min-w-[42px] bg-red-50 rounded-lg flex items-center justify-center">
                <i className={`fas ${item.icon} text-red-600 text-base`}></i>
              </div>
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-widest mb-0.5">{item.label}</div>
                <div className="text-sm font-medium text-gray-900">
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-gray-900 no-underline hover:text-red-600 transition-colors"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 md:p-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          <h3 className="font-serif text-[28px] font-bold mb-1.5">Passer une Commande</h3>
          <p className="text-gray-600 text-sm mb-7">Remplissez le formulaire, on vous recontacte immédiatement.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1.5 font-medium uppercase tracking-wide">Prénom & Nom</label>
              <input 
                type="text" 
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-4 py-3 bg-[#faf8f4] border border-gray-200 rounded-lg text-gray-900 text-sm transition-all duration-300 outline-none focus:border-red-600 focus:bg-red-50"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1.5 font-medium uppercase tracking-wide">Téléphone</label>
              <input 
                type="tel" 
                placeholder="7X XXX XX XX"
                value={formData.tel}
                onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                className="w-full px-4 py-3 bg-[#faf8f4] border border-gray-200 rounded-lg text-gray-900 text-sm transition-all duration-300 outline-none focus:border-red-600 focus:bg-red-50"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs text-gray-600 mb-1.5 font-medium uppercase tracking-wide">Adresse de livraison</label>
            <input 
              type="text" 
              placeholder="Votre adresse à Dakar"
              value={formData.adresse}
              onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
              className="w-full px-4 py-3 bg-[#faf8f4] border border-gray-200 rounded-lg text-gray-900 text-sm transition-all duration-300 outline-none focus:border-red-600 focus:bg-red-50"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs text-gray-600 mb-1.5 font-medium uppercase tracking-wide">Votre commande</label>
            <textarea 
              placeholder="Ex: Menu 3 x2, Roll Philadelphia x4..."
              value={formData.commande}
              onChange={(e) => setFormData({ ...formData, commande: e.target.value })}
              className="w-full px-4 py-3 bg-[#faf8f4] border border-gray-200 rounded-lg text-gray-900 text-sm transition-all duration-300 outline-none focus:border-red-600 focus:bg-red-50 resize-vertical min-h-[90px]"
            ></textarea>
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full px-4 py-3.5 rounded-full bg-[#25D366] text-white border-none cursor-pointer text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 mt-2 shadow-lg shadow-[#25D366]/25 hover:bg-[#1da851] hover:-translate-y-0.5"
          >
            <i className="fab fa-whatsapp"></i> Envoyer via WhatsApp
          </button>
        </div>
      </div>

      {/* Google Maps */}
      <div className={`mt-10 md:mt-14 rounded-2xl overflow-hidden border border-gray-200 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
            <i className="fas fa-map-marker-alt text-red-600 text-sm"></i>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Alloo Sushi — Plateau, Dakar</div>
            <div className="text-xs text-gray-500">62 Rue Félix Faure, à côté Hôtel Fleur de Lys</div>
          </div>
          <a
            href="https://maps.google.com/?q=62+Rue+F%C3%A9lix+Faure+Dakar"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs text-red-600 font-medium hover:underline"
          >
            Ouvrir dans Maps →
          </a>
        </div>
        <iframe
          title="Alloo Sushi - Localisation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.4!2d-17.4467!3d14.6928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b96de067%3A0x0!2s62+Rue+F%C3%A9lix+Faure%2C+Dakar!5e0!3m2!1sfr!2ssn!4v1"
          width="100%"
          height="340"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        ></iframe>
      </div>
    </section>
  );
};
