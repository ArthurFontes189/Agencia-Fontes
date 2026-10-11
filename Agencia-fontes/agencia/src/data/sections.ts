// Dados tipados para seções da página

export interface HeroSection {
  badgeText: string;
  title: string;
  titleHighlight?: string; // Parte em destaque
  subtitle: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA?: string;
  secondaryCTALink?: string;
  badges?: string[];
}

export interface ProblemSolution {
  problems: Array<{
    title: string;
    description: string;
    solution: string;
  }>;
}

export interface Service {
  title: string;
  description: string;
  audience: string;
  icon?: string;
}

export interface Showcase {
  title: string;
  subtitle?: string;
  items: Array<{
    niche: string;
    features: string[];
    image?: string;
    cta: string;
    ctaLink: string;
    isBeta?: boolean;
  }>;
}

export interface Plan {
  name: string;
  price: string;
  billingPeriod?: string;
  description?: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

export interface Comparison {
  title: string;
  rows: Array<{
    criterion: string;
    alone: string;
    withAgency: string;
  }>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AboutSection {
  badge: string;
  title: string;
  paragraphs: string[];
  optionalParagraph?: string;
  chips: string[];
  team: Array<{
    name: string;
    role: string;
    description: string;
    photoInitials?: string; // Para placeholder: iniciais
  }>;
  whyName: string;
}

// Dados reais para Agência Fontes
export const defaultHero: HeroSection = {
  badgeText: "ATENDENDO BRASÍLIA, DF",
  title: "Seu negócio",
  titleHighlight: "encontrado e vendendo",
  subtitle: "Você vê o site pronto no seu celular. Se gostar, publicamos. Se não, sem custo.",
  primaryCTA: "Ver como fica",
  primaryCTALink: "#showcase",
  secondaryCTA: "Chamar agora",
  secondaryCTALink: "#whatsapp",
  badges: [
    "Você vê antes de pagar",
    "Apresentamos ao vivo",
    "Empresa de família",
  ],
};

export const defaultProblems: ProblemSolution = {
  problems: [
    {
      title: "Cliente procura, não encontra",
      description: "Seu cliente digita 'clínica em Brasília' no Google e não te vê. Vê concorrente.",
      solution: "Site + Google Meu Negócio. Você sai na busca local do Google.",
    },
    {
      title: "Quer comprar, mas não sabe como",
      description: "Seguiu seu Instagram, quer ligar, mas não acha o link ou o telefone fica escondido.",
      solution: "Página própria com WhatsApp destacado. Conversão direta.",
    },
    {
      title: "Agenda e pedidos viram bagunça",
      description: "Mistura tudo no WhatsApp pessoal. Qual cliente pediu o quê? Quando vence?",
      solution: "Painel simples. Cliente agenda sozinho. Você confirma.",
    },
  ],
};

export const defaultServices: Service[] = [
  {
    title: "Site responsivo",
    description: "Funciona no celular, tablet e desktop. Rápido, bonito, que vende.",
    audience: "Todo negócio",
  },
  {
    title: "Google Meu Negócio",
    description: "Aparece na busca local do Google. Avaliações, fotos, telefone.",
    audience: "Quem quer clientes locais",
  },
  {
    title: "Conteúdo",
    description: "Fotos, vídeos, posts feitos por a gente ou você edita (templates prontos).",
    audience: "Loja, clínica, estética",
  },
  {
    title: "Anúncios pagos",
    description: "Google e Instagram. Você paga pelos clientes que chegam.",
    audience: "Quem quer crescer rápido",
  },
  {
    title: "Gestão de agendamentos",
    description: "Cliente agenda sozinho. Você confirma ou recusa. Sem confusão.",
    audience: "Clínicas, salões, consultórios",
  },
];

export const defaultPlans: Plan[] = [
  {
    name: "Essencial",
    price: "[PREENCHER: preço]",
    billingPeriod: "mês",
    description: "Para quem quer começar simples",
    features: ["Site de 1 página", "WhatsApp integrado", "Hospedagem + domínio", "Suporte por WhatsApp"],
    cta: "Começar",
    ctaLink: "#whatsapp",
  },
  {
    name: "Profissional",
    price: "[PREENCHER: preço]",
    billingPeriod: "mês",
    description: "O mais escolhido",
    features: ["Tudo do Essencial", "Google Meu Negócio", "[PREENCHER: N] posts/mês", "Ajustes ilimitados", "Análise de tráfego"],
    cta: "Escolher",
    ctaLink: "#whatsapp",
    highlighted: true,
  },
  {
    name: "Completo",
    price: "[PREENCHER: preço]",
    billingPeriod: "mês",
    description: "Crescimento no piloto automático",
    features: ["Tudo do Profissional", "Anúncios pagos", "Relatório mensal", "Agendamentos", "Suporte 24h"],
    cta: "Contratar",
    ctaLink: "#whatsapp",
  },
];

export const defaultFAQ: FAQItem[] = [
  {
    question: "Quanto tempo leva para eu ver pronto?",
    answer: "[PREENCHER: N] dias úteis. Você vê no WhatsApp. Se não gostar, a gente corrige ou para por ali.",
  },
  {
    question: "Como funciona esse negócio de 'ver antes de pagar'?",
    answer: "Você manda foto e texto (ou a gente cria). Montamos, você aprova. Só depois publica. Sem surpresa.",
  },
  {
    question: "E se eu quiser mudar depois que publicar?",
    answer: "Mudamos. Cor, texto, seção. Você liga, a gente faz. Sem custo extra nos primeiros [PREENCHER: N] meses.",
  },
  {
    question: "O site é meu mesmo?",
    answer: "[PREENCHER: resposta dos sócios - propriedade, cancelamento, hospedagem]",
  },
  {
    question: "Vocês cobram agora ou no final?",
    answer: "[PREENCHER: resposta dos sócios - forma de pagamento, parcelamento]",
  },
  {
    question: "Preciso de outros sites? Lojas? Aplicativo?",
    answer: "Cada coisa é um projeto. Começamos com o site de vitrine. O resto a gente discute junto.",
  },
];
