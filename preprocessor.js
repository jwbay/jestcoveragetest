const crypto = require('crypto');
const fs = require('fs');
const nodepath = require('path');
const tsc = require('typescript');
const instrument = require('istanbul-lib-instrument');

const instrumenter = instrument.createInstrumenter();
const key = fs.statSync(__filename).mtime.getTime().toString();

module.exports = {
	process(src, path) {
		if (path.endsWith('.lock')) {
			return `module.exports = "${path}"`;
		}
		if (path.endsWith('.ts') || path.endsWith('.tsx')) {
			const { outputText } = tsc.transpileModule(
				src,
				{
					compilerOptions: {
						module: tsc.ModuleKind.CommonJS,
						jsx: tsc.JsxEmit.React,
						importHelpers: true,
						sourceMap: true,
						inlineSourceMap: true,
						inlineSources: true
					},
					fileName: path,
					reportDiagnostics: false,
				}
			);
			return outputText;
		}
		return src;
	},
	getCacheKey: (src, file, configString) =>
		crypto.createHash('md5')
			.update(key)
			.update(src + file + configString)
			.digest('hex')
};