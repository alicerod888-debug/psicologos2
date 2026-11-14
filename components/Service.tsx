import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Icon, { type IconName } from "./Icons";

// Dados demonstrativos — edite livremente.
const modes: { icon: IconName; title: string; text: string }[] = [
  { icon: "video", title: "Atendimento online", text: "Sessões por videochamada em plataforma segura, de onde você estiver, com o mesmo cuidado e sigilo do presencial." },
  { icon: "pin", title: "Atendimento presencial", text: "Consultório acolhedor e reservado em São Paulo, SP (endereço demonstrativo), com horários agendados para sua privacidade." },
];
const facts = [
  { icon: "clock" as IconName, label: "Duração", value: "50 minutos" },
  { icon: "calendar" as IconName, label: "Frequência", value: "Semanal (a combinar)" },
  { icon: "heart" as IconName, label: "Primeira conversa", value: "Acolhimento inicial" },
  { icon: "shield" as IconName, label: "Investimento", value: "Valor demonstrativo (editável)" },
];
const how = ["Clique em “Agendar consulta” e envie uma mensagem pelo WhatsApp.", "Escolhemos juntas o melhor dia, horário e modalidade.", "Você recebe a confirmação e as orientações para a primeira sessão."];

export default function Service() {
  return (
    <section id="atendimento" className="bg-cream-light py-24 md:py-32">
      <div className="container-x">
        <SectionTitle eyebrow="Atendimento" title="Como funciona o atendimento" text="Flexibilidade para que o cuidado com a sua saúde emocional caiba na sua rotina." />

        <div className="grid gap-6 md:grid-cols-2">
          {modes.map((m, i) => (
            <Reveal key={m.title} delay={i * 120}>
              <div className="h-full rounded-[2rem] border border-beige bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:p-10">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50 text-sage-600"><Icon name={m.icon} className="h-7 w-7" /></span>
                <h3 className="text-2xl font-medium">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-brown-soft">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-beige/60 p-8 md:p-10">
              <h3 className="text-2xl font-medium">Como agendar</h3>
              <ol className="mt-6 space-y-5">
                {how.map((h, i) => (
                  <li key={h} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-600 font-serif text-lg text-white">{i + 1}</span>
                    <span className="pt-1 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid h-full grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="rounded-3xl border border-beige bg-white p-5 shadow-soft">
                  <Icon name={f.icon} className="mb-3 h-6 w-6 text-sage-600" />
                  <dt className="text-xs uppercase tracking-widest text-brown-soft">{f.label}</dt>
                  <dd className="mt-1 font-serif text-xl leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
