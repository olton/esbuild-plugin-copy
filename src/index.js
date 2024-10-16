import { mkdirSync, copyFileSync } from "fs";
import { resolve, basename } from "path";
import {globSync} from "glob";

const defaults = {
    files: "**/*",
    skip: [],
    dest: "."
}

export default options => {
    const o = {...defaults, ...options};

    return {
        name: 'copy',
        setup(build) {
            build.onEnd(() => {
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
                } catch (error) {
                    console.error("Error copying files:", error);
                }
            });
        }
    }
}