# clientes/

Um projeto por cliente, cada um com repositório git próprio.

Fluxo resumido:
1. Na raiz da pasta de produção, rode `claude` e depois `/novo-cliente [negócio] [nicho]`.
2. A demo roda local: `npm run dev -- --host` e abra o endereço de rede no celular.
3. Cliente aceitou? Dentro do projeto, rode `/aprovar-demo`.
4. Antes de publicar ou entregar, rode `/revisar-site`.
5. Publicação: veja `docs/publicar-no-github-pages.md`.

Cada pasta tem `STATUS.md` com a fase atual. Não crie arquivos soltos aqui.
