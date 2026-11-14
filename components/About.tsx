import Image from "next/image";
import Reveal from "./Reveal";
import Blob from "./Blob";
import Icon, { type IconName } from "./Icons";

const badges: { icon: IconName; title: string; text: string }[] = [
  { icon: "cap", title: "Graduação em Psicologia", text: "Instituição demonstrativa" },
  { icon: "book", title: "Especialização clínica", text: "Terapia Cognitivo-Comportamental" },
  { icon: "shield", title: "Formação continuada", text: "Supervisão e atualização constantes" },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream-light py-24 md:py-32">
      <Blob className="-right-24 top-10 h-80 w-80 animate-float-slow bg-sage-100" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md">
          <Blob className="-left-6 -top-6 h-full w-full bg-beige" />
          <div className="relative overflow-hidden rounded-[2.5rem_8rem_2.5rem_8rem] shadow-lift">
            <Image src="/helena-sobre.svg" alt="Retrato ilustrativo da Dra. Helena Martins" width={600} height={760} unoptimized className="h-auto w-full" loading="lazy" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre mim</span>
            <h2 className="text-4xl leading-tight md:text-5xl">Um olhar humano para cada história.</h2>
          </Reveal>
          <Reveal delay={120} className="mt-6 space-y-5 text-lg leading-relaxed text-brown-soft">
            <p>Olá, eu sou a Helena. Há mais de oito anos acompanho pessoas em momentos de transição, dúvida e reconstrução. Acredito que a terapia é, acima de tudo, um encontro: um espaço onde você pode ser quem é, sem pressa e sem máscaras.</p>
            <p>Minha abordagem integra a Terapia Cognitivo-Comportamental a uma escuta sensível e centrada na pessoa. Meu propósito é ajudar você a compreender seus padrões, fortalecer seus recursos internos e construir relações mais saudáveis consigo e com os outros.</p>
            <p className="text-sm italic text-brown-soft/80">Texto demonstrativo — substitua pela trajetória real da profissional.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {badges.map((b, i) => (
              <Reveal key={b.title} delay={200 + i * 100}>
                <div className="h-full rounded-3xl border border-beige bg-white/70 p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-600"><Icon name={b.icon} className="h-5 w-5" /></span>
                  <h3 className="text-lg font-medium leading-snug">{b.title}</h3>
                  <p className="mt-1 text-sm text-brown-soft">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
