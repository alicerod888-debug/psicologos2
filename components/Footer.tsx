import { nav, site, whatsappLink } from "@/lib/site";
import Icon from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-beige bg-cream py-14">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-sage-600">{site.tagline}</p>
          <p className="mt-4 text-sm text-brown-soft">{site.crp}</p>
        </div>
        <nav aria-label="Rodapé">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">Navegação</p>
          <ul className="space-y-2">
            {nav.map((l) => (<li key={l.href}><a href={l.href} className="text-brown-soft transition-colors hover:text-sage-700">{l.label}</a></li>))}
          </ul>
        </nav>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">Contato (demonstrativo)</p>
          <ul className="space-y-3 text-brown-soft">
            <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-sage-700"><Icon name="chat" className="h-5 w-5" />WhatsApp</a></li>
            <li><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-sage-700"><Icon name="instagram" className="h-5 w-5" />{site.instagramHandle}</a></li>
            <li className="inline-flex items-center gap-2"><Icon name="pin" className="h-5 w-5" />{site.city}</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 border-t border-beige pt-6 text-center text-sm text-brown-soft">
        <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
        <p className="mt-1 text-xs">Site de demonstração com dados e identidade fictícios. Não substitui atendimento psicológico emergencial — em crise, ligue 188 (CVV) ou 192 (SAMU).</p>
      </div>
    </footer>
  );
}
