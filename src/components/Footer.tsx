export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400">
          Rei das Máquinas Soluções Técnicas &copy; {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
        <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
          Atendimento na Grande São Paulo. Usamos apenas peças originais para garantir a longevidade da sua máquina.
        </p>
      </div>
    </footer>
  );
}
