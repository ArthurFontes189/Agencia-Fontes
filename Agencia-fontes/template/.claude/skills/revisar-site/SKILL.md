---
name: revisar-site
description: Revisão final antes de mostrar, publicar ou entregar um site: build, pendências, dados inventados, isolamento, publicação e acessibilidade. Use antes de visita, commit grande ou publicação.
disable-model-invocation: true
---

Faça uma revisão completa deste projeto. Não altere nada até eu aprovar as correções.

## 1. Build
Rode `npm run build`. Informe se passou. Se falhou, mostre o erro.

## 2. Fase e modo demo
Leia `STATUS.md` e o campo `demo` em `src/data/site.ts`. Aponte incoerência:
fase 1 com `demo: false`, ou fase 2 com `demo: true`, faixa de demonstração ou noindex.

## 3. Pendências
Busque `[PREENCHER` e comentários `TROCAR`. Liste cada um com arquivo e linha, agrupados
por tipo (contato, preço, FAQ, história, jurídico).

## 4. Dados inventados
Procure fatos não informados: depoimentos, número de clientes, anos de experiência, data
de fundação, avaliações, prêmios, métricas, horários, telefone, CNPJ, endereço.

## 5. Isolamento (projetos de cliente)
Restos da agência (nome, paleta mint, planos, comparativo, WhatsApp da agência fora da
faixa de demo) ou de outro cliente.

## 6. Regras do projeto
Contra CLAUDE.md e `.claude/rules/`:
- hex solto fora de src/styles/tokens.css
- texto de conteúdo fixo dentro de componentes (deveria estar em src/data)
- botões de WhatsApp que não usam whatsappLink()
- cor de marca clara usada como texto sobre fundo claro
- caminhos de arquivos estáticos e links sem `import.meta.env.BASE_URL`

## 7. Publicação (se fase 2)
- `astro.config.mjs` calcula `site` e `base` conforme `.claude/rules/github-pages.md`
- `deploy.yml` presente; sem segredos ou dados pessoais de terceiros no repositório

## 8. Acessibilidade e SEO
- um único h1; ordem dos títulos; alt e aria-hidden
- labels no formulário; foco visível; menu e FAQ com aria
- title, meta description, Open Graph, lang e JSON-LD
- prefers-reduced-motion respeitado
Marque "não verificado" o que só dá para checar no navegador (contraste real, 360px,
teclado, celular).

## 9. Relatório (até 25 linhas)
Três blocos: **Bloqueia publicação**, **Corrigir em seguida**, **Não verificado**.
Termine perguntando quais correções devo aplicar.
