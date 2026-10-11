// Site da Agência Fontes
// Dados preenchidos conforme briefing seção 5

export const site = {
  name: "Agência Fontes",
  businessName: "Agência Fontes",
  niche: "Agência Digital",
  location: "Brasília, DF",
  description:
    "Seu negócio encontrado e vendendo. Site pronto antes de você pagar.",
  phone: "[PREENCHER: telefone]",
  email: "[PREENCHER: e-mail]",
  instagram: "[PREENCHER: @usuario]",
  whatsapp: "[PREENCHER: 5561999999999]",
  cnpj: "[PREENCHER: CNPJ]",
  demo: false,
  logoUrl: "/images/logo-agencia.png",

  team: [
    {
      name: "[PREENCHER: primo dev]",
      role: "Dev · sites e sistemas",
      bio: "Código que funciona e que vende. Do esboço até o ar, a gente acompanha.",
      initials: "[DEV]",
    },
    {
      name: "[PREENCHER: primo marketing]",
      role: "Marketing · conteúdo e vendas",
      bio: "Apresento pronto no seu celular. Se não gostar, seguimos sem custo.",
      initials: "[MKT]",
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
