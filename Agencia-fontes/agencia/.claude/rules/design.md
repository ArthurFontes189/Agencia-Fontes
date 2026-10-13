---
paths:
  - "src/styles/**"
  - "src/components/**"
  - "src/layouts/**"
  - "src/pages/**"
  - "presets/**"
---

# Regras de design

## Identidade por projeto
- Cada projeto tem sua identidade em src/styles/tokens.css. Cliente usa a cor e a fonte
  dele; a paleta da agência vive só em presets/agencia e no site da agência.
- Toda cor vem de um token. Nunca hex solto em componente.
- Preset da agência: mint-300 (#7ECECA) é cor de DESTAQUE sobre fundo escuro (ink-950,
  ink-900). NUNCA como cor de texto sobre fundo claro; ali, texto escuro e botões em
  mint-600 ou mint-700.
- Cor da marca clara demais para texto? Use-a como destaque sobre fundo escuro e um tom
  escuro da mesma família nas áreas claras. Contraste mínimo WCAG AA.
- Gradientes só dentro da família de cores do projeto.

## Tipografia
- No máximo 3 famílias. Corpo com line-height 1.6. Títulos com tracking levemente
  negativo. Rótulos pequenos em mono, com parcimônia.

## Visual
- Seções alternam fundo escuro e claro quando a identidade permitir.
- Cards: borda 1px, cantos de 14 a 16px, sombra suave, hover com leve elevação.
- Ícones SVG inline em linha, traço de 1.5px, um único estilo.
- Evitar cara de template: sem excesso de emoji, sem blocos idênticos repetidos sem
  variação, sem sombras pesadas, sem frases de enchimento, sem banco de imagens.

## Animação e movimento
Política técnica e arquitetura em **`.claude/rules/movimento.md`** (GSAP, CSS, JS, acessibilidade, orçamento de desempenho).
Catálogo de efeitos implementados em **`docs/direcao-visual.md`** (11 efeitos: aurora, reveal, spotlight, magnético, terminal, progresso, marquee, header, etc).
- Flag `efeitos: "completo"` em `src/data/site.ts` ativa todos os efeitos do catálogo.
- `prefers-reduced-motion` desliga tudo.

## Responsividade
- Mobile-first. Testar 360px, 768px e 1280px. Alvos de toque de pelo menos 44px.
