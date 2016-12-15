const mkdir = require('mkdirp');
const rimraf = require('rimraf');
const fs = require('fs');
const spawn = require('cross-spawn');

const count = parseInt(process.argv[2]);
const runs = 5;
rimraf.sync('src/perf');
mkdir.sync('src/perf');
console.log('Cleaned files, creating ' + count);
const content = fs.readFileSync('src/Link.tsx', 'utf8').toString();
const testContent = fs.readFileSync('src/Link.test.tsx', 'utf8').toString();
for (var index = 0; index < count; index++) {
    const thisTestContent = testContent.replace(`const which = '';`, `const which = ${index};`);
    fs.writeFileSync(`src/perf/Link${index}.tsx`, content, { encoding: 'utf8'});
    fs.writeFileSync(`src/perf/Link${index}.test.tsx`, thisTestContent, { encoding: 'utf8'});
}

console.log('Warming up');
spawn.sync('yarn', ['perf'], { stdio: 'ignore' });

const results = [];
for (let i = 0; i < runs; i++) {
    results[i] = NaN;
}

results.reduce((last, next, index, arr) => {
    return last.then(result => {
        arr[index] = result;
        return runNext();
    });
}, runNext()).then(() => {
    rimraf.sync('src/perf');
    console.log('\n\nResults:');
    console.log(results);
    console.log('\nAverage Total:');
    console.log((results.reduce((last, next) => last + next.total, 0) / results.length).toFixed(2) + 's');
    console.log('\nAverage Coverage:');
    console.log((results.reduce((last, next) => last + next.coverage, 0) / results.length).toFixed(2) + 's');
}, err => {
    console.error(err.reason || err.stack);
    process.exit(1);
});

function runNext() {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(run());
        }, 500);
    });
}

function run() {
    return new Promise((resolve, reject) => {
        let stdout = '';
        let stderr = '';
        const proc = spawn('yarn', ['perf'], { stdio: 'pipe', encoding: 'utf8' });
        proc.stdout.on('data', data => {
            stdout += data;
            process.stdout.write(data);
        });
        proc.stderr.on('data', data => {
            stderr += data;
            process.stderr.write(data);
        });
        proc.on('exit', code => {
            if (code !== 0) {
                reject(new Error('Code' + code));
                return;
            }
            const total = parseFloat(/Time:\W+(\d+|\d+\.\d+)s/.exec(stderr)[1]);
            const coverageTime = parseInt(/%%%(\d+)%%%/.exec(stdout)[1]);
            const coverage = coverageTime / 1000;
            console.log(`Last run total ${total} seconds`);
            console.log(`Last run coverage ${coverage} seconds`)
            resolve({ total, coverage });
        })
    });
}