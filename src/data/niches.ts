export interface NicheItem {
  id: string;
  name: string;
  tagline: string;
  features: [string, string];
  ctaText: string;
  ctaHref: string;
  demoBadge: string;
  mockup: {
    type: 'clinica' | 'comercio' | 'estetica' | 'restaurante';
    categoryLabel: string;
    headline: string;
    badgePill: string;
    pill1: string;
    pill2: string;
    actionLabel: string;
  };
}

export interface NichesData {
  badge: string;
  title: string;
  subtitle: string;
  niches: NicheItem[];
}

export const nichesData: NichesData = {
  badge: "PORTFÓLIO DE CONCEITO",
  title: "Veja como o seu site pode ficar",
  subtitle: "Cada segmento exige uma disposição pensada para o comportamento real do consumidor no smartphone.",
  niches: [
    {
      id: "clinica",
      name: "Clínica",
      tagline: "Saúde, odontologia e consultórios médicos",
      features: [
        "Agendamento direto e triagem rápida de horários via WhatsApp",
        "Apresentação transparente de especialidades, corpo clínico e exames"
      ],
      ctaText: "Ver exemplo",
      ctaHref: "#",
      demoBadge: "MODELO DE DEMONSTRAÇÃO",
      mockup: {
        type: "clinica",
        categoryLabel: "Consultório & Saúde",
        headline: "Cuidado especializado no seu bairro",
        badgePill: "Agenda Aberta",
        pill1: "Consultas & Retornos",
        pill2: "Exames de Rotina",
        actionLabel: "Agendar Consulta"
      }
    },
    {
      id: "comercio",
      name: "Comércio",
      tagline: "Lojas de bairro, óticas, papelarias e boutiques",
      features: [
        "Vitrine visual destacada com fotos nítidas dos produtos em destaque",
        "Botão de consulta rápida de estoque e pedidos no balcão"
      ],
      ctaText: "Ver exemplo",
      ctaHref: "#",
      demoBadge: "MODELO DE DEMONSTRAÇÃO",
      mockup: {
        type: "comercio",
        categoryLabel: "Loja & Varejo",
        headline: "Coleção e produtos disponíveis à pronta entrega",
        badgePill: "Estoque Local",
        pill1: "Novidades da Semana",
        pill2: "Retirada em Loja",
        actionLabel: "Consultar no WhatsApp"
      }
    },
    {
      id: "estetica",
      name: "Estética",
      tagline: "Salões de beleza, barbearias, spas e clínicas estéticas",
      features: [
        "Galeria refinada de procedimentos e cuidados com antes e depois",
        "Tabela explicativa de serviços com botão de reserva imediata"
      ],
      ctaText: "Ver exemplo",
      ctaHref: "#",
      demoBadge: "MODELO DE DEMONSTRAÇÃO",
      mockup: {
        type: "estetica",
        categoryLabel: "Beleza & Bem-Estar",
        headline: "Procedimentos personalizados para o seu cuidado",
        badgePill: "Atendimento Individual",
        pill1: "Procedimentos Faciais",
        pill2: "Tabela de Cuidados",
        actionLabel: "Reservar Horário"
      }
    },
    {
      id: "restaurante",
      name: "Restaurante",
      tagline: "Gastronomia, cafés, pizzarias, bistrôs e confeitarias",
      features: [
        "Cardápio digital ultraleve, legível e sem necessidade de baixar PDF",
        "Localização com mapa integrado e botão de pedido para entrega ou mesa"
      ],
      ctaText: "Ver exemplo",
      ctaHref: "#",
      demoBadge: "MODELO DE DEMONSTRAÇÃO",
      mockup: {
        type: "restaurante",
        categoryLabel: "Gastronomia & Café",
        headline: "Pratos artesanais com ingredientes selecionados",
        badgePill: "Mesa & Retirada",
        pill1: "Cardápio do Dia",
        pill2: "Localização & Rota",
        actionLabel: "Fazer Pedido"
      }
    }
  ]
};
