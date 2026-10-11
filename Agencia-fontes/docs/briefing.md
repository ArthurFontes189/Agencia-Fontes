# BRIEFING AGÊNCIA FONTES

## 1. O NEGÓCIO
Agência Fontes, empresa de família de Brasília, DF. "Fontes" é o sobrenome. Dois
primos sócios: um desenvolve sites e sistemas; o outro cuida de marketing, conteúdo,
tráfego pago e vendas presenciais. Mini agência de presença digital para pequenos
negócios locais (comércios, clínicas, estética, restaurantes, oficinas).
Modelo "demo primeiro": montamos o site com a cara do negócio ANTES de vender, o
primo apresenta pessoalmente no celular, e só se o cliente aceitar seguimos. Preço
baixo na entrada (low ticket); o dinheiro estável está na recorrência.
Escada de valor: site -> Google Meu Negócio -> conteúdo (fotos, vídeos, posts) ->
gestão de anúncios -> sistema de gestão (agenda, clientes, painel).
Público: donos de pequenos negócios em Brasília, 30 a 60 anos, pouco técnicos, usam
celular, desconfiam de "empresa de site" e acham que dá para fazer sozinho em
construtores. Diferenciais (sem atacar concorrentes): a gente faz tudo; você vê pronto
antes de pagar; atendimento pessoal e local; suporte depois da entrega; planos que
crescem com o negócio.
Idioma de todo conteúdo: português do Brasil, simples, sem jargão.

## 2. DECISÕES JÁ TOMADAS (não reabrir)
- Stack: Astro + TypeScript estrito, saída estática, sem backend e sem banco, sem
  frameworks de UI. Versões EXATAS no package.json (sem ^ nem ~), versão estável do
  Astro. Dependências: apenas astro e typescript (e @astrojs/check só se necessário).
- Um repositório git por projeto. O site-base (template), o site da agência e cada
  cliente são repositórios separados, criados a partir do template. A pasta
  agencia-fontes em si NÃO é repositório.
- Hospedagem: GitHub Pages via GitHub Actions, repositório público, para a agência e
  para os clientes. Tudo no repositório é público: sem segredos, sem dados pessoais de
  terceiros.
- Fases de cada cliente: 1 Demo (local, nunca publicada com a marca do cliente) ->
  2 Site final (após aceite, publicado) -> 3 Upgrades (fora do código) -> 4 Sistema
  (projeto separado com banco, fora do template; NÃO construir agora).
- O site da agência segue o fluxo de publicação dos clientes, mas nasce com
  demo: false e sem noindex.
- O projeto antigo (outra pasta e um repositório no GitHub) fica INTOCADO. Não apague,
  não mova, não reaproveite código. Tudo aqui é refeito do zero.
- NÃO criar agora: presets de nicho (clínica, comércio, estética, restaurante), sistema
  de gestão, Next.js.

## 3. ESTRUTURA ALVO
agencia-fontes/
  _kit/                   material de instalação (já existe; não editar)
  templates/site-base/    repositório git próprio: o template
  agencia/                site da Agência Fontes (repositório próprio, criado do template)
  clientes/               um repositório por cliente (vazio por enquanto)
  docs/                   fluxo, checklists, publicação, briefing

## 4. REQUISITOS DO TEMPLATE (templates/site-base)
1. Página montada por dados. Componentes de seção reutilizáveis: hero, problema e
   solução, serviços, exemplos por nicho, planos, como funciona, comparativo, FAQ,
   sobre, galeria, horários e localização, contato, rodapé. O arquivo
   src/data/page.ts (tipado) define quais seções aparecem e em que ordem.
   Componentes NÃO contêm texto de conteúdo.
