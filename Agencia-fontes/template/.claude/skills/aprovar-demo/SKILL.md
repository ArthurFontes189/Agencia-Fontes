---
name: aprovar-demo
description: Transforma a demo aprovada em site final (fase 2): remove a faixa de demonstração, exige dados reais e prepara a publicação. Use dentro do projeto do cliente depois do aceite.
disable-model-invocation: true
---

Transformar este projeto de demo (fase 1) em site final (fase 2).

## 0. Confirmar o aceite
Pergunte, antes de mexer em qualquer arquivo: o cliente aceitou? Qual plano? Peça o
combinado (prazo, ajustes por mês, quem paga hospedagem e domínio, de quem é o site).
Sem aceite confirmado por mim, PARE.

## 1. Tirar o modo demonstração
- `src/data/site.ts`: `demo: false`.
- Remova a faixa "Modelo de demonstração" e o botão "Quero um site assim", se existirem
  no código além do controle por flag.
- Remova `noindex` das páginas e confira o JSON-LD e o SEO com dados reais.

## 2. Dados reais
- Liste todos os `[PREENCHER` e comentários `TROCAR`, agrupados por tipo. Peça cada dado
  que falta, em uma mensagem. Nada de preencher por suposição.
- Troque fotos e textos provisórios pelos reais, se eu os fornecer.
- Política de privacidade: preencha o responsável. Mantenha o aviso de revisão
  profissional.

## 3. Garantir isolamento
Procure por restos da agência (nome, paleta mint, planos, comparativo, WhatsApp da
agência) e de qualquer outro cliente. Liste e remova o que for indevido.

## 4. Conferir a publicação
- `astro.config.mjs` segue o padrão de `.claude/rules/github-pages.md` (sem usuário ou
  repositório fixos).
- `.github/workflows/deploy.yml` existe.
- Nada de segredo ou dado pessoal de terceiros no repositório (ele será público).

## 5. Verificar e registrar
- `npm run build` e mostre o resultado.
- Atualize `STATUS.md`: fase 2, plano, combinado, pendências.
- Atualize o bloco "Projeto" do `CLAUDE.md` para fase 2.

## 6. Entregar (até 10 linhas)
O que mudou, o que ainda está `[PREENCHER]`, o que não foi verificado e os passos de
publicação, para EU executar: criar repositório vazio no GitHub, push, Pages com fonte
"GitHub Actions" (veja `docs/publicar-no-github-pages.md` na pasta de produção).
NÃO faça push nem publique.
