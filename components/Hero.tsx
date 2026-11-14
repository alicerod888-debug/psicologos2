import Image from "next/image";
import Blob from "./Blob";
import Icon from "./Icons";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-cream to-cream-light pb-24 pt-36 md:pt-44">
      <Blob className="-left-32 top-20 h-96 w-96 animate-float-slow bg-sage-200/60 blur-2xl" />
      <Blob className="right-0 top-0 h-[30rem] w-[30rem] animate-float bg-beige/70 blur-3xl" />
      <Blob className="bottom-0 left-1/3 h-48 w-48 animate-float-slow bg-sage-100 blur-xl" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow animate-[fadeUp_0.9s_ease-out_both]">Psicoterapia · Presencial e online</span>
          <h1 className="animate-[fadeUp_0.9s_0.15s_ease-out_both] text-5xl font-medium leading-[1.05] md:text-7xl">
            Cuidar de si também é um <em className="font-normal italic text-sage-600">ato de coragem.</em>
          </h1>
          <p className="mt-7 max-w-xl animate-[fadeUp_0.9s_0.3s_ease-out_both] text-lg leading-relaxed text-brown-soft">
            Sou a Dra. Helena Martins, psicóloga clínica. Ofereço um espaço seguro, ético e sem julgamentos para você se escutar, compreender seus sentimentos e caminhar no seu próprio ritmo.
          </p>
          <div className="mt-10 flex animate-[fadeUp_0.9s_0.45s_ease-out_both] flex-col gap-4 sm:flex-row">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agende sua consulta <Icon name="arrow" className="h-4 w-4" /></a>
            <a href="#sobre" className="btn btn-ghost">Conheça meu trabalho</a>
          </div>
          <ul className="mt-12 flex animate-[fadeUp_0.9s_0.6s_ease-out_both] flex-wrap gap-x-8 gap-y-3 text-sm text-brown-soft">
            {["Atendimento individual", "Sigilo e ética profissional", "Adultos e adolescentes"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-sage-600" />{t}</li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-[fadeUp_1.1s_0.3s_ease-out_both]">
          <Blob className="-right-8 -top-8 h-40 w-40 animate-float bg-sage-300/70" />
          <Blob className="-bottom-10 -left-10 h-52 w-52 animate-float-slow bg-beige-dark/70" />
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-[10px] border-white shadow-lift">
            {/* Substitua por foto real em /public (comprima antes: WebP, ~1200px de largura) */}
            <Image src="/helena-hero.svg" alt="Retrato ilustrativo da psicóloga em ambiente acolhedor" width={600} height={760} priority unoptimized className="h-auto w-full" />
          </div>
          <div className="absolute -left-4 bottom-12 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-soft backdrop-blur md:-left-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-600"><Icon name="heart" className="h-5 w-5" /></span>
            <span className="text-sm leading-tight"><strong className="block font-serif text-lg font-medium">Escuta acolhedora</strong>no seu tempo</span>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
