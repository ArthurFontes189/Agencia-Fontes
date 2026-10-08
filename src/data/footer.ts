export interface FooterData {
  summary: string;
  locationNotice: string;
  cnpjLabel: string;
  privacyLabel: string;
  privacyHref: string;
  copyrightNotice: string;
  builtWithNotice: string;
}

export const footerData: FooterData = {
  summary: "Mini agência de presença digital e desenvolvimento de sites para pequenos negócios locais em Brasília e Distrito Federal.",
  locationNotice: "Brasília, DF",
  cnpjLabel: "CNPJ:",
  privacyLabel: "Política de Privacidade",
  privacyHref: "/privacidade",
  copyrightNotice: "Agência Fontes. Todos os direitos reservados.",
  builtWithNotice: "Desenvolvido com foco em velocidade, acessibilidade e tecnologia estática."
};
