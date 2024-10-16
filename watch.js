import { context } from 'esbuild';
import progress from '@olton/esbuild-plugin-progress';

const production = process.env.MODE === 'production';

let ctx = await context({
    entryPoints: ['./src/index.js'],
    outfile: './dist/index.js',
    bundle: true,
    platform: 'node',
    target: 'esnext',
    format: 'esm',
    minify: false,
    sourcemap: false,
    plugins: [
        progress()
    ]
})

await ctx.watch()