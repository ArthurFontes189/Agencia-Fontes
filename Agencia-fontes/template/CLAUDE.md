# {{NOME DO PROJETO}}

<!-- Preenchido por /novo-cliente. No template-base, deixar como está. -->
## Projeto
- Cliente: {{NOME DO NEGÓCIO}} ({{NICHO}}), {{BAIRRO / CIDADE}}
- Fase atual: {{1 demo / 2 site final}} (detalhes em STATUS.md)
- Feito pela Agência Fontes, Brasília, DF. Idioma de todo conteúdo: português do Brasil

## Stack (não trocar sem perguntar)
- Astro + TypeScript estrito, saída estática, sem backend e sem banco
- Só as dependências do package.json, versões exatas. Nada novo sem aprovação
- Publicação: GitHub Pages via .github/workflows/deploy.yml (fase 2)

## Comandos
- `npm install`, `npm run dev` (`-- --host` abre no celular), `npm run preview`
- `npm run build` deve passar sem erros antes de qualquer commit (um hook confere)

## Estrutura
- `src/data/page.ts`: quais seções aparecem e em que ordem
- `src/data/*.ts`: TODO conteúdo (textos, serviços, FAQ, contatos). Tipado
- `src/data/site.ts`: identidade, contatos, flag `demo`, função whatsappLink()
- `src/components`: uma seção por componente, sem texto de conteúdo fixo
- `src/styles/tokens.css`: cores, fontes, espaçamentos. Nada de hex fora dele
- `presets/`: identidades prontas (a da agência vive só no template e no site da agência)

## Como trabalhar
- Mais de 1 arquivo: plano em até 5 linhas antes de editar
- Mudança pequena e focada. Não refatorar o que não foi pedido
- Troca de cliente = trocar dados e tokens, não reescrever componentes
- Depois de alterar código: `npm run build` e mostrar o resultado
- Não afirmar que algo funciona sem ter rodado o comando que prova
- Ao fim de cada sessão, atualizar STATUS.md (o que mudou, o que falta)

## Regras de negócio (inegociáveis)
- NUNCA inventar depoimentos, avaliações, número de clientes, prêmios, anos de
  experiência, resultados, preços, horários, telefone, CNPJ ou endereço
- Dado faltando: `[PREENCHER: descrição]` no conteúdo e comentário `TROCAR` no código
- NUNCA prometer ranking no Google nem aumento de vendas
- Formulário não envia a servidor: abre o WhatsApp, com checkbox de consentimento
- Texto jurídico é rascunho: lembrar que precisa de revisão profissional
- Em demo (`demo: true`): faixa "Modelo de demonstração" visível; não publicar

## Nunca fazer
- Push, publicação ou criação de repositório remoto sem pedido explícito
- Commit de node_modules, dist, .env ou segredos (o repositório publicado é público)
- Deixar conteúdo, marca ou planos da agência em site de cliente

## Detalhes
`.claude/rules/` (design, conteúdo, acessibilidade e SEO, fases e clientes, GitHub Pages).
Rotinas: `/aprovar-demo` e `/revisar-site`.
