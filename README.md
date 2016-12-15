1. Build map-coverage branch of jest locally and link the packages 
1. `yarn install` in this repository
1. `yarn test` and look at coverage/index.html

Perf testing:
1. `node perf [number]`, where number is the number of test files to create and run

## Perf results
Without mapped coverage

| Test count | Total time | Coverage time
| ---: | ---:| ---:
| 10 | 3.00s | 0.23s
| 100 | 7.95s | 0.47s
| 1000 | 55.42s | 2.90s

With mapped coverage

| Test count | Total time | Coverage time
| ---: | ---:| ---:
| 10 | 3.08s | 0.28s
| 100 | 8.67s | 0.76s
| 1000 | 57.18s | 4.43s

With mapped coverage 'enabled' but no source maps supplied

| Test count | Total time | Coverage time
| ---: | ---:| ---:
| 1000 | 55.61s | 2.86s

