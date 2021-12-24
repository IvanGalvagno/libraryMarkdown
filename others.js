import chalk from 'chalk';
import fs from 'fs'


//Tratamento do erro
function errorHandler(pError){
    throw new Error(chalk.white.bgRedBright(pError.code, 'ops'));
}

//Pegar arquivo utilizando a bibloteca nativa do node FS(file system)
function getFile(filePath) {
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (error, data)=> {
        if (error)
            errorHandler(error);
        console.log(chalk.black.bgGreen.bold('Success'));
        console.log(chalk.magentaBright(data));
    })
}


//Pegar arquivo de forma assincrona utilizando Promise
function getFileAsyncWithPromises(filePath){
    const encoding = 'utf-8'
    fs.promises.readFile(filePath, encoding)
    .then((data) => console.log(chalk.green(data)))
    .catch((error) => errorHandler(error))
}

//Pegar arquivo de forma assincrona utilizando async e await
async function getFileAsyncAwait(filePath){
    const encoding = 'utf-8';
    try {
        const data = await fs.promises.readFile(filePath, encoding)
        console.log(chalk.bgYellow.black(data));
    } catch (error) {
        errorHandler(error)
    } finally{
        console.log(chalk.yellow('operação concluída'));
    }
}

//Print das funcionalidades
getFile('./arquivos/texto1.md')
getFileAsyncWithPromises('./arquivos/texto1.md');
getFileAsyncAwait('./arquivos/texto1.md');

//Exempo de Promise
function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
    });
   }
   
function exibeResposta(textoResult) {
    console.log(textoResult);
}
   
 promessa(false)
 .then((texto) => exibeResposta(texto))
// sucesso na promessa

// Fim do exemplo de Promise