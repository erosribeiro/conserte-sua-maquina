import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "Sua máquina não liga ou trava o ciclo?",
    desc: "Fazemos reparos precisos na placa eletrônica. Evite substituições desnecessárias — resolvemos o problema na raiz, com diagnóstico rápido e transparência total no orçamento.",
    image: "/images/maquina-clean.webp",
    tag: "Placa Eletrônica"
  },
  {
    title: "Barulhos estranhos ou trepidação excessiva?",
    desc: "Trocamos a mecânica completa com peças originais homologadas. Rolamentos, retentores e eixos substituídos para que sua máquina volte a funcionar em silêncio absoluto.",
    image: "/images/close-parafusos.webp",
    tag: "Mecânica & Eixos"
  },
  {
    title: "Roupas saindo com mau cheiro ou resíduos?",
    desc: "Limpeza técnica profunda do cesto, cuba e todas as gaxetas. Eliminamos bactérias, fungos e sujeira acumulada que uma lavagem comum não consegue remover.",
    image: "/images/homem-consertando-maquina.webp",
    tag: "Higienização"
  }
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Trust() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [dragging, setDragging] = useState(false);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1);

  return (
    <section id="garantia" className="relative py-16 md:py-24 bg-slate-900 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/maquina-familia-de-fundo.webp"
          alt="Fundo técnico sutil"
          className="w-full h-full object-cover object-center opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/95 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight drop-shadow-md">
            Excelência Técnica e Peças Originais
          </h2>
          <p className="text-base md:text-lg text-slate-300 font-light max-w-xl mx-auto">
            Sua tranquilidade é nossa prioridade. Oferecemos garantia completa de 3 meses em todas as peças originais e serviços realizados.
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="relative flex items-center gap-2 md:gap-4">

          {/* Prev arrow — Apple-style minimal */}
          <button
            onClick={prev}
            aria-label="Slide anterior"
            className="flex-shrink-0 text-slate-600 hover:text-slate-200 transition-all duration-200 opacity-40 hover:opacity-100 -ml-2 md:ml-0 z-20"
          >
            <ChevronLeft />
          </button>

          {/* Slide area */}
          <div
            className="flex-1 overflow-hidden rounded-3xl"
            style={{ touchAction: 'pan-y' }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragStart={() => setDragging(true)}
                onDragEnd={(_, info) => {
                  setDragging(false);
                  if (info.offset.x < -50) next();
                  else if (info.offset.x > 50) prev();
                }}
                onClick={(e) => { if (dragging) e.preventDefault(); }}
                className="cursor-grab active:cursor-grabbing select-none"
              >
                {/* Glassmorphism card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                  {/* Image side */}
                  <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 md:bg-gradient-to-r" />
                    <img
                      src={slides[current].image}
                      alt={slides[current].tag}
                      loading="lazy"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
                    {/* Tag pill */}
                    <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow text-xs font-bold tracking-wider uppercase mb-4">
                      {slides[current].tag}
                    </span>

                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 leading-tight">
                      {slides[current].title}
                    </h3>

                    <p className="text-slate-300 text-base leading-relaxed font-light">
                      {slides[current].desc}
                    </p>

                    {/* Trust badge */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 text-accent-green flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Garantia de <strong className="text-white">90 dias (3 meses)</strong> em peças e serviço</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Próximo slide"
            className="flex-shrink-0 text-slate-600 hover:text-slate-200 transition-all duration-200 opacity-40 hover:opacity-100 -mr-2 md:mr-0 z-20"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: idx === current ? '24px' : '8px',
                height: '8px',
                backgroundColor: idx === current ? '#F0BC18' : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
