import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Blob from "./Blob";
import Icon from "./Icons";

const steps = [
  { n: "01", title: "Acolhimento inicial", text: "Uma primeira conversa para nos conhecermos, entender sua demanda e esclarecer como o processo funciona." },
  { n: "02", title: "Compreensão", text: "Exploramos juntos sua história, seus pensamentos e emoções para identificar padrões e necessidades." },
  { n: "03", title: "Construção", text: "Definimos objetivos e desenvolvemos recursos emocionais, no ritmo que faz sentido para você." },
  { n: "04", title: "Continuidade", text: "Acompanhamos avanços, ajustamos o caminho e consolidamos o cuidado com a sua saúde emocional." },
];
const benefits = ["Espaço seguro e sigiloso para falar com liberdade", "Maior compreensão das próprias emoções e comportamentos", "Ferramentas para lidar com desafios cotidianos", "Apoio na construção de relações mais saudáveis"];

export default function Approach() {
  return (
    <section id="abordagem" className="relative overflow-hidden bg-sage-600 py-24 text-cream md:py-32">
      <Blob className="-left-20 top-0 h-96 w-96 animate-float-slow bg-sage-500/50 blur-2xl" />
      <Blob className="-right-20 bottom-0 h-96 w-96 animate-float bg-sage-700/50 blur-2xl" />
      <div className="container-x relative">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-sage-200">Abordagem terapêutica</span>
          <h2 className="text-4xl leading-tight !text-cream md:text-5xl">Como funciona o processo terapêutico</h2>
          <p className="mt-5 text-lg leading-relaxed text-sage-100">Um caminho construído a dois, com ética, escuta e respeito ao seu tempo.</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-white/15">
                <span className="font-serif text-5xl italic text-sage-200">{s.n}</span>
                <h3 className="mt-4 text-2xl font-medium !text-cream">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-sage-100">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mx-auto mt-14 max-w-4xl rounded-[2.5rem] bg-cream p-8 text-brown shadow-lift md:p-12">
          <h3 className="text-3xl font-medium">O que o acompanhamento psicológico pode oferecer</h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600"><Icon name="check" className="h-3.5 w-3.5" /></span>{b}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-beige pt-5 text-sm leading-relaxed text-brown-soft">A psicoterapia é um processo individual e os resultados variam de pessoa para pessoa. Não há promessa de cura ou de resultados específicos, conforme as diretrizes éticas da profissão.</p>
        </Reveal>
      </div>
    </section>
  );
}
