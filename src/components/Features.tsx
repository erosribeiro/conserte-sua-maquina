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
      desc: "Conte com 7 dias de garantia plena. Faço acompanhamento pós-serviço rápido para você ficar tranquilo e sem dores de cabeça.",
      image: "/images/homem-consertando-maquina.webp"
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blob background for extra aesthetic points under glass */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-0 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">O Fim das Suas Dores de Cabeça</h2>
          <p className="text-lg md:text-xl text-soft-gray font-medium">Veja por que sou o técnico de confiança que resolve seu problema hoje.</p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-4 md:px-0">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center group bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] md:hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Image composition header */}
              <div className="w-full h-48 md:h-56 overflow-hidden relative">
                {/* Subtle overlay glow on hover */}
                <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/10 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-base md:text-lg text-soft-gray leading-relaxed line-clamp-2 md:line-clamp-none">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
