const exec = require('child_process').execSync;

[
	'babel-jest',
	'babel-plugin-jest-hoist',
	'babel-preset-jest',
	'eslint-config-fb-strict',
	'jest',
	'jest-changed-files',
	'jest-cli',
	'jest-config',
	'jest-diff',
	'jest-environment-jsdom',
	'jest-environment-node',
	'jest-file-exists',
	'jest-haste-map',
	'jest-jasmine2',
	'jest-matcher-utils',
	'jest-matchers',
	'jest-mock',
	'jest-react-native',
	'jest-repl',
	'jest-resolve',
	'jest-resolve-dependencies',
	'jest-runtime',
	'jest-snapshot',
	'jest-util',
	'pretty-format'
].forEach(package => {
	exec(`yarn link ${package}`);
	console.log(package);
});