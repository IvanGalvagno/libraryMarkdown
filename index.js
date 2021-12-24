import chalk from 'chalk';

const myText = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extractLinks(text){
    const regex = /\[[^\]]*\]\(http?s:\/\/[^$#\s].[^\s]*\)/gm;
    // Retorna com um Array com a expressao regular escolhida, que seria os links e tags[]
    const extractedLinks = text.match(regex);
    extractedLinks.forEach(element => {
        console.log(chalk.bgMagenta.white(element));
    });
   // console.log(chalk.bgCyanBright.gray(extractedLinks));
}

extractLinks(myText);
