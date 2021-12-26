import getFile from './index.js'
const path = process.argv;

// On CMD you  got to type node .\cli.js .\arquivos\text1.md or the directorie
console.log(getFile(path[2]));