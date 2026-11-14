import Reveal from "./Reveal";
import Blob from "./Blob";
import Icon from "./Icons";
import { whatsappLink } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section id="contato" className="px-4 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-sage-500 to-sage-700 px-8 py-20 text-center shadow-lift md:py-28">
          <Blob className="-left-16 -top-16 h-64 w-64 animate-float-slow bg-white/10" />
          <Blob className="-bottom-20 -right-10 h-80 w-80 animate-float bg-beige/20" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl leading-tight !text-cream md:text-6xl">Seu bem-estar merece atenção.</h2>
            <p className="mt-6 text-lg leading-relaxed text-sage-100">Dar o primeiro passo pode parecer difícil, mas você não precisa fazer isso sozinho(a). Vamos conversar? Será um prazer acolher você.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn mt-10 bg-cream text-sage-700 shadow-soft hover:-translate-y-0.5 hover:bg-white hover:shadow-lift">
              <Icon name="chat" className="h-5 w-5" /> Iniciar conversa no WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
