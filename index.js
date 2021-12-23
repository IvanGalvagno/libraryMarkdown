import chalk from 'chalk';
import fs from 'fs'

console.log(chalk.blue('Hello world!'));


function errorHandler(pError){
    throw new Error(chalk.white.bgRedBright(pError.code, 'ops'));
}

// function getFile(filePath) {
//     const encoding = 'utf-8';
//     fs.readFile(filePath, encoding, (error, data)=> {
//         if (error)
//             errorHandler(error);
//         console.log(chalk.black.bgGreen.bold('Success'));
//         console.log(chalk.magentaBright(data));
//     })
// }

function getFileAsyncWithPromises(filePath){
    const encoding = 'utf-8'
    fs.promises.readFile(filePath, encoding)
    .then((data) => console.log(chalk.green(data)))
    .catch((error) => errorHandler(error))
}

getFileAsyncWithPromises('./arquivos/texto1.md');
// getFile('./arquivos/texto1.md')


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