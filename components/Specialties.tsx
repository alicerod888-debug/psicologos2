import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Icon, { type IconName } from "./Icons";

const items: { icon: IconName; title: string; text: string }[] = [
  { icon: "wind", title: "Ansiedade e estresse", text: "Estratégias para lidar com a preocupação excessiva, a tensão e o cansaço emocional do dia a dia." },
  { icon: "sprout", title: "Autoconhecimento", text: "Um caminho para compreender seus valores, padrões e desejos com mais clareza e consciência." },
  { icon: "sun", title: "Autoestima", text: "Fortalecimento da relação consigo mesmo, com mais segurança, autocompaixão e confiança." },
  { icon: "people", title: "Relacionamentos", text: "Apoio para vínculos afetivos, familiares e profissionais mais saudáveis e comunicação mais gentil." },
  { icon: "growth", title: "Desenvolvimento emocional", text: "Ampliação da inteligência emocional para atravessar mudanças e decisões importantes." },
  { icon: "heart", title: "Saúde emocional", text: "Acompanhamento contínuo para cuidar do bem-estar psicológico de forma preventiva e consciente." },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-gradient-to-b from-cream to-cream-light py-24 md:py-32">
      <div className="container-x">
        <SectionTitle eyebrow="Especialidades" title="Áreas em que posso acompanhar você" text="Cada pessoa é única. Por isso, o processo terapêutico é construído de forma individual, respeitando sua história e suas necessidades." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-beige/80 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-sage-300 hover:shadow-lift">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage-100 transition-transform duration-700 group-hover:scale-[2.2]" />
                <span className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50 text-sage-600 transition-colors duration-500 group-hover:bg-sage-600 group-hover:text-white">
                  <Icon name={it.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative text-2xl font-medium">{it.title}</h3>
                <p className="relative mt-3 leading-relaxed text-brown-soft">{it.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
