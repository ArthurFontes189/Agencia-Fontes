# Direção visual: site da Agência Fontes (versão final)

Vale só para o site da agência (`efeitos: "completo"`). Clientes usam a identidade deles e
`efeitos: "leve"`. Política técnica: `.claude/rules/movimento.md`.

## Análise que sustenta as escolhas
- Quem decide a venda é o primo, apresentando em celular ou tablet, na frente do cliente.
  O site precisa impressionar no celular, não só no computador.
- O site da agência é a vitrine do que vendemos: velocidade e acabamento convencem mais
  que efeito pesado. Site lento contradiz o argumento.
- Clientes pagam pouco: o efeito mais caro fica só na agência.
- Por isso: CSS primeiro, GSAP para orquestrar, nada de WebGL nem rolagem suave artificial.

## Linguagem
- Predominantemente escuro (ink-950, 900, 800), mint-300 como destaque; uma ou duas seções
  claras para respirar. Mint-300 nunca como texto sobre fundo claro.
- Fundo: grade ou pontos sutis com brilho radial.
- Tipografia: Space Grotesk (títulos), Inter (corpo), JetBrains Mono (detalhes técnicos).
- Sem contadores nem números de impacto. Dado desconhecido fica [PREENCHER].

## Catálogo de efeitos (completo)
| # | Efeito | Onde | Desktop | Celular |
|---|---|---|---|---|
| 1 | Aurora: gradientes radiais lentos (só CSS, transform) | fundo do hero | animada | estática |
| 2 | Revelação do título por palavra, com máscara | hero e títulos de seção | sim | sim, mais curta |
| 3 | Reveal escalonado ao rolar | todas as seções | sim | sim |
| 4 | Brilho de borda que segue o cursor | cards do bento grid | sim | não (borda fixa) |
| 5 | Botões magnéticos | CTAs | sim | não |
| 6 | Terminal digitando "briefing > demo > site no ar" | seção "Como funciona" | digita ao entrar na tela | texto completo, sem digitação |
| 7 | Linha de progresso desenhada ao rolar (SVG) | "Como funciona" | sim | vertical, sem pin |
| 8 | Marquee de serviços e tecnologias | faixa abaixo do hero | rola, pausa no hover | rola devagar |
| 9 | Barra de progresso de leitura | topo | sim | sim |
| 10 | Header que encolhe e desfoca ao rolar; menu mobile animado | todo o site | sim | sim |
| 11 | Comparador arrastável "modelo genérico x com a cara do negócio" | comparativo | sim | sim, por toque; também teclado (input range) |

Regras: sem pin de seção no celular; sem parallax que atrapalhe leitura; animar só
transform e opacity; tudo desligado com prefers-reduced-motion.

## Responsividade (o ponto principal)
- Mobile-first em 360 / 768 / 1280 px; sem rolagem horizontal; toque de 44px.
- Bento grid: 1 coluna no celular, 2 no tablet, 3 a 4 no desktop.
- Tipografia fluida com clamp(). Espaçamentos por token.
- Imagens e mockups com dimensões definidas, formatos modernos (WebP/AVIF), lazy abaixo
  da dobra.
- Testar o site da agência em aparelho real simples antes de apresentar.

## Referências
- Estratégia: docs/linha-de-pensamento.md. Visual: criativos/, se houver, via
  docs/guia-de-estilo.md. Inspiração, nunca cópia.
