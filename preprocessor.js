const crypto = require('crypto');
const fs = require('fs');
const nodepath = require('path');
const tsc = require('typescript');
const { compilerOptions } = require('./tsconfig.json');

const thisFile = fs.readFileSync(__filename, 'utf8');

module.exports = {
	process(src, path) {
		const { outputText, sourceMapText } = tsc.transpileModule(
			src,
			{
				compilerOptions: compilerOptions,
				fileName: path,
				reportDiagnostics: false,
			}
		);

		return {
			content: outputText,
			sourceMap: JSON.parse(sourceMapText)
		};
	},
	getCacheKey: (src, file, configString) =>
		crypto.createHash('md5')
			.update(thisFile)
			.update(src + file + configString)
			.digest('hex')
};
