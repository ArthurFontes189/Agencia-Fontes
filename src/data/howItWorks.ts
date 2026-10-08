export interface TimelineStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface HowItWorksData {
  badge: string;
  title: string;
  subtitle: string;
  steps: TimelineStep[];
  timelineNotice: string;
  reassurancePhrase: string;
}

export const howItWorksData: HowItWorksData = {
  badge: "METODOLOGIA DIRETA",
  title: "Como funciona na prática",
  subtitle: "Um processo transparente, sem jargões técnicos e sem burocracia desnecessária.",
  steps: [
    {
      stepNumber: "01",
      title: "Conversa rápida",
      description: "Entendemos o seu negócio, os produtos ou serviços principais e o perfil dos seus clientes em Brasília."
    },
    {
      stepNumber: "02",
      title: "Montamos seu site e mostramos pronto",
      description: "Criamos a estrutura completa com a identidade do seu negócio antes mesmo de você pagar qualquer valor."
    },
    {
      stepNumber: "03",
      title: "Você aprova e ajustamos",
      description: "Apresentamos pessoalmente ou em vídeo, alinhamos detalhes visuais e refinamos textos e fotos."
    },
    {
      stepNumber: "04",
      title: "Publicamos e acompanhamos",
      description: "Colocamos o site no ar com botão do WhatsApp ativo e ficamos ao seu lado para suporte contínuo."
    }
  ],
  // TROCAR: Preencher o prazo médio de entrega
  timelineNotice: "Prazo médio: [PREENCHER: N dias]",
  reassurancePhrase: "Sem compromisso até você ver o resultado."
};
