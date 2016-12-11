const crypto = require('crypto');
const fs = require("fs");
const nodepath = require("path");
const tsc = require("typescript");

module.exports = {
	process(src, path) {
		if (path.endsWith('.ts') || path.endsWith('.tsx')) {
			src = tsc.transpile(
				src,
				{
					module: tsc.ModuleKind.CommonJS,
					jsx: tsc.JsxEmit.React,
					importHelpers: true,
					sourceMap: true,
					inlineSourceMap: true,
					inlineSources: true
				},
				path,
				[]
			);
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
