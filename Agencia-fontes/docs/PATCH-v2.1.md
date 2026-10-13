# Patch v2.1: Direção Tech, Efeitos e Política de Movimento

**Status:** ✅ APLICADO (2026-10-13)

Patch integrado ao template-base e ao site da agência. Define direção visual, linguagem de efeitos e arquitetura de animações para o projeto.

## O Que Muda

### Template Base (`/templates/site-base/`)

| Arquivo | Mudança |
|---------|---------|
| `.claude/rules/movimento.md` | **NOVO**: Política de movimento, pilha GSAP + CSS, flag `efeitos`, LCP e acessibilidade |
| `.claude/rules/design.md` | Atualizado: referencia `movimento.md`, documenta flag `efeitos` |
| `src/data/site.ts` | Adicionado: campo `efeitos: "leve" \| "completo" \| "nenhum"` (padrão: "leve") |

### Site da Agência (`/agencia/`)

| Arquivo | Mudança |
|---------|---------|
| `.claude/rules/movimento.md` | **NOVO**: Copiado do patch |
| `.claude/rules/design.md` | Atualizado: referencia catálogo em `docs/direcao-visual.md` |
| `src/data/site.ts` | Adicionado: `efeitos: "completo"` (ativa todos os 11 efeitos) |

### Documentação (`/docs/`)

| Arquivo | Conteúdo |
|---------|----------|
| `direcao-visual.md` | **NOVO**: Análise, paleta (mint-300 destaque), tipografia, catálogo de 11 efeitos |
| `linha-de-pensamento.md` | **NOVO**: Lógica de persuasão (inspiração wuzi, adaptada às regras) |

## Catálogo de Efeitos (11 total, em `docs/direcao-visual.md`)

| # | Efeito | Desktop | Celular |
|---|--------|---------|---------|
| 1 | Aurora: gradientes radiais lentos | Animado | Estático |
| 2 | Revelação de título por palavra | Sim | Sim (mais curta) |
| 3 | Reveal escalonado ao rolar | Sim | Sim |
| 4 | Brilho de borda (spotlight) | Sim | Não |
| 5 | Botões magnéticos | Sim | Não |
| 6 | Terminal digitando | Digita | Texto completo |
| 7 | Linha de progresso (SVG) | Sim | Vertical |
| 8 | Marquee de serviços | Rola/pausa | Rola devagar |
| 9 | Barra de progresso (leitura) | Sim | Sim |
| 10 | Header encolhe/desfoca | Sim | Sim |
| 11 | Comparador arrastável | Sim | Toque/range |

## Flags

**`efeitos` em `src/data/site.ts`:**
- `"completo"`: Site da agência. Ativa todos os 11 efeitos + GSAP + ScrollTrigger.
- `"leve"`: Padrão para clientes. Apenas fade + subida (16-24px, 400-600ms).
- `"nenhum"`: Sem animações.

## Política Técnica

Detalhes em `.claude/rules/movimento.md`:
- **Pilha aprovada**: GSAP + ScrollTrigger + CSS puro. Sem Lenis, Three.js, WebGL.
- **Progressão**: Sem JS, conteúdo visível. Apenas HTML/CSS animando = melhoria progressiva.
- **Failsafe**: 1,5s máximo para JS; depois mostra tudo.
- **LCP**: h1 em até 1s. Animar só transform e opacity.
- **Acessibilidade**: `prefers-reduced-motion` desliga tudo. Sem flashes > 3x/s.
- **Orçamento**: ~120 KB gzip JS (medir pós-build). Lighthouse Mobile: >90 Desempenho + Acessibilidade.

## Linguagem Visual

Em `docs/direcao-visual.md`:
- **Paleta**: Fundo escuro (ink-950, 900, 800), mint-300 (#7ECECA) como destaque.
- **Tipografia**: Space Grotesk (títulos), Inter (corpo), JetBrains Mono (detalhes).
- **Responsividade**: 360 / 768 / 1280 px. Sem parallax pesado. Alvos de toque: 44px.

## Lógica de Persuasão

Em `docs/linha-de-pensamento.md`:
- Posicionamento por contraste: "pronto antes de pagar" vs. "sob medida".
- Hero em pergunta; um CTA principal.
- 3 diferenciais logo após hero.
- Serviços em 2 blocos: "Criar" e "Manter e crescer".
- Tabela comparativa honesta.
- Formulário em etapas → WhatsApp (sem enviar a servidor).

**Proibido**: Contadores, depoimentos inventados, prêmios, promessas de ranking.

## Como Aplicar a Novos Clientes

Novo cliente criado com `/novo-cliente` herda:
- ✅ `.claude/rules/movimento.md` (do template-base)
- ✅ Flag `efeitos: "leve"` (padrão)
- ✅ Referências em `design.md`

Sem ações extras necessárias.

## Próximos Passos

- [ ] Implementar módulos de JS (`src/scripts/efeitos/`) em futuras sessões
- [ ] Testar Lighthouse (meta: >90 desktop e mobile)
- [ ] Criar presets de design para cada nicho (clínica, comércio, estética, restaurante)
- [ ] Documentar efeitos por cliente quando necessário (demo com efeitos full, etc)

---

**Aplicado em:** 2026-10-13  
**Template:** v2.1  
**Status:** ✅ Build passando, pronto para evolução
