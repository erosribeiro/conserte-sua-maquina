export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <img src="/images/logo-branca-removebg-preview.webp" alt="MM Refrigerações" loading="lazy" className="h-10 w-auto object-contain opacity-90" />
        </div>
        <p className="text-slate-400 font-medium">
          &copy; 2026 MM Refrigerações - Todos os direitos reservados.
        </p>
        <p className="text-slate-500 text-sm mt-4 max-w-lg mx-auto">
          Atendimento na Grande São Paulo. Usamos apenas peças originais para garantir a longevidade da sua máquina.
        </p>
      </div>
    </footer>
  );
}
