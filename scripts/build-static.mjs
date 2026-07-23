import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");

await mkdir(resolve(dist, "client"), { recursive: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await cp(resolve(root, "public", "index.html"), resolve(dist, "client", "index.html"));
await cp(resolve(root, "worker", "static-site.js"), resolve(dist, "server", "index.js"));
