# Agência Fontes: pasta de produção

Empresa de família de Brasília, DF (dois primos). Mini agência de presença digital para
pequenos negócios locais. Esta pasta organiza a produção; o código vive em repositórios
separados. Idioma do conteúdo público: português do Brasil.

## Estrutura
- `templates/site-base/`: repositório-base (Astro + TypeScript). Fonte de todos os sites
- `agencia/`: site da própria Agência Fontes, criado a partir do site-base
- `clientes/<slug>/`: um projeto por cliente, cópia do site-base, repositório próprio
- `docs/`: fluxo de trabalho, checklists de demo e de entrega, publicação no GitHub Pages
- `_kit/`: material de instalação do kit (não editar)
Esta pasta NÃO é um repositório git. Cada projeto dentro dela é.

## Fases de cada cliente
1. Demo: cópia local do template com a cara do negócio (1 a 2 dias). Nunca publicada
   com a marca do cliente.
2. Site final: só depois do aceite. Conteúdo real, domínio, publicação no GitHub Pages.
3. Upgrades: Google Meu Negócio, conteúdo, anúncios.
4. Sistema: agenda, clientes, painel. Projeto separado, com banco. Fora do site-base.
A fase atual de cada cliente fica no `STATUS.md` dele. Atualize ao mudar de fase.

## Comandos
- `/novo-cliente [negócio] [nicho]`: cria a demo em `clientes/<slug>` (rodar na raiz)
- Dentro de um projeto: `/aprovar-demo` e `/revisar-site`

## Economia de uso (importante)
- Trabalhe em etapas curtas e espere minha aprovação entre elas
- Demo = copiar o template e trocar dados e tokens. Não regenerar código que já existe
- Leia só os arquivos necessários. Não varra o projeto inteiro sem motivo
- Prefira editar `src/data` e `tokens.css` a reescrever componentes
- Sugira `/clear` quando eu trocar de tarefa

## Regras de negócio (valem em todos os projetos)
- NUNCA inventar depoimentos, avaliações, número de clientes, prêmios, anos de
  experiência, resultados, preços, telefone, CNPJ ou endereço. Falta dado: `[PREENCHER: ...]`
- NUNCA prometer ranking no Google nem aumento de vendas
- Não publicar, fazer push, criar repositório remoto ou conta sem eu pedir
- Nome, logo e fotos de um negócio real só aparecem em demo local ou link privado

## Nunca fazer
- Misturar dois clientes no mesmo repositório
- Levar conteúdo, marca ou planos da agência para o site de um cliente
- Commit de node_modules, dist, .env ou segredos
