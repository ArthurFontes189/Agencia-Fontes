# Agência Fontes — Plataforma de Sites

Estrutura de produção para criar e gerenciar sites estáticos para pequenos negócios em Brasília.

## Estrutura

```
agencia-fontes/
├── templates/site-base/       Template base (Astro + TypeScript)
├── agencia/                   Site da Agência Fontes
├── clientes/                  Projetos de clientes (um por pasta)
├── presets/                   Identidades prontas (agência, nichos)
└── docs/                      Documentação (briefing, checklists, guias)
```

## Stack

- **Framework:** Astro 7.3.8
- **Linguagem:** TypeScript (strict mode)
- **CSS:** Tokens.css (design system)
- **Hospedagem:** GitHub Pages
- **Deploy:** GitHub Actions (automático)

## Como começar

### 1. Desenvolver o template

```bash
cd templates/site-base
npm install
npm run dev       # http://localhost:3000 (+ --host para celular)
npm run build     # Validar antes de commit (hook automático)
```

### 2. Criar um novo cliente

```bash
# Na raiz
node .claude/commands/novo-cliente.js "Nome do Negócio" "Nicho"
# Cria: clientes/<slug>/
```

Dentro do projeto do cliente:
```bash
cd clientes/<slug>
npm install
npm run dev
```

### 3. Publicar (fase 2 — após aceite)

```bash
cd clientes/<slug>
git add .
git commit -m "Site inicial"
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
# Depois em GitHub: Settings > Pages > Source: GitHub Actions
```

Ver detalhes: `docs/publicar-no-github-pages.md`

## Documentação

- **`docs/briefing.md`** — Especificação completa (negócio, stack, requisitos)
- **`docs/guia-de-estilo.md`** — Design system (cores azul, tipografia, componentes)
- **`docs/fluxo-de-trabalho.md`** — Fases, regras, checklist
- **`docs/checklist-demo.md`** — Validar antes de apresentar
- **`docs/checklist-entrega.md`** — Validar antes de publicar
- **`docs/publicar-no-github-pages.md`** — Passo a passo de publicação

## Regras inegociáveis

- ❌ NUNCA inventar depoimentos, avaliações, preços, telefone, CNPJ, endereço
- ❌ NUNCA prometer ranking no Google nem aumento de vendas
- ❌ Falta dado? Usar `[PREENCHER: o que falta]` no código
- ✅ Só dependências no package.json (versões EXATAS, sem ^ ou ~)
- ✅ Cada cliente em repositório próprio (isolamento)
- ✅ Repositório público, sem segredos, sem dados pessoais
- ✅ Formulário abre WhatsApp (não envia a servidor)
- ✅ Demo (`demo: true`) com noindex + faixa de modelo

## Qualidade

Antes de publicar, conferir com `QUALIDADE.md`:
- Responsividade (360, 768, 1280px)
- Alvos de toque (44px)
- Contraste WCAG AA
- Teclado + foco visível
- 1 único h1 por página
- ARIA (menu, accordion)
- prefers-reduced-motion
- Meta tags + JSON-LD
- Formulário + /privacidade

## Presets

Identidades prontas em `presets/`:

- **agencia/** — Azul #185DF1, dados dos primos, badges

Criar novo preset: copiar `presets/agencia/` e editar `tokens.css` + `data/site.ts`

## Contato

**Agência Fontes**  
Brasília, DF  
[PREENCHER: e-mail, WhatsApp, Instagram]

---

**Última atualização:** 2026-10-11
