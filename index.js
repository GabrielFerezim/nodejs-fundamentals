const fs = require ('fs');
const read = require ('readline');

//fs.unlink('danki.txt', function(err){ // Deleta arquivos diretamente do nodeJS
//   console.log('Arquivo deletado com sucesso');
//})

fs.rename('danki.txt', 'Dankitest.txt', function(err){ // 1 parametro nome do arquivo, 2 parametro novo nome do arquivo e 3 parametro (Callback)
    console.log('Arquivo renomeado com sucesso!');
})