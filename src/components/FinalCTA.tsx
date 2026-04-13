import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax subtle scaling effect for background element
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-slate-900 border-t border-slate-800">
      
      {/* Dynamic Background Layout with the requested image */}
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ scale: backgroundScale, y: backgroundY }}
      >
        <img 
          src="/images/maquina-familia-de-fundo.webp" 
          alt="Família feliz com as roupas limpas" 
          className="w-full h-full object-cover mix-blend-screen"
          loading="lazy"
        />
        {/* Deep blue color burn filter over image */}
        <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-90"></div>
      </motion.div>

      {/* Decorative Blob to complement gradient style */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-yellow/80 rounded-full blur-[140px] opacity-40 translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight drop-shadow-lg"
        >
          Não deixe a roupa acumular. <br className="hidden md:block"/> Orçamento gratuito via WhatsApp em 5 minutos.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Agendar atendimento via WhatsApp"
            className="group relative inline-flex items-center justify-center gap-3 bg-accent-green hover:bg-green-500 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-[0_5px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Subtle ping pulse behind button */}
            <span className="absolute inset-0 rounded-full ring-4 ring-accent-green/50 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></span>
            
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.996 0C5.378 0 0 5.375 0 11.991C0 14.103 0.551 16.143 1.583 17.935L0 24L6.195 22.378C7.933 23.327 9.932 23.829 11.989 23.829H11.996C18.613 23.829 23.992 18.455 24 11.838C24 8.625 22.748 5.617 20.474 3.344C18.201 1.071 15.196 -0.003 11.996 0ZM11.996 21.834C10.158 21.834 8.358 21.34 6.786 20.407L6.411 20.185L2.738 21.148L3.717 17.562L3.473 17.172C2.441 15.534 1.895 13.626 1.895 11.666C1.895 6.096 6.425 1.562 12.001 1.562C14.7 1.564 17.228 2.615 19.136 4.526C21.045 6.438 22.097 8.969 22.097 11.671C22.098 17.241 17.569 21.775 11.996 21.834ZM17.531 14.195C17.226 14.043 15.733 13.305 15.455 13.205C15.177 13.104 14.975 13.054 14.773 13.359C14.571 13.664 13.991 14.364 13.815 14.567C13.638 14.77 13.461 14.795 13.157 14.643C12.854 14.49 11.875 14.17 10.718 13.141C9.817 12.341 9.208 11.336 9.032 11.031C8.855 10.726 9.013 10.561 9.165 10.409C9.302 10.272 9.467 10.06 9.619 9.882C9.771 9.704 9.821 9.577 9.923 9.373C10.024 9.169 9.974 8.991 9.898 8.838C9.822 8.686 9.215 7.195 8.961 6.586C8.714 5.992 8.463 6.073 8.277 6.064C8.1 6.055 7.898 6.053 7.696 6.053C7.493 6.053 7.165 6.129 6.887 6.434C6.609 6.74 5.8 7.495 5.8 9.031C5.8 10.567 6.912 12.052 7.064 12.256C7.216 12.459 9.264 15.58 12.386 16.924C13.128 17.243 13.708 17.435 14.162 17.58C14.906 17.818 15.584 17.783 16.127 17.704C16.733 17.616 18.011 16.93 18.289 16.167C18.567 15.405 18.567 14.757 18.491 14.617C18.415 14.477 18.213 14.388 17.909 14.236H17.531L17.531 14.195Z"/>
            </svg>
            Agendar Diagnóstico Imediato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
