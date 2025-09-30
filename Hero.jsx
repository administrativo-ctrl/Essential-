export default function Hero(){
  return (
    <section className="bg-essential-gray100">
      <div className="container py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Marketing que dá rumo e resultado para negócios de serviços.
        </h1>
        <p className="mt-4 text-lg text-essential-gray600 max-w-2xl">
          Estratégia, conteúdo, tráfego e audiovisual — do jeito boutique, com foco em agenda cheia.
        </p>
        <div className="mt-8 flex gap-3">
          <a className="btn btn-primary" href="/contact">Solicitar Proposta</a>
          <a className="btn btn-secondary" href="https://wa.me/5521XXXXXXXXX" target="_blank" rel="noopener">Falar pelo WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
