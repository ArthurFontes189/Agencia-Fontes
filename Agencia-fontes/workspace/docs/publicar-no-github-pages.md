# Publicar um cliente no GitHub Pages (fase 2)

Faça isto só depois do aceite e do `/aprovar-demo`. O repositório de Pages gratuito é
público: tudo que está nele é visível.

1. No GitHub, crie um repositório VAZIO (sem README), público. Sugestão de nome: o slug
   do cliente. O nome entra no endereço: `usuario.github.io/<nome-do-repo>/`.
2. No terminal, dentro de `clientes/<slug>`:
   ```
   git add .
   git commit -m "Site inicial"
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```
   O hook roda `npm run build` antes do commit; se falhar, corrija e repita.
3. No GitHub: Settings > Pages > Source: **GitHub Actions**.
4. Aba **Actions**: aguarde "Deploy to GitHub Pages" ficar verde (check).
5. Abra o endereço e confira estilo, links e formulário.

## Domínio próprio (opcional)
1. Registre o domínio (registro.br para `.com.br`).
2. Configure o DNS conforme a documentação do GitHub Pages.
3. Em Settings > Pages > Custom domain, informe o domínio.
4. Em Settings > Secrets and variables > Actions > Variables, crie `SITE_URL` com
   `https://seudominio.com.br`. O site passa a ser gerado sem o prefixo do repositório.

## Se abrir sem estilo ou com links quebrados
Quase sempre é o `base`. Confira o `astro.config.mjs` e a regra
`.claude/rules/github-pages.md`.
