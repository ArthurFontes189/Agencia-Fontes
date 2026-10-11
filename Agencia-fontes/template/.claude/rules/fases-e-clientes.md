# Fases, demos e clientes

## Fases
1. Demo: cópia do template com a cara do negócio. Local. `demo: true` em src/data/site.ts.
2. Site final: após aceite. `demo: false`, conteúdo real, publicação no GitHub Pages.
3. Upgrades: Google Meu Negócio, conteúdo, anúncios. Quase tudo fora do código.
4. Sistema: projeto separado, com banco e login. Não entra neste template.
Registrar a fase atual e o histórico em STATUS.md.

## Demo (fase 1)
- Faixa "Modelo de demonstração criado pela Agência Fontes" e botão "Quero um site assim"
  que abre o WhatsApp da AGÊNCIA. Controlados pelo campo `demo`.
- Nome, logo e fotos do negócio só aparecem localmente ou em link privado. Nunca
  publicar a demo com a marca do cliente sem autorização dele.
- Dado que não se sabe vira `[PREENCHER]` ou sai da página. Nada de horário ou preço
  "provável".
- Páginas da demo com noindex.

## Depois do aceite (fase 2)
- Rodar /aprovar-demo: remove faixa e botão, zera `[PREENCHER]` com dados reais.
- Confirmar por escrito: plano, o que está incluso, prazo, limite de ajustes, quem paga
  hospedagem e domínio, de quem é o site.
- Política de privacidade com responsável preenchido e revisão profissional.
- O repositório publicado é público: sem segredos, sem dados pessoais de terceiros.

## Catálogo de planos (da agência)
- Essencial: site de uma página + botão de WhatsApp.
- Profissional: Essencial + Google Meu Negócio + posts mensais + ajustes mensais.
- Completo: Profissional + gestão de anúncios + relatório mensal simples.
- Adicionais: sistema de gestão, pacote de vídeos, páginas extras, loja virtual.
- Pedido fora do catálogo é decidido pelos sócios. Não prometer.

## Isolamento
- Um cliente por repositório. Nada de outro cliente ou da agência em site de cliente.
