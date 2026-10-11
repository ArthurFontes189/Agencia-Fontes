# Guia de Estilo — Agência Fontes

## 1. Marca e Logo

**Símbolo:** F estilizado, geométrico, moderno
- Forma: Letras abstratas/vazadas criando dinâmica com espaços negativos
- Estilo: Sem serifa, limpo, contemporâneo
- Uso: Funciona bem em monochrome e nas cores primárias da marca

**Variações do símbolo:**
- SalesPort Blue (#185DF1): Versão padrão, sobre branco
- Prussian Blue (#031130): Versão dark mode, sobre branco
- Alice Blue/Pálido: Versão light/hover, sobre branco
- Branco: Sobre fundos escuros (azul escuro)

**Wordmark:**
"Agência Fontes" — não visualizado nos criativos, mas será necessário criar (ou usar tipo sans moderna)

**Logo completo:**
Símbolo (F) + wordmark, estilo SalesPort Blue sobre fundo escuro (azul/preto), com efeito sutil de partículas/pontos (referência ao fundo do logo principal).

**Espaçamento mínimo:** Margem de segurança = altura do F, sem texto ou elementos muito próximos.

## 2. Paleta de Cores

### ✓ PALETA CONFIRMADA
**Decisão:** Seguir as cores dos criativos (azul), ignorar briefing (mint).
Razão: Criativos mostram design coeso e moderno em azul. A marca (F em azul) prevalece.

**Cores dos criativos:**
- **SalesPort Blue:** #185DF1 (azul vibrante, primária)
- **Prussian Blue:** #031130 (azul muito escuro, backgrounds)
- **Alice Blue:** #F3F7FE (branco/azul muito claro, light mode)
- **Branco:** #FFFFFF

### Paleta Final
Baseada nos criativos:

**Cores Primárias:**
- `--primary: #185DF1` (SalesPort Blue — destaque, botões, links)
- `--dark: #031130` (Prussian Blue — backgrounds escuros, texto)
- `--light: #F3F7FE` (Alice Blue — backgrounds claros, cards)

**Cores Neutras:**
- `--white: #FFFFFF`
- `--text-dark: #0B1F26` (ou #031130 para alto contraste)
- `--text-light: #E6F2F3`
- `--muted: #8FB0B6`

**Contraste:** SalesPort Blue (#185DF1) sobre Alice Blue (#F3F7FE) ≈ alto contraste ✓
**Contraste:** SalesPort Blue (#185DF1) sobre Prussian Blue (#031130) ≈ médio, avaliar legibilidade

### Padrão de Uso
- Botões primários: #185DF1 com texto branco/dark
- Backgrounds dark: #031130 ou degradê
- Backgrounds light: #F3F7FE ou branco
- Destaque: #185DF1 (não há mint nos criativos)
- Ícones/bordas: #185DF1 sobre escuro, #031130 sobre claro

**Gradientes:** Azul escuro → azul vibrante (tema tech)

## 3. Tipografia

### Famílias Prováveis (a confirmar)
**Títulos:** Sans moderna, geométrica
- Candidata: Space Grotesk (conforme briefing) ou Poppins
- Peso: Bold (700) para h1, Semi-bold (600) para h2, Regular (400) para corpo

**Corpo:** Sans legível, boa em telas
- Candidata: Inter (conforme briefing) ou -apple-system, BlinkMacSystemFont
- Peso: Regular (400), Semi-bold (600) para ênfase
- Tamanho: 16px base (mobile-first)

**Rótulos/Monoespaço:** JetBrains Mono (conforme briefing)
- Uso: "01 / 02", "MODELO DE DEMONSTRAÇÃO", badges
- Peso: Regular (400), Uppercase, pequeno

### Escala de Tipos (a confirmar)
- h1: 48px (mobile: 32px), bold, leading 1.2
- h2: 32px (mobile: 24px), semi-bold, leading 1.3
- h3: 24px (mobile: 20px), semi-bold
- Corpo: 16px, regular, leading 1.6, letter-spacing 0
- Pequeno: 14px, regular, leading 1.5

## 4. Layout, Grade e Espaçamento

### Sistema de Grade
- Mobile: 4-coluna (360px base)
- Tablet: 8-coluna (768px base)
- Desktop: 12-coluna (1280px base)
- Gutter: 16px (mobile), 24px (tablet), 32px (desktop)

### Espaçamento Base
- Unit: 8px (múltiplos: 8, 16, 24, 32, 48, 64, 80, 96)
- Padding interior cards: 24px
- Margin entre seções: 64px (desktop), 48px (tablet), 32px (mobile)
- Margin entre elementos: 16px

### Ritmo Vertical
- Seções alternam claro/escuro (conforme briefing)
- Cada seção: padding top/bottom 64px mín.

## 5. Cards, Botões, Bordas e Sombras

### Cards
- Borda: 1px sólida (cor #185DF1 com opacidade 20%, ou #ddd em claro)
- Border-radius: 14–16px (a confirmar — criativos mostram formas geométricas, não cards tradicionais)
- Background: branco (claro), #031130 ou gradê (escuro)
- Sombra: 0 4px 12px rgba(0,0,0,0.1) em light mode; nenhuma em dark mode
- Hover: leve elevação (box-shadow aumenta), escala +2% ou cor mais vibrante

### Botões
**Primário (dark background):**
- Background: #185DF1
- Texto: branco
- Hover: #1555DB (mais escuro)
- Padding: 12px 24px (mín. 44px altura para toque)

**Secundário (light background):**
- Background: transparente
- Texto: #185DF1
- Borda: 1px #185DF1
- Hover: background rgba(#185DF1, 0.1)

**Desabilitado:** opacidade 50%, cursor not-allowed

### Bordas
- Default: 1px, color #185DF1 (10-20% opacidade)
- Destaque: 1px, color #185DF1 (100%)
- Subtle: 1px, color #ddd (light) ou #444 (dark)

### Sombras
- Baixa elevação: 0 4px 12px rgba(0,0,0,0.08)
- Média elevação: 0 8px 24px rgba(0,0,0,0.12)
- Alta elevação: 0 16px 48px rgba(0,0,0,0.16)
- Dark mode: sombra mais clara ou nenhuma

## 6. Ícones e Ilustração

### Ícones
- Estilo: Stroke (traço, não preenchimento)
- Traço: 1.5px (conforme briefing)
- Tamanho padrão: 24px, 32px, 48px (múltiplos de 8)
- Cor: #185DF1 (destaque), #0B1F26 (escuro), branco (sobre escuro)
- Proporção: 1:1, alinhados ao grid 8px

### Ícones de Status
- Pulsing dot: verde (#4CAF50 — a confirmar) ou #185DF1
- Velocidade: 2s, opacidade 0.4 → 1.0

### Selos e Badges
- "MODELO DE DEMONSTRAÇÃO": uppercase, mono, borda 1px, badge style
- "01 / 02": mono small, subtle
- Status: cor com símbolo (ponto pulsando + texto)

**Ilustração:**
- Estilo: Geométrico (conforme símbolo F), wireframe ou flat
- Referência: Linhas do F, formas vazadas, dinâmica
- Não: retratos, fotografias realistas

## 7. Fotografia

### Tipo de Foto
- Estilo: Corporativa, limpa, light/bright
- Contexto: Negócios pequenos em Brasília (não aparecem no template base)
- Para cliente: Fotos do seu ambiente, produtos, equipe
- Para agência: Fotos dos dois primos (placeholder: iniciais em círculo, cor #185DF1)

### Tratamento
- Contraste alto, não dessaturadas
- Bordas/cropping: Quadrado (1:1) ou retangular (16:9)
- Filtro: Nenhum aplicado in-template; deixar natural

## 8. Animações e Movimento

### Entrada ao Rolar
- IntersectionObserver trigger
- Fade-in + slide-up (de 20px)
- Duração: 0.6s, easing ease-out
- Delay: stagger 0.1s entre elementos

### Hover/Focus
- Transição: 0.2s ease-out
- Elevação: +2px sombra
- Cor: mais vibrante ou opacidade mudança

### Reduzir Movimento
- `prefers-reduced-motion`: sem animações, apenas mudanças estáticas

## 9. Tom de Voz dos Textos

### Características
- **Simples, direto:** Evitar jargão técnico, falar em português claro
- **Pessoal e acessível:** "A gente", não "nós" ou "empresa X"
- **Orientado a valor:** Benefício do cliente, não features
- **Respeito:** Sem promessas falsas, sem exagero
- **Brasília/local:** Referências ao contexto da agência

### Exemplos de Tom
- ❌ "Plataforma SaaS omnichannel com IA"
- ✓ "Site profissional que seus clientes encontram no Google"

- ❌ "Garantimos aumento de 300% em vendas"
- ✓ "Mais visibilidade, mais clientes procurando você"

## 10. O que Repetir (Padrões)

1. **F geométrico:** Sempre presentes nos backgrounds e selos (subtle)
2. **Azul vibrante:** Destaque em CTAs, links, ícones
3. **Seções alternadas:** Escuro, claro, escuro, claro...
4. **Espaçamento regular:** 8px grid, não arredondamentos estranhos
5. **Bordas 1px soft:** Cards, inputs, abas
6. **Tipo sans moderna:** Toda tipografia
7. **Ícones stroke:** Apenas traço, not filled
8. **Mono para badges:** Rótulos e números
9. **Foco visível:** Keyboard navigation com anel azul
10. **Mobile-first:** Desktop é ampliação, não redesign

## 11. O que EVITAR (Anti-padrões)

1. ❌ **Mint verde (#7ECECA):** Não usar a menos que confirmado — criativos usam azul
2. ❌ **Muitas cores:** Máx. 3 cores + neutros; não arco-íris
3. ❌ **Fontes com serifa:** Apenas sans
4. ❌ **Ícones filled/solid:** Apenas stroke
5. ❌ **Sombras pesadas:** Elevation sutil, não estilo "material" exagerado
6. ❌ **Animações on page load:** Apenas ao scroll/interação
7. ❌ **Texto branco sobre #185DF1:** Contraste insuficiente — usar #F3F7FE ou branco em fundos escuros
8. ❌ **Rótulos inventados:** Não criar depoimentos, números, preços fictícios
9. ❌ **Fotos estoque deturpadas:** Conteúdo real do cliente ou placeholder neutro
10. ❌ **Rodapé com 10 links:** Máx. 5–6 + legais

---

## 12. O QUE PRECISO CONFIRMAR (Lista de Aprovação)

Antes de codificar tokens e componentes, please confirme:

### Paleta de Cores
- [ ] **Pivotar do mint para azul?** Briefing diz mint (#7ECECA), criativos mostram azul (#185DF1, #031130). Qual prevalece?
- [ ] Hex exatos para SalesPort Blue, Prussian Blue, Alice Blue (não foram medidos com pixel-perfect)
- [ ] Cores secundárias/neutras além do azul (há cinza nos criativos?)

### Logo e Marca
- [ ] Logo final incluindo wordmark "Agência Fontes"?
- [ ] Versão monocromática (branco/preto) será necessária?
- [ ] Arquivo: SVG ou PNG rasterizado?

### Tipografia
- [ ] Space Grotesk, Inter, JetBrains Mono confirmadas?
- [ ] Ou outras famílias?
- [ ] Pesos: 400, 600, 700 suficientes?

### Componentes (cards, botões, etc.)
- [ ] Border-radius: realmente 14–16px? Criativos mostram formas mais angulares/geométricas
- [ ] Sombras: há preferência por flat design (sem sombra) ou depth clássica?

### Ícones
- [ ] Traço de 1.5px é o padrão?
- [ ] Há ícone set customizado ou usar material Icons / Feather?

### Fotografia
- [ ] Placeholder para fotos dos primos: círculo + iniciais, cor #185DF1?
- [ ] Direção para fotos de clientes demo?

### Animações
- [ ] Velocidade de fade-in (0.6s) aprovada?
- [ ] Uso de `prefers-reduced-motion` mandatório?

### Referências Externas
- [ ] Há sites ou portfolios que inspiraram o estilo (para verificar princípios)?

---

## 13. Notas Adicionais

**Criativos analisados:**
- Logo com efeito de partículas (tech/moderno)
- 3 variações azul (vibrante, escuro, claro)
- Símbolo F pode ser usado como marca d'água ou padrão de fundo

**Próximos passos (após aprovação):**
1. Atualizar `src/styles/tokens.css` (raiz) com cores confirmadas
2. Criar componentes base: botão, card, badge
3. Implementar layout/grid system
4. Adicionar tipografia Google Fonts
5. Testar contraste AA em todas as combinações

---

**Última atualização:** 2026-10-11
**Responsável por aprovação:** [você]
