export default function Navbar() {
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for fixed navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Brand Icon left aligned */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <img src="/images/favicon-branco-removebg-preview.webp" alt="MM Refrigerações" className="h-12 w-auto object-contain" />
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-10">
          <a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')} className="font-semibold text-brand-dark hover:text-brand-yellow transition-colors">Serviços</a>
          <a href="#garantia" onClick={(e) => handleScrollTo(e, 'garantia')} className="font-semibold text-brand-dark hover:text-brand-yellow transition-colors">Garantia</a>
          <a href="#avaliacoes" onClick={(e) => handleScrollTo(e, 'avaliacoes')} className="font-semibold text-brand-dark hover:text-brand-yellow transition-colors">Avaliações</a>
        </div>

        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex bg-brand-yellow text-brand-dark px-7 py-2.5 rounded-full font-bold hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
}
