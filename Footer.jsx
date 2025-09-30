export default function Footer(){
  return (
    <footer className="mt-16 border-t border-essential-gray100">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold">Grupo Essential</p>
          <p className="text-essential-gray600 mt-2">Teresópolis • RJ — Brasil</p>
        </div>
        <div>
          <p className="font-semibold">Links</p>
          <ul className="mt-2 space-y-2">
            <li><a href="/services" className="hover:underline">Serviços</a></li>
            <li><a href="/cases" className="hover:underline">Cases</a></li>
            <li><a href="/about" className="hover:underline">Sobre</a></li>
            <li><a href="/content" className="hover:underline">Conteúdos</a></li>
            <li><a href="/contact" className="hover:underline">Contato</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <ul className="mt-2 space-y-2">
            <li><a href="/privacy" className="hover:underline">Privacidade</a></li>
            <li><a href="/terms" className="hover:underline">Termos</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-essential-gray100 py-4 text-center text-xs text-essential-gray600">
        © {new Date().getFullYear()} Grupo Essential — Todos os direitos reservados.
      </div>
    </footer>
  );
}
