import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const items = [
  { text: "Encontrei um espaço onde pude falar sem medo de ser julgada. Aos poucos, comecei a me escutar com mais gentileza.", who: "Paciente A., 34 anos" },
  { text: "As sessões me ajudaram a entender melhor minhas emoções e a lidar com momentos difíceis do dia a dia.", who: "Paciente B., 28 anos" },
  { text: "O atendimento online foi muito acolhedor. Senti cuidado e respeito em todas as conversas.", who: "Paciente C., 41 anos" },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-gradient-to-b from-cream-light to-cream py-24 md:py-32">
      <div className="container-x">
        <SectionTitle eyebrow="Experiências" title="Relatos de quem vivenciou o cuidado" />
        <Reveal className="mx-auto -mt-6 mb-12 max-w-2xl rounded-2xl border border-dashed border-sage-400 bg-sage-50 px-5 py-3 text-center text-sm text-sage-700" >
          <strong>Atenção:</strong> os relatos abaixo são exemplos fictícios para demonstração. Substitua por depoimentos reais, com autorização expressa, antes da publicação e conforme as normas do CFP.
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.who} delay={i * 120}>
              <figure className="relative h-full rounded-[2rem] border border-beige bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span aria-hidden="true" className="absolute right-7 top-3 font-serif text-8xl leading-none text-sage-200">”</span>
                <blockquote className="relative font-serif text-xl leading-relaxed">{t.text}</blockquote>
                <figcaption className="mt-6 text-sm text-brown-soft">— {t.who} <span className="text-sage-600">(exemplo fictício)</span></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
