// Hook PreToolUse (Bash): antes de um `git commit`, roda `npm run build`.
// Se o build falhar, o commit é bloqueado (exit 2) e o erro volta para o Claude corrigir.
// Só Node.js (sem jq nem bash): funciona no Windows, Mac e Linux.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8"));
} catch {
  process.exit(0); // entrada inesperada: não bloquear
}

const command = String(input?.tool_input?.command ?? "");
if (!/\bgit\s+commit\b/.test(command)) process.exit(0);

const cwd = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
if (!existsSync(join(cwd, "package.json"))) process.exit(0); // não é um projeto Node

const result = spawnSync("npm", ["run", "build"], {
  cwd,
  shell: true,
  encoding: "utf8",
  timeout: 110_000,
});

if (result.status === 0) process.exit(0);

const saida = `${result.stdout ?? ""}\n${result.stderr ?? ""}`.trim().split("\n").slice(-40).join("\n");
console.error(
  "Commit bloqueado: `npm run build` falhou. Corrija os erros abaixo e tente de novo.\n\n" + saida
);
process.exit(2);
