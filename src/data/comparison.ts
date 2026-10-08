export interface ComparisonRow {
  aspect: string;
  solo: string;
  withAgency: string;
}

export interface ComparisonData {
  badge: string;
  title: string;
  subtitle: string;
  aspectColumnHeader: string;
  soloColumnHeader: string;
  agencyColumnHeader: string;
  rows: ComparisonRow[];
}

export const comparisonData: ComparisonData = {
  badge: "COMPARAÇÃO TRANSPARENTE",
  title: "Fazer sozinho ou contar com quem faz",
  subtitle: "Criadores prontos parecem fáceis no anúncio, mas costumam custar horas preciosas que deveriam ir para o seu negócio.",
  aspectColumnHeader: "Critério",
  soloColumnHeader: "Tentando fazer sozinho",
  agencyColumnHeader: "Com a Agência Fontes",
  rows: [
    {
      aspect: "Seu tempo",
      solo: "Dezenas de horas aprendendo plataformas, configurações e tentando resolver erros técnicos sozinho.",
      withAgency: "Você participa de uma conversa rápida inicial e foca 100% no atendimento dos seus clientes."
    },
    {
      aspect: "Resultado visual e técnico",
      solo: "Layout genérico de template, muitas vezes pesado, lento no celular e difícil de personalizar.",
      withAgency: "Design moderno, exclusivo, ultrarrápido no smartphone e adaptado ao público de Brasília."
    },
    {
      aspect: "Suporte no dia a dia",
      solo: "Quando um botão quebra ou o site sai do ar, você precisa buscar soluções em fóruns da internet.",
      withAgency: "Contato direto pelo WhatsApp com o desenvolvedor responsável pelo seu projeto."
    },
    {
      aspect: "Aparecer no Google",
      solo: "Estrutura básica sem otimização para buscas locais nem integração com o Google Meu Negócio.",
      withAgency: "Presença digital organizada para quem busca seus serviços e produtos na sua região."
    },
    {
      aspect: "Evolução do negócio",
      solo: "Dificuldade técnica para integrar anúncios pagos, produção de fotos ou sistema de atendimento.",
      withAgency: "Crescimento gradual com campanhas de anúncios, conteúdo profissional e sistema de gestão."
    }
  ]
};
