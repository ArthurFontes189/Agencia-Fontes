export interface ContactFormData {
  nameLabel: string;
  namePlaceholder: string;
  businessLabel: string;
  businessPlaceholder: string;
  segmentLabel: string;
  segmentPlaceholder: string;
  segmentOptions: Array<{ value: string; label: string }>;
  phoneLabel: string;
  phonePlaceholder: string;
  consentCheckboxText: string;
  consentLinkText: string;
  submitButtonText: string;
  validationErrors: {
    nameRequired: string;
    businessRequired: string;
    segmentRequired: string;
    phoneRequired: string;
    consentRequired: string;
  };
}

export interface ContactData {
  badge: string;
  title: string;
  subtitle: string;
  directWhatsappHeading: string;
  directWhatsappText: string;
  directWhatsappButtonText: string;
  directWhatsappDefaultMessage: string;
  formTitle: string;
  formSubtitle: string;
  form: ContactFormData;
  infoCardsTitle: string;
  channels: {
    locationLabel: string;
    emailLabel: string;
    instagramLabel: string;
  };
}

export const contactData: ContactData = {
  badge: "FALE CONOSCO",
  title: "Vamos conversar sobre o seu negócio?",
  subtitle: "Sem compromisso e sem enrolação. Apresentamos uma demonstração pronta para você decidir com calma.",
  directWhatsappHeading: "Prefere atendimento direto?",
  directWhatsappText: "Clique no botão abaixo para abrir uma conversa imediata no WhatsApp com a nossa equipe em Brasília.",
  directWhatsappButtonText: "Conversar agora no WhatsApp",
  directWhatsappDefaultMessage: "Olá! Gostaria de falar sobre a presença digital do meu negócio em Brasília.",
  formTitle: "Solicitar demonstração do meu site",
  formSubtitle: "Preencha os dados abaixo. Nós preparamos uma mensagem organizada para você nos enviar diretamente no WhatsApp.",
  form: {
    nameLabel: "Seu nome",
    namePlaceholder: "Como podemos te chamar?",
    businessLabel: "Nome do seu negócio",
    businessPlaceholder: "Ex: Clínica Sorriso, Padaria Central...",
    segmentLabel: "Ramo de atuação",
    segmentPlaceholder: "Selecione o segmento do seu negócio",
    segmentOptions: [
      { value: "clinica", label: "Saúde / Clínica / Consultório" },
      { value: "comercio", label: "Comércio / Loja de Rua" },
      { value: "estetica", label: "Estética / Beleza / Bem-Estar" },
      { value: "restaurante", label: "Restaurante / Alimentação / Bar" },
      { value: "servicos", label: "Prestação de Serviços em Geral" },
      { value: "outro", label: "Outro segmento" }
    ],
    phoneLabel: "Seu WhatsApp com DDD",
    phonePlaceholder: "(61) 99999-9999",
    consentCheckboxText: "Concordo em usar estes dados apenas para contato sobre meu pedido,",
    consentLinkText: "conforme a Política de Privacidade.",
    submitButtonText: "Enviar pedido no WhatsApp",
    validationErrors: {
      nameRequired: "Por favor, informe seu nome.",
      businessRequired: "Por favor, informe o nome do seu negócio.",
      segmentRequired: "Por favor, selecione o ramo do negócio.",
      phoneRequired: "Por favor, informe um número de telefone com DDD válido.",
      consentRequired: "É necessário concordar com o uso dos dados para contato."
    }
  },
  infoCardsTitle: "Canais de contato",
  channels: {
    locationLabel: "Atendimento presencial e online",
    emailLabel: "E-mail de contato",
    instagramLabel: "Acompanhe no Instagram"
  }
};
