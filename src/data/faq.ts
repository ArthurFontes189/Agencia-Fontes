export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  badge: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export const faqData: FaqData = {
  badge: "PERGUNTAS FREQUENTES",
  title: "Respostas diretas para as suas principais dúvidas",
  subtitle: "Tudo o que você precisa saber antes de montarmos o seu site.",
  items: [
    {
      id: "tempo",
      question: "Quanto tempo leva?",
      answer: "O modelo de demonstração fica pronto em poucos dias úteis após a nossa conversa inicial. Depois de você ver a página pronta e aprovar eventuais ajustes, a publicação definitiva e ativação dos links é praticamente imediata."
    },
    {
      id: "mensalidade",
      question: "O que está incluso na mensalidade?",
      answer: "A manutenção técnica preventiva do site, monitoramento para mantê-lo sempre rápido e seguro, suporte direto por WhatsApp para tirar dúvidas e pequenas alterações mensais de textos, fotos ou horários de funcionamento."
    },
    {
      id: "propriedade",
      question: "O site é meu?",
      // TROCAR: Preencher a política detalhada de propriedade do site
      answer: "Sim, todo o conteúdo, textos e domínio são da sua empresa. [PREENCHER: política de propriedade do site, detalhando cessão de código ou entrega de arquivos após período contratual]."
    },
    {
      id: "cancelamento",
      question: "Posso cancelar quando quiser?",
      // TROCAR: Preencher as condições e eventuais prazos de cancelamento
      answer: "[PREENCHER: termos de cancelamento e carência, informando se há período mínimo ou regras de encerramento do serviço]."
    },
    {
      id: "garantia-vendas",
      question: "Vocês garantem vendas com anúncios?",
      answer: "Não fazemos promessas mágicas. Nós garantimos a gestão técnica qualificada e profissional das campanhas, posicionando o seu negócio para pessoas que buscam o que você oferece. O volume final de vendas depende da sua oferta, dos preços praticados, da verba investida e do atendimento que você presta ao cliente no WhatsApp."
    },
    {
      id: "fotos-textos",
      question: "Preciso ter fotos e textos prontos?",
      answer: "Não é necessário. Na nossa conversa inicial, coletamos todas as informações essenciais e nós mesmos redigimos os textos com foco em clareza e conversão. Se você não tiver fotos profissionais, orientamos como tirar com o celular ou podemos incluir a produção presencial no seu estabelecimento."
    },
    {
      id: "hospedagem-dominio",
      question: "Quem paga hospedagem e domínio?",
      // TROCAR: Preencher os critérios de contratação de domínio e hospedagem
      answer: "[PREENCHER: responsabilidade por domínio e hospedagem, especificando se já estão embutidos na mensalidade ou contratados à parte pelo cliente]."
    }
  ]
};
