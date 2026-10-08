export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  brandFirstName: string;
  brandLastName: string;
  slogan: string;
  city: string;
  state: string;
  areaServed: string;
  whatsappNumber: string;
  email: string;
  instagram: string;
  cnpj: string;
  navLinks: NavLink[];
  ctaButtonText: string;
  floatingWhatsappMessage: string;
}

export const siteData: SiteConfig = {
  name: "Agência Fontes",
  brandFirstName: "Agência",
  brandLastName: "Fontes",
  // TROCAR: Preencher com o slogan oficial aprovado
  slogan: "[PREENCHER: slogan da agência]",
  city: "Brasília, DF",
  state: "DF",
  areaServed: "Brasília e Distrito Federal",
  // TROCAR: Preencher com o número oficial com DDD (apenas números ou formatado)
  whatsappNumber: "[PREENCHER: número do WhatsApp com DDD, ex: 61999999999]",
  // TROCAR: Preencher com o e-mail de atendimento da agência
  email: "[PREENCHER: e-mail de contato, ex: contato@agenciafontes.com.br]",
  // TROCAR: Preencher com o perfil oficial do Instagram
  instagram: "[PREENCHER: @ do Instagram, ex: @agenciafontes]",
  // TROCAR: Preencher com o CNPJ ativo da empresa
  cnpj: "[PREENCHER: CNPJ da empresa]",
  navLinks: [
    { label: "Serviços", href: "/#servicos" },
    { label: "Exemplos", href: "/#exemplos" },
    { label: "Planos", href: "/#planos" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Dúvidas", href: "/#duvidas" },
    { label: "Contato", href: "/#contato" }
  ],
  ctaButtonText: "Chamar no WhatsApp",
  floatingWhatsappMessage: "Olá! Vim pelo site e gostaria de saber mais."
};

/**
 * Monta o link para o WhatsApp no padrão https://wa.me/55{numero}?text={texto codificado}
 * Se o número ainda contiver o marcador [PREENCHER], utiliza fallback neutro mantendo a mensagem codificada.
 */
export function whatsappLink(texto: string): string {
  // TROCAR: Quando o número for preenchido em whatsappNumber, os dígitos serão extraídos diretamente
  const cleanDigits = siteData.whatsappNumber.replace(/\D/g, "");
  const targetNumber = cleanDigits.length >= 10 ? cleanDigits : "61900000000";
  return `https://wa.me/55${targetNumber}?text=${encodeURIComponent(texto)}`;
}
