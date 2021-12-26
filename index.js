import chalk from 'chalk';
import fs from 'fs'

// Handle the error message
function errorHandler(pError){
    throw new Error(chalk.white.bgRedBright(pError.code, 'ops'));
}

//Extract the links from text
function extractLinks(text){
    const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;
    
    const arrayWithResult = []
    let aux;
    // Retorna com um Array com a expressao regular escolhida, que seria os links e tags[]
    while ((aux = regex.exec(text)) !== null) {
        arrayWithResult.push({[aux[1]]: aux[2]});
    }
    return arrayWithResult;
}

//Get the file from path then readed using promise async/await and print the result
async function getFile(filePath){
    const encoding = 'utf-8';
    try {
        const data = await fs.promises.readFile(filePath, encoding)
        console.log(extractLinks(data));
    } catch (error) {
        errorHandler(error)
    } finally{
        console.log(chalk.yellow('operação concluída'));
    }
}

getFile('./arquivos/texto1.md')
