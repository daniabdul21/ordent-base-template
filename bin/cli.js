#!/usr/bin/env node
//
// import path from "node:path";
// import minimist from "minimist";
// import { Plop, run } from "plop";
//
// const args = process.argv.slice(2);
// const argv = minimist(args);
//
// import { dirname } from "node:path";
// import { fileURLToPath } from "node:url";
//
// //
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const rootPath = path.resolve(__dirname, '..');
// //
// Plop.prepare({
//   cwd: argv.cwd,
//   configPath: path.join(rootPath, 'plopfile.js'),
//   preload: argv.preload || [],
//   completion: argv.completion
// }, env => Plop.execute(env, run));


import path from "node:path";
import minimist from "minimist";
// import { Container, camelCase, constantCase, CONFIG_KEY } from "@deboxsoft/module-core";
import { Plop, run } from "plop";
import { fileURLToPath } from "node:url";
import { config as dotenv } from "dotenv";

const args = process.argv.slice(2);
const argv = minimist(args);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv();
Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.join(__dirname, "..", "plopfile.js"),
    preload: argv.preload || [],
    completion: argv.completion
  },
  (env) =>
    Plop.execute(env, (env) => {
      env.isMonorepo = process.env.IS_MONOREPO === "true" || false;
      // const config = () => ({
      //   get: (key, defaultValue) => env[camelCase(key)] || process.env[constantCase(key)] || defaultValue,
      //   getAll: () => Object.assign(env, process.env)
      // });
      // Container.set(CONFIG_KEY, config());
      const opts = {
        ...env
      };
      return run(opts, undefined, true);
    })
);
