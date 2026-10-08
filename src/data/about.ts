export interface PartnerProfile {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
  photoComment: string;
}

export interface AboutData {
  badge: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  // Parágrafo opcional: renderizar SOMENTE se o campo existir e não for vazio.
  // TROCAR: [PREENCHER: um detalhe real e curto da história de vocês, ou deixar vazio]
  optionalParagraph?: string;
  valuesChips: string[];
  profiles: [PartnerProfile, PartnerProfile];
  whyFontesTitle: string;
  whyFontesText: string;
}

export const aboutData: AboutData = {
  badge: "EMPRESA DE FAMÍLIA · BRASÍLIA, DF",
  title: "Dois primos, um sobrenome e o mesmo jeito de trabalhar",
  paragraph1: "A Agência Fontes é uma empresa de família de Brasília. Somos dois primos que dividem o sobrenome e o trabalho: um cuida da parte técnica, com sites e sistemas; o outro cuida do marketing, do conteúdo e de conversar com você.",
  paragraph2: "Tem muito negócio bom em Brasília que merece ser encontrado: a clínica do bairro, a loja de rua, o restaurante que todo mundo indica. Por isso criamos um jeito simples de trabalhar: em vez de só prometer, a gente mostra. Montamos o site com a cara do seu negócio, apresentamos pessoalmente e, se você gostar, seguimos juntos.",
  paragraph3: "Como o sobrenome está no nome da empresa, cuidamos do seu site como cuidamos do nosso nome. E você sempre fala direto com quem faz.",
  // TROCAR: [PREENCHER: um detalhe real e curto da história de vocês, ou deixar vazio]
  optionalParagraph: "",
  valuesChips: [
    "Você fala com quem faz",
    "Você vê antes de pagar",
    "Empresa de família, de Brasília"
  ],
  profiles: [
    {
      id: "partner-dev",
      // TROCAR: Preencher com o nome do sócio responsável por desenvolvimento
      name: "[PREENCHER: nome do sócio de desenvolvimento]",
      role: "Desenvolvimento · sites e sistemas",
      quote: "Cuido do site do primeiro rascunho até ele estar no ar, e de mantê-lo funcionando depois.",
      initials: "DEV",
      photoComment: "TROCAR: substituir placeholder por foto real do sócio de desenvolvimento"
    },
    {
      id: "partner-mkt",
      // TROCAR: Preencher com o nome do sócio responsável por marketing e vendas
      name: "[PREENCHER: nome do sócio de marketing]",
      role: "Marketing e vendas · conteúdo e anúncios",
      quote: "Cuido do conteúdo, dos anúncios e de apresentar o projeto pessoalmente para você.",
      initials: "MKT",
      photoComment: "TROCAR: substituir placeholder por foto real do sócio de marketing"
    }
  ],
  whyFontesTitle: "Por que Fontes?",
  whyFontesText: "Fontes é o nosso sobrenome. E fonte também é origem, o ponto de onde tudo começa: é onde queremos estar no começo da presença digital do seu negócio."
};
