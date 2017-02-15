const crypto = require('crypto');
const fs = require('fs');
const buble = require('buble');

const thisFile = fs.readFileSync(__filename, 'utf8');

module.exports = {
    process(src, file, config, transformOptions) {
        const { code, map } = buble.transform(src, {
            file,
            source: file,
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
