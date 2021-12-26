import chalk from 'chalk';
import getFile from './index.js'
const path = process.argv;

// On CMD you  got to type node .\cli.js .\arquivos\text1.md or the directorie
async function processText(pathFile) {
    const result = await getFile(pathFile[2]);
    console.log(chalk.yellow('List with all links'), result);
}

processText(path);