import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Flame,
  Beef,
  Sandwich,
  Wine,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Quote,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-bbq.jpg";
import burgerImg from "@/assets/burger.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horse BBQ — Carne Defumada e Hambúrgueres em Sorocaba" },
      {
        name: "description",
        content:
          "Horse BBQ em Sorocaba: carne defumada artesanal, hambúrgueres autorais e bebidas geladas. Churrasco americano feito com tempo, fogo e fumaça.",
      },
      { name: "keywords", content: "BBQ Sorocaba, churrasco Sorocaba, carne defumada, hambúrguer artesanal, smoked meat, barbecue" },
      { property: "og:title", content: "Horse BBQ — Carne Defumada em Sorocaba" },
      { property: "og:description", content: "Defumados de baixa temperatura, hambúrgueres autorais e bebidas. O verdadeiro BBQ em Sorocaba." },
      { property: "og:type", content: "restaurant" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Horse BBQ",
          servesCuisine: ["BBQ", "Smoked Meat", "Burgers"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Sorocaba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#cardapio", label: "O que servimos" },
    { href: "#sobre", label: "A gente" },
    { href: "#depoimentos", label: "Opiniões" },
    { href: "#contato", label: "Fale com a gente" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-sm bg-ember grid place-items-center shadow-ember">
            <Flame className="w-5 h-5 text-white" />
          </span>
          <span className="font-black tracking-tight text-lg">HORSE <span className="text-[var(--brand-red)]">BBQ</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--brand-red)] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contato" className="inline-flex items-center gap-2 bg-ink text-white px-4 py-2 rounded-sm text-sm font-semibold hover:bg-[var(--brand-red)] transition-colors" style={{backgroundColor:'var(--ink)'}}>
            Reservar <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="w-6 h-0.5 bg-[var(--ink)] mb-1.5" />
          <div className="w-6 h-0.5 bg-[var(--ink)] mb-1.5" />
          <div className="w-4 h-0.5 bg-[var(--ink)]" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium py-2">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center w-full relative">
        <div className="lg:col-span-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-6">
            <span className="w-8 h-px bg-[var(--brand-red)]" />
            Sorocaba · SP · Feito com calma
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance">
            Sabor que<br />
            vem devagar,<br />
            <span className="text-[var(--brand-red)]">e fica na memória.</span>
          </h1>
          <p className="mt-8 text-lg text-[var(--ink-soft)] max-w-lg leading-relaxed">
            No Horse, a gente acredita que boas refeições começam com paciência.
            Carnes defumadas por horas, hambúrgueres preparados um a um, e um ambiente
            que convida você a relaxar e aproveitar cada momento.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#cardapio" className="bg-ember text-white px-7 py-4 rounded-sm font-semibold shadow-ember hover:translate-y-[-2px] transition-transform inline-flex items-center gap-2">
              Ver o que preparamos <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contato" className="border-2 border-[var(--ink)] px-7 py-4 rounded-sm font-semibold hover:bg-[var(--ink)] hover:text-white transition-colors">
              Como chegar
            </a>
          </div>
          <div className="mt-12 flex gap-8 text-sm">
            <div>
              <div className="font-black text-2xl">14h+</div>
              <div className="text-[var(--ash)]">no fogo baixo</div>
            </div>
            <div className="border-l border-black/10 pl-8">
              <div className="font-black text-2xl">100%</div>
              <div className="text-[var(--ash)]">lenha selecionada</div>
            </div>
            <div className="border-l border-black/10 pl-8">
              <div className="font-black text-2xl">★ 4.9</div>
              <div className="text-[var(--ash)]">quem vem, volta</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-ink">
            <img src={heroImg} alt="Brisket defumado sendo fatiado" width={1600} height={1200} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[var(--brand-red)]/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background p-5 rounded-sm shadow-ink max-w-[220px] hidden md:block">
            <div className="text-xs uppercase tracking-wider text-[var(--brand-red)] font-bold mb-1">Especialidade da casa</div>
            <div className="font-black text-lg leading-tight">Brisket de 14 horas</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Beef,
      title: "Carne Defumada",
      desc: "Brisket que desmancha, costela na medida e pulled pork com aquela fumaça que só quem entende consegue fazer. Tudo no ponto certo, sem pressa.",
    },
    {
      icon: Sandwich,
      title: "Hambúrgueres",
      desc: "Blend defumado da casa, pão brioche leve e ingredientes frescos. Simples na aparência, surpreendente no primeiro pedaço.",
    },
    {
      icon: Wine,
      title: "Bebidas",
      desc: "Cervejas especiais, drinks refrescantes e opções sem álcool. Uma boa bebida faz toda a diferença no final do dia.",
    },
  ];
  return (
    <section id="cardapio" className="py-24 md:py-32 relative" style={{backgroundColor:'var(--bone)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">O que servimos</div>
          <h2 className="text-4xl md:text-5xl text-balance">A boa cozinha não tem atalhos. <span className="text-[var(--ash)]">Só dedicação.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group bg-background p-8 rounded-sm border border-black/5 hover:border-[var(--brand-red)] transition-all hover:shadow-ember relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[6rem] font-black text-black/5 leading-none px-4">{String(i+1).padStart(2,'0')}</div>
              <div className="w-14 h-14 rounded-sm bg-[var(--ink)] grid place-items-center mb-6 group-hover:bg-ember transition-all relative">
                <it.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-3 relative">{it.title}</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed relative">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="aspect-[16/10] rounded-sm overflow-hidden">
            <img src={burgerImg} alt="Hambúrguer defumado" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="bg-[var(--ink)] text-white p-10 rounded-sm flex flex-col justify-between">
            <Quote className="w-10 h-10 text-[var(--brand-red)]" />
            <div>
              <p className="text-2xl font-medium leading-snug">
                "A gente não serve a carne antes da hora. Quando ela chega à sua mesa, você sente que cada minuto valeu a pena."
              </p>
              <div className="mt-6 text-sm text-white/60 uppercase tracking-wider">— A filosofia do Horse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-ink">
            <img src={aboutImg} alt="Pitmaster cuidando do smoker" loading="lazy" width={1200} height={1400} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -right-6 bg-ember text-white p-6 rounded-sm hidden md:block">
            <div className="font-black text-3xl">2019</div>
            <div className="text-xs uppercase tracking-wider">Cuidando de você</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">Nossa história</div>
          <h2 className="text-4xl md:text-5xl mb-6 text-balance">Um cantinho em Sorocaba onde a carne é tratada com carinho.</h2>
          <div className="space-y-5 text-[var(--ink-soft)] leading-relaxed text-lg">
            <p>
              O Horse nasceu do sonho de trazer para Sorocaba um barbecue feito com verdade.
              Fogo manso, madeira selecionada e aquele cuidado de quem ama o que faz.
            </p>
            <p>
              Cada brisket descansa 14 horas no smoker. Cada costela recebe o tempero na medida certa.
              E cada hambúrguer carrega o mesmo blend defumado que conquistou quem já passou por aqui.
            </p>
            <p>
              Sem pressa, sem complicação. Só o prazer de cozinhar bem e receber bem.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "16h", l: "de carinho no smoker" },
              { n: "5+", l: "cortes especiais" },
              { n: "1", l: "jeito Horse de fazer" },
            ].map((s, i) => (
              <div key={i} className="border-t-2 border-[var(--ink)] pt-3">
                <div className="font-black text-3xl">{s.n}</div>
                <div className="text-sm text-[var(--ash)]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Rafael M.",
      role: "Cliente desde 2022",
      text: "Brisket perfeito, fumaça na medida. É o único lugar em Sorocaba que me faz sentir que estou em um barbecue de verdade. Sensacional.",
    },
    {
      name: "Camila T.",
      role: "Avaliou no Google",
      text: "O hambúrguer defumado é incrível. O ambiente é super agradável, o atendimento é caloroso e a carne… simplesmente deliciosa.",
    },
    {
      name: "Bruno A.",
      role: "Cliente frequente",
      text: "Comi barbecue em Austin e posso dizer: o Horse está no mesmo nível. A costela desmancha na boca. Levo minha família toda vez que posso.",
    },
  ];
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[var(--ink)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">Quem provou, amou</div>
          <h2 className="text-4xl md:text-5xl text-balance">Palavras de quem já se sentiu em casa. <span className="text-white/50">E voltou.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[var(--brand-red)] transition-colors">
              <div className="text-[var(--brand-red)] mb-4 text-lg">★★★★★</div>
              <p className="text-white/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-white/50">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Contato site — ${data.get('nome')}`);
    const body = encodeURIComponent(`${data.get('mensagem')}\n\nTel: ${data.get('telefone')}`);
    window.location.href = `mailto:contato@horsebbq.com.br?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contato" className="py-24 md:py-32" style={{backgroundColor:'var(--bone)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">Contato</div>
          <h2 className="text-4xl md:text-5xl text-balance">A porta está aberta. Venha nos conhecer.</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-sm border border-black/5 flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-ember grid place-items-center shrink-0"><MapPin className="w-5 h-5 text-white"/></div>
              <div>
                <div className="font-bold mb-1">Endereço</div>
                <div className="text-[var(--ink-soft)]">Rua Exemplo, 123 — Centro<br/>Sorocaba, SP</div>
              </div>
            </div>
            <div className="bg-background p-6 rounded-sm border border-black/5 flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-ember grid place-items-center shrink-0"><Phone className="w-5 h-5 text-white"/></div>
              <div>
                <div className="font-bold mb-1">Telefone</div>
                <a href="tel:+551532225555" className="text-[var(--ink-soft)] hover:text-[var(--brand-red)]">(15) 3222-5555</a>
              </div>
            </div>
            <div className="bg-background p-6 rounded-sm border border-black/5 flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-ember grid place-items-center shrink-0"><Clock className="w-5 h-5 text-white"/></div>
              <div>
                <div className="font-bold mb-1">Horário de funcionamento</div>
                <div className="text-[var(--ink-soft)]">Ter–Dom · 18h às 23h<br/>Segunda é dia de descansar</div>
              </div>
            </div>
            <div className="aspect-[16/10] rounded-sm overflow-hidden border border-black/10">
              <iframe
                title="Mapa Horse BBQ"
                src="https://www.google.com/maps?q=Sorocaba,SP&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-background p-8 rounded-sm border border-black/5 space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2">Nome</label>
              <input name="nome" required className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">E-mail</label>
                <input name="email" type="email" required className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Telefone</label>
                <input name="telefone" className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Mensagem</label>
              <textarea name="mensagem" required rows={5} className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none resize-none" />
            </div>
            <button type="submit" className="w-full bg-ember text-white py-4 rounded-sm font-semibold shadow-ember hover:translate-y-[-2px] transition-transform inline-flex items-center justify-center gap-2">
              {sent ? "Abrindo seu e-mail…" : "Enviar mensagem"} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-[var(--ash)] text-center">Responderemos o mais rápido possível. Para reservas de última hora, prefira o WhatsApp.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-sm bg-ember grid place-items-center"><Flame className="w-5 h-5 text-white"/></span>
              <span className="font-black text-lg">HORSE <span className="text-[var(--brand-red)]">BBQ</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Barbecue artesanal em Sorocaba, feito com fogo manso, fumaça de verdade e muito carinho.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--brand-red)] font-bold mb-4">Navegar</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#cardapio" className="hover:text-white">Cardápio</a></li>
              <li><a href="#sobre" className="hover:text-white">Quem somos</a></li>
              <li><a href="#depoimentos" className="hover:text-white">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--brand-red)] font-bold mb-4">Redes sociais</div>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-sm border border-white/15 grid place-items-center hover:bg-ember hover:border-transparent transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-sm border border-white/15 grid place-items-center hover:bg-ember hover:border-transparent transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-sm border border-white/15 grid place-items-center hover:bg-ember hover:border-transparent transition-colors"><MessageCircle className="w-5 h-5"/></a>
              <a href="mailto:contato@horsebbq.com.br" aria-label="Email" className="w-10 h-10 rounded-sm border border-white/15 grid place-items-center hover:bg-ember hover:border-transparent transition-colors"><Mail className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Horse BBQ — Sorocaba, SP. Todos os direitos reservados.</div>
          <div>Feito com fogo, fumaça e muito carinho.</div>
        </div>
      </div>
    </footer>
  );
}
