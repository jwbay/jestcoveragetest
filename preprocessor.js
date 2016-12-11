const crypto = require('crypto');
const fs = require('fs');
const nodepath = require('path');
const tsc = require('typescript');
const instrument = require('istanbul-lib-instrument');

const instrumenter = instrument.createInstrumenter();

module.exports = {
	canInstrument: true,
	process(src, path) {
		if (path.endsWith('.ts') || path.endsWith('.tsx')) {
			const { outputText, sourceMapText } = tsc.transpileModule(
				src,
				{
					compilerOptions: {
						module: tsc.ModuleKind.CommonJS,
						jsx: tsc.JsxEmit.React,
						importHelpers: true,
						sourceMap: true,
						inlineSources: true
					},
					fileName: path,
					reportDiagnostics: false,
				}
			);

			const sourceMap = JSON.parse(sourceMapText);
			src = instrumenter.instrumentSync(outputText, path, sourceMap);
		}
		return src;
	},
	getCacheKey: createCacheKeyFunction()
};

function createCacheKeyFunction() {
	const key = fs.statSync(__filename).mtime.getTime().toString();
	return (src, file, configString) => crypto.createHash('md5')
		.update(key)
		.update(src + file + configString)
		.digest('hex');
}
