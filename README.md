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

## Options

- `files` - files to copy, default `**/*`, can be string or array, you can use a glob pattern
- `skip` - list files to skip, default `[]`, can be string or array, you can use glob patter
- `dest` - destination folder, default `./`
- `text` - spinner text, default `Copying files...`
- `spinnerColor` - spinner color, default `cyan`
- `spinner` - spinner type, default `dots`
- `failText` - fail text, default `Copy failed with %s errors.`
- `succeedText` - success text, default `Copy process completed in %s ms!`

---

## License
This software is released under the MIT License.

---

Copyright (c) 2024 by Serhii Pimenov