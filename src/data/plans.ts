export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  targetAudience: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  ctaButtonText: string;
  whatsappMessage: string;
}

export interface AdditionalService {
  name: string;
  description: string;
}

export interface PlansData {
  badge: string;
  title: string;
  subtitle: string;
  setupPriceLabel: string;
  monthlyPriceLabel: string;
  plans: PlanItem[];
  additionalsTitle: string;
  additionalsStartingPrice: string;
  additionals: AdditionalService[];
  helpQuestion: string;
  helpCtaText: string;
  helpWhatsappMessage: string;
}

export const plansData: PlansData = {
  badge: "INVESTIMENTO TRANSPARENTE",
  title: "Planos que acompanham o crescimento do seu negócio",
  subtitle: "Você começa com uma estrutura sólida e evolui as ferramentas conforme a demanda aumenta.",
  setupPriceLabel: "Implantação:",
  monthlyPriceLabel: "Manutenção mensal:",
  plans: [
    {
      id: "essencial",
      name: "Essencial",
      targetAudience: "Para quem precisa de presença digital imediata e contato ágil pelo WhatsApp.",
      // TROCAR: Preencher os valores exatos de implantação e mensalidade
      setupPrice: "[PREENCHER: valor de implantação]",
      monthlyPrice: "[PREENCHER: valor da mensalidade]/mês",
      features: [
        "Site de 1 página com navegação rápida",
        "Botão de WhatsApp destacado e integrado",
        // TROCAR: Especificar se domínio e hospedagem estão inclusos
        "Hospedagem e domínio [PREENCHER: incluso ou não]",
        "Layout moderno e 100% adaptado para celulares",
        "Suporte técnico direto para manter a página no ar"
      ],
      ctaButtonText: "Quero este plano",
      whatsappMessage: "Olá! Tenho interesse no Plano Essencial da Agência Fontes e gostaria de mais detalhes."
    },
    {
      id: "profissional",
      name: "Profissional",
      badge: "Mais escolhido",
      isPopular: true,
      targetAudience: "Para negócios que querem ser achados nas pesquisas locais e manter presença ativa.",
      // TROCAR: Preencher os valores exatos de implantação e mensalidade
      setupPrice: "[PREENCHER: valor de implantação]",
      monthlyPrice: "[PREENCHER: valor da mensalidade]/mês",
      features: [
        "Tudo o que está incluído no Plano Essencial",
        "Configuração e otimização do Google Meu Negócio",
        // TROCAR: Preencher o número de postagens mensais
        "[PREENCHER: N] posts por mês para redes sociais e site",
        "Ajustes e atualizações mensais de textos e fotos",
        "Atendimento e consultoria presencial ou por chamada"
      ],
      ctaButtonText: "Quero este plano",
      whatsappMessage: "Olá! Tenho interesse no Plano Profissional da Agência Fontes e gostaria de mais detalhes."
    },
    {
      id: "completo",
      name: "Completo",
      targetAudience: "Para empresas que buscam atração contínua de clientes e gestão de anúncios.",
      // TROCAR: Preencher os valores exatos de implantação e mensalidade
      setupPrice: "[PREENCHER: valor de implantação]",
      monthlyPrice: "[PREENCHER: valor da mensalidade]/mês",
      features: [
        "Tudo o que está incluído no Plano Profissional",
        "Gestão de anúncios pagos no Google e no Instagram",
        "Verba de anúncios paga diretamente à plataforma pelo cliente",
        "Relatório mensal simples e direto com resultados de contato",
        "Acompanhamento estratégico e refinamento contínuo"
      ],
      ctaButtonText: "Quero este plano",
      whatsappMessage: "Olá! Tenho interesse no Plano Completo da Agência Fontes e gostaria de mais detalhes."
    }
  ],
  additionalsTitle: "Módulos adicionais sob demanda",
  // TROCAR: Preencher o valor inicial dos serviços adicionais
  additionalsStartingPrice: "a partir de [PREENCHER: valor inicial]",
  additionals: [
    {
      name: "Sistema de gestão simples",
      description: "Controle de agenda, cadastro de clientes e registro de pedidos."
    },
    {
      name: "Pacote de vídeos e fotos",
      description: "Captação presencial no seu negócio em Brasília e edição profissional."
    },
    {
      name: "Páginas extras de serviços",
      description: "Seções dedicadas para procedimentos específicos ou filiais."
    },
    {
      name: "Loja virtual / Catálogo",
      description: "Vitrine completa com finalização de pedido direto no balcão."
    }
  ],
  helpQuestion: "Não sabe qual escolher?",
  helpCtaText: "Chame no WhatsApp.",
  helpWhatsappMessage: "Olá! Gostaria de conversar para entender qual plano se encaixa melhor no momento do meu negócio."
};
