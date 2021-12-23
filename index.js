import chalk from 'chalk';
import fs from 'fs'

console.log(chalk.blue('Hello world!'));


function errorHandler(pError){
    throw new Error(chalk.white.bgRedBright(pError.code, 'field not found'));
}

function getFile(filePath) {
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (error, data)=> {
        if (error)
            errorHandler(error);
        console.log(chalk.black.bgGreen.bold('Success'));
        console.log(chalk.magentaBright(data));
    })
}

getFile('./arquivos/texto1.md')