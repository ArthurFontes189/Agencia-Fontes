# Publicar o Site da Agência Fontes

Passo a passo para colocar o site institucional no ar no GitHub Pages.

## Pré-requisitos

- Conta no GitHub (agencia-fontes ou conta pessoal)
- Git instalado
- Pasta `agencia/` pronta (com npm install já feito)

## Checklist de qualidade

Antes de publicar, rodar:

```bash
cd agencia
npm run build
# Deve passar sem erros
# Output: "2 page(s) built"
```

Conferir com `../templates/site-base/QUALIDADE.md`:
- Responsividade
- Contraste AA
- Formulário funciona
- Privacidade preenchida

## Criar repositório no GitHub

1. Acesse https://github.com/new
2. **Repository name:** `agencia-fontes` (ou outro nome)
   - (Será: https://github.com/usuario/agencia-fontes)
3. **Description:** "Site institucional da Agência Fontes"
4. **Public** (importante: público para Pages gratuito)
5. **NÃO** inicializar com README, .gitignore ou license (já existem)
6. Criar repositório

## Push para GitHub

Dentro de `agencia/`:

```bash
# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "Site institucional da Agência Fontes"
# O hook roda `npm run build` — se falhar, corrija e repita

# Adicionar repositório remoto
git remote add origin https://github.com/SEU_USUARIO/agencia-fontes.git

# Enviar para GitHub (branch 'main' ou 'master')
git branch -M main  # Renomear para 'main' se necessário
git push -u origin main

# Agora arquivos estão no GitHub
```

## Configurar GitHub Pages

1. Vá para: https://github.com/SEU_USUARIO/agencia-fontes/settings
2. Abra menu **Pages** (esquerda)
3. **Source:** selecione **GitHub Actions** (não "Deploy from a branch")
4. Aguarde ~2 minutos

## Verificar deploy

1. Vá para: https://github.com/SEU_USUARIO/agencia-fontes/actions
2. Procure **"Deploy to GitHub Pages"**
3. Quando ficar verde ✓, site está no ar
4. Abra: https://seu-usuario.github.io/agencia-fontes/
5. Testar:
   - Estilo carregado (não branco puro)
   - Links funcionam
   - Formulário abre WhatsApp
   - Rodapé carrega

## Domínio próprio (opcional)

Se registrou `agenciafontes.com.br` ou similar:

### 1. Configurar DNS

No painel do registro (registro.br, GoDaddy, etc.):

```
CNAME  www.agenciafontes.com.br  →  seu-usuario.github.io
CNAME  agenciafontes.com.br      →  seu-usuario.github.io
```

(Ou as instruções específicas do seu registrador)

### 2. GitHub Pages — Custom domain

1. Settings > Pages
2. **Custom domain:** `agenciafontes.com.br`
3. Marcar "Enforce HTTPS"
4. Aguardar ~2-5 min

### 3. Variável SITE_URL

Para usar domínio próprio no astro.config.mjs:

1. Settings > **Secrets and variables** > **Actions** > **Variables**
2. Criar `SITE_URL` com valor: `https://agenciafontes.com.br`
3. Fazer novo commit/push (o Actions vai pegar a variável)

Agora site abre em `https://agenciafontes.com.br` sem `/agencia-fontes/` na URL.

## Se abrir sem estilo ou links quebrados

Quase sempre é o `base` do Astro.

**Verificar:**
1. Abra DevTools (F12)
2. Console: há erros?
3. Network: CSS/JS estão 404?
4. Se sim: leia `.claude/rules/github-pages.md` no template

**Se domínio próprio:** SITE_URL pode estar errada. Testar:

```bash
# Localmente: base é /
# GitHub Pages: base é /agencia-fontes/ (sem SITE_URL)
# Domínio próprio: base é / (com SITE_URL)
```

## Atualizar site depois

```bash
cd agencia
# Editar arquivos em src/
npm run build  # Valida
git add .
git commit -m "Atualizar conteúdo da seção X"
git push       # GitHub Actions faz deploy automático
```

## Rollback (desfazer versão)

Se alguma coisa deu errado:

```bash
git log --oneline        # Ver commits
git revert abc123def     # Desfazer um commit (cria novo)
git push                 # GitHub Actions redeploy automático
```

## Troubleshooting

| Problema | Solução |
|---|---|
| Erro no build | Rodar `npm run build` localmente, ver erro, corrigir |
| Actions não roda | Verificar se está em "GitHub Actions" em Settings > Pages |
| Domínio perde SSL | Esperar 5 min e marcar "Enforce HTTPS" novamente |
| CNAME não funciona | Confirmar registrador salvou, aguardar propagação (até 48h) |
| Formulário não abre WA | Verificar WhatsApp em `src/data/site.ts` está preenchido |

---

**Dúvidas?** Ler `.claude/rules/github-pages.md` no template base.

**Última atualização:** 2026-10-11
