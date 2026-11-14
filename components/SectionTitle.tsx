import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, text, center = true }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-4xl leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-brown-soft">{text}</p>}
    </Reveal>
  );
}
