"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Icon from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-cream-light/80 py-3 shadow-soft backdrop-blur-xl" : "bg-transparent py-5"}`}>
      <div className="container-x flex items-center justify-between">
        <a href="#inicio" className="group leading-none" aria-label={`${site.name} — início`}>
          <span className="block font-serif text-2xl font-medium text-brown transition-colors group-hover:text-sage-600">{site.name}</span>
          <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.28em] text-sage-600">{site.tagline}</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-[0.95rem] text-brown-soft transition-colors hover:text-sage-700">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn-primary hidden !py-3 lg:inline-flex">Agendar consulta</a>

        <button className="rounded-full p-2 text-brown lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      <div id="menu-mobile" className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav aria-label="Menu mobile" className="container-x flex flex-col gap-1 pb-6 pt-4">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="rounded-2xl px-4 py-3 text-lg text-brown transition-colors hover:bg-sage-50">{l.label}</a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn btn-primary mt-3">Agendar consulta</a>
        </nav>
      </div>
    </header>
  );
}
