#!/usr/bin/env node

var generateSafeId = require('./index');

process.stdout.write(generateSafeId());

if (process.argv[2] !== '-n') {
	process.stdout.write('\n');
}
