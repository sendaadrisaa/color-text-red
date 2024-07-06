#!/usr/bin/env node

const chalk = require('chalk');

function colorTextRed(text) {
    console.log(chalk.red(text));
}

// Mengambil input dari command line
const input = process.argv.slice(2).join(' ');
colorTextRed(input);

module.exports = colorTextRed;
