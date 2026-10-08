export interface HeroSeal {
  text: string;
}

export interface FloatingCard {
  label: string;
  sublabel: string;
}

export interface HeroData {
  badge: string;
  titleBeforeHighlight: string;
  titleHighlight: string;
  titleAfterHighlight: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaMessage: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  seals: HeroSeal[];
  mockup: {
    browserBarTitle: string;
    businessName: string;
    businessTagline: string;
    navItem1: string;
    navItem2: string;
    heroHeadline: string;
    heroButton: string;
    phoneHeader: string;
    phoneStatus: string;
    phoneButton: string;
    floatingCards: FloatingCard[];
  };
}

export const heroData: HeroData = {
  badge: "ATENDENDO BRASÍLIA, DF",
  titleBeforeHighlight: "Site, conteúdo e anúncios para o seu negócio ser ",
  titleHighlight: "encontrado",
  titleAfterHighlight: " e vender mais",
  subtitle: "A gente monta o seu site antes de você pagar. Você vê pronto e decide.",
  primaryCtaText: "Chamar no WhatsApp",
  primaryCtaMessage: "Olá! Gostaria de conversar sobre a criação do site para o meu negócio.",
  secondaryCtaText: "Ver exemplos",
  secondaryCtaHref: "#exemplos",
  seals: [
    { text: "Você vê antes de pagar" },
    { text: "Atendimento pessoal" },
    { text: "Suporte depois da entrega" }
  ],
  mockup: {
    browserBarTitle: "seu-negocio-em-brasilia.com.br",
    businessName: "Seu Negócio Local",
    businessTagline: "Atendimento em Brasília e DF",
    navItem1: "Serviços",
    navItem2: "Contato",
    heroHeadline: "Presença digital completa para o seu negócio",
    heroButton: "Fazer Pedido",
    phoneHeader: "Atendimento Direto",
    phoneStatus: "Online para contato",
    phoneButton: "Conversar no WhatsApp",
    floatingCards: [
      { label: "Google Meu Negócio", sublabel: "Perfil local configurado" },
      { label: "Novo agendamento", sublabel: "Horário reservado pelo site" },
      { label: "Orçamento pelo WhatsApp", sublabel: "Mensagem direta pronta" }
    ]
  }
};
