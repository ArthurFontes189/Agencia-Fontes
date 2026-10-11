---
name: novo-cliente
description: Cria a demo de um novo cliente em clientes/<slug> a partir de templates/site-base. Use na raiz da pasta de produção quando for montar a demonstração de um negócio.
disable-model-invocation: true
argument-hint: [nome-do-negocio] [nicho]
arguments: [negocio, nicho]
---

Criar a demo (fase 1) do cliente **$negocio** (nicho: **$nicho**).

## 0. Conferir o ponto de partida
- Confirme que existe `templates/site-base/package.json` a partir da pasta atual. Se não
  existir, PARE e avise: este comando roda na raiz `agencia-fontes`.
- Se `$negocio` ou `$nicho` vier vazio, pergunte. Nichos: clínica, comércio, estética,
  restaurante, oficina ou outro.
- Defina o slug (minúsculas, sem acento, hífens). Se `clientes/<slug>` já existir, PARE.

## 1. Coletar dados (uma única mensagem, só o que falta)
Nome do negócio, bairro e cidade, serviços ou produtos principais, horário, WhatsApp,
Instagram, cores ou logo (se houver). O que não vier fica `[PREENCHER: ...]`.
Nunca invente. Não busque dados do negócio na internet sem eu pedir.

## 2. Criar o projeto
- Copie `templates/site-base` para `clientes/<slug>` sem `.git`, `node_modules`, `dist`
  e `.astro`.
- Dentro da cópia rode `git init -b main`. Não crie remoto e não faça commit.
- Remova da cópia `presets/agencia` e tudo que é só da agência: planos, comparativo
  "fazer sozinho x com a gente", "Quem somos" da agência, textos de venda.

## 3. Adaptar (só dados e tokens)
- `src/data/site.ts`: nome, cidade, contatos, `demo: true`. O link de WhatsApp da faixa
  de demonstração aponta para a AGÊNCIA; o das seções aponta para o negócio.
- `src/data/page.ts`: ative só as seções que fazem sentido para o nicho.
- `src/data/*.ts`: serviços, FAQ, horários, textos. Linguagem simples, sem jargão.
- `src/styles/tokens.css`: identidade do cliente (cores e fontes). NÃO use a paleta
  mint da agência. Contraste AA obrigatório.
- Siga `.claude/rules/` do projeto.

## 4. Documentar
- No `CLAUDE.md` da cópia, preencha o bloco "Projeto" (cliente, nicho, fase 1).
- Preencha o `STATUS.md`: fase 1, data de hoje, o que foi feito, pendências.

## 5. Verificar
Na pasta do cliente: `npm install` e `npm run build`. Mostre o resultado. Se falhar,
corrija a causa. Não esconda erro de tipo com `any` ou `@ts-ignore`.

## 6. Entregar (até 10 linhas)
Onde ficou o projeto, o que foi adaptado, todos os `[PREENCHER]` pendentes, o que NÃO
foi verificado (visual no celular, por exemplo) e como abrir a demo local:
`npm run dev -- --host`.
