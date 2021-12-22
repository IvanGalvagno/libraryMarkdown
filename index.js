import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
const paragrafo = 'Texto retornado por uma function';

function texto(string) {
    return string;
}

console.log(texto(paragrafo));
