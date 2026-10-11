# Kit v2: Agência Fontes (pasta de produção + template)

## Duas partes
| Pasta do zip | Vai para | O que é |
|---|---|---|
| `workspace/` | raiz `agencia-fontes/` | CLAUDE.md da pasta, comando `/novo-cliente`, `docs/`, `clientes/` |
| `template/` | `templates/site-base/` | CLAUDE.md, regras, hook, comandos `/aprovar-demo` e `/revisar-site`, `deploy.yml`, `STATUS.md`, `.gitignore` |

Pastas que começam com ponto (`.claude`, `.github`) ficam ocultas em alguns programas.
No VS Code aparecem normalmente.

## Como usar
1. Crie `agencia-fontes/_kit/` e extraia este zip dentro dela.
2. Abra o terminal em `agencia-fontes` e rode `claude`.
3. Cole o prompt de montagem que recebeu. O Claude Code lê `_kit/` e instala cada
   parte no lugar certo (`_kit/workspace/*` na raiz; `_kit/template/*` em
   `templates/site-base/`), criando o código do template.
4. Confira com `/context`, `/hooks` e `/skills`.

## O que NÃO está aqui
O código do site (componentes, páginas, tokens). Ele é criado pelo Claude Code seguindo o
prompt de montagem. O kit só define as regras, os comandos e a organização.

## Comandos
- Na raiz `agencia-fontes`: `/novo-cliente [negócio] [nicho]`
- Dentro de um projeto: `/aprovar-demo` (após o aceite) e `/revisar-site`

## Manutenção
- Mantenha cada CLAUDE.md abaixo de 200 linhas.
- Errou duas vezes a mesma coisa? Peça: "adicione isso ao CLAUDE.md".
- Rode `/doctor prompt-audit` de vez em quando para achar regras antigas ou conflitantes.
- Melhoria no template não chega sozinha aos clientes já criados: cada um é uma cópia.
