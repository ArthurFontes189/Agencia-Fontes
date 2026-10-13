// Identidade e configuração do site
// {{PREENCHER}} = dados específicos do cliente

export interface SiteConfig {
  name: string;
  businessName: string;
  niche: string;
  location: string;
  description: string;
  phone: string;
  email: string;
  instagram?: string;
  whatsapp: string;
  demo: boolean;
  efeitos: "completo" | "leve" | "nenhum";
  logoUrl: string;
}

export interface SiteAddress {
  city: string;
  state: string;
  country: string;
}

const config: SiteConfig = {
  name: "{{NOME DO NEGÓCIO}}",
  businessName: "{{NOME DO NEGÓCIO}}",
  niche: "{{NICHO}}",
  location: "{{CIDADE}}, {{ESTADO}}",
  description: "{{DESCRIÇÃO CURTA DO NEGÓCIO}}",
  phone: "[PREENCHER: telefone]",
  email: "[PREENCHER: e-mail]",
  instagram: "[PREENCHER: @instagram]",
  whatsapp: "[PREENCHER: 5511999999999]",
  demo: true, // Mude para false após aceite do cliente
  efeitos: "leve", // "leve" para clientes (fade + subida), "completo" para agência, "nenhum" para desligar
  logoUrl: "/logo.png",
};

// Endereço para JSON-LD (sem rua, apenas cidade/estado)
export const address: SiteAddress = {
  city: "{{CIDADE}}",
  state: "{{ESTADO}}",
  country: "BR",
};

// Função para montar link do WhatsApp com mensagem
export function whatsappLink(message: string): string {
  if (!config.whatsapp || config.whatsapp.includes("[PREENCHER")) {
    return "#";
  }
  const encoded = encodeURIComponent(message);
  const phone = config.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encoded}`;
}

// Meta tags (confira após mudança)
export const meta = {
  title: `${config.name} | {{TÍTULO DA PÁGINA}}`,
  description: config.description,
  ogImage: `${config.logoUrl}`,
};

export default config;
