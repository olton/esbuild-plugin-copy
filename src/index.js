import { mkdirSync, copyFileSync } from "fs";
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
                        const filename = file.split('/').pop();
                        if (filename) {
                            copyFileSync(file, dest + filename);
                        }
                    }
                } catch (error) {
                    console.error("Error copying files:", error);
                }
            });
        }
    }
}