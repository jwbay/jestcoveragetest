const crypto = require('crypto');
const fs = require('fs');
const tsc = require('typescript');
const { compilerOptions } = require('./tsconfig.json');

const thisFile = fs.readFileSync(__filename, 'utf8');

module.exports = {
	process(src, file) {
		const { outputText, sourceMapText } = tsc.transpileModule(
			src,
			{
				compilerOptions: compilerOptions,
				fileName: file,
				reportDiagnostics: false,
			}
		);

		return {
			code: outputText,
			map: sourceMapText
		};
	},
	getCacheKey: (src, file, configString) =>
		crypto.createHash('md5')
			.update(thisFile)
			.update(src + file + configString)
			.digest('hex')
};
