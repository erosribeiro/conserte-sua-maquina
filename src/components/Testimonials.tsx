import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Maria Helena",
    time: "1 dia atrás",
    avatar: "/images/avatars/avatar-1.webp",
    text: "Minha Brastemp parou de centrifugar. O técnico chegou no horário combinado, abriu na minha frente e trocou uma peça. Serviço honesto."
  },
  {
    name: "Carlos Gomes",
    time: "1 semana atrás",
    avatar: "/images/avatars/avatar-2.webp",
    text: "Atendimento imbatível. Resolveram em 40 minutos o que outra empresa disse que levaria 1 semana. Ganharam um cliente."
  },
  {
    name: "Aline Torres",
    time: "1 mês atrás",
    avatar: "/images/avatars/avatar-3.webp",
    text: "Impecável. Muito educado, limpou tudo depois do serviço e me deu garantia. Recomendo de olhos fechados."
  },
  {
    name: "Roberto Silva",
    time: "2 meses atrás",
    avatar: "/images/avatars/avatar-4.webp",
    text: "Minha máquina fazia um barulho enorme. O conserto foi rápido e a máquina voltou a funcionar silenciosamente como nova."
  },
  {
    name: "Fernanda Costa",
    time: "3 meses atrás",
    avatar: "/images/avatars/avatar-5.webp",
    text: "Gostei muito da transparência do orçamento. Explicou o problema antes de cobrar."
  }
];

const GoogleLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-6 right-6">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="avaliacoes" ref={containerRef} className="py-20 md:py-24 bg-white overflow-hidden relative">
      <motion.div style={{ y: yParallax }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-10 md:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            O que dizem sobre o meu trabalho
          </h2>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed">
            Centenas de clientes já economizaram evitando a compra de uma máquina nova.
          </p>
        </div>
      </motion.div>
      
      <div 
        className="w-full relative py-4 z-20"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div 
          className="flex gap-4 md:gap-8 w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
        >
          {duplicatedTestimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="w-[85vw] sm:w-[400px] md:w-[450px] flex-shrink-0 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group cursor-default"
            >
              <GoogleLogo />
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <img 
                  src={t.avatar} 
                  alt={`Cliente satisfeito com o conserto: Depoimento de ${t.name}`} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-brand-dark text-base md:text-lg leading-tight">{t.name}</h3>
                  <span className="text-xs md:text-sm text-slate-500 font-medium">{t.time}</span>
                </div>
              </div>
              <div className="flex gap-1 mb-3 justify-start text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 italic text-sm md:text-[1.05rem] leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
