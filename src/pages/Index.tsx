const KIWIFY_LINK = "https://pay.kiwify.com.br/UNS5O8G";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, X, Heart, Eye, Brain, Flame, Shield, BookOpen, Feather, Star } from "lucide-react";

const CTAButton = ({ children }: { children: React.ReactNode }) => (
  <a href={KIWIFY_LINK} target="_blank" rel="noopener noreferrer">
    <Button
      size="lg"
      className="bg-primary hover:bg-cta-glow text-primary-foreground text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-body font-bold tracking-wide"
    >
      {children}
    </Button>
  </a>
);

const SectionWrapper = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`px-6 md:px-8 py-16 md:py-24 ${className}`}>
    <div className="max-w-3xl mx-auto">{children}</div>
  </section>
);

// 1. Hero
const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center justify-center px-6 md:px-8 py-20 bg-gradient-to-b from-rose-soft to-background">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <p className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase">Um livro que pesa na alma — e liberta</p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
        O peso que não aparece<br />
        <span className="text-primary italic">na balança</span>
      </h1>
      <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Porque o problema nunca foi só o corpo.<br />
        Foi o silêncio. Foi a culpa.<br />
        Foi tudo o que você engoliu — sem mastigar — por anos.
      </p>
      <div className="space-y-4 text-foreground/80 font-body text-base md:text-lg italic leading-relaxed">
        <p>Se você já tentou emagrecer mais vezes do que consegue contar…</p>
        <p>Se já prometeu "agora vai" olhando no espelho…</p>
        <p>Se já sentiu vergonha do próprio corpo, mesmo tentando ser forte…</p>
      </div>
      <p className="font-display text-lg md:text-xl text-foreground font-medium">
        Esse livro não é confortável.<br />
        Mas talvez seja exatamente o que você precisava ler.
      </p>
      <div className="pt-4">
        <CTAButton>Quero ler agora — R$ 49,90</CTAButton>
      </div>
    </div>
  </section>
);

// 2. Ninguém te contou
const NobodyToldYou = () => (
  <SectionWrapper className="bg-warm-dark text-primary-foreground">
    <div className="space-y-6 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-semibold">Ninguém te contou isso antes…</h2>
      <div className="font-body text-lg leading-relaxed space-y-4 text-primary-foreground/90">
        <p>Você não falha porque não tem força de vontade.</p>
        <p>Você falha porque está tentando resolver no prato algo que nasceu <strong className="text-accent">na mente, nas emoções e na identidade.</strong></p>
        <p>Dietas falham. Planos falham. Recomeços infinitos cansam.</p>
        <p>E enquanto isso, o corpo vai gritando —<br />dores, compulsões, efeito sanfona, exaustão emocional.</p>
        <p className="font-display text-xl md:text-2xl italic pt-4">
          Porque quando a alma não é ouvida, o corpo cobra.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

// 3. Essa história
const StorySection = () => (
  <SectionWrapper className="bg-rose-soft">
    <div className="space-y-6">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">Essa história começa como muitas outras</h2>
      <div className="font-body text-lg leading-relaxed space-y-4 text-foreground/85">
        <p className="font-display text-2xl italic text-center text-foreground">"Eu sempre fui a gordinha."</p>
        <p>Não a forte. Não a confiante.<br />A engraçada. A simpática.<br />A que compensava no sorriso o desconforto de existir naquele corpo.</p>
        <p>A comida virou colo. Virou anestesia. Virou silêncio.</p>
        <p>Na pandemia, o peso chegou aos 138kg.<br />Veio a bariátrica. Veio o estômago novo.</p>
        <p>Mas a verdade ninguém te conta:</p>
      </div>
      <div className="space-y-3 pt-2">
        {[
          "A cirurgia não opera a mente.",
          "A cabeça continua a mesma.",
          "Os padrões continuam vivos.",
        ].map((text) => (
          <p key={text} className="font-display text-xl md:text-2xl font-semibold text-primary text-center">
            👉 {text}
          </p>
        ))}
      </div>
      <p className="font-body text-lg text-center text-foreground/80 pt-4 italic">
        E foi ali que tudo começou de verdade.
      </p>
    </div>
  </SectionWrapper>
);

// 4. Identificação
const identificationItems = [
  { icon: Eye, text: "Come escondida, mesmo dizendo que \"já está tudo bem\"" },
  { icon: Flame, text: "Começa na segunda… toda segunda" },
  { icon: Heart, text: "Se culpa depois de comer" },
  { icon: Shield, text: "Tem medo de engordar tudo de novo" },
  { icon: Brain, text: "Sente que está sobrevivendo, não vivendo" },
  { icon: Feather, text: "Cansa de lutar contra o próprio corpo" },
  { icon: Star, text: "Sente que existe algo quebrado dentro de você" },
];

const IdentificationSection = () => (
  <SectionWrapper>
    <div className="space-y-8">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">
        Talvez você se reconheça aqui…
      </h2>
      <div className="space-y-4">
        {identificationItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50">
            <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="font-body text-base md:text-lg text-foreground/85">{text}</p>
          </div>
        ))}
      </div>
      <p className="font-display text-xl md:text-2xl text-center font-semibold text-primary pt-4">
        Você já tentou de tudo — menos olhar pra raiz.
      </p>
    </div>
  </SectionWrapper>
);

