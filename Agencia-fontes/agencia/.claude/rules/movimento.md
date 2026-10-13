---
paths:
  - "src/**"
  - "astro.config.mjs"
  - "package.json"
---

# Política de movimento e animação

Princípio: CSS primeiro, JS só onde o CSS não chega. O público é local, no celular, muitas
vezes com internet e aparelho simples. Impressionar não pode custar velocidade.

## Pilha aprovada (única permitida)
- GSAP + ScrollTrigger. Verificar a licença vigente em gsap.com antes de instalar e
  registrar resumo de 3 linhas em docs/. SplitText só se compensar o peso; senão, dividir
  as palavras com uma função própria pequena.
- CSS puro: transições, @keyframes, marquee, aurora, brilho de borda.
- Lenis (rolagem suave): FORA da pilha. Ganho pequeno, risco em toque, acessibilidade e
  âncoras. Só entra com pedido explícito e teste em celular.
- Three.js / WebGL: fora da pilha.
- Versões descobertas com `npm view <pacote> version` e fixadas exatas, sem ^ nem ~.
- Qualquer outra biblioteca de animação: perguntar antes.

## Flag `efeitos` (src/data/site.ts), lida pelo layout e gravada em `data-efeitos` no <html>
- `"completo"`: site da agência. Catálogo de docs/direcao-visual.md.
- `"leve"`: padrão dos clientes. Só reveal com fade e subida curta (16 a 24px, 400 a 600ms)
  e marquee opcional.
- `"nenhum"`: sem animação.
Cliente nasce com `"leve"`.

## Arquitetura do código
- `src/scripts/efeitos/index.ts`: ponto único. Lê `data-efeitos` e as capacidades do
  aparelho, e só importa (import dinâmico) os módulos permitidos: `reveal.ts`,
  `spotlight.ts`, `magnetic.ts`, `terminal.ts`, `progresso.ts`.
- Capacidades: `prefers-reduced-motion: reduce` desliga TUDO; `(hover: hover) and
  (pointer: fine)` libera spotlight, magnético e tilt; largura menor que 768px usa versão
  reduzida.
- Carregar depois do primeiro render (requestIdleCallback ou após o evento load).
- Componentes não contêm lógica de animação; só atributos (`data-reveal`, `data-spotlight`).

## Melhoria progressiva e LCP
- Conteúdo visível e navegável sem JS. Esconder para animar só quando existir a classe
  `js` no <html>.
- Failsafe: se o módulo de efeitos não iniciar em 1,5 s, remover o estado "escondido" e
  mostrar tudo.
- O elemento principal do topo (h1) deve aparecer em até 1 s. Animar só transform e
  opacity; evitar animar o que atrasa o LCP.
- Evitar layout shift: reservar o espaço do que anima.

## Acessibilidade e conforto
- prefers-reduced-motion: sem animação, sem efeitos de cursor, marquee parado, terminal
  com texto completo.
- Animações infinitas pausam fora da tela (IntersectionObserver) e com a aba oculta.
- Nada pisca mais de 3 vezes por segundo. Nenhuma informação só em movimento.
- Menu mobile animado continua com aria-expanded e fecha com Esc.

## Orçamento de desempenho
- Meta: até ~120 KB gzip de JS na página inicial; medir após o build e informar o número.
- Estourou: propor cortes antes de continuar. Não afirmar tamanho nem nota sem medir.
- Meta de Lighthouse mobile: Desempenho e Acessibilidade acima de 90 (medir; é meta, não
  promessa).
- Testar 360, 768 e 1280 px sem rolagem horizontal; alvos de toque de 44px; contraste AA.
