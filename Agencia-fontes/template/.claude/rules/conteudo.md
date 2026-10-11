---
paths:
  - "src/data/**"
  - "src/pages/**"
  - "src/components/**"
---

# Regras de conteúdo e texto

## Onde fica o conteúdo
- Textos, serviços, FAQ, horários, contatos e a história ficam em src/data/*.ts, tipados.
  Componente só renderiza. Quais seções aparecem: src/data/page.ts.
- Link de WhatsApp sempre via whatsappLink() de src/data/site.ts.

## Tom
- Português do Brasil, simples e direto, sem jargão. Termo técnico: explicar em uma frase.
- Frases curtas, um benefício concreto por frase, sem exagero.
- O texto fala com o cliente do negócio (quem vai comprar do dono), não com outra agência.

## Proibido inventar
- Depoimentos, avaliações, número de clientes, prêmios, anos de experiência, data de
  fundação, resultados, métricas, logos de clientes.
- Preço, horário, endereço, telefone, e-mail, Instagram, CNPJ: se não foi informado,
  escrever `[PREENCHER: o que falta]` ou retirar a informação da página.
- Mockups visuais usam rótulos genéricos, sem número ou gráfico que pareça resultado real.

## Promessas
- Não prometer ranking no Google nem aumento de vendas.
- Tráfego pago: fazemos a gestão; o resultado depende de oferta, verba e mercado. A
  verba é paga pelo cliente direto à plataforma.
- Propriedade do site, cancelamento e hospedagem são decisões dos sócios: manter
  `[PREENCHER]` até serem definidas.

## Site da agência (preset agencia)
- Só afirmar o que é fato informado: empresa de família, dois primos, sobrenome Fontes,
  Brasília DF, divisão de funções, método de mostrar antes de vender.
- Detalhe pessoal ou de história fica em campo opcional que só aparece se preenchido.