// 5. O que é o livro
const bookTopics = ["Obesidade", "Compulsão alimentar", "Bariátrica", "Disciplina", "Hábitos", "Identidade", "Responsabilidade sem culpa", "Fé e consciência"];

const WhatIsSection = () => (
  <SectionWrapper className="bg-secondary">
    <div className="space-y-8 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-semibold">
        O que é "O Peso que Não Aparece na Balança"
      </h2>
      <div className="font-body text-lg leading-relaxed space-y-3 text-foreground/85">
        <p>Este não é um ebook de dieta. Não é um plano alimentar.<br />Não promete perder X quilos em Y dias.</p>
        <p className="font-display text-2xl font-semibold text-foreground pt-2">Esse livro é um despertar.</p>
        <p>Um relato real, cru e honesto sobre:</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        {bookTopics.map((topic) => (
          <span key={topic} className="px-4 py-2 bg-card rounded-full font-body text-sm md:text-base border border-border text-foreground/80">
            {topic}
          </span>
        ))}
      </div>
      <p className="font-body text-lg italic text-muted-foreground pt-4">
        É o tipo de leitura que faz você parar no meio da página…<br />
        e pensar: <strong className="text-foreground">"Agora eu entendo."</strong>
      </p>
      <div className="pt-4">
        <CTAButton>Quero ler agora por R$ 49,90</CTAButton>
      </div>
    </div>
  </SectionWrapper>
);

// 6. O que vai encontrar
const benefits = [
  "Verdades que ninguém te disse",
  "Histórias reais, sem romantização",
  "Reflexões que doem — e libertam",
  "Um novo olhar sobre obesidade",
  "A diferença entre ferramenta e milagre",
  "O papel da disciplina quando a motivação acaba",
  "Um convite à responsabilidade amorosa",
  "Um \"acorda\" antes do limite final",
];

const BenefitsSection = () => (
  <SectionWrapper>
    <div className="space-y-8">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">O que você vai encontrar neste livro</h2>
      <div className="grid gap-3">
        {benefits.map((b) => (
          <div key={b} className="flex items-center gap-3 p-3 md:p-4">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <p className="font-body text-base md:text-lg text-foreground/85">{b}</p>
          </div>
        ))}
      </div>
      <p className="font-display text-lg md:text-xl text-center italic text-muted-foreground pt-4">
        Não é leve. Mas é necessário.
      </p>
    </div>
  </SectionWrapper>
);

