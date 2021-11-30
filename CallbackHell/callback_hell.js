
const {join} = require("path");
const {readdir, readFile, writeFile} = require("fs").promises; 

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const reverseText = str => str.split("").reverse().join("");


readdir(inbox)
.then(filenames =>{

  filenames.forEach(file => {

    readFile(join(inbox, file), 'utf8')})
      .then(readfile =>{ 
      writeFile(outbox+"/"+file, reverseText(readfile), "utf8").catch(() => { console.log("Error al guardar el archivo") });
    })
    .catch(() => { console.log("Error al leer el archivo") });
    

})
.catch(() => { console.log(`Error al leer el directorio ${inbox}`) });