2. Conteúdo em src/data/*.ts com interfaces. Identidade em src/styles/tokens.css
   (cores, fontes, espaçamentos). Trocar de cliente = trocar dados e tokens.
3. Tokens padrão do template: identidade neutra e sóbria (grafite e um azul),
   contraste AA. A identidade da agência vive em presets/agencia (tokens.css e dados).
   Aplicar um preset = copiar seus arquivos sobre src/.
4. src/data/site.ts: identidade, contatos, flag demo (boolean), função
   whatsappLink(texto) que monta https://wa.me/55{numero}?text={texto codificado}.
   Com demo: true aparece a faixa "Modelo de demonstração criado pela Agência Fontes"
   e um botão fixo "Quero um site assim" que abre o WhatsApp da AGÊNCIA; e as páginas
   saem com noindex.
5. astro.config.mjs calcula site e base sozinho (padrão em
   .claude/rules/github-pages.md do kit): lê GITHUB_REPOSITORY no Actions; localmente
   base é "/"; variável opcional SITE_URL para domínio próprio. Não escrever usuário
   nem nome de repositório fixos. Links e arquivos estáticos usam
   import.meta.env.BASE_URL.
6. JavaScript no cliente só para: menu mobile, accordion do FAQ, formulário que abre o
   WhatsApp e animações de entrada ao rolar (IntersectionObserver).
7. Formulário (nome, negócio, tipo de negócio, telefone) NÃO envia a servidor:
   valida e abre o WhatsApp com os dados. Checkbox obrigatório de consentimento ("Concordo
   em usar estes dados apenas para contato sobre meu pedido") e link para /privacidade.
8. Página /privacidade: texto simples (dados usados só para contato, não vendidos nem
   compartilhados, como pedir exclusão, contato do responsável [PREENCHER]).
   Comentário no código: "revisar com profissional antes de publicar".
9. Qualidade: mobile-first (360, 768 e 1280px sem rolagem horizontal), alvos de toque
   de 44px, contraste AA, teclado e foco visível, um único h1, aria no menu e no
   accordion, prefers-reduced-motion desliga animações, title, meta description,
   Open Graph, favicon, lang="pt-BR", JSON-LD (ProfessionalService) sem endereço de rua.
10. STATUS.md por projeto (fase, combinado, pendências) já vem no kit.

## 5. SITE DA AGÊNCIA (presets/agencia e pasta agencia/)

Identidade visual: tech, profissional, nada de cara de template barato.
Paleta (CSS custom properties em tokens.css; usar SEMPRE tokens, nunca hex solto):
  --mint-50:#EFFAF9; --mint-100:#D9F3F1; --mint-200:#B6E8E5;
  --mint-300:#7ECECA (COR-BASE DA MARCA); --mint-400:#4FBAB6; --mint-500:#2F9A98;
  --mint-600:#247C7C; --mint-700:#1E6264; --mint-900:#0F3236;
  --ink-950:#07151A; --ink-900:#0B1F26; --ink-800:#112B33; --ink-700:#1B3B45;
  --text-on-dark:#E6F2F3; --muted-on-dark:#8FB0B6; --text-on-light:#0B1F26;
  --muted-on-light:#4C656B; --surface-light:#F4FAF9; --border-light:#D5E6E5.
Uso: mint-300 é DESTAQUE sobre fundo escuro (botões primários, ícones, bordas,
brilhos). NUNCA como texto sobre fundo claro; ali, texto escuro e botões em
mint-600/700. Botão primário em fundo escuro: fundo mint-300, texto ink-950, hover
mint-400. Gradientes só na família mint/ink. Proibido roxo, rosa, azul-elétrico.
Tipografia (Google Fonts, display=swap, máx. 3): Space Grotesk (títulos), Inter
(corpo), JetBrains Mono (rótulos pequenos em caixa-alta, com parcimônia).
Seções alternam escuro e claro: hero, exemplos, planos, contato e rodapé escuros.
Fundo do hero e das seções escuras com grade sutil em CSS (linhas mint a 6-8%) e brilho
radial discreto. Cards com borda de 1px, cantos de 14-16px, hover com leve elevação.
Ícones SVG inline em linha (traço 1.5px). Selos mono ("MODELO DE DEMONSTRAÇÃO", "01 /
02"), bolinha de status pulsando devagar. Sem banco de imagens, sem excesso de emoji.
Logo provisório em SVG: símbolo geométrico original (três arcos ascendentes ou jorro
estilizado) + wordmark "Agência Fontes" ("Agência" médio, "Fontes" forte em mint-300 no
escuro). Comentar no código que pode ser trocado por arquivo próprio.

Conteúdo, na ordem das seções:
1. Header fixo (escuro, blur ao rolar): logo, links Serviços, Exemplos, Planos, Como
   funciona, Dúvidas, Contato, botão "Chamar no WhatsApp"; hambúrguer no celular.
   Botão flutuante de WhatsApp em todas as telas ("Olá! Vim pelo site e gostaria de
   saber mais.").
2. Hero. Selo mono com status: "ATENDENDO BRASÍLIA, DF". Título: "Site, conteúdo e
   anúncios para o seu negócio ser encontrado e vender mais" (palavra "encontrado" em
   mint-300). Subtítulo: "A gente monta o seu site antes de você pagar. Você vê pronto
   e decide." Botões: "Ver exemplos" e "Chamar no WhatsApp". Selos: "Você vê antes de
   pagar", "Atendimento pessoal", "Suporte depois da entrega". Visual: janela de
   navegador e celular sobrepostos em CSS/SVG, mostrando a interface de um negócio
   fictício, com 2-3 cartões flutuantes com rótulos genéricos ("Google Meu Negócio",
   "Novo agendamento", "Orçamento pelo WhatsApp"), SEM números nem métricas.
3. Problema e solução (claro), 3 cards: "Seu negócio não aparece no Google" -> site +
   Google Meu Negócio; "Só tem Instagram e perde clientes" -> página própria que
   transforma visita em contato; "Agenda e pedidos bagunçados no WhatsApp" -> sistema
   simples de organização.
4. Serviços (claro), 5 cards em grade assimétrica (site em destaque): Site profissional;
   Google Meu Negócio e aparecer nas buscas; Conteúdo (edição de fotos, vídeos e posts);
   Gestão de anúncios pagos; Sistema de gestão (agenda, clientes, painel). Cada um com
   ícone, título, 1 frase e "para quem é".
5. Exemplos por nicho (escuro, seção de maior destaque). Título: "Veja como o seu site
   pode ficar". Cards com mockup em CSS, cada um com composição própria: Clínica,
   Comércio, Estética, Restaurante. Cada um: 2 recursos, botão "Ver exemplo" (href "#")
   e selo "MODELO DE DEMONSTRAÇÃO".
6. Planos (escuro), 3 cards, o do meio "Mais escolhido" com borda e brilho mint-300.
   Essencial: site de 1 página, botão de WhatsApp, hospedagem e domínio [PREENCHER:
   incluso ou não]. Profissional: Essencial + Google Meu Negócio + [PREENCHER: N]
   posts por mês + ajustes mensais. Completo: Profissional + gestão de anúncios (verba
   paga pelo cliente direto à plataforma) + relatório mensal simples. Preço de cada
   um: [PREENCHER]. Botão "Quero este plano" abre o WhatsApp com o nome do plano.
   Abaixo, "Adicionais": sistema de gestão, pacote de vídeos, páginas extras, loja
   virtual, "a partir de [PREENCHER]". Frase: "Não sabe qual escolher? Chame no
   WhatsApp."
7. Como funciona (claro), 4 passos numerados em linha do tempo: 1) Conversa rápida;
   2) Montamos seu site e mostramos pronto; 3) Você aprova e ajustamos; 4) Publicamos e
   acompanhamos. Prazo [PREENCHER: N dias]. "Sem compromisso até você ver o resultado."
8. Fazer sozinho x com a gente (claro): tabela curta e respeitosa, 5 linhas (seu tempo,
   resultado, suporte, aparecer no Google, evolução), coluna "Com a Agência Fontes"
   destacada.
9. FAQ (claro, accordion): Quanto tempo leva? | O que está incluso na mensalidade? | O
   site é meu? [PREENCHER] | Posso cancelar quando quiser? [PREENCHER] | Vocês garantem
   vendas com anúncios? (Não: fazemos a gestão; o resultado depende de oferta, verba e
   mercado.) | Preciso ter fotos e textos prontos? | Quem paga hospedagem e domínio?
   [PREENCHER]
10. Quem somos (claro). Textos em src/data. Selo mono "EMPRESA DE FAMÍLIA · BRASÍLIA, DF".
    Título: "Dois primos, um sobrenome e o mesmo jeito de trabalhar".
    P1: "A Agência Fontes é uma empresa de família de Brasília. Somos dois primos que
    dividem o sobrenome e o trabalho: um cuida da parte técnica, com sites e sistemas; o
    outro cuida do marketing, do conteúdo e de conversar com você."
    P2: "Tem muito negócio bom em Brasília que merece ser encontrado: a clínica do
    bairro, a loja de rua, o restaurante que todo mundo indica. Por isso criamos um
    jeito simples de trabalhar: em vez de só prometer, a gente mostra. Montamos o site
    com a cara do seu negócio, apresentamos pessoalmente e, se você gostar, seguimos
    juntos."
    P3: "Como o sobrenome está no nome da empresa, cuidamos do seu site como cuidamos do
    nosso nome. E você sempre fala direto com quem faz."
    Parágrafo opcional: só aparece se o campo existir e não estiver vazio; deixar vazio.
    Chips: "Você fala com quem faz" | "Você vê antes de pagar" | "Empresa de família, de
    Brasília".
    Perfil 1: nome [PREENCHER], "Desenvolvimento · sites e sistemas", frase: "Cuido do site
    do primeiro rascunho até ele estar no ar, e de mantê-lo funcionando depois."
    Perfil 2: nome [PREENCHER], "Marketing e vendas · conteúdo e anúncios", frase: "Cuido do
    conteúdo, dos anúncios e de apresentar o projeto pessoalmente para você."
    Fotos: placeholder elegante (iniciais em círculo), comentário TROCAR.
    Bloco "Por que Fontes?": "Fontes é o nosso sobrenome. E fonte também é origem, o ponto
    de onde tudo começa: é onde queremos estar no começo da presença digital do seu
    negócio."
11. Contato (escuro): botão grande de WhatsApp, formulário (requisito 7), Instagram
    [PREENCHER], e-mail [PREENCHER], "Brasília, DF".
12. Rodapé (escuro): logo, "Brasília, DF", CNPJ [PREENCHER], links, /privacidade.
SEO: title "Agência Fontes | Sites, conteúdo e anúncios para pequenos negócios em
Brasília"; theme-color #07151A; JSON-LD com addressLocality "Brasília", addressRegion
"DF", addressCountry "BR", areaServed "Brasília, DF", SEM endereço de rua.

Dados pendentes (usar [PREENCHER: ...], nunca inventar): slogan, WhatsApp, e-mail,
Instagram, CNPJ, nomes dos dois primos, preços, número de posts por mês, prazo, e as
respostas do FAQ sobre propriedade do site, cancelamento e hospedagem/domínio.

## 6. O KIT (em _kit/)
_kit/workspace/ vai para a raiz agencia-fontes (CLAUDE.md, comando /novo-cliente, docs/,
clientes/). _kit/template/ vai para templates/site-base (CLAUDE.md, regras em
.claude/rules, hook de build antes do commit, comandos /aprovar-demo e /revisar-site,
deploy.yml, STATUS.md, .gitignore). Leia _kit/LEIA-ME.md. O kit define regras e
organização; NÃO contém o código do site, que você cria nas etapas abaixo.

## 7. REGRAS INEGOCIÁVEIS
- NUNCA inventar depoimentos, avaliações, número de clientes, prêmios, anos de
  experiência, data de fundação, resultados, métricas, preços, horários, telefone, CNPJ ou
  endereço. Falta dado: [PREENCHER: descrição] no conteúdo e comentário TROCAR no código.
- NUNCA prometer ranking no Google nem aumento de vendas.
- NÃO fazer push, publicar, criar repositório remoto, criar conta ou contratar nada.
- NÃO adicionar bibliotecas, páginas ou funcionalidades além do pedido.
- NÃO declarar que algo funciona sem ter rodado o comando que prova. Mostre a saída.
- Se um comando falhar: corrija uma vez; se falhar de novo, pare e me mostre o erro.
- Economia: etapas curtas, leia só os arquivos necessários, edite dados e tokens em vez
  de reescrever componentes. Antes de editar mais de 1 arquivo, diga o plano em até 5
  linhas.

## 8. ETAPAS (só quando eu mandar; uma por vez; PARE ao fim de cada uma)
A. Esqueleto do template: package.json (versões exatas), tsconfig estrito,
   astro.config.mjs no padrão do kit, layout base, tokens padrão, git init em
   templates/site-base (sem commit). npm install e npm run build passando.
B. Componentes de seção, page.ts, dados tipados, whatsappLink, faixa de demo + noindex,
   formulário e /privacidade. npm run build passando.
C. Conferir a integração do kit no template: placeholders do CLAUDE.md, STATUS.md,
   teste do hook (build falhando bloqueia o commit; build ok libera), regras batendo
   com o código, checklist de qualidade (requisito 9). Corrigir o que falhar.
D. Preset da agência (presets/agencia) e criação de agencia/ a partir do template
   (cópia sem .git, node_modules, dist, .astro; git init; demo: false; conteúdo da
   seção 5). npm run build passando.
E. Conferir docs/ e READMEs, relatório final e os passos que EU executo para publicar
   (criar repositório vazio, push, Pages com fonte "GitHub Actions").
Ao fim de cada etapa: o que foi feito (3 linhas), saída do build, o que NÃO foi
verificado, e a pergunta "posso seguir para a etapa X?".
