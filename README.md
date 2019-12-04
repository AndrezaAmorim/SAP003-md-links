# Projeto Markdown Links

Este projeto é uma biblioteca que retorna links em arquivos Markdown(.md). Pode ser executado em linha de comando através do terminal ou importado com `require` no JS.

## Como instalar

Um requisito para utilizar esta biblioteca é ter o NodeJS instalado.
Execute este comando no terminal:

`$ npm install AndrezaAmorim/SAP003-md-links`

## Como Utilizar

### Javascript API

* Para utilizar a biblioteca em JS:

```js
const mdLinks = require(".caminho-da-pasta-de-instalação/lib/index.js");

mdLinks("./example.md")
  .then(links => {
    // => { href, text }
  })
  .catch(console.error);
```

### CLI - Linha de Comando

Deve ser executado da seguinte maneira no terminal:

`md-links <path-to-file> options`

Por Exemplo: 
```sh
$ md-links ./some/example.md
```

Exemplo de retorno válido:

```sh
http://google.com/ Site Google
https://gmail.com/ Site Gmail
http://cinemark.com/ Site Cinemark
```
Exemplo de retorno inválido:

* Arquivo não encontrado
* Arquivo não contêm links
