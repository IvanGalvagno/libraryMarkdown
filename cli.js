import chalk from 'chalk';
import validatedURLs from './http-validacao.js';
import getFile from './index.js'
// import validatedURLs from './http-validacao';
const pathX = process.argv;

// On CMD you  got to type node .\cli.js .\arquivos\text1.md or the directorie
async function processText(pathFile) {
    const result = await getFile(pathFile[2]);
    if (pathFile[3] === 'validate')
       console.log(chalk.green('Links validated'), await validatedURLs(result)) 
    else
        console.log(chalk.yellow('List with all links'), result);
}

processText(pathX);