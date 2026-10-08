export interface PrivacySection {
  title: string;
  paragraphs: string[];
}

export interface PrivacyData {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PrivacySection[];
  contactHeading: string;
  contactText: string;
  // TROCAR: Preencher o e-mail ou contato do responsável pela privacidade
  responsibleContact: string;
  backToHomeText: string;
}

export const privacyData: PrivacyData = {
  badge: "TRANSPARÊNCIA E DADOS",
  title: "Política de Privacidade",
  subtitle: "Como tratamos suas informações com respeito, simplicidade e segurança.",
  lastUpdated: "Última atualização: Outubro de 2026",
  sections: [
    {
      title: "1. Compromisso com a sua privacidade",
      paragraphs: [
        "A Agência Fontes valoriza a confiança dos donos de negócios de Brasília. Esta página explica de forma clara como tratamos os dados que você eventualmente nos fornece ao entrar em contato conosco."
      ]
    },
    {
      title: "2. Quais dados coletamos e por quê",
      paragraphs: [
        "Nosso site não possui cadastro obrigatório, contas de usuário nem banco de dados oculto. Quando você preenche o formulário de contato, solicitamos apenas nome, nome do negócio, segmento e telefone WhatsApp.",
        "Esses dados não são gravados em servidores externos nem compartilhados com terceiros: o formulário apenas formata uma mensagem direta para que você nos envie pelo seu próprio aplicativo do WhatsApp."
      ]
    },
    {
      title: "3. Finalidade exclusiva de contato",
      paragraphs: [
        "As informações fornecidas são utilizadas exclusivamente para responder às suas dúvidas, entender a demanda do seu negócio e apresentar a demonstração do seu site.",
        "Nós NÃO vendemos, NÃO alugamos e NÃO repassamos seus dados a empresas de marketing, corretores de listas ou parceiros comerciais."
      ]
    },
    {
      title: "4. Exclusão e controle dos seus dados",
      paragraphs: [
        "Você tem total liberdade para solicitar a exclusão de qualquer registro de conversa ou informação de contato a qualquer momento. Basta nos enviar uma mensagem com essa solicitação pelo nosso WhatsApp ou e-mail oficial."
      ]
    },
    {
      title: "5. Segurança e navegação",
      paragraphs: [
        "Este site é estático e protegido por criptografia padrão HTTPS. Não utilizamos cookies de rastreamento invasivo nem ferramentas de perfilamento de comportamento."
      ]
    }
  ],
  contactHeading: "Dúvidas sobre seus dados?",
  contactText: "Para qualquer dúvida sobre o tratamento de dados pessoais ou para solicitar a exclusão das suas informações, fale diretamente com o responsável:",
  // TROCAR: Preencher com o e-mail ou canal do responsável pela privacidade
  responsibleContact: "[PREENCHER: e-mail ou contato do responsável pela privacidade, ex: privacidade@agenciafontes.com.br]",
  backToHomeText: "Voltar para a página inicial"
};
