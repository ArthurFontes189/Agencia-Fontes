export interface ProblemSolutionItem {
  id: string;
  problem: string;
  solution: string;
  iconName: 'search' | 'instagram' | 'message';
}

export interface ProblemSolutionData {
  badge: string;
  title: string;
  subtitle: string;
  items: ProblemSolutionItem[];
}

export const problemSolutionData: ProblemSolutionData = {
  badge: "DESAFIOS COMUNS",
  title: "Do gargalo diário à solução definitiva",
  subtitle: "Pequenos ajustes de presença digital resolvem os maiores problemas de perda de clientes locais.",
  items: [
    {
      id: "google",
      problem: "Seu negócio não aparece no Google",
      solution: "Site profissional rápido + perfil verificado no Google Meu Negócio",
      iconName: "search"
    },
    {
      id: "instagram",
      problem: "Só tem Instagram e perde clientes",
      solution: "Página própria e direta que transforma visitas em pedidos no WhatsApp",
      iconName: "instagram"
    },
    {
      id: "organization",
      problem: "Agenda e pedidos bagunçados no WhatsApp",
      solution: "Sistema simples e intuitivo para organizar seus atendimentos e horários",
      iconName: "message"
    }
  ]
};
