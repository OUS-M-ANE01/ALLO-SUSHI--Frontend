import React, { useEffect, useRef, useState } from 'react';

interface MenuPageProps {
  onClose: () => void;
}

const R = '#dc2626';
const RL = '#fef2f2';
const RM = '#fecaca';
const CREAM = '#faf8f4';
const BLK = '#111';
const GRAY = '#777';
const GRL = '#e8e8e8';
const RED_ERR = '#e03030';

const bebas: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" };
const cormorant: React.CSSProperties = { fontFamily: "'Cormorant Garamond', serif" };

const SECTIONS = ['menus','soupes','nigiris','makis','californias','aromakis','creations','woks','bento','assortiments','fastfood','boissons'];

export const MenuPage: React.FC<MenuPageProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('menus');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = () => {
      let cur = SECTIONS[0];
      SECTIONS.forEach(id => {
        const sec = el.querySelector(`#sec-${id}`) as HTMLElement;
        if (sec && el.scrollTop >= sec.offsetTop - 100) cur = id;
      });
      setActiveSection(cur);
    };
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);

  const goTo = (id: string) => {
    const el = scrollRef.current;
    if (!el) return;
    const sec = el.querySelector(`#sec-${id}`) as HTMLElement;
    if (sec) el.scrollTo({ top: sec.offsetTop - 50, behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: CREAM, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: "'Outfit', sans-serif" }}>

      {/* TOP BAR */}
      <div style={{ background: BLK, padding: isMobile ? '10px 14px' : '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: isMobile ? 14 : 20, flexWrap: 'wrap' }}>
          {[
            { href: 'tel:338423011', icon: 'fa-phone', label: '33 842 30 11' },
            { href: 'https://wa.me/221781424646', icon: 'fa-whatsapp', fab: true, label: '78 142 46 46' },
            { href: 'mailto:contact@allosushifood.com', icon: 'fa-envelope', label: 'contact@allosushifood.com' },
            { href: '#', icon: 'fa-map-marker-alt', label: '62 Rue Félix Faure, Plateau, Dakar' },
          ].map((item, i) => (
            <a key={i} href={item.href} style={{ color: 'rgba(255,255,255,.55)', fontSize: 12, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
              <i className={`${item.fab ? 'fab' : 'fas'} ${item.icon}`} style={{ color: R, fontSize: isMobile ? 14 : 11 }}></i>
              {!isMobile && <span>{item.label}</span>}
            </a>
          ))}
        </div>
        <button onClick={onClose} style={{ background: R, color: '#fff', border: 'none', borderRadius: 50, padding: '6px 16px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          <i className="fas fa-arrow-left" style={{ fontSize: 11 }}></i> Retour
        </button>
      </div>

      {/* SCROLLABLE BODY — hero scrolls, nav sticks */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto' }}>

        {/* HERO */}
        <div style={{ position: 'relative', height: isMobile ? 220 : 320, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1600&q=80" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'blur(3px) brightness(0.75)', transform: 'scale(1.06)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.82) 100%)' }}></div>
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 10 : 15 }}>
    
    <img 
      src="/logo-alloo2.png" 
      alt="Alloo Sushi Logo" 
      style={{ height: isMobile ? 52 : 80, width: 'auto' }} 
    />

    <h1
      style={{
        ...cormorant,
        fontSize: isMobile ? 36 : 'clamp(36px,6vw,64px)',
        fontWeight: 700,
        color: '#fff',
        letterSpacing: -2,
        lineHeight: 1,
        margin: 0
      }}
    >
      ALLOO <span style={{ color: R, fontStyle: 'italic' }}>SUSHI</span>
    </h1>

  </div>

  <div style={{ color: 'rgba(255,255,255,.6)', fontSize: isMobile ? 10 : 12, letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>
    Sushis · Thaï · Woks · Dakar
  </div>

  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginTop: 12 }}>
    {[
      { icon: 'fa-motorcycle', label: 'Livraison 7j/7' },
      { icon: 'fa-star', label: 'Fait à la commande' },
      { icon: 'fa-fish', label: 'Ingrédients frais' },
    ].map((c, i) => (
      <div key={i} style={{
        background: 'rgba(255,255,255,.1)',
        border: '1px solid rgba(255,255,255,.15)',
        color: 'rgba(255,255,255,.8)',
        padding: '5px 13px',
        borderRadius: 50,
        fontSize: 11,
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }}>
        <i className={`fas ${c.icon}`} style={{ color: R, fontSize: 10 }}></i>
        {c.label}
      </div>
    ))}
  </div>

</div>
        </div>

        {/* STICKY NAV */}
        <div style={{ position: 'sticky', top: 0, zIndex: 10, background: '#fff', borderBottom: `1px solid ${GRL}`, boxShadow: '0 2px 16px rgba(0,0,0,.07)', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <div style={{ display: 'inline-flex', padding: '0 12px' }}>
            {[
              { id: 'menus',        icon: 'fa-box-open',     label: 'Menus' },
              { id: 'soupes',       icon: 'fa-bowl-food',    label: 'Soupes & Entrées' },
              { id: 'nigiris',      icon: 'fa-fish',         label: 'Nigiris & Sashimis' },
              { id: 'makis',        icon: 'fa-circle',       label: 'Makis & Futomakis' },
              { id: 'californias',  icon: 'fa-scroll',       label: 'Californias' },
              { id: 'aromakis',     icon: 'fa-fire',         label: 'Aromakis & Fried' },
              { id: 'creations',    icon: 'fa-hat-chef',     label: 'Créations Chef' },
              { id: 'woks',         icon: 'fa-pepper-hot',   label: 'Woks & Thaï' },
              { id: 'bento',        icon: 'fa-layer-group',  label: 'Bento Box' },
              { id: 'assortiments', icon: 'fa-expand',       label: 'Assortiments' },
              { id: 'fastfood',     icon: 'fa-hamburger',    label: 'Fast Food' },
              { id: 'boissons',     icon: 'fa-glass-water',  label: 'Boissons' },
            ].map(btn => (
              <button key={btn.id} onClick={() => goTo(btn.id)} style={{
                padding: '14px 16px', border: 'none', background: 'transparent', cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 500,
                color: activeSection === btn.id ? R : GRAY,
                borderBottom: `3px solid ${activeSection === btn.id ? R : 'transparent'}`,
                transition: 'all .25s', display: 'inline-flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap',
              }}>
                <i className={`fas ${btn.icon}`} style={{ fontSize: 11 }}></i> {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '0 10px 60px' : '0 20px 80px' }}>

          {/* ===== MENUS ===== */}
          <Section id="menus" icon="fa-box-open" title="Menu Alloo Sushi" R={R} GRL={GRL}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill,minmax(${isMobile ? '160px' : '260px'},1fr))`, gap: isMobile ? 12 : 18 }}>
              {[
                { n: 'Menu 1',  pcs: '12 pièces', items: ['4 Roll Philadelphia','4 Roll Ebi Fry','4 Roll Classic'], price: '7 000', img: 'photo-1617196034096-2186592b2ca0' },
                { n: 'Menu 2',  pcs: '14 pièces', items: ['4 Philadelphia','4 Roll Saumon','6 Maki Saumon'], price: '9 000', img: 'photo-1559410545-0bdcd187e0a6' },
                { n: 'Menu 3',  pcs: '12 pièces', items: ['4 Shake Roll','4 Avocat Crevette','4 Natan'], price: '10 000', img: 'photo-1579871494447-9811cf80d66c' },
                { n: 'Menu 4',  pcs: '14 pièces', items: ['4 Avocado Crevette','4 Boston','6 Fry Ebi Fry'], price: '9 500', img: 'photo-1532803006695-64f26ea5f48e' },
                { n: 'Menu 5',  pcs: '16 pièces', items: ['4 Kis of Casablanca','6 Aromaki Saumon','6 Aromaki Crevette'], price: '12 000', img: 'photo-1611143669185-af224c5e3252' },
                { n: 'Menu 6',  pcs: '16 pièces', items: ['4 Shake Roll','6 Dragon Eye','6 Aromaki Saumon Crevette'], price: '13 000', img: 'photo-1615361200141-f45040f367be' },
                { n: 'Menu 7',  pcs: '20 pièces', items: ['4 Shake Roll','4 Tokyo · 4 Kaytan','4 Natan · 4 Thona Roll'], price: '16 000', img: 'photo-1626082927389-6cd097cdc6ec' },
                { n: 'Menu 8',  pcs: '22 pièces', items: ['6 Maki Saumon Avocat','4 Philadelphia · 4 Roll Ebi Fry','4 Boston · 4 Crunchy Crevette'], price: '15 000', img: 'photo-1569050467447-ce54b3bbc37d' },
                { n: 'Menu 9',  pcs: '28 pièces', items: ['4 Tokyo · 4 Naomi · 4 Tigre','4 Crunchy Saumon · 6 Casablanca','6 Aromaki Saumon Crevette'], price: '22 000', img: 'photo-1599487488170-d11ec9c172f0' },
                { n: 'Menu 10', pcs: '30 pièces', items: ['4 Roll Ebi Fry · 4 Roll Saumon','4 Philadelphia · 4 Kis of Casablanca','6 Fry Ebi Fry · 8 Sushi Pizza'], price: '20 000', img: 'photo-1617196034183-421b4040ed20' },
                { n: 'Menu 11', pcs: '36 pièces', items: ['6 Maki Saumon Avocat · 6 Maki Crevette','4 Roll Saumon · 4 Roll Philadelphia','4 Roll Ebi Fry · 6 Aromaki Saumon Cuit · 6 Tiger Eye'], price: '25 000', img: 'photo-1553621042-f6e147245754' },
                { n: 'Menu 12', pcs: '32 pièces', items: ['6 Sashimi Saumon · 2 Nigiri Saumon','4 Tokyo · 4 Alaska','6 Aromaki Saumon · 6 Maki Saumon Avocat'], price: '28 500', img: 'photo-1571167584750-44af25d0b394' },
              ].map((m, i) => (
                <PkgCard key={i} num={m.n} pcs={m.pcs} items={m.items} price={m.price} img={m.img} R={R} />
              ))}
            </div>
          </Section>

          {/* ===== SOUPES & ENTREES ===== */}
          <Section id="soupes" icon="fa-bowl-food" title="Soupes & Entrées" R={R} GRL={GRL}>
            <SubH title="Nos Soupes" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Soupe Fruits de Mer" desc="Crevette, calamar, poisson blanc, champignon" price="4 000" img="photo-1569718212165-3a8278d5f624" R={R} GRL={GRL} />
              <Card name="Soupe Miso" desc="Wakame, champignon, tofu" price="2 000" img="photo-1548943487-a2e4e43b4853" R={R} GRL={GRL} />
              <Card name="Soupe Thaïlandaise" desc="Crevette, poulet, vermicelle, champignon" price="4 000" img="photo-1547592180-85f173990554" R={R} GRL={GRL} />
            </div>

            <SubH title="Nos Entrées Chaudes" R={R} />
            <ListBox GRL={GRL} R={R}>
              <Row img="photo-1615361200141-f45040f367be" name="Crevette Tempura (5 pc)" desc="Crevettes panées à la tempura japonaise" price="3 000" R={R} />
              <Row img="photo-1626082927389-6cd097cdc6ec" name="Légumes Tempura" desc="Carotte, courgette, poivron rouge-vert-jaune" price="2 500" R={R} />
              <Row img="photo-1559410545-0bdcd187e0a6" name="Fruits de Mer Tempura" desc="Saumon, thon, crevette, anguilles, dorade" price="5 500" R={R} />
              <Row img="photo-1603133872878-684f208fb84b" name="Poulet Tempura" desc="Poulet mariné à la japonaise" price="4 000" R={R} />
              <Row img="photo-1617196034099-6bcd95a88b2b" name="Sweet Sawar" desc="Boulettes de saumon à la sauce aigre douce" price="6 000" R={R} />
              <Row img="photo-1626804475297-41608ea09aeb" name="Nems (4 pc)" desc="Crevette ou viande" price="2 500" R={R} />
            </ListBox>

            <SubH title="Nos Salades" R={R} />
            <ListBox GRL={GRL} R={R}>
              <Row img="photo-1617196034183-421b4040ed20" name="Salade Saumon" desc="Saumon, avocat, tanoki, tobiko, sauce kamikaze" price="8 000" R={R} />
              <Row img="photo-1579584425555-c3ce17fd4351" name="Salade Kani" desc="Surimi, tobiko, concombre, tanoki, sauce kamikaze" price="5 000" R={R} />
              <Row img="photo-1534482421-64566f976cfa" name="Salade Choux" desc="Choux, concombre, carotte" price="2 000" R={R} />
              <Row img="photo-1626082927389-6cd097cdc6ec" name="Salade Thon" desc="Thon, avocat, tanoki, tobiko, sauce kamikaze" price="6 000" R={R} />
              <Row img="photo-1565557623262-b51c2513a641" name="Salade Thaïlandaise" desc="Laitue, choux, carotte, ananas, maïs, poulet, crevette" price="6 000" R={R} />
              <Row img="photo-1504674900247-0877df9cc836" name="Salade Edamame" desc="Jeune fève de soja" price="4 000" R={R} />
            </ListBox>
          </Section>

          {/* ===== NIGIRIS ===== */}
          <Section id="nigiris" icon="fa-fish" title="Nigiris, Sashimis, Gunkans & Chirachis" R={R} GRL={GRL}>
            <SubH title="Nos Nigiris" note="Servi 2 pièces" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Nigiri Saumon" desc="Tranche de saumon frais sur riz vinaigré" price="4 000" img="photo-1617196034181-4e9a8f0a3ea2" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Nigiri Thon" desc="Tranche de thon sur riz vinaigré" price="3 000" img="photo-1571167584750-44af25d0b394" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Nigiri Anguille" desc="Anguille sur riz vinaigré" price="4 500" img="photo-1599487488170-d11ec9c172f0" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Nigiri Dorade" desc="Dorade sur riz vinaigré" price="2 500" img="photo-1532803006695-64f26ea5f48e" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Nigiri Crevette" desc="Crevette sur riz vinaigré" price="2 500" img="photo-1617196034096-2186592b2ca0" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Barquette Nigiri Saumon" desc="Grand plateau de nigiris au saumon" price="15 000" img="photo-1611143669185-af224c5e3252" badge="10 pc" R={R} GRL={GRL} />
            </div>

            <SubH title="Nos Sashimis" note="Servi 4 pièces" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Sashimi Saumon" desc="Tranches de saumon frais" price="5 000" img="photo-1504674900247-0877df9cc836" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Sashimi Thon" desc="Tranches de thon frais" price="4 000" img="photo-1579584425555-c3ce17fd4351" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Sashimi Dorade" desc="Tranches de dorade fraîche" price="3 500" img="photo-1617196034094-f6e95d23c89d" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Barquette Sashimi Mix" desc="Grand plateau sashimi saumon ou mix" price="20 000" img="photo-1615361200141-f45040f367be" badge="20 pc" R={R} GRL={GRL} />
            </div>

            <SubH title="Nos Gunkans" note="Servi 2 pièces" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Gunkan Saumon" desc="Tartare de saumon, riz, nori" price="4 000" img="photo-1617196034183-421b4040ed20" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Gunkan Thon" desc="Tartare de thon, riz, nori" price="3 000" img="photo-1626082927389-6cd097cdc6ec" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Gunkan Dorade" desc="Tartare de dorade, riz, nori" price="2 500" img="photo-1559410545-0bdcd187e0a6" badge="2 pc" R={R} GRL={GRL} />
              <Card name="Gunkan Crabe" desc="Tartare de crabe, riz, nori" price="3 000" img="photo-1579871494447-9811cf80d66c" badge="2 pc" R={R} GRL={GRL} />
            </div>

            <SubH title="Nos Tartares" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Tartare Saumon" desc="Tartare de saumon, avocat, cheese" price="7 500" img="photo-1617196034099-6bcd95a88b2b" R={R} GRL={GRL} />
              <Card name="Tartare Thon" desc="Tartare de thon, concombre, cheese, avocat" price="6 000" img="photo-1626082927389-6cd097cdc6ec" R={R} GRL={GRL} />
              <Card name="Tartare Dorade" desc="Dorade, avocat, cheese" price="5 500" img="photo-1532803006695-64f26ea5f48e" R={R} GRL={GRL} />
            </div>

            <SubH title="Nos Chirachis" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Chirachi Saumon" desc="Saumon, riz, avocat" price="8 000" img="photo-1617196034183-421b4040ed20" R={R} GRL={GRL} />
              <Card name="Chirachi Thon" desc="Thon, riz, avocat" price="7 000" img="photo-1571167584750-44af25d0b394" R={R} GRL={GRL} />
              <Card name="Chirachi Dorade" desc="Dorade, riz, avocat" price="7 000" img="photo-1504674900247-0877df9cc836" R={R} GRL={GRL} />
              <Card name="Chirachi Mix" desc="Saumon, thon, crevette, dorade, riz, avocat" price="8 500" img="photo-1599487488170-d11ec9c172f0" R={R} GRL={GRL} />
            </div>
          </Section>

          {/* ===== MAKIS ===== */}
          <Section id="makis" icon="fa-circle" title="Makis, Futomakis & Temakis" R={R} GRL={GRL}>
            <SubH title="Nos Makis" note="Servi 6 pièces" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Maki Saumon" desc="Saumon, riz, nori" price="4 000" img="photo-1617196034082-1f645e3bbafc" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Maki Surimi" desc="Surimi, riz, nori" price="3 000" img="photo-1553621042-f6e147245754" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Maki Avocat" desc="Avocat, riz, nori" price="2 500" img="photo-1579871494447-9811cf80d66c" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Maki Concombre" desc="Concombre, riz, nori" price="2 000" img="photo-1617196034096-2186592b2ca0" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Maki Crevette" desc="Crevette, riz, nori" price="3 000" img="photo-1569050467447-ce54b3bbc37d" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Maki Saumon Avocat" desc="Saumon, avocat, riz, nori" price="4 000" img="photo-1611143669185-af224c5e3252" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Maki Anguille" desc="Anguille, concombre, riz, nori" price="4 000" img="photo-1599487488170-d11ec9c172f0" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Barquette Maki Mix" desc="Assortiment de makis variés" price="10 000" img="photo-1615361200141-f45040f367be" badge="24 pc" R={R} GRL={GRL} />
            </div>

            <SubH title="Nos Futomakis" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Futomaki Saumon" desc="Saumon, cheese, surimi" price="5 000" img="photo-1617196034183-421b4040ed20" R={R} GRL={GRL} />
              <Card name="Futomaki Crevette" desc="Crevette tempura, avocat, salade, concombre" price="4 000" img="photo-1617196034096-2186592b2ca0" R={R} GRL={GRL} />
              <Card name="Futomaki Poulet" desc="Poulet, avocat, salade, concombre" price="4 000" img="photo-1553621042-f6e147245754" R={R} GRL={GRL} />
              <Card name="Futomaki Surimi" desc="Surimi, avocat, crevette poché" price="4 000" img="photo-1569050467447-ce54b3bbc37d" R={R} GRL={GRL} />
            </div>

            <SubH title="Nos Temakis" note="Servi 1 pièce" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Temaki Saumon" desc="Tartare de saumon, avocat, cheese" price="4 000" img="photo-1617196034183-421b4040ed20" badge="1 pc" R={R} GRL={GRL} />
              <Card name="Temaki Thon" desc="Tartare de thon, concombre, cheese" price="3 500" img="photo-1626082927389-6cd097cdc6ec" badge="1 pc" R={R} GRL={GRL} />
              <Card name="Temaki Crevette" desc="Crevette, avocat, cheese" price="3 500" img="photo-1579871494447-9811cf80d66c" badge="1 pc" R={R} GRL={GRL} />
              <Card name="Temaki Anguille" desc="Anguille, concombre, sauce anguille" price="5 000" img="photo-1599487488170-d11ec9c172f0" badge="1 pc" R={R} GRL={GRL} />
            </div>
          </Section>

          {/* ===== CALIFORNIAS ===== */}
          <Section id="californias" icon="fa-scroll" title="Nos Californias" note="Servi 4 pièces" R={R} GRL={GRL}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Roll Classic" desc="Avocat, surimi, concombre, mayo japonaise, masago" price="3 000" img="photo-1617196034094-f6e95d23c89d" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Roll Saumon" desc="Saumon, avocat, mayo japonaise, sésame" price="4 000" img="photo-1617196034183-421b4040ed20" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Roll Philadelphia" desc="Saumon, avocat, surimi, tobiko, cheese" price="4 000" img="photo-1579871494447-9811cf80d66c" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Roll Ebi Fry" desc="Crevette, avocat, mayo japonaise, ciboulette" price="3 000" img="photo-1559410545-0bdcd187e0a6" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Roll Thon" desc="Thon, avocat, mayo japonaise, shichimi" price="3 000" img="photo-1626082927389-6cd097cdc6ec" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Roll Saumon Cuit" desc="Saumon cuit, avocat, mayo japonaise, shichimi" price="3 000" img="photo-1532803006695-64f26ea5f48e" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Roll Thon Cuit" desc="Thon cuit, avocat, mayo japonaise, sésame" price="3 000" img="photo-1611143669185-af224c5e3252" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Roll Saumon Cheese" desc="Saumon, avocat, cheese, tobiko" price="4 000" img="photo-1617196034096-2186592b2ca0" badge="4 pc" R={R} GRL={GRL} />
              <Card name="Barquette California Mix" desc="Assortiment de californias variés" price="16 000" img="photo-1615361200141-f45040f367be" badge="24 pc" R={R} GRL={GRL} />
            </div>
          </Section>

          {/* ===== AROMAKIS & FRIED ===== */}
          <Section id="aromakis" icon="fa-fire" title="Aromakis & Fried Rolls" R={R} GRL={GRL}>
            <SubH title="Aromakis" note="Servi 6 pièces" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Aromaki Saumon" desc="Saumon, avocat, surimi, cheese, tobiko" price="6 000" img="photo-1553621042-f6e147245754" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Aromaki Crevette" desc="Crevette, surimi, avocat, cheese, tobiko" price="5 000" img="photo-1617196034183-421b4040ed20" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Aromaki Thon" desc="Thon, avocat, surimi, cheese, tobiko" price="5 000" img="photo-1626082927389-6cd097cdc6ec" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Aromaki Crabe" desc="Crabe, avocat, crevette panée, cheese, tobiko" price="6 000" img="photo-1579871494447-9811cf80d66c" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Aromaki Saumon Crevette" desc="Saumon, crevette, surimi, cheese, tobiko" price="6 000" img="photo-1617196034096-2186592b2ca0" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Aromaki Spicy Saumon" desc="Tartare saumon, tanoki, surimi, crevette poché, tobiko" price="6 000" img="photo-1611143669185-af224c5e3252" badge="6 pc" R={R} GRL={GRL} />
              <Card name="Aromaki Spicy Thon" desc="Tartare thon, tanoki, surimi, crevette poché, tobiko" price="5 000" img="photo-1569050467447-ce54b3bbc37d" badge="6 pc" R={R} GRL={GRL} />
            </div>

            <SubH title="Fried Rolls" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Fry Ebi Fry" desc="Crevette, cheese" price="4 000" img="photo-1617196034094-f6e95d23c89d" R={R} GRL={GRL} />
              <Card name="Dragon Eye" desc="Saumon, carotte, tobiko, cheese" price="6 000" img="photo-1617196034183-421b4040ed20" R={R} GRL={GRL} />
              <Card name="Casablanca" desc="Crevette, crabe, concombre, tobiko, ananas" price="5 000" img="photo-1579871494447-9811cf80d66c" R={R} GRL={GRL} />
              <Card name="Misui" desc="Saumon, surimi, crevette, tobiko, cheese" price="6 000" img="photo-1553621042-f6e147245754" R={R} GRL={GRL} />
              <Card name="Kani Fry" desc="Saumon, crevette, crabe, tobiko, cheese" price="5 000" img="photo-1532803006695-64f26ea5f48e" R={R} GRL={GRL} />
              <Card name="Tiger Eye" desc="Saumon, surimi, tobiko, cheese" price="5 000" img="photo-1617196034096-2186592b2ca0" R={R} GRL={GRL} />
              <Card name="Maki Fry" desc="Saumon, Gouda" price="6 000" img="photo-1626082927389-6cd097cdc6ec" R={R} GRL={GRL} />
              <Card name="Aromaki Pané" desc="Saumon, surimi, avocat, tobiko, cheese" price="6 000" img="photo-1611143669185-af224c5e3252" R={R} GRL={GRL} />
            </div>

            <SubH title="Pizza Sushi" note="8 pièces" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Pizza Sushi Mozzarella" desc="Saumon, crabe, mozzarella, tobiko" price="6 000" img="photo-1599487488170-d11ec9c172f0" badge="8 pc" R={R} GRL={GRL} />
              <Card name="Pizza Sushi Royale" desc="Saumon, surimi, avocat, tobiko" price="6 000" img="photo-1615361200141-f45040f367be" badge="8 pc" R={R} GRL={GRL} />
            </div>
          </Section>

          {/* ===== CREATIONS CHEF ===== */}
          <Section id="creations" icon="fa-hat-chef" title="Créations de Chef" note="Servi en 5 pièces" R={R} GRL={GRL}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              {[
                { name: 'Crunchy Crevette', desc: 'Crevette, tanoki, shichimi', price: '4 000', img: 'photo-1617196034183-421b4040ed20' },
                { name: 'Crunchy Saumon', desc: 'Saumon, tanoki, shichimi', price: '6 000', img: 'photo-1553621042-f6e147245754' },
                { name: 'Naomi', desc: 'Crabe, avocat, cheese, ext saumon', price: '5 500', img: 'photo-1579871494447-9811cf80d66c' },
                { name: 'Boston', desc: 'Crabe, crevette panée, concombre, cheese, ext tobiko', price: '5 000', img: 'photo-1617196034096-2186592b2ca0' },
                { name: 'Tiger Roll', desc: 'Crevette, avocat, cheese, ext tobiko', price: '4 500', img: 'photo-1611143669185-af224c5e3252' },
                { name: 'Atlantique', desc: 'Crabe, crevette panée, avocat, ext saumon', price: '5 500', img: 'photo-1626082927389-6cd097cdc6ec' },
                { name: 'Kis of Casablanca', desc: 'Crevette crabe, cheese, surimi, ext tobiko', price: '4 500', img: 'photo-1532803006695-64f26ea5f48e' },
                { name: 'Yoka', desc: 'Saumon tempura, surimi tempura, cheese, ext saumon', price: '5 500', img: 'photo-1569050467447-ce54b3bbc37d' },
                { name: 'Kioto', desc: 'Crabe, avocat, ext thon', price: '5 000', img: 'photo-1617196034094-f6e95d23c89d' },
                { name: 'Kayzan', desc: 'Saumon fumé, cheese, crevette pané, ext onion fry', price: '6 000', img: 'photo-1617196034183-421b4040ed20' },
                { name: 'Fried Chicken', desc: 'Poulet, salade, concombre, avocat, mayo japonaise, ext sésame', price: '4 500', img: 'photo-1603133872878-684f208fb84b' },
                { name: 'Arconciel', desc: 'Crabe, avocat, ext saumon, crevette poché', price: '5 500', img: 'photo-1553621042-f6e147245754' },
                { name: 'Shake Roll', desc: 'Saumon, avocat, cheese, ext tobiko, saumon', price: '6 000', img: 'photo-1579871494447-9811cf80d66c' },
                { name: 'Shaki Yaki', desc: 'Saumon, avocat, cheese, ext tobiko, avocat', price: '6 000', img: 'photo-1617196034096-2186592b2ca0' },
                { name: 'Alaska', desc: 'Surimi, ext saumon, cheese', price: '6 000', img: 'photo-1611143669185-af224c5e3252' },
                { name: 'Kaytan', desc: 'Saumon, crabe, avocat, cheese, ext crevette poché', price: '6 000', img: 'photo-1626082927389-6cd097cdc6ec' },
                { name: 'Thona Roll', desc: 'Tartare de thon, sauce kamikaze, tanoki, ext thon', price: '6 000', img: 'photo-1532803006695-64f26ea5f48e' },
                { name: 'Shiru', desc: 'Saumon, avocat, cheese, surimi, ext thon tobiko', price: '6 000', img: 'photo-1617196034094-f6e95d23c89d' },
                { name: 'Dragon', desc: 'Tartare de saumon, anoki, sauce kamikaze, ext anguille', price: '6 000', img: 'photo-1569050467447-ce54b3bbc37d' },
                { name: 'Okinawa', desc: 'Saumon fumé, crevette, cheese, crabe, ext avocat', price: '6 000', img: 'photo-1617196034183-421b4040ed20' },
                { name: 'Natan', desc: 'Crevette, avocat, surimi, cheese, ext saumon floumbi', price: '5 000', img: 'photo-1553621042-f6e147245754' },
                { name: 'Dinamite', desc: 'Tartare de thon, concombre, cheese, ext avocat', price: '5 000', img: 'photo-1626082927389-6cd097cdc6ec' },
              ].map((c, i) => <Card key={i} {...c} R={R} GRL={GRL} />)}
            </div>

            <SubH title="Yakitori" note="Avec riz, légumes sautés et 3 brochettes" R={R} />
            <ListBox GRL={GRL} R={R}>
              <Row img="photo-1603133872878-684f208fb84b" name="Brochette Escalope de Poulet" price="4 000" R={R} />
              <Row img="photo-1603133872878-684f208fb84b" name="Brochette Cuisse de Poulet" price="4 000" R={R} />
              <Row img="photo-1547592180-85f173990554" name="Brochette Filet de Bœuf" price="4 000" R={R} />
              <Row img="photo-1603133872878-684f208fb84b" name="Boulette de Poulet" price="4 000" R={R} />
              <Row img="photo-1547592180-85f173990554" name="Brochette Bœuf Fromage" price="4 500" R={R} />
              <Row img="photo-1617196034183-421b4040ed20" name="Brochette de Saumon" price="7 000" R={R} />
              <Row img="photo-1603133872878-684f208fb84b" name="Brochette Gambas" price="4 000" R={R} />
              <Row img="photo-1547592180-85f173990554" name="Brochette Bœuf Fromage Pané" price="5 000" R={R} />
            </ListBox>
          </Section>

          {/* ===== WOKS & THAI ===== */}
          <Section id="woks" icon="fa-pepper-hot" title="Woks & Plats Thaï" R={R} GRL={GRL}>
            <SubH title="Nos Woks" note="Sauce : Soja · Aigre Doux · Teryaki · Oyster" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Wok Poulet" desc="Poulet sauté au wok, sauce au choix" price="6 000" img="photo-1603133872878-684f208fb84b" R={R} GRL={GRL} />
              <Card name="Wok Filet Bœuf" desc="Filet de bœuf sauté au wok, sauce au choix" price="6 000" img="photo-1547592180-85f173990554" R={R} GRL={GRL} />
              <Card name="Wok Crevette" desc="Crevettes sautées au wok, sauce au choix" price="5 500" img="photo-1603133872878-684f208fb84b" R={R} GRL={GRL} />
              <Card name="Wok Végétarien" desc="Légumes sautés au wok, sauce au choix" price="4 500" img="photo-1565557623262-b51c2513a641" R={R} GRL={GRL} />
            </div>

            <SubH title="Plats Thaï" note="Servi avec du riz" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Bœuf Champignon" desc="Bœuf, champignon (paris, noir, frais), oignon, sauce oyster" price="6 500" img="photo-1547592180-85f173990554" R={R} GRL={GRL} />
              <Card name="Poulet Champignon" desc="Poulet, champignon (paris, noir, frais), oignon, sauce oyster" price="6 500" img="photo-1603133872878-684f208fb84b" R={R} GRL={GRL} />
              <Card name="Bœuf Saté" desc="Bœuf, champignon, oignon, sauce oyster saté" price="6 500" img="photo-1565557623262-b51c2513a641" R={R} GRL={GRL} />
              <Card name="Poulet Ananas" desc="Poulet, ananas, sauce caramélisée, gingembre" price="6 500" img="photo-1603133872878-684f208fb84b" R={R} GRL={GRL} />
              <Card name="Poulet Curry" desc="Poulet, lait de coco, curry, oignon" price="6 500" img="photo-1547592180-85f173990554" R={R} GRL={GRL} />
            </div>

            <SubH title="Teppanyaki" note="Servi avec riz et légumes sautés" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Teppanyaki Filet de Bœuf" desc="Servi avec riz et légumes sautés" price="5 500" img="photo-1547592180-85f173990554" R={R} GRL={GRL} />
              <Card name="Teppanyaki Poulet" desc="Servi avec riz et légumes sautés" price="5 500" img="photo-1603133872878-684f208fb84b" R={R} GRL={GRL} />
              <Card name="Teppanyaki Crevette" desc="Servi avec riz et légumes sautés" price="5 000" img="photo-1617196034096-2186592b2ca0" R={R} GRL={GRL} />
              <Card name="Teppanyaki Saumon" desc="Servi avec riz et légumes sautés" price="7 500" img="photo-1617196034183-421b4040ed20" R={R} GRL={GRL} />
            </div>

            <SubH title="Plats de Riz" R={R} />
            <ListBox GRL={GRL} R={R}>
              <Row img="photo-1603133872878-684f208fb84b" name="Riz Blanc" price="1 500" R={R} />
              <Row img="photo-1603133872878-684f208fb84b" name="Riz Cantonais" price="3 000" R={R} />
              <Row img="photo-1603133872878-684f208fb84b" name="Riz Cantonais au Poulet" price="5 000" R={R} />
              <Row img="photo-1547592180-85f173990554" name="Riz Cantonais au Bœuf" price="5 000" R={R} />
              <Row img="photo-1617196034096-2186592b2ca0" name="Riz Cantonais aux Crevettes" price="5 000" R={R} />
            </ListBox>
          </Section>

          {/* ===== BENTO ===== */}
          <Section id="bento" icon="fa-layer-group" title="Bento Box" R={R} GRL={GRL}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
              {[
                { name: 'Bento Bronze', medal: 'B', medalColor: '#cd7f32', items: ['Salade choux','Wok poulet','California Ebi Fry 4 pc','Nems 2 pc'], price: '8 000' },
                { name: 'Bento Silver', medal: 'S', medalColor: '#aaa', items: ['Salade choux','Crevette tempura 4 pc','Riz cantonais','Wok bœuf'], price: '9 000' },
                { name: 'Bento Gold', medal: 'G', medalColor: '#d4a017', items: ['Salade choux','Wok crevette','Roll saumon cheese 4 pc','Fry Ebi Fry 4 pc'], price: '10 000' },
                { name: 'Bento Platinum', medal: 'P', medalColor: '#6e6e6e', items: ['Salade choux · Wok végétarien','Bœuf fromage 2 pc · Natan 4 pc','Crevette tempura 2 pc · Nems 2 pc'], price: '11 000' },
              ].map((b, i) => (
                <div key={i} style={{ background: '#fff', border: `1px solid ${GRL}`, borderRadius: 16, overflow: 'hidden' }}>
                  <div style={{ height: 150, overflow: 'hidden', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80" alt={b.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 10, right: 10, width: 36, height: 36, borderRadius: '50%', background: b.medalColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>{b.medal}</div>
                  </div>
                  <div style={{ padding: 16 }}>
                    <div style={{ ...cormorant, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{b.name}</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {b.items.map((item, j) => (
                        <li key={j} style={{ fontSize: 12, color: GRAY, display: 'flex', gap: 5 }}><span style={{ color: R, fontWeight: 700 }}>·</span>{item}</li>
                      ))}
                    </ul>
                    <div style={{ ...bebas, fontSize: 26, color: R, marginTop: 12 }}>{b.price} FCFA</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ===== ASSORTIMENTS ===== */}
          <Section id="assortiments" icon="fa-expand" title="Assortiments" R={R} GRL={GRL}>
            <p style={{ color: GRAY, fontSize: 13, marginBottom: 20 }}>Mix de nos meilleures créations — idéal pour les événements, mariages et soirées.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 12 }}>
              {[
                { n: '40', p: '35 000', img: 'photo-1617196034096-2186592b2ca0' },
                { n: '60', p: '50 000', img: 'photo-1611143669185-af224c5e3252' },
                { n: '80', p: '65 000', img: 'photo-1553621042-f6e147245754' },
                { n: '100', p: '80 000', img: 'photo-1617196034183-421b4040ed20' },
                { n: '120', p: '95 000', img: 'photo-1615361200141-f45040f367be' },
              ].map((a, i) => (
                <div key={i} style={{ background: '#fff', border: `2px solid ${GRL}`, borderRadius: 14, textAlign: 'center', overflow: 'hidden' }}>
                  <div style={{ height: 100, overflow: 'hidden' }}>
                    <img src={`https://images.unsplash.com/${a.img}?w=400&q=80`} alt={`${a.n} pièces`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '14px 10px' }}>
                    <div style={{ ...bebas, fontSize: 46, color: R, lineHeight: 1 }}>{a.n}</div>
                    <div style={{ fontSize: 10, color: GRAY, textTransform: 'uppercase', letterSpacing: 1, margin: '2px 0 10px' }}>Pièces</div>
                    <div style={{ ...bebas, fontSize: 20, color: BLK }}>{a.p}</div>
                    <div style={{ fontSize: 10, color: GRAY }}>FCFA</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ===== FAST FOOD ===== */}
          <Section id="fastfood" icon="fa-hamburger" title="Fast Food" R={R} GRL={GRL}>
            <SubH title="Pasticio" R={R} />
            <p style={{ color: GRAY, fontSize: 13, marginBottom: 14 }}>Gratin consistant à base de frite, couvert de délicieuse sauce, fromage, le tout gratinée au four</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              {['Jambon','Viande Hachée','Saucisse','Poulet'].map(v => (
                <Card key={v} name={`Pasticio ${v}`} price="4 000" img="photo-1484723091739-30a097e8f929" R={R} GRL={GRL} />
              ))}
              <Card name="Pasticio Crevette" price="5 000" img="photo-1484723091739-30a097e8f929" R={R} GRL={GRL} />
            </div>

            <SubH title="Pâtes Gratinées" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Pâte Gratiné Poulet" price="5 000" img="photo-1548943487-a2e4e43b4853" R={R} GRL={GRL} />
              <Card name="Pâte Gratiné Viande Hachée" price="5 000" img="photo-1548943487-a2e4e43b4853" R={R} GRL={GRL} />
              <Card name="Pâte Gratiné Crevette" price="6 000" img="photo-1548943487-a2e4e43b4853" R={R} GRL={GRL} />
              <Card name="Pâte Gratiné Saumon" price="8 000" img="photo-1548943487-a2e4e43b4853" R={R} GRL={GRL} />
            </div>

            <SubH title="Pizza" R={R} />
            {[
              {
                label: 'Pizzas Classiques', sz: 'Médium : 4 500 FCFA | Large : 6 000 FCFA',
                items: [
                  { name: 'Margarita', desc: 'Sauce tomate, mozzarella, oignon', m: '4 500', l: '6 000' },
                  { name: 'Végétarien', desc: 'Sauce tomate, mozzarella, légumes grillés, olives, tomate fraîche', m: '4 500', l: '6 000' },
                  { name: 'Reine', desc: 'Sauce tomate, mozzarella, jambon, champignon', m: '4 500', l: '6 000' },
                  { name: 'Forestier', desc: 'Sauce tomate, mozzarella, viande hachée, champignon, olive', m: '4 500', l: '6 000' },
                  { name: 'Oriental', desc: 'Sauce tomate, mozzarella, saucisse, oeuf', m: '4 500', l: '6 000' },
                  { name: 'Marina', desc: 'Sauce tomate, mozzarella, tomate, oignons, olives noires, thon', m: '4 500', l: '6 000' },
                  { name: 'Bulldozer', desc: 'Viande hachée, poulet', m: '4 500', l: '6 000' },
                ],
              },
              {
                label: 'Pizzas Premium', sz: 'Médium : 5 000 FCFA | Large : 6 500 FCFA',
                items: [
                  { name: 'Chèvre Miel', desc: 'Crème fraîche, mozzarella, fromage chèvre, miel', m: '5 000', l: '6 500' },
                  { name: 'Poulet BBQ', desc: 'Crème fraîche, mozzarella, poulet, champignon, BBQ', m: '5 000', l: '6 500' },
                  { name: 'Pepperoni', desc: 'Sauce tomate, mozzarella, pepperoni', m: '5 000', l: '6 500' },
                  { name: 'Quatre Fromages', desc: 'Sauce tomate, mozzarella, chèvre, emmental, bleu', m: '5 000', l: '6 500' },
                  { name: 'Fruits de Mer', desc: 'Sauce tomate, mozzarella, crevette, calamar, olive, ail, persil', m: '5 000', l: '6 500' },
                  { name: 'Chawarma', desc: 'Sauce tomate, mozzarella, poivron, oignon, tomate, chawarma', m: '5 000', l: '6 500' },
                  { name: 'Spicy Hot', desc: 'Sauce tomate, mozzarella, viande hachée (bœuf ou poulet), piment vert, tomate fraîche, oignons', m: '5 000', l: '6 500' },
                  { name: 'Suprême', desc: 'Sauce tomate, mozzarella, poivron, oignons, tomate, pepperoni, viande hachée (poulet ou bœuf)', m: '5 000', l: '6 500' },
                  { name: 'Moitié / Moitié', desc: 'Deux saveurs différentes sur une même pizza', m: '5 000', l: '6 500' },
                ],
              },
              {
                label: 'Pizza Spéciale', sz: 'Médium : 6 500 FCFA | Large : 7 500 FCFA',
                items: [
                  { name: 'Norvégienne', desc: 'Sauce tomate, crème fraîche, mozzarella, saumon fumé — Supplément fromage +1 000 FCFA', m: '6 500', l: '7 500' },
                ],
              },
            ].map((grp, gi) => (
              <div key={gi} style={{ marginBottom: 24 }}>
                <div style={{ background: BLK, color: '#fff', padding: '10px 18px', borderRadius: '10px 10px 0 0', fontSize: 13, fontWeight: 600, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6 }}>
                  <span>{grp.label}</span><span style={{ fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,.6)' }}>{grp.sz}</span>
                </div>
                <div style={{ background: '#fff', border: `1px solid ${GRL}`, borderTop: 'none', borderRadius: '0 0 10px 10px', overflow: 'hidden' }}>
                  {grp.items.map((p, pi) => (
                    <div key={pi} style={{ display: 'flex', alignItems: 'center', padding: isMobile ? '10px 12px' : '11px 16px', borderBottom: pi < grp.items.length - 1 ? '1px solid #f2f2f2' : 'none', gap: 10 }}>
                      {!isMobile && <div style={{ width: 56, height: 56, borderRadius: 9, overflow: 'hidden', flexShrink: 0 }}>
                        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&q=80" alt={p.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: BLK }}>{p.name}</div>
                        <div style={{ fontSize: 11, color: GRAY, marginTop: 2 }}>{p.desc}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                        {[{ lbl: isMobile ? 'Méd.' : 'Médium', v: p.m }, { lbl: isMobile ? 'Lge' : 'Large', v: p.l }].map((sz, si) => (
                          <div key={si} style={{ background: CREAM, borderRadius: 8, padding: isMobile ? '4px 7px' : '5px 10px', textAlign: 'center' }}>
                            <div style={{ fontSize: 9, color: GRAY }}>{sz.lbl}</div>
                            <div style={{ ...bebas, fontSize: isMobile ? 14 : 17, color: R }}>{sz.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <SubH title="Hamburgers" R={R} />
            <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${GRL}` }}>
              {[
                { name: 'Chesse Burger (120g)', desc: 'Viande, fromage, laitue, tomate, cornichons', seul: '3 500', menu: '5 000', img: 'photo-1568901346375-23c9450c58cd' },
                { name: 'Hamburger Complet (120g)', desc: 'Viande, fromage, oeuf, frite, laitue, tomate, cornichons', seul: '4 500', menu: '6 000', img: 'photo-1568901346375-23c9450c58cd' },
                { name: 'Chicken Burger', desc: 'Poulet croustillant, fromage, laitue, cornichons', seul: '4 000', menu: '5 500', img: 'photo-1528735602780-2552fd46c7af' },
                { name: 'Double Burger (2×120g)', desc: 'Double viande, fromage, oeuf, laitue, tomate, cornichons', seul: '6 000', menu: '7 500', img: 'photo-1568901346375-23c9450c58cd' },
                { name: 'Fish Burger', desc: 'Poisson blanc crispy, fromage, laitue, cornichons', seul: '4 000', menu: '5 500', img: 'photo-1568901346375-23c9450c58cd' },
                { name: 'Warp Poulet', desc: 'Tortilla de blé, poulet croustillant, laitue, tomate, fromage, oignon frite', seul: '3 000', menu: '4 500', img: 'photo-1627308595127-d19d977c0519' },
              ].map((b, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', padding: isMobile ? '11px 12px' : '13px 18px', borderBottom: i < arr.length - 1 ? '1px solid #f2f2f2' : 'none', gap: 10 }}>
                  {!isMobile && <div style={{ width: 64, height: 64, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                    <img src={`https://images.unsplash.com/${b.img}?w=200&q=80`} alt={b.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: BLK }}>{b.name}</div>
                    <div style={{ fontSize: 11, color: GRAY, marginTop: 2 }}>{b.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ ...bebas, fontSize: isMobile ? 16 : 20, color: R }}>{b.seul} FCFA</div>
                    <div style={{ fontSize: 11, color: GRAY }}>Menu : {b.menu} FCFA</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: RL, border: `1px solid ${RM}`, borderRadius: 10, padding: '12px 18px', fontSize: 13, marginTop: 12, marginBottom: 24, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              <span><strong>Portion Frites :</strong> 1 000 FCFA</span>
              <span><strong>Supplément Bacon :</strong> 1 000 FCFA</span>
            </div>

            <SubH title="Paninis" R={R} />
            <ListBox GRL={GRL} R={R}>
              {['Poulet','Viande Hachée','Thon','Dinde Fumée','4 Fromages'].map(p => (
                <Row key={p} img="photo-1627308595127-d19d977c0519" name={`Panini ${p}`} price="3 000" R={R} />
              ))}
            </ListBox>

            <SubH title="Tacos — Composez le Vôtre !" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 14 }}>
              {([
                {
                  step: '1', title: 'Les Tailles',
                  content: (
                    <TacosSizes R={R} bebas={bebas} />
                  ),
                },
                {
                  step: '2', title: 'Les Viandes',
                  content: (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingTop: 6 }}>
                      {['Viande hachée','Saucisses','Escalope de poulet','Tiender','Nugget','Cordon bleu'].map(v => (
                        <span key={v} style={{ background: CREAM, border: `1px solid ${GRL}`, padding: '4px 11px', borderRadius: 20, fontSize: 11 }}>{v}</span>
                      ))}
                    </div>
                  ),
                },
                {
                  step: '3', title: 'Les Sauces',
                  content: (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingTop: 6 }}>
                      {['Mayonnaise','BBQ','Algérienne','BIGI','Samouraï','Tartare','Cocktail','Sauce verte'].map(s => (
                        <span key={s} style={{ background: CREAM, border: `1px solid ${GRL}`, padding: '4px 11px', borderRadius: 20, fontSize: 11 }}>{s}</span>
                      ))}
                    </div>
                  ),
                },
                {
                  step: '+', title: 'Extras',
                  content: (
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingTop: 6 }}>
                        {['Jambon dinde fumé','Mozzarella','Chèvre','Emental','Champignons','Oeuf','Cheddar','Maïs'].map(e => (
                          <span key={e} style={{ background: CREAM, border: `1px solid ${GRL}`, padding: '4px 11px', borderRadius: 20, fontSize: 11 }}>{e}</span>
                        ))}
                      </div>
                      <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #f0f0f0', fontSize: 12 }}>
                        <div style={{ marginBottom: 3 }}><strong>Tacos Gratiné :</strong> <span style={{ color: RED_ERR, fontWeight: 600 }}>+1 000 FCFA</span></div>
                        <div><strong>Menu Tacos</strong> (Frite + Boisson) : <span style={{ color: RED_ERR, fontWeight: 600 }}>+1 500 FCFA</span></div>
                      </div>
                    </div>
                  ),
                },
              ] as { step: string; title: string; content: React.ReactNode }[]).map((step, i) => (
                <div key={i} style={{ background: '#fff', border: `1px solid ${GRL}`, borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ background: R, color: '#fff', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, fontWeight: 600 }}>
                    <div style={{ width: 24, height: 24, background: 'rgba(255,255,255,.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{step.step}</div>
                    {step.title}{step.step === '+' && <span style={{ fontSize: 11, marginLeft: 4, opacity: .8 }}>+500 FCFA chacun</span>}
                  </div>
                  <div style={{ padding: '14px 16px' }}>{step.content}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* ===== BOISSONS ===== */}
          <Section id="boissons" icon="fa-glass-water" title="Boissons & Desserts" R={R} GRL={GRL}>
            <SubH title="Eaux & Sodas" R={R} />
            <ListBox GRL={GRL} R={R}>
              <Row img="photo-1548940740-204726a19be3" name="Eau Gazeuse Perrier (Petite)" price="1 000" R={R} />
              <Row img="photo-1548940740-204726a19be3" name="Eau Gazeuse Perrier (Grande)" price="2 000" R={R} />
              <Row img="photo-1548940740-204726a19be3" name="Eau Kirène 500 mL" price="1 000" R={R} />
              <Row img="photo-1548940740-204726a19be3" name="Eau Kirène 1,5 L" price="1 500" R={R} />
              <Row img="photo-1625772299848-391b6a87d7b3" name="Soda" desc="Coca Cola · Coca Zero · Sprite · Fanta · Schweppes Tonic · Schweppes Citron" price="1 000" R={R} />
              <Row img="photo-1511920170033-f8396924c348" name="Café Lavazza" price="1 500" R={R} />
              <Row img="photo-1556679343-c7306c1976bc" name="Thé à la Menthe" price="1 500" R={R} />
              <Row img="photo-1556679343-c7306c1976bc" name="Thé Noir" price="1 500" R={R} />
            </ListBox>

            <SubH title="Jus de Fruits" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))', gap: 13 }}>
              {[
                { name: "Jus d'Orange Pressé", price: '2 500', img: 'photo-1600271886742-f049cd451bba' },
                { name: 'Jus de Banane', price: '2 500', img: 'photo-1610970881699-44a5587cabec' },
                { name: 'Jus de Mangue', price: '3 000', img: 'photo-1546173159-315724a31696' },
                { name: 'Jus de Carotte', price: '2 500', img: 'photo-1598367079009-39d7cf8c4e8b' },
                { name: "Jus d'Ananas", price: '3 500', img: 'photo-1600271886742-f049cd451bba' },
                { name: 'Jus de Fruits', price: '3 500', img: 'photo-1546173159-315724a31696' },
                { name: "Jus d'Avocat", price: '3 000', img: 'photo-1610970881699-44a5587cabec' },
                { name: 'Jus Locaux', desc: 'Bissap · Bouye · Gingembre', price: '1 500', img: 'photo-1546173159-315724a31696' },
              ].map((d, i) => (
                <div key={i} style={{ background: '#fff', border: `1px solid ${GRL}`, borderRadius: 12, overflow: 'hidden', textAlign: 'center' }}>
                  <div style={{ height: 110, overflow: 'hidden' }}>
                    <img src={`https://images.unsplash.com/${d.img}?w=400&q=80`} alt={d.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{d.name}</div>
                    {d.desc && <div style={{ fontSize: 11, color: GRAY, marginBottom: 8 }}>{d.desc}</div>}
                    <div style={{ ...bebas, fontSize: 18, color: R }}>{d.price} FCFA</div>
                  </div>
                </div>
              ))}
            </div>

            <SubH title="Desserts" R={R} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
              <Card name="Tarte Citron" price="2 500" img="photo-1464305795204-6f5bbfc7fb81" R={R} GRL={GRL} />
              <Card name="Tarte aux Fruits" price="2 500" img="photo-1488477181946-6428a0291777" R={R} GRL={GRL} />
            </div>
          </Section>

        </div>

        {/* FOOTER */}
        <div style={{ background: BLK, color: '#fff', padding: isMobile ? '32px 16px' : '48px 32px', marginTop: 60 }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <h2 style={{ ...cormorant, fontSize: isMobile ? 24 : 32, marginBottom: 6 }}>Service Livraison</h2>
            <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 13, marginBottom: 28 }}>Nos spécialités exclusivement préparées à la commande, livrées chez vous avec des ingrédients de première qualité. Service traiteur disponible pour tous vos événements.</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              {[['Zone 1','500'],['Zone 2','1 000'],['Zone 3','1 500'],['Zone 4','2 000'],['Zone 5','2 500'],['Zone 6','3 000']].map(([z, p]) => (
                <div key={z} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 50, padding: '9px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: .8 }}>{z}</div>
                  <div style={{ ...bebas, fontSize: 20, color: R }}>{p} FCFA</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              {[
                { icon: 'fa-phone', href: 'tel:338423011', label: '33 842 30 11' },
                { icon: 'fa-whatsapp', fab: true, href: 'https://wa.me/221781424646', label: '78 142 46 46' },
                { icon: 'fa-envelope', href: 'mailto:contact@allosushifood.com', label: 'contact@allosushifood.com' },
                { icon: 'fa-envelope', href: 'mailto:Traiteur@alloosushi.com', label: 'Traiteur@alloosushi.com' },
                { icon: 'fa-map-marker-alt', href: '#', label: '62 Rue Félix Faure, Plateau, Dakar' },
                { icon: 'fa-globe', href: 'http://www.allosushifood.com', label: 'www.allosushifood.com' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,.06)', padding: '11px 16px', borderRadius: 11 }}>
                  <i className={`${(c as any).fab ? 'fab' : 'fas'} ${c.icon}`} style={{ color: R, fontSize: 15 }}></i>
                  <a href={c.href} style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>{c.label}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Sub-components ──

const TacosSizes: React.FC<{ R: string; bebas: React.CSSProperties }> = ({ R, bebas }) => {
  const sizes: [string, string][] = [['Medium (1 viande)', '3 000'], ['Large (2 viandes)', '4 500'], ['X-Large (3 viandes)', '5 500']];
  return (
    <div>
      {sizes.map(([l, p]) => (
        <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #f5f5f5', fontSize: 13 }}>
          <span>{l}</span><span style={{ ...bebas, fontSize: 18, color: R }}>{p} FCFA</span>
        </div>
      ))}
    </div>
  );
};

const Section: React.FC<{ id: string; icon: string; title: string; note?: string; R: string; GRL: string; children: React.ReactNode }> = ({ id, icon, title, note, R, children }) => (
  <div id={`sec-${id}`} style={{ paddingTop: 56 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, paddingBottom: 14, borderBottom: `2px solid ${R}` }}>
      <div style={{ width: 44, height: 44, background: R, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <i className={`fas ${icon}`} style={{ color: '#fff', fontSize: 17 }}></i>
      </div>
      <div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 700, color: '#111' }}>{title}</h2>
        {note && <div style={{ fontSize: 12, color: '#dc2626', fontWeight: 500, marginTop: 1 }}>{note}</div>}
      </div>
    </div>
    {children}
  </div>
);

const SubH: React.FC<{ title: string; note?: string; R: string }> = ({ title, note, R }) => (
  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#111', margin: '36px 0 16px', paddingLeft: 12, borderLeft: `4px solid ${R}`, display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
    {title}
    {note && <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#dc2626', fontWeight: 500 }}>{note}</span>}
  </div>
);

const ListBox: React.FC<{ GRL: string; R: string; children: React.ReactNode }> = ({ GRL, children }) => (
  <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${GRL}` }}>{children}</div>
);

const Row: React.FC<{ img: string; name: string; desc?: string; price: string; R: string }> = ({ img, name, desc, price, R }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 18px', borderBottom: '1px solid #f2f2f2', gap: 12 }}>
    <div style={{ width: 52, height: 52, borderRadius: 9, overflow: 'hidden', flexShrink: 0 }}>
      <img src={`https://images.unsplash.com/${img}?w=200&q=80`} alt={name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>{name}</div>
      {desc && <div style={{ fontSize: 11, color: '#777', marginTop: 2, lineHeight: 1.4 }}>{desc}</div>}
    </div>
    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 19, color: R, whiteSpace: 'nowrap' }}>{price} <small style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: '#777' }}>FCFA</small></div>
  </div>
);

const Card: React.FC<{ name: string; desc?: string; price: string; img: string; badge?: string; R: string; GRL: string }> = ({ name, desc, price, img, badge, R, GRL }) => (
  <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${GRL}` }}>
    <div style={{ height: 150, overflow: 'hidden', position: 'relative' }}>
      <img src={`https://images.unsplash.com/${img}?w=500&q=80`} alt={name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      {badge && <span style={{ position: 'absolute', top: 9, left: 9, background: R, color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{badge}</span>}
    </div>
    <div style={{ padding: '14px 16px' }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 4 }}>{name}</div>
      {desc && <div style={{ fontSize: 11.5, color: '#777', lineHeight: 1.5, marginBottom: 10 }}>{desc}</div>}
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: R }}>{price} <small style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: '#777' }}>FCFA</small></div>
    </div>
  </div>
);

const PkgCard: React.FC<{ num: string; pcs: string; items: string[]; price: string; img: string; R: string }> = ({ num, pcs, items, price, img, R }) => (
  <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
    <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
      <img src={`https://images.unsplash.com/${img}?w=600&q=80`} alt={num} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(0,0,0,.55) 100%)', display: 'flex', alignItems: 'flex-end', padding: 12 }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, color: '#fff', lineHeight: 1 }}>{num}</div>
      </div>
    </div>
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 11, color: '#777', fontWeight: 500, marginBottom: 8, textTransform: 'uppercase', letterSpacing: .5 }}>{pcs}</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 12, color: '#2a2a2a', display: 'flex', gap: 5 }}><span style={{ color: R, fontWeight: 700 }}>·</span>{item}</li>
        ))}
      </ul>
      <div style={{ display: 'inline-block', marginTop: 12, background: R, color: '#fff', fontFamily: "'Bebas Neue', sans-serif", fontSize: 19, padding: '5px 16px', borderRadius: 50 }}>{price} FCFA</div>
    </div>
  </div>
);

export default MenuPage;
