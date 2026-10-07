import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve, dirname } from "node:path";

const packagePath = resolve("node_modules/@opennextjs/cloudflare/package.json");
const adapter = JSON.parse(readFileSync(packagePath, "utf8"));
const bin = typeof adapter.bin === "string" ? adapter.bin : adapter.bin["opennextjs-cloudflare"];
const result = spawnSync(process.execPath, [resolve(dirname(packagePath), bin), "build"], {
  stdio: "inherit",
  env: { ...process.env, APPFOLOR_HOST: "cloudflare", WRANGLER_SEND_METRICS: "false" },
});
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
