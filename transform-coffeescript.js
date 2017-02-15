const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const coffee = require('coffee-script');

const thisFile = fs.readFileSync(__filename, 'utf8');

module.exports = {
    process(src, file, config, transformOptions) {
        const result = coffee.compile(src, {
            inlineMap: true,
            generatedFile: path.basename(file),
            sourceFiles: [path.basename(file)]
        });

        return result;
    },
    getCacheKey: (src, file, configString) =>
        crypto.createHash('md5')
            .update(thisFile)
            .update(src + file + configString)
            .digest('hex')
}