// 7. Para quem é / não é
const forWhom = [
  "Para mulheres cansadas de promessas vazias",
  "Para quem sente que o problema vai além da comida",
  "Para quem já tentou de tudo",
  "Para quem fez ou pensa em fazer bariátrica",
  "Para quem quer mudar de verdade, mesmo com medo",
];
const notForWhom = [
  "Para quem quer fórmula mágica",
  "Para quem busca emagrecimento rápido",
  "Para quem não está pronta para se responsabilizar",
  "Para quem prefere continuar anestesiando a dor",
];

const AudienceSection = () => (
  <SectionWrapper className="bg-rose-soft">
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold text-foreground">Para quem esse livro é</h3>
          {forWhom.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="font-body text-base text-foreground/85">{item}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold text-foreground">Para quem NÃO é</h3>
          {notForWhom.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
              <p className="font-body text-base text-foreground/85">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

// 8. Preço
const PriceSection = () => (
  <SectionWrapper className="bg-warm-dark text-primary-foreground">
    <div className="space-y-8 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-semibold">Vamos falar sobre o valor</h2>
      <div className="font-body text-lg leading-relaxed space-y-3 text-primary-foreground/90">
        <p>Este livro custa <strong className="text-accent text-2xl font-display">R$ 49,90</strong></p>
        <p>Menos que um pedido no iFood.<br />Menos que uma compulsão de fim de semana.<br />Menos que mais um mês adiando sua vida.</p>
        <p className="pt-4">A pergunta não é se o livro vale R$ 49,90.</p>
        <p className="font-display text-xl md:text-2xl italic">
          A pergunta é: quanto custa continuar fingindo que está tudo bem?
        </p>
      </div>
      <div className="pt-4">
        <CTAButton>Quero ler agora — R$ 49,90</CTAButton>
      </div>
    </div>
  </SectionWrapper>
);

// 9. FAQ
const faqItems = [
  { q: "Esse livro é só para quem fez bariátrica?", a: "Não. Ele é para quem entende que o problema nunca foi só o estômago." },
  { q: "Ele ensina a emagrecer?", a: "Ele ensina algo mais difícil e mais duradouro: consciência." },
  { q: "É um livro pesado emocionalmente?", a: "É honesto. E a verdade, às vezes, pesa antes de libertar." },
  { q: "Preciso estar pronta para mudar?", a: "Você só precisa estar cansada de continuar igual." },
  { q: "Em quanto tempo consigo ler?", a: "Em poucas horas. Mas o impacto fica por muito mais tempo." },
  { q: "Vale mesmo R$ 49,90?", a: "O valor é pequeno. A decisão é grande." },
];

const FAQSection = () => (
  <SectionWrapper>
    <div className="space-y-8">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">Dúvidas frequentes</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
            <AccordionTrigger className="font-body text-base md:text-lg text-left hover:no-underline hover:text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-base text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SectionWrapper>
);

// 10. Final
const FinalSection = () => (
  <section className="px-6 md:px-8 py-20 md:py-28 bg-gradient-to-t from-rose-soft to-background">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h2 className="font-display text-3xl md:text-4xl font-semibold">Um convite, não uma promessa</h2>
      <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
        Esse livro não vai te salvar.<br />
        <strong className="text-foreground">Ele vai te acordar.</strong>
      </p>
      <p className="font-body text-lg text-foreground/80">E depois disso, a escolha é sua.</p>
      <div className="pt-4">
        <CTAButton>Eu escolho acordar agora — R$ 49,90</CTAButton>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-8 px-6 text-center border-t border-border">
    <p className="font-body text-sm text-muted-foreground">
      © {new Date().getFullYear()} O Peso que Não Aparece na Balança. Todos os direitos reservados.
    </p>
  </footer>
);

const Index = () => (
  <main className="min-h-screen">
    <HeroSection />
    <NobodyToldYou />
    <StorySection />
    <IdentificationSection />
    <WhatIsSection />
    <BenefitsSection />
    <AudienceSection />
    <PriceSection />
    <FAQSection />
    <FinalSection />
    <Footer />
  </main>
);

export default Index;
