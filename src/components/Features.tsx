import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Orçamento Rápido",
      desc: "Chego até você com rapidez. Avalio direto na sua casa e garanto o preço mais justo pelo reparo exato, sem letras miúdas.",
      image: "/images/maquina-clean.webp"
    },
    {
      title: "Peças Originais",
      desc: "Preserve a vida útil da sua máquina. Utilizamos apenas peças de reposição autênticas e homologadas pelos fabricantes.",
      image: "/images/close-parafusos.webp"
    },
    {
      title: "Garantia de 7 Dias",
      desc: "Garantia plena de 7 dias com acompanhamento técnico imediato.",
      image: "/images/homem-consertando-maquina.webp"
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blob background for extra aesthetic points under glass */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-0 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">O Fim das Suas Dores de Cabeça</h2>
          <p className="text-lg md:text-xl text-brand-dark font-medium">Veja por que sou o técnico de confiança que resolve seu problema hoje.</p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 px-4 md:px-0">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full group bg-white/60 backdrop-blur-md border border-white/60 hover:border-brand-yellow rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] md:hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Image composition header */}
              <div className="w-full h-48 md:h-56 overflow-hidden relative">
                {/* Subtle overlay glow on hover */}
                <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/10 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-brand-dark mb-3 tracking-tight">{item.title}</h3>
                <p className="text-base md:text-lg text-brand-dark leading-relaxed line-clamp-2 md:line-clamp-none">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
