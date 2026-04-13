import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Trust() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Não liga ou trava?",
      desc: "Sua máquina não liga ou trava o ciclo? Fazemos reparos precisos na placa eletrônica para você."
    },
    {
      title: "Trepidação e barulhos?",
      desc: "Barulhos estranhos ou trepidação excessiva? Trocamos a mecânica completa com peças originais."
    },
    {
      title: "Limpeza Profunda",
      desc: "Sujando as roupas? Limpeza técnica completa do cesto e cuba. Elimina mau cheiro e resíduos."
    }
  ];

  return (
    <section id="garantia" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      
      {/* Background Image Composition */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/homem-consertando-maquina.webp" 
          alt="Técnico realizando manutenção em máquina de lavar Brastemp branca" 
          className="w-full h-full object-cover object-[70%_20%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex">
        
        {/* Floating Glassmorphism Content Box on Left */}
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            Excelência Técnica e Peças Originais
          </h2>
          <p className="text-base md:text-lg text-slate-200 mb-8 font-light">
            Como especialista focado, resolvo a raiz do defeito para que o serviço saia barato e dure muito mais.
          </p>
          
          {/* Mobile-friendly Tabs / Accordion Logic */}
          <div className="flex space-x-2 md:space-x-4 mb-6 overflow-x-auto hide-scrollbar pb-2">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 border-transparent ${
                  activeTab === idx 
                  ? 'bg-accent-green text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] border-accent-green' 
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="min-h-[120px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <svg className="flex-shrink-0 w-8 h-8 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{tabs[activeTab].title}</h3>
                    <p className="text-slate-300 leading-relaxed font-light line-clamp-2 md:line-clamp-none">{tabs[activeTab].desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
