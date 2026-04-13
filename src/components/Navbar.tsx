import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const prevScroll = useMotionValue(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = prevScroll.get();
    // Hide on scroll down (past 80px), reveal on scroll up
    if (latest > 80) {
      setScrolled(true);
      setHidden(latest > prev && latest > 120);
    } else {
      setScrolled(false);
      setHidden(false);
    }
    prevScroll.set(latest);
  });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(251, 251, 251, 0.75)' : 'rgba(251, 251, 251, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.25)'
          : '1px solid rgba(255,255,255,0.1)',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[72px]">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/images/favicon-branco-removebg-preview.webp"
            alt="MM Refrigerações"
            className="h-11 w-auto object-contain"
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex flex-1 justify-center space-x-10">
          {[
            { label: 'Serviços', id: 'servicos' },
            { label: 'Garantia', id: 'garantia' },
            { label: 'Avaliações', id: 'avaliacoes' },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScrollTo(e, id)}
              className="font-semibold text-brand-dark/80 hover:text-brand-yellow transition-colors duration-200 text-sm tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento via WhatsApp"
          className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          {/* WhatsApp micro icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
            <path d="M11.996 0C5.378 0 0 5.375 0 11.991c0 2.112.551 4.152 1.583 5.944L0 24l6.195-1.622c1.738.949 3.737 1.451 5.794 1.451h.007C18.613 23.829 24 18.455 24 11.838 24 8.625 22.748 5.617 20.474 3.344 18.201 1.071 15.196-.003 11.996 0z"/>
          </svg>
          Solicitar Orçamento
        </a>
      </div>
    </motion.nav>
  );
}
