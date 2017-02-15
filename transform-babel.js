const crypto = require('crypto');
const fs = require('fs');
const babel = require('babel-core');

const thisFile = fs.readFileSync(__filename, 'utf8');

module.exports = {
    process(src, path, config, transformOptions) {
        const { code, map } = babel.transform(src, {
            filename: path,
            sourceMaps: true,
            presets: ['latest', 'react'],
        });

        return {
            code,
            map,
        };
    },
    getCacheKey: (src, file, configString) =>
        crypto.createHash('md5')
            .update(thisFile)
            .update(src + file + configString)
            .digest('hex')
}
