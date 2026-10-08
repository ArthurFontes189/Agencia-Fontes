# Agência Fontes — Site Institucional

Site-vitrine de presença digital para pequenos negócios locais de Brasília e Distrito Federal. Desenvolvido com Astro e TypeScript em modo estrito, arquitetura estática (sem dependência de banco de dados ou backend) e design mobile-first focado em conversão via WhatsApp.

---

## 1. Como Rodar o Projeto

### Pré-requisitos
- **Node.js** (versão 18.14.1 ou superior recomendada)
- Gerenciador de pacotes **npm**

### Passos de Execução
```bash
# 1. Instalar as dependências fixadas
npm install

# 2. Iniciar o servidor local de desenvolvimento
npm run dev

# 3. Gerar a build de produção estática
npm run build

# 4. Pré-visualizar a build gerada localmente
npm run preview
```
O servidor de desenvolvimento estará disponível por padrão em `http://localhost:4321`.

---

## 2. Como Editar o Conteúdo

Todo o conteúdo editável do projeto está isolado e tipado em arquivos TypeScript dentro do diretório `src/data/`. Nenhum texto de conteúdo fica chumbado nos componentes de layout.

- **`src/data/site.ts`**: Informações da agência (nome, slogan, WhatsApp, e-mail, Instagram, CNPJ, links de navegação).
- **`src/data/hero.ts`**: Textos da primeira dobra, botões de ação e dados dos mockups demonstrativos.
- **`src/data/problemSolution.ts`**: Lista de dores comuns e soluções em linha única.
- **`src/data/services.ts`**: Lista dos 5 serviços com frases de impacto e público-alvo.
- **`src/data/niches.ts`**: Demonstrações visuais para Clínica, Comércio, Estética e Restaurante.
- **`src/data/plans.ts`**: Itens, valores de implantação/mensalidade e módulos adicionais.
- **`src/data/howItWorks.ts`**: 4 etapas da linha do tempo e prazos médios de entrega.
- **`src/data/comparison.ts`**: Tabela comparativa "Fazer sozinho x Com a Agência Fontes".
- **`src/data/faq.ts`**: Perguntas e respostas do accordion acessível.
- **`src/data/about.ts`**: História da empresa de família, valores e perfis dos dois sócios.
- **`src/data/contact.ts`**: Textos do formulário de contato e canais diretos.
- **`src/data/footer.ts`**: Notas de rodapé e informações institucionais.
- **`src/data/privacy.ts`**: Seções explicativas da Política de Privacidade.

> **Importante:** Todos os campos que necessitam de preenchimento oficial contêm o marcador `[PREENCHER: descrição]` e o comentário `TROCAR:` no código-fonte.

---

## 3. Como Trocar Cores e Fontes

Toda a identidade visual é controlada centralizadamente via variáveis CSS em `src/styles/tokens.css`:

### Cores
- **Família Mint (Verde-água da marca):** `--mint-50` até `--mint-900`.
  - A cor-base de destaque sobre fundos escuros é `--mint-300` (`#7ECECA`).
- **Família Ink (Fundos escuros e neutros):** `--ink-700` até `--ink-950`.
- **Textos e Superfícies:** `--text-on-dark`, `--text-on-light`, `--surface-light`, `--border-light`.

Para alterar qualquer tom ou contraste, edite os valores hexadecimais em `:root` dentro de `src/styles/tokens.css`.

### Fontes
- **Títulos:** `--font-title` (padrão: `'Space Grotesk'`).
- **Corpo do texto:** `--font-body` (padrão: `'Inter'`).
- **Rótulos tech e números:** `--font-mono` (padrão: `'JetBrains Mono'`).

As fontes são carregadas pelo Google Fonts no cabeçalho do layout em `src/layouts/BaseLayout.astro`. Caso queira trocar as fontes, altere a URL da tag `<link>` no layout e atualize as variáveis correspondentes no `tokens.css`.
