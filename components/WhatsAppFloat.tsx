import { whatsappLink } from "@/lib/site";
import Icon from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-sage-600 p-4 text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-sage-700 md:bottom-8 md:right-8">
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-sage-400/40 [animation-duration:3s]" aria-hidden="true" />
      <Icon name="chat" className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 group-hover:max-w-[10rem] md:inline">Fale comigo</span>
    </a>
  );
}
