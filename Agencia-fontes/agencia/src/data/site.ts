// Site da Agência Fontes
// Dados preenchidos conforme briefing seção 5

export const site = {
  name: "Agência Fontes",
  businessName: "Agência Fontes",
  niche: "Agência Digital",
  location: "Brasília, DF",
  description:
    "Seu negócio encontrado e vendendo. Site pronto antes de você pagar.",
  phone: "61 9 9999-9999",
  email: "agenciafontes@gmail.com",
  instagram: "@agenciafontes",
  whatsapp: "5561999999999",
  cnpj: "12.345.678/0001-90",
  demo: false,
  efeitos: "completo", // Catálogo completo de animações (direcao-visual.md)
  logoUrl: "/images/logo-agencia.png",

  team: [
    {
      name: "Arthur",
      role: "Dev · sites e sistemas",
      bio: "Código que funciona e que vende. Do esboço até o ar, a gente acompanha.",
      initials: "AF",
    },
    {
      name: "Celso",
      role: "Marketing · conteúdo e vendas",
      bio: "Apresento pronto no seu celular. Se não gostar, seguimos sem custo.",
      initials: "CF",
    },
  ],

  badges: [
    "Você vê pronto",
    "Você aprova antes de pagar",
    "Empresa de família",
  ],
};

export function whatsappLink(message: string): string {
  if (!site.whatsapp || site.whatsapp.includes("[PREENCHER")) {
    return "#";
  }
  const encoded = encodeURIComponent(message);
  const phone = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encoded}`;
}

export default site;
