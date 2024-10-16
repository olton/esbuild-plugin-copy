# esbuild-plugin-copy

Esbuild plugin to copy files after build

---

[![npm](https://img.shields.io/npm/v/@olton/esbuild-plugin-copy)](https://www.npmjs.com/package/@olton/esbuild-plugin-copy)
![GitHub](https://img.shields.io/github/license/olton/esbuild-plugin-copy)

---

## Installation
```bash
npm i -D @olton/esbuild-plugin-copy
```

## Usage
```js
import { build } from 'esbuild';
import copy from "@olton/esbuild-plugin-copy"

await build({
  entryPoints: ...,
  bundle: true,
  outfile: ...,
  plugins: [copy({
      files: ['assets/**/*.jpg'],
      dest: 'dist/',
      skip: ['assets/no-copy.jpg'],
  })],
});
```

---

## License
This software is released under the MIT License.

---

Copyright (c) 2024 by Serhii Pimenov