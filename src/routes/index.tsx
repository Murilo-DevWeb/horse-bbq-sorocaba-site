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
    { href: "#cardapio", label: "O rango" },
    { href: "#sobre", label: "Quem somos" },
    { href: "#depoimentos", label: "Recadinhos" },
    { href: "#contato", label: "Cola aqui" },
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
            Bora reservar <ArrowRight className="w-4 h-4" />
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
            Sorocaba · SP · No capricho
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance">
            Senta,<br />
            relaxa<br />
            <span className="text-[var(--brand-red)]">e come bem.</span>
          </h1>
          <p className="mt-8 text-lg text-[var(--ink-soft)] max-w-lg leading-relaxed">
            A gente passa horas cuidando da carne pra você passar minutos
            agradecendo. Defumados, burgers monstros e bebida gelada te esperando.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#cardapio" className="bg-ember text-white px-7 py-4 rounded-sm font-semibold shadow-ember hover:translate-y-[-2px] transition-transform inline-flex items-center gap-2">
              Bora ver o rango <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contato" className="border-2 border-[var(--ink)] px-7 py-4 rounded-sm font-semibold hover:bg-[var(--ink)] hover:text-white transition-colors">
              Onde a gente tá
            </a>
          </div>
          <div className="mt-12 flex gap-8 text-sm">
            <div>
              <div className="font-black text-2xl">14h+</div>
              <div className="text-[var(--ash)]">na fumaça</div>
            </div>
            <div className="border-l border-black/10 pl-8">
              <div className="font-black text-2xl">100%</div>
              <div className="text-[var(--ash)]">lenha de verdade</div>
            </div>
            <div className="border-l border-black/10 pl-8">
              <div className="font-black text-2xl">★ 4.9</div>
              <div className="text-[var(--ash)]">a galera aprovou</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-ink">
            <img src={heroImg} alt="Brisket defumado sendo fatiado" width={1600} height={1200} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[var(--brand-red)]/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background p-5 rounded-sm shadow-ink max-w-[220px] hidden md:block">
            <div className="text-xs uppercase tracking-wider text-[var(--brand-red)] font-bold mb-1">Xodó da casa</div>
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
      desc: "Brisket, costela e pulled pork que passam horas no smoker até virarem aquilo que você sonhou ontem à noite.",
    },
    {
      icon: Sandwich,
      title: "Burgers Monstros",
      desc: "Blend defumado da casa, pão brioche macio e ingredientes escolhidos um por um. Sem frescura, só sabor.",
    },
    {
      icon: Wine,
      title: "Bebida Gelada",
      desc: "Cerveja artesanal, drink autoral, refri e suco. Pede o que quiser, a gente combina certinho.",
    },
  ];
  return (
    <section id="cardapio" className="py-24 md:py-32 relative" style={{backgroundColor:'var(--bone)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">O rango</div>
          <h2 className="text-4xl md:text-5xl text-balance">Comida boa não tem atalho. <span className="text-[var(--ash)]">E aqui ninguém tenta.</span></h2>
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
                "A carne sai quando ela tá pronta. Não quando o cliente tá com pressa. E acredita: vale a espera."
              </p>
              <div className="mt-6 text-sm text-white/60 uppercase tracking-wider">— O jeito Horse de ser</div>
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
            <div className="text-xs uppercase tracking-wider">Desde</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">A nossa história</div>
          <h2 className="text-4xl md:text-5xl mb-6 text-balance">Aqui não é churrasco de domingo. É outro nível.</h2>
          <div className="space-y-5 text-[var(--ink-soft)] leading-relaxed text-lg">
            <p>
              O Horse nasceu em Sorocaba de uma teimosia boa: fazer barbecue do jeito
              que o pessoal do Texas faz. Fogo manso, fumaça de madeira boa e paciência de sobra.
            </p>
            <p>
              Cada brisket dorme 14 horas no smoker. Cada costela leva nosso rub na medida certa.
              E cada hambúrguer carrega o mesmo blend defumado que fez a gente virar referência por aqui.
            </p>
            <p>
              Sem pressa, sem firula, sem economizar onde não pode. Só fogo, fumaça e carne tratada com carinho.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "16h", l: "no smoker, fácil" },
              { n: "5+", l: "cortes na casa" },
              { n: "1", l: "jeito certo: o nosso" },
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
      role: "Cliente da casa desde 2022",
      text: "Brisket no ponto, fumaça na medida. Único lugar de Sorocaba que entrega BBQ americano de verdade. Não tem pra ninguém.",
    },
    {
      name: "Camila T.",
      role: "Deixou no Google",
      text: "O burger defumado é coisa de outro mundo. Lugar despojado, pessoal super gente boa e a carne… ai, a carne.",
    },
    {
      name: "Bruno A.",
      role: "Já virou frequência",
      text: "Comi barbecue em Austin e pode confiar: o Horse não fica devendo nada. Costela desmancha na boca. Volto com a família toda.",
    },
  ];
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[var(--ink)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">Quem veio, voltou contando</div>
          <h2 className="text-4xl md:text-5xl text-balance">Não somos nós falando. <span className="text-white/50">É a galera.</span></h2>
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
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-4">Cola aqui</div>
          <h2 className="text-4xl md:text-5xl text-balance">A fumaça já tá rolando. Falta você.</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-sm border border-black/5 flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-ember grid place-items-center shrink-0"><MapPin className="w-5 h-5 text-white"/></div>
              <div>
                <div className="font-bold mb-1">Onde a gente fica</div>
                <div className="text-[var(--ink-soft)]">Rua Exemplo, 123 — Centro<br/>Sorocaba, SP</div>
              </div>
            </div>
            <div className="bg-background p-6 rounded-sm border border-black/5 flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-ember grid place-items-center shrink-0"><Phone className="w-5 h-5 text-white"/></div>
              <div>
                <div className="font-bold mb-1">Liga aí</div>
                <a href="tel:+551532225555" className="text-[var(--ink-soft)] hover:text-[var(--brand-red)]">(15) 3222-5555</a>
              </div>
            </div>
            <div className="bg-background p-6 rounded-sm border border-black/5 flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-ember grid place-items-center shrink-0"><Clock className="w-5 h-5 text-white"/></div>
              <div>
                <div className="font-bold mb-1">Quando abrimos</div>
                <div className="text-[var(--ink-soft)]">Ter–Dom · 18h às 23h<br/>Segunda a gente descansa</div>
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
              <label className="block text-sm font-bold mb-2">Como te chamam?</label>
              <input name="nome" required className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Seu e-mail</label>
                <input name="email" type="email" required className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Zap / telefone</label>
                <input name="telefone" className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Manda o papo</label>
              <textarea name="mensagem" required rows={5} className="w-full px-4 py-3 border border-black/10 rounded-sm focus:border-[var(--brand-red)] outline-none resize-none" />
            </div>
            <button type="submit" className="w-full bg-ember text-white py-4 rounded-sm font-semibold shadow-ember hover:translate-y-[-2px] transition-transform inline-flex items-center justify-center gap-2">
              {sent ? "Abrindo seu e-mail…" : "Mandar mensagem"} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-[var(--ash)] text-center">A gente responde rapidinho. Pra reserva de última hora, manda no Zap.</p>
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
              Barbecue raiz, feito em Sorocaba com fogo manso, fumaça de verdade e zero pressa.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--brand-red)] font-bold mb-4">Dar uma volta</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#cardapio" className="hover:text-white">O rango</a></li>
              <li><a href="#sobre" className="hover:text-white">Quem somos</a></li>
              <li><a href="#depoimentos" className="hover:text-white">Recadinhos</a></li>
              <li><a href="#contato" className="hover:text-white">Cola aqui</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--brand-red)] font-bold mb-4">Cola com a gente</div>
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
          <div>Feito com fogo, fumaça e um café forte.</div>
        </div>
      </div>
    </footer>
  );
}
