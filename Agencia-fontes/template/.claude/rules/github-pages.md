---
paths:
  - "astro.config.mjs"
  - ".github/**"
  - "src/layouts/**"
---

# GitHub Pages: endereço, base e deploy

## Por que isto importa
Num repositório `usuario/repo`, o site fica em `usuario.github.io/repo/`. Se o `base`
do Astro não for `/repo`, o site abre sem estilo e com links quebrados. O erro mais
comum. Solução: o astro.config.mjs calcula o endereço sozinho, em vez de texto fixo.

## Padrão do astro.config.mjs
```js
import { defineConfig } from "astro/config";

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const siteUrl = process.env.SITE_URL?.trim();
const isUserPage = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  output: "static",
  site: siteUrl || (owner ? `https://${owner.toLowerCase()}.github.io` : undefined),
  base: siteUrl || !repo || isUserPage ? "/" : `/${repo}`,
});
```
- No GitHub Actions, `GITHUB_REPOSITORY` existe sozinho. Localmente é vazio e o `base` é "/".
- Domínio próprio: variável do repositório `SITE_URL` (já repassada pelo deploy.yml).
  Com `SITE_URL`, o `base` fica "/".
- Não escrever usuário ou nome de repositório fixos no config.

## Deploy
- Fonte em Settings > Pages: **GitHub Actions**. Nunca "Deploy from a branch" para Astro.
- Não clicar em "Configure" nos workflows sugeridos (Jekyll, Static HTML).
- A versão das actions pode mudar. Se a execução reclamar, conferir o exemplo atual em
  docs.astro.build/guides/deploy/github.
- Pages gratuito exige repositório público. O que está no repositório é público.

## Verificação
Depois de publicar: abrir o endereço, conferir estilo, links, favicon e formulário. Se
falhar, ler o erro da etapa que ficou vermelha na aba Actions.
