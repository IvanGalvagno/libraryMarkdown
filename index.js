import chalk from 'chalk';
import fs from 'fs';
import path from 'node:path/win32';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    return arrayWithResult.length === 0 ? 'There is no links!' : arrayWithResult;
}

//Get the file from path then readed using promise async/await and print the result
async function getFile(filePath){
    const caminhoAbsoluto = path.join(__dirname, '..', filePath);
    const encoding = 'utf-8';
    try {
      const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
      const result = await Promise.all(arquivos.map(async (arquivo) => {
        const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
        const texto = await fs.promises.readFile(localArquivo, encoding);
        return extractLinks(texto);
      }));
      return result;
    } catch (erro) {
      return errorHandler(erro);
    }
}

export default getFile;
