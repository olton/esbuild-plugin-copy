import { mkdirSync, copyFileSync } from "fs";
import { resolve, basename } from "path";
import {globSync} from "glob";
import chalk from "chalk";
import ora from "ora";

const defaults = {
    files: "**/*",
    skip: [],
    dest: ".",
    text: "Coping files...",
    failText: "Copy failed with %s errors.",
    succeedText: "Copy process completed in %s ms!",
    spinner: "dots",
    spinnerColor: "cyan"
}

export default options => {
    const o = {...defaults, ...options};

    return {
        name: 'copy',
        setup(build) {
            build.onEnd(() => {
                const startTime = Date.now()
                const spinner = ora({ text: o.text, spinner: o.spinner, color: o.spinnerColor }).start();
                try {
                    const files = globSync(o.files, { ignore: o.skip });
                    let dest = o.dest || '.';
                    if (!dest.endsWith('/')) { dest += '/' }
                    if (dest !== './') mkdirSync(dest, { recursive: true });

                    for (const file of files) {
                        const filename = basename(file)
                        if (filename) {
                            copyFileSync(resolve(file), dest + filename);
                        }
                    }
                    spinner.succeed(`${o.succeedText.replace('%s', chalk["cyanBright"](Date.now() - startTime))}`);
                } catch (error) {
                    spinner.fail(`${o.failText.replace('%s', error.message)}`);
                } finally {
                    spinner.stop();
                }
            });
        }
    }
}