import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

export function stats(config, day_path) {
    let stats;
    try {
        stats = require("../stats.json");
    } catch(e) {
        stats = undefined;
    }

    stats = config.dsa.reduce((acc, ds) => {
        if (!acc[ds]) {
            acc[ds] = 0;
        }
        acc[ds]++;
        return acc;
    }, stats || {});

    fs.writeFileSync(
        path.join(__dirname, "..", "stats.json"),
        JSON.stringify(stats, null, 4));
}

export function package_json(config, day_path) {
    const package_json = require("../package.json");
    package_json.scripts.test = `vitest run ${config.dsa.join(" ")}`;
    package_json.scripts.day = `echo ${day_path}`;

    fs.writeFileSync(
        path.join(__dirname, "..", "package.json"),
        JSON.stringify(package_json, null, 4));
}

export function ts_config(set_to) {
    const ts_config = require("../tsconfig.json");
    ts_config.compilerOptions.paths["@code/*"] = [`${set_to}/*`];

    fs.writeFileSync(
        path.join(__dirname, "..", "tsconfig.json"),
        JSON.stringify(ts_config, null, 4));
}

export function vitest(set_to) {
    const vitest_config_path = path.join(__dirname, "..", "vitest.config.ts");
    const config_content = `import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    clearMocks: true,
    include: ['src/__tests__/**/*.ts'],
  },
  resolve: {
    alias: {
      '@code': resolve(__dirname, './src/${set_to}'),
    },
  },
})`;

    fs.writeFileSync(vitest_config_path, config_content);
}

