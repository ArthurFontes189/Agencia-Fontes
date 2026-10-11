---
paths:
  - "src/components/**"
  - "src/layouts/**"
  - "src/pages/**"
---

# Regras de acessibilidade e SEO

## Acessibilidade
- HTML semântico: header, nav, main, section, footer. Um único h1 por página, sem pular
  níveis de título.
- Tudo que se clica funciona com teclado; foco sempre visível.
- Menu mobile com aria-expanded e fecha com Esc. Accordion com aria-expanded e
  aria-controls.
- Imagem ou SVG informativo tem alt. Decorativo tem aria-hidden="true".
- Todo campo de formulário tem label visível; erro de validação em texto, não só em cor.
- Contraste mínimo WCAG AA em texto e botões.
- Respeitar prefers-reduced-motion.

## SEO
- Cada página tem title único e meta description.
- Open Graph, favicon e lang="pt-BR" no layout base.
- JSON-LD (ProfessionalService ou LocalBusiness) alimentado por src/data/site.ts. Sem
  endereço de rua se não foi informado.
- Links internos e caminhos de arquivos estáticos respeitam o `base` (usar
  import.meta.env.BASE_URL), senão quebram no GitHub Pages.
- Demo (`demo: true`): incluir `noindex` para não ser indexada.

## Performance
- Sem biblioteca extra. JavaScript no cliente só onde necessário.
- Imagens com dimensões definidas e loading="lazy" abaixo da dobra.
- Fontes com display=swap.
