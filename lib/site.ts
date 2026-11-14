// ⚠️ DADOS DEMONSTRATIVOS — edite aqui para personalizar o site para um cliente real.
export const site = {
  name: "Dra. Helena Martins",
  short: "Helena Martins",
  tagline: "Psicologia e Desenvolvimento Humano",
  crp: "CRP 00/00000 (número fictício — demonstração)",
  url: "https://helena-martins-demo.pages.dev",
  whatsappNumber: "5511900000000", // formato: DDI + DDD + número
  whatsappMessage: "Olá! Gostaria de agendar uma conversa inicial.",
  instagramHandle: "@helenamartins.psi (demonstrativo)",
  instagramUrl: "https://www.instagram.com/",
  email: "contato@exemplo.com.br",
  city: "São Paulo, SP (demonstrativo)",
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];
