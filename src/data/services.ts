export interface ServiceItem {
  id: string;
  title: string;
  phrase: string;
  targetAudience: string;
  isFeatured?: boolean;
  tag?: string;
  iconName: 'browser' | 'map' | 'media' | 'ads' | 'dashboard';
}

export interface ServicesData {
  badge: string;
  title: string;
  subtitle: string;
  targetAudienceLabel: string;
  services: ServiceItem[];
}

export const servicesData: ServicesData = {
  badge: "O QUE FAZEMOS",
  title: "Serviços sob medida para o seu momento",
  subtitle: "Cuidamos de toda a parte técnica e de comunicação para você focar exclusivamente em atender seus clientes.",
  targetAudienceLabel: "Para quem é:",
  services: [
    {
      id: "site",
      title: "Site profissional",
      phrase: "Uma página moderna, ultrarrápida no celular e desenhada para transformar visitantes em contatos diretos no seu WhatsApp.",
      targetAudience: "Para quem quer passar credibilidade imediata e não depender apenas das mudanças de algoritmo de redes sociais.",
      isFeatured: true,
      tag: "Base da sua presença",
      iconName: "browser"
    },
    {
      id: "gmb",
      title: "Google Meu Negócio e aparecer nas buscas",
      phrase: "Configuração completa da ficha da sua empresa no Google e Google Maps, com categorias corretas e fotos oficiais.",
      targetAudience: "Para estabelecimentos com endereço físico ou que atendem bairros e regiões específicas do Distrito Federal.",
      iconName: "map"
    },
    {
      id: "content",
      title: "Conteúdo (edição de fotos, vídeos e posts)",
      phrase: "Tratamento de imagens dos seus produtos, edição de vídeos curtos e organização de postagens com acabamento refinado.",
      targetAudience: "Para negócios com excelentes produtos ou serviços que não têm tempo para produzir materiais visuais atraentes.",
      iconName: "media"
    },
    {
      id: "ads",
      title: "Gestão de anúncios pagos",
      phrase: "Campanhas segmentadas no Google e nas redes sociais para apresentar seu negócio a quem já procura por ele em Brasília.",
      targetAudience: "Para empresas prontas para receber um fluxo contínuo de pessoas solicitando orçamentos e informações.",
      iconName: "ads"
    },
    {
      id: "system",
      title: "Sistema de gestão (agenda, clientes, painel)",
      phrase: "Painel simples e intuitivo para você controlar atendimentos, pedidos e contatos sem se perder em planilhas ou cadernos.",
      targetAudience: "Para quem gasta tempo excessivo tentando achar dados de clientes e horários marcados em conversas espalhadas.",
      iconName: "dashboard"
    }
  ]
};
